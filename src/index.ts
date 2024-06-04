import { HumanMessage } from '@langchain/core/messages';
import { ChatOpenAI } from "@langchain/openai";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { array, number, z } from 'zod';
import { Database, Json } from './types/supabase';
import * as util from 'util';
import { globSync } from 'glob';

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);


// Initialize Supabase client
dotenv.config({ path: path.resolve(__dirname, '../.env') });
export const SUPABASE_URL = process.env.SUPABASE_URL!;
export const SUPABASE_KEY = process.env.SUPABASE_KEY!;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;

const supabase: SupabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, { db: { schema: 'public' } });

// Define types
export type Companies = Database['public']['Tables']['companies']['Row'];
export type Customers = Database['public']['Tables']['customers']['Row'];
export type Items = Database['public']['Tables']['items']['Row'];
export type ReceiptItems = Database['public']['Tables']['receipt_items']['Row'];
export type Receipts = Database['public']['Tables']['receipts']['Row'];
export type Transactions = Database['public']['Tables']['transactions']['Row'];

// Initialize OpenAI model
const model = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
  apiKey: OPENAI_API_KEY
});



// Vendor schema
const Merchant = z.object({
  name: z.string(),
  address: z.string().optional(),
  email: z.string().nullable().optional(),
  phone_number: z.string().optional(),
  representative: z.string().optional(),
});

// Item schema
const Item = z.object({

  SKU_description: z.string().optional(),
  product_description: z.string(),
  quantity: z.number(),
  unit_price: z.number(),
  total_price: z.number(),
  tax_category: z.string()
});

const Transaction = z.object({
  transactionId: z.number().nullable().optional(),
  card_info: z.string().optional(),
  refundable: z.boolean().optional(),
  refund_expiration_date: z.date().optional(),
  tax_state_amount: z.number().optional(),
  tax_state_percent: z.number().optional(),
  tax_federal_amount: z.number().optional(),
  tax_federal_percent: z.number().optional(),
  tax_total: z.number().optional(),
  payment_method: z.string().optional(),
  payment_type: z.string().optional(),
})

// Receipt schema
const Receipt = z.object({
  date: z.date().optional(),
  total_price: z.number(),
  image_title: z.string(),
  transaction: Transaction,
  merchant: Merchant,
  items: z.string(),
});

type ReceiptType = z.infer<typeof Receipt>;

const structuredLlm = model.withStructuredOutput(Receipt);

async function imageModel(inputs: { image: string, prompt: string }): Promise<ReceiptType> {
  const imageData = await fs.readFileSync(inputs.image);

  const message = new HumanMessage({
    content: [
      {
        type: "text",
        text: inputs.prompt,
      },
      {
        type: "image_url",
        image_url: {
          url: `data:image/jpeg;base64,${imageData.toString("base64")}`,
        },
      },
    ],
  });

  const res: ReceiptType = await structuredLlm.invoke([message]);

  // Convert refund_expiration_date to Date if it's a string
  if (res.transaction.refund_expiration_date && typeof res.transaction.refund_expiration_date === 'string') {
    res.transaction.refund_expiration_date = new Date(res.transaction.refund_expiration_date);
  }
  //console.log({ res });
  return res;
}

const visionPrompt = `
  Given an image of a receipt, provide the following data structure in json
`;


const insertData = async (table: string, data: any) => {
  console.log(`data coming in for ${table}`, data);
  const { data: resultData, error } = await supabase
    .from(table)
    .insert([data])
    .select();


  if (error) {
    console.log(`Errors from ${table}: `, error);
    throw new Error(`Failed to insert data into ${table}: ${error.message}`);
  }

  if (resultData && resultData.length > 0) {
    console.log(`Data from ${table}: `, resultData);
    return resultData[0].id;
  } else {
    throw new Error(`No data returned from ${table} insertion`);
  }
};

async function processImage(filePath: string): Promise<void> {

  const imagePath = filePath;
  const result = await imageModel({ image: imagePath, prompt: visionPrompt });


  const merchantData = {
    address: result.merchant.address || "N/A",
    representative: result.merchant.representative ? result.merchant.representative : "",
    email: result.merchant.email,
    name: result.merchant.name,
    phone_number: result.merchant.phone_number
  }
  const merchantParsed = Merchant.parse(merchantData);
  const merchantPromise = insertData('Merchant', merchantParsed);


  let itemsJson = JSON.stringify(result.items);

  const itemsPromise = insertData('Items', { Data: itemsJson });



  // Convert the string to a Date object before validation
  const currentTime = new Date(Date.now())
  const transactionData = {
    transactionId: result.transaction.transactionId,
    refund_expiration_date: result.transaction.refund_expiration_date ? new Date(result.transaction.refund_expiration_date) : currentTime,
    tax_state_amount: result.transaction.tax_state_amount || 0,
    tax_state_percent: result.transaction.tax_state_percent || 0,
    tax_federal_amount: result.transaction.tax_federal_amount || 0,
    tax_federal_percent: result.transaction.tax_federal_percent || 0,
    tax_total: result.transaction.tax_total || 0,
    payment_method: result.transaction.payment_method || "N/A",
    payment_type: result.transaction.payment_type || "N/A"
  };
  try {
    const validatedTransaction = {
      
      ...Transaction.parse(transactionData),
    };

    const transactionPromise = insertData('Transaction', validatedTransaction);
    try {
      const [merchantId, itemsIds, transactionId] = await Promise.all([
        merchantPromise,
        itemsPromise,
        transactionPromise
      ]);
  
      await insertData('Receipt', {
        merchantId: merchantId,
        itemsId: itemsIds,
        transactionId: transactionId,
        date: result.date ? new Date(result.date) : currentTime, // Convert date string to Date object
        card_info: result.transaction.card_info,
        total_price: result.total_price,
        title: imagePath.toString(),
        invoice_number: result.transaction.transactionId,
        tax_state_amount: result.transaction.tax_state_amount,
        tax_state_percent: result.transaction.tax_state_percent,
        tax_federal_amount: result.transaction.tax_federal_amount,
        tax_federal_percent: result.transaction.tax_federal_percent,
        tax_total: result.transaction.tax_total,
        method: result.transaction.payment_method,
        type: result.transaction.payment_type,
        fileName: imagePath.toString()
      });
    } catch (error) {
      console.error("Error resolving promises or inserting data:", error);
    }
  } catch (error) {
    console.error("Error resolving promises or inserting data:", error);
  }
  
};



function getJpgFiles(dir: string): string[] {
  console.log("THIS 4:",dir )
  let files = globSync(`${dir}/*.jpg`);
  return files
}


(async () => {
  const inputDir = path.join(__dirname, './input');
  console.log("THIS WORKS:",inputDir )
  try {
    const files =  getJpgFiles(inputDir)

    console.log("THIS 2:",files )

    files.forEach((file) =>{
      console.log("THIS 3:",inputDir )

      console.log(`Processing file: ${file}`);
       processImage(file);
      console.log(`Finished processing file: ${file}`);
    })
  } catch (error) {
    console.error('Error processing images:', error);
  }
})();


import { HumanMessage } from '@langchain/core/messages';
import { ChatOpenAI } from "@langchain/openai";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { array, number, z } from 'zod';
import { Database, Json } from './types/supabase';

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
  name: z.string().default(""),
  address: z.string().optional().default(""),
  email: z.string().optional().default(""),
  phone_number: z.string().optional().default(""),
  representative: z.string().optional().default(""),
});

// Item schema
const Item = z.object({

  SKU_description: z.string().optional(),
  product_description: z.string(),
  quantity: z.number().default(0),
  unit_price: z.number().default(0),
  total_price: z.number(),
  tax_category: z.string().default(""),
});

const Transaction = z.object({
  transactionId: z.number().optional(),
  card_info: z.string().default(""),
  refundable: z.boolean().optional().default(false),
  refund_expiration_date: z.string().optional().default(""),
  tax_state_amount: z.number().optional().default(0),
  tax_state_percent: z.number().optional().default(0),
  tax_federal_amount: z.number().optional().default(0),
  tax_federal_percent: z.number().optional().default(0),
  tax_total: z.number().optional().default(0),
  payment_method: z.string().optional().default(""),
  payment_type: z.string().optional().default(""),
})

// Receipt schema
const Receipt = z.object({
  date: z.string().default(""),
  total_price: z.number().default(0),
  image_title: z.string().default(""),
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
  res.total_price = res.total_price ?? 0;
  res.total_price = res.total_price ?? 0;
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

(async () => {
  const imagePath = "./output.jpg";
  const result = await imageModel({ image: imagePath, prompt: visionPrompt });
  result.total_price = result.total_price ?? 0;


  const merchantData = {
    address: result.merchant.address,
    representative: result.merchant.representative,
    email: result.merchant.email,
    name: result.merchant.name,
    phone_number: result.merchant.phone_number
  }
  const merchantParsed = Merchant.parse(merchantData);
  const merchantPromise = insertData('Merchant', merchantParsed);


  let itemsJson = JSON.stringify(result.items);

  const itemsPromise = insertData('Items', { Data: itemsJson });



  // Convert the string to a Date object before validation
  const transactionData = {
    transactionId: result.transaction.transactionId,
    refund_expiration_date: result.transaction.refund_expiration_date,
  };
  try {
    const validatedTransaction = {
      ...Transaction.parse(transactionData),
      refund_expiration_date: transactionData.refund_expiration_date ? new Date(transactionData.refund_expiration_date) : undefined,
    };

    const transactionPromise = insertData('Transaction', validatedTransaction);

    const [merchantId, itemsIds, transactionId] = await Promise.all([
      merchantPromise,
      itemsPromise,
      transactionPromise
    ]);

    await insertData('Receipt', {
      image_title: imagePath.toString(), //add document name
      merchantId: merchantId,
      items: itemsJson,
      transactionId: transactionId,
      date: new Date(result.date), // Convert date string to Date object
      card_info: result.transaction.card_info,
      total_price: result.total_price !== undefined ? result.total_price : 0,
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
})();

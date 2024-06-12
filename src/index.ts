import { AIMessageChunk, BaseMessage, BaseMessageChunk, HumanMessage } from '@langchain/core/messages';
import { ChatOpenAI } from "@langchain/openai";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { RunnableWithMessageHistory } from '@langchain/core/runnables';
import dotenv from 'dotenv';
import fs from 'fs';
import { promises as fsp } from 'fs'; // Correct import for fs.promises
import path, { resolve } from 'path';
import { array, number, Schema, z, ZodString } from 'zod';
import { Database, Json } from './types/supabase';
import * as util from 'util';
import { globSync } from 'glob';
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { BaseChatMessageHistory, } from '@langchain/core/dist/chat_history';
import { scheduler } from 'timers/promises';

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);


// Initialize Supabase client
dotenv.config({ path: path.resolve(__dirname, '../.env') });
export const SUPABASE_URL = process.env.SUPABASE_URL!;
export const SUPABASE_KEY = process.env.SUPABASE_KEY!;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;

const supabase: SupabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, { db: { schema: 'public' } });



// Initialize OpenAI model
const model = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
  apiKey: OPENAI_API_KEY
});

const receiptFieldDescriptions = {
  id: "Unique identifier for the receipt",
  date: "Date of the receipt",
  card_info: "Card information used for the transaction",
  total_price: "Total price on the receipt",
  total_tax_paid: "Total tax paid",
  receipt_number: "Unique receipt number",
  tax_state_amount: "State tax amount",
  tax_federal_amount: "Federal tax amount",
  tax_total: "Total tax amount",
  payment_type: "Method of payment",
  transaction_type: "Type of transaction",
  fileName: "Name of the receipt file",
  merchant_name: "Name of the merchant",
  merchant_address: "Address of the merchant",
  merchant_email: "Email of the merchant",
  merchant_phone_number: "Phone number of the merchant",
  merchant_representative: "Representative of the merchant",
  refund_expiration_date: "Expiration date for refunds",
};



const paymentMethodSchema = z.enum(["GIFT_CARD", "STORE_CREDIT", "CREDIT", "DEBIT"]);
const receiptTypeSchema = z.enum(["PURCHASE", "RETURN", "REFUND", "OTHER"]);
const taxTypeSchema = z.enum([
  "WAGES",
  "UTILITIES",
  "PHONE",
  "INTERNET",
  "RENT",
  "REPAIRS_MAINTENANCE",
  "JANITOR",
  "LABOR",
  "BANK_FEES",
  "LOAN_INTEREST_PAID",
  "GASOLINE_EXPENSES",
  "CAR_REPAIR_EXPENSES",
  "OFFICE_SUPPLIES",
  "EQUIPMENT",
  "TOOLS",
  "SUBSCRIPTIONS",
  "TAXES",
  "LICENSES",
  "ADVERTISING",
  "ACCOUNTING_FEES",
  "INSURANCE",
  "PROFESSIONAL_SERVICES",
  "POSTAGE",
  "OTHER",
  "NOT RECEIPT",
  "BACK OF RECEIPT"

]);

const receiptSchema = z.object({
  back_of_receipt: z.boolean(),
  date: z.string().optional().nullable(),
  credit_card_digits: z.string().optional().nullable(),
  total_price: z.number().optional().nullable(),
  total_tax_paid: z.number().optional().nullable(),
  receipt_number: z.string().optional().nullable(),
  tax_state_amount: z.number().optional().nullable(),
  tax_federal_amount: z.number().optional().nullable(),
  tax_total: z.number().optional().nullable(),
  payment_type: paymentMethodSchema.optional().nullable(),
  transaction_type: receiptTypeSchema.optional().nullable(),
  fileName: z.string().optional().nullable(),
  merchant_name: z.string().optional().nullable(),
  merchant_address: z.string().optional().nullable(),
  merchant_email: z.string().optional().nullable(),
  merchant_phone_number: z.string().optional().nullable(),
  merchant_representative: z.string().optional().nullable(),
  refund_expiration_date: z.string().optional().nullable(),
});

const taxSchema = z.object({
  tax_type: taxTypeSchema.optional().nullable()
})



type ReceiptType = z.infer<typeof receiptSchema>;
type TaxType = z.infer<typeof taxSchema>;


async function imageModel(inputs: { image: string, prompt: string, schema: Object }): Promise<typeof inputs.schema> {
  const structuredLlm = model.withStructuredOutput(inputs.schema);
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

  const res: typeof inputs.schema = await structuredLlm.invoke([message]);
  console.log("res: ", res)
  return res;
}
const visionPrompt = `
  Given an image of a receipt, provide the following data structure in json.
`;

const followupPrompt = `
Given an image of a receipt, provide the following USA tax catagorization data structure in json
`
const insertData = async (table: string, data: any) => {
  const { data: resultData, error } = await supabase
    .from(table)
    .insert([data])
    .select();

  if (error) {
    console.log(`Errors from ${table}: `, error);
    throw new Error(`Failed to insert data into ${table}: ${error.message}`);
  }

  if (resultData && resultData.length > 0) {
    const id = resultData[0].id
    console.log(`successfuly inserted ${table} at id:${id}`)
    return id;
  } else {
    throw new Error(`No data returned from ${table} insertion`);
  }
};

async function processImage(filePath: string): Promise<ReceiptType> {
  const imagePath = filePath;
  const result = await imageModel({ image: imagePath, prompt: visionPrompt, schema: receiptSchema });
  const generatedReceipt = receiptSchema.parse(result)
  if(generatedReceipt.back_of_receipt){
    moveFile(filePath, 'failed')
   return  generatedReceipt
  }
  const taxes = await imageModel({ image: imagePath, prompt: followupPrompt, schema: taxSchema })
  const generatedTaxCode = taxSchema.parse(taxes)
  console.log(`Tax file for${generatedReceipt.fileName}:\n${generatedTaxCode.tax_type}`)
  generatedReceipt.payment_type = generatedReceipt.payment_type;
  generatedReceipt.transaction_type = generatedReceipt.transaction_type;
  generatedReceipt.fileName = filePath.split('/').pop();
  const receiptPromise = insertData('Receipt', generatedReceipt);
  moveFile(filePath, 'success')
  return receiptPromise
}



//gets all the jpg files inside of directory
function getJpgFiles(dir: string): string[] {
  let files = globSync(`${dir}/*.jpg`);
  return files
}


async function moveFile(file: string, status: string): Promise<void> {
  const newDir = path.join(path.dirname(file), status);
  try {
    await fsp.mkdir(newDir, { recursive: true });
    const newFilePath = path.join(newDir, path.basename(file));
    await fsp.rename(file, newFilePath);
    console.log(`Moved file to: ${status}`);
  } catch (err) {
    console.error(`Failed to move file ${file}: ${(err as Error).message}`);
  }
}


(async () => {
  const inputDir = path.join(__dirname, './input');

  try {
    const files = getJpgFiles(inputDir)
    await Promise.all(files.map(async (file) => {
      console.log(`Processing file: ${file}`);
      processImage(file)
    }))
  } catch (error) {
    console.error('Error processing images:', (error as Error).message);
  }
})();


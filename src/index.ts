import { createClient, SupabaseClient } from '@supabase/supabase-js';
import fs from 'fs';
import { number, z } from 'zod';
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from '@langchain/core/messages';
import { Database } from './types/supabase';
import dotenv from 'dotenv';
import path from 'path';

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
export type Vendors = Database['public']['Tables']['vendors']['Row'];

// Initialize OpenAI model
const model = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0,
  apiKey: OPENAI_API_KEY
});

// Define schemas
const vendorSchema = z.object({
  name: z.string(),
  address: z.string(),
  email: z.string(),
  phone_number: z.string(),
  contact_name: z.string()
});

const customerSchema = z.object({
  name: z.string(),
  address: z.string(),
  email: z.string(),
  number: z.string(),
  project_ID: z.string()
});

const itemSchema = z.object({
  description: z.string(),
  quantity: z.number(),
  unit_price: z.number(),
  total_price: z.number(),
  SKU_number: z.string()
});

const transactionSchema = z.object({
  card_info: z.string(),
  total_price: z.number(),
  title: z.string(),
  invoice_number: z.string(),
  transaction_id: z.string(),
  method: z.string(),
  status: z.string(),
  type: z.string()
});

const companySchema = z.object({
  name: z.string()
});

const receiptSchema = z.object({
  vendor: vendorSchema,
  customer: customerSchema,
  items: z.array(itemSchema),
  invoice: transactionSchema,
  company_id: companySchema,
  date: z.string(),
  bank_trans_ref: z.number()
});

type Receipt = z.infer<typeof receiptSchema>;

const structuredLlm = model.withStructuredOutput(receiptSchema);

async function imageModel(inputs: { image: string, prompt: string }): Promise<Receipt> {
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

  const res: Receipt = await structuredLlm.invoke([message]);
  console.log({ res });
  return res;
}

const visionPrompt = `
  Given an image of a receipt, provide the following data structure in json:
  const vendorSchema = z.object({
    name: z.string(),
    address: z.string(),
    email: z.string(),
    phone_number: z.string(),
    contact_name: z.string()
  });
  
  const customerSchema = z.object({
    name: z.string(),
    address: z.string(),
    email: z.string(),
    number: z.string(),
    project_ID: z.string()
  });
  
  const itemSchema = z.object({
    description: z.string(),
    quantity: z.number(),
    unit_price: z.number(),
    total_price: z.number(),
    SKU_number: z.string()
  });
  
  const transactionSchema = z.object({
    card_info: z.string(),
    total_price: z.number(),
    title: z.string(),
    invoice_number: z.string(),
    transaction_id: z.string(),
    method: z.string(),
    status: z.string(),
    type: z.string()
  });
  
  
  const companySchema = z.object({
    name: z.string()
  })
  const receiptSchema = z.object({
    vendor: vendorSchema,
    customer: customerSchema,
    items: z.array(itemSchema),
    invoice: transactionSchema,
    company_id: companySchema,
    date: z.date(),
    bank_trans_ref: z.number()
  });
`;


const insertData = async (table: string, data: any) => {
  const { data: resultData, error } = await supabase
    .from(table)
    .insert([data])
    .select('id');
  console.log(`Data from ${table}: `, resultData);
  console.log(`Errors from ${table}: `, error);
};


(async () => {
  const imagePath = "./output.jpg";
  const result = await imageModel({ image: imagePath, prompt: visionPrompt });



  await insertData('vendors', {
    address: result.vendor.address,
    contact_name: result.vendor.contact_name,
    email: result.vendor.email,
    name: result.vendor.name,
    phone_number: result.vendor.phone_number
  });

  await insertData('customers', {
    name: result.customer.name,
    address: result.customer.address,
    email: result.customer.email,
    number: result.customer.number,
    project_id: result.customer.project_ID
  });

  await Promise.all(result.items.map(item => insertData('items', {
    description: item.description,
    quantity: item.quantity,
    unit_price: item.unit_price,
    total_price: item.total_price,
    sku_number: item.SKU_number
  })));

  await insertData('invoice', {
    card_info: result.invoice.card_info,
    total_price: result.invoice.total_price,
    title: result.invoice.title,
    invoice_number: result.invoice.invoice_number,
    transaction_id: result.invoice.transaction_id,
    method: result.invoice.method,
    status: result.invoice.status,
    type: result.invoice.type
  });

  await insertData('companies', {
    name: result.company_id.name
  });

  await insertData('receipts', {
    vendor_id: 1,
    customer_id: 1,
    date: new Date(result.date), // Convert date string to Date object
    bank_trans_ref: result.bank_trans_ref
  });
})();



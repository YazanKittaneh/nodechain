import { boolean, z, number } from 'zod';

// Enum schemas
const PaymentMethod = z.enum(["GIFT_CARD", "STORE_CREDIT", "CREDIT", "DEBIT"]);
const ReceiptType = z.enum(["PURCHASE", "RETURN", "REFUND", "OTHER"]);

// Vendor schema
const Merchant = z.object({
  name: z.string(),
  address: z.string(),
  email: z.string(),
  phone_number: z.string(),
  representative: z.string(),
});

// Item schema
const Item = z.object({
  SKU_number: z.number().int(),
  SKU_description: z.string(),
  product_description: z.string(),
  quantity: z.number(),
  unit_price: z.number(),
  total_price: z.number(),
  tax_category: z.string()
});

const Transaction = z.object({
  transactionId: z.number(),
  total: z.number(),
  card_info: z.string(),
  refundable: z.boolean(),
  refund_expiration_date: z.date().optional(),
  tax_state_amount: z.number().int(),
  tax_state_percent: z.number(),
  tax_federal_amount: z.number().int(),
  tax_federal_percent: z.number(),
  tax_total: z.number().int(),
  payment_method: z.string(),
  payment_type: z.string()
})

// Receipt schema
const Receipt = z.object({
  date: z.string(),
  total: z.number(),
  image_title: z.string(),
  merchant: Merchant,
  items: z.array(Item),
  trasnaction: Transaction
});



export { Merchant, Item, Transaction, Receipt, PaymentMethod, ReceiptType };

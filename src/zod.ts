import { boolean, z, number } from 'zod';

// Enum schemas
const PaymentMethod = z.enum(["GIFT_CARD", "STORE_CREDIT", "CREDIT", "DEBIT"]);
const ReceiptType = z.enum(["PURCHASE", "RETURN", "REFUND", "OTHER"]);

const Item = z.object({
  SKU_description: z.string().optional(),
  product_description: z.string(),
  quantity: z.number(),
  unit_price: z.number(),
  total_price: z.number(),
  tax_category: z.string()
});

const Receipt = z.object({
  date: z.string().optional(),
  total_price: z.number(),
  image_title: z.string(),
  receipt_type: ReceiptType, // Added enum for receipt type
  transaction: z.object({
    transactionId: z.number().nullable().optional(),
    card_info: z.string().optional(),
    refundable: z.boolean().optional(),
    refund_expiration_date: z.string().optional(),
    tax_state_amount: z.number().optional(),
    tax_state_percent: z.number().optional(),
    tax_federal_amount: z.number().optional(),
    tax_federal_percent: z.number().optional(),
    tax_total: z.number().optional(),
    payment_method: PaymentMethod.optional(), // Used PaymentMethod enum
    payment_type: z.enum(["In-store", "Online"]).optional(),
  }),
  merchant: z.object({
    name: z.string(),
    address: z.string().optional(),
    email: z.string().nullable().optional(),
    phone_number: z.string().optional(),
    representative: z.string().optional(),
  }),
  items: z.array(Item) // Array of Item objects
});




export { Receipt, PaymentMethod, ReceiptType };

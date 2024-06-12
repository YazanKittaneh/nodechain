import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    back_of_receipt: z.literal(true).optional(),
    date: z.literal(true).optional(),
    credit_card_digits: z.literal(true).optional(),
    total_price: z.literal(true).optional(),
    total_tax_paid: z.literal(true).optional(),
    receipt_number: z.literal(true).optional(),
    tax_state_amount: z.literal(true).optional(),
    tax_federal_amount: z.literal(true).optional(),
    tax_total: z.literal(true).optional(),
    payment_type: z.literal(true).optional(),
    transaction_type: z.literal(true).optional(),
    fileName: z.literal(true).optional(),
    merchant_name: z.literal(true).optional(),
    merchant_address: z.literal(true).optional(),
    merchant_email: z.literal(true).optional(),
    merchant_phone_number: z.literal(true).optional(),
    merchant_representative: z.literal(true).optional(),
    refund_expiration_date: z.literal(true).optional(),
  })
  .strict();

export const ReceiptMinAggregateInputObjectSchema = Schema;

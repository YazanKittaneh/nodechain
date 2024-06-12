import { z } from 'zod';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { ReceiptTypeSchema } from '../enums/ReceiptType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateInput> = z
  .object({
    back_of_receipt: z.boolean().optional().nullable(),
    date: z.string().optional().nullable(),
    credit_card_digits: z.string().optional().nullable(),
    total_price: z.number().optional().nullable(),
    total_tax_paid: z.number().optional().nullable(),
    receipt_number: z.string().optional().nullable(),
    tax_state_amount: z.number().optional().nullable(),
    tax_federal_amount: z.number().optional().nullable(),
    tax_total: z.number().optional().nullable(),
    payment_type: z
      .lazy(() => PaymentMethodSchema)
      .optional()
      .nullable(),
    transaction_type: z
      .lazy(() => ReceiptTypeSchema)
      .optional()
      .nullable(),
    fileName: z.string().optional().nullable(),
    merchant_name: z.string().optional().nullable(),
    merchant_address: z.string().optional().nullable(),
    merchant_email: z.string().optional().nullable(),
    merchant_phone_number: z.string().optional().nullable(),
    merchant_representative: z.string().optional().nullable(),
    refund_expiration_date: z.string().optional().nullable(),
  })
  .strict();

export const ReceiptCreateInputObjectSchema = Schema;

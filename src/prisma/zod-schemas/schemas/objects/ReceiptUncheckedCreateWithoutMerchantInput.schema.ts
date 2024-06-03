import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUncheckedCreateWithoutMerchantInput> = z
  .object({
    id: z.number().optional(),
    itemsId: z.number().optional().nullable(),
    transactionId: z.number().optional().nullable(),
    date: z.string(),
    card_info: z.string(),
    total_price: z.number(),
    title: z.string(),
    invoice_number: z.string(),
    tax_state_amount: z.number(),
    tax_state_percent: z.number(),
    tax_federal_amount: z.number(),
    tax_federal_percent: z.number(),
    tax_total: z.number(),
    method: z.string(),
    type: z.string(),
    fileName: z.string(),
  })
  .strict();

export const ReceiptUncheckedCreateWithoutMerchantInputObjectSchema = Schema;

import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    merchantId: z.literal(true).optional(),
    itemsId: z.literal(true).optional(),
    transactionId: z.literal(true).optional(),
    date: z.literal(true).optional(),
    card_info: z.literal(true).optional(),
    total_price: z.literal(true).optional(),
    title: z.literal(true).optional(),
    invoice_number: z.literal(true).optional(),
    tax_state_amount: z.literal(true).optional(),
    tax_state_percent: z.literal(true).optional(),
    tax_federal_amount: z.literal(true).optional(),
    tax_federal_percent: z.literal(true).optional(),
    tax_total: z.literal(true).optional(),
    method: z.literal(true).optional(),
    type: z.literal(true).optional(),
    fileName: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ReceiptCountAggregateInputObjectSchema = Schema;

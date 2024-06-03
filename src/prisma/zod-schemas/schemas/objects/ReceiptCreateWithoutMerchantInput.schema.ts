import { z } from 'zod';
import { ItemsCreateNestedOneWithoutReceiptInputObjectSchema } from './ItemsCreateNestedOneWithoutReceiptInput.schema';
import { TransactionCreateNestedOneWithoutReceiptInputObjectSchema } from './TransactionCreateNestedOneWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateWithoutMerchantInput> = z
  .object({
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
    items: z
      .lazy(() => ItemsCreateNestedOneWithoutReceiptInputObjectSchema)
      .optional(),
    transaction: z
      .lazy(() => TransactionCreateNestedOneWithoutReceiptInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReceiptCreateWithoutMerchantInputObjectSchema = Schema;

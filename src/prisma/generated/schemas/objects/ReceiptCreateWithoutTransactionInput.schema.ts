import { z } from 'zod';
import { MerchantCreateNestedOneWithoutReceiptsInputObjectSchema } from './MerchantCreateNestedOneWithoutReceiptsInput.schema';
import { ItemsCreateNestedOneWithoutReceiptInputObjectSchema } from './ItemsCreateNestedOneWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateWithoutTransactionInput> = z
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
    merchant: z
      .lazy(() => MerchantCreateNestedOneWithoutReceiptsInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => ItemsCreateNestedOneWithoutReceiptInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReceiptCreateWithoutTransactionInputObjectSchema = Schema;

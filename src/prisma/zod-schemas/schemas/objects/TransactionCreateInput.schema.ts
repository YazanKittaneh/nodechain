import { z } from 'zod';
import { ReceiptCreateNestedManyWithoutTransactionInputObjectSchema } from './ReceiptCreateNestedManyWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateInput> = z
  .object({
    transactionId: z.number(),
    refund_expiration_date: z.coerce.date(),
    Receipt: z
      .lazy(() => ReceiptCreateNestedManyWithoutTransactionInputObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionCreateInputObjectSchema = Schema;

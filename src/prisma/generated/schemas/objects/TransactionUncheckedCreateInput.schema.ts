import { z } from 'zod';
import { ReceiptUncheckedCreateNestedManyWithoutTransactionInputObjectSchema } from './ReceiptUncheckedCreateNestedManyWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    transactionId: z.number(),
    Receipt: z
      .lazy(
        () =>
          ReceiptUncheckedCreateNestedManyWithoutTransactionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionUncheckedCreateInputObjectSchema = Schema;

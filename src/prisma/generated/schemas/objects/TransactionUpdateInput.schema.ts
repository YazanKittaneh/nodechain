import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ReceiptUpdateManyWithoutTransactionNestedInputObjectSchema } from './ReceiptUpdateManyWithoutTransactionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateInput> = z
  .object({
    transactionId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Receipt: z
      .lazy(() => ReceiptUpdateManyWithoutTransactionNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionUpdateInputObjectSchema = Schema;

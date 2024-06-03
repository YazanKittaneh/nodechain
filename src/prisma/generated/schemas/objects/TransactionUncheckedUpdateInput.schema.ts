import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ReceiptUncheckedUpdateManyWithoutTransactionNestedInputObjectSchema } from './ReceiptUncheckedUpdateManyWithoutTransactionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    transactionId: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Receipt: z
      .lazy(
        () =>
          ReceiptUncheckedUpdateManyWithoutTransactionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TransactionUncheckedUpdateInputObjectSchema = Schema;

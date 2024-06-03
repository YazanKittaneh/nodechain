import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
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
    refund_expiration_date: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Receipt: z
      .lazy(() => ReceiptUpdateManyWithoutTransactionNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionUpdateInputObjectSchema = Schema;

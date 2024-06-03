import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
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
    refund_expiration_date: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
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

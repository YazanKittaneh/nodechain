import { z } from 'zod';
import { TransactionUpdateWithoutReceiptInputObjectSchema } from './TransactionUpdateWithoutReceiptInput.schema';
import { TransactionUncheckedUpdateWithoutReceiptInputObjectSchema } from './TransactionUncheckedUpdateWithoutReceiptInput.schema';
import { TransactionCreateWithoutReceiptInputObjectSchema } from './TransactionCreateWithoutReceiptInput.schema';
import { TransactionUncheckedCreateWithoutReceiptInputObjectSchema } from './TransactionUncheckedCreateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpsertWithoutReceiptInput> = z
  .object({
    update: z.union([
      z.lazy(() => TransactionUpdateWithoutReceiptInputObjectSchema),
      z.lazy(() => TransactionUncheckedUpdateWithoutReceiptInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TransactionCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => TransactionUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict();

export const TransactionUpsertWithoutReceiptInputObjectSchema = Schema;

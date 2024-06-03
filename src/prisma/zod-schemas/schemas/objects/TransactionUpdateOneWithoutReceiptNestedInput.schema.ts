import { z } from 'zod';
import { TransactionCreateWithoutReceiptInputObjectSchema } from './TransactionCreateWithoutReceiptInput.schema';
import { TransactionUncheckedCreateWithoutReceiptInputObjectSchema } from './TransactionUncheckedCreateWithoutReceiptInput.schema';
import { TransactionCreateOrConnectWithoutReceiptInputObjectSchema } from './TransactionCreateOrConnectWithoutReceiptInput.schema';
import { TransactionUpsertWithoutReceiptInputObjectSchema } from './TransactionUpsertWithoutReceiptInput.schema';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithoutReceiptInputObjectSchema } from './TransactionUpdateWithoutReceiptInput.schema';
import { TransactionUncheckedUpdateWithoutReceiptInputObjectSchema } from './TransactionUncheckedUpdateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionUpdateOneWithoutReceiptNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TransactionCreateWithoutReceiptInputObjectSchema),
          z.lazy(
            () => TransactionUncheckedCreateWithoutReceiptInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TransactionCreateOrConnectWithoutReceiptInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TransactionUpsertWithoutReceiptInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => TransactionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TransactionUpdateWithoutReceiptInputObjectSchema),
          z.lazy(
            () => TransactionUncheckedUpdateWithoutReceiptInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TransactionUpdateOneWithoutReceiptNestedInputObjectSchema = Schema;

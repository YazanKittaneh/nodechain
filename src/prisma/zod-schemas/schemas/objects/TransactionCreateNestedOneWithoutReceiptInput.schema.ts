import { z } from 'zod';
import { TransactionCreateWithoutReceiptInputObjectSchema } from './TransactionCreateWithoutReceiptInput.schema';
import { TransactionUncheckedCreateWithoutReceiptInputObjectSchema } from './TransactionUncheckedCreateWithoutReceiptInput.schema';
import { TransactionCreateOrConnectWithoutReceiptInputObjectSchema } from './TransactionCreateOrConnectWithoutReceiptInput.schema';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateNestedOneWithoutReceiptInput> =
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
      connect: z.lazy(() => TransactionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TransactionCreateNestedOneWithoutReceiptInputObjectSchema = Schema;

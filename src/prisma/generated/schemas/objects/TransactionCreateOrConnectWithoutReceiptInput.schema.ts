import { z } from 'zod';
import { TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionCreateWithoutReceiptInputObjectSchema } from './TransactionCreateWithoutReceiptInput.schema';
import { TransactionUncheckedCreateWithoutReceiptInputObjectSchema } from './TransactionUncheckedCreateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutReceiptInput> =
  z
    .object({
      where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TransactionCreateWithoutReceiptInputObjectSchema),
        z.lazy(() => TransactionUncheckedCreateWithoutReceiptInputObjectSchema),
      ]),
    })
    .strict();

export const TransactionCreateOrConnectWithoutReceiptInputObjectSchema = Schema;

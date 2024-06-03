import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptCreateWithoutTransactionInputObjectSchema } from './ReceiptCreateWithoutTransactionInput.schema';
import { ReceiptUncheckedCreateWithoutTransactionInputObjectSchema } from './ReceiptUncheckedCreateWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateOrConnectWithoutTransactionInput> =
  z
    .object({
      where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ReceiptCreateWithoutTransactionInputObjectSchema),
        z.lazy(() => ReceiptUncheckedCreateWithoutTransactionInputObjectSchema),
      ]),
    })
    .strict();

export const ReceiptCreateOrConnectWithoutTransactionInputObjectSchema = Schema;

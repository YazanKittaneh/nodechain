import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithoutTransactionInputObjectSchema } from './ReceiptUpdateWithoutTransactionInput.schema';
import { ReceiptUncheckedUpdateWithoutTransactionInputObjectSchema } from './ReceiptUncheckedUpdateWithoutTransactionInput.schema';
import { ReceiptCreateWithoutTransactionInputObjectSchema } from './ReceiptCreateWithoutTransactionInput.schema';
import { ReceiptUncheckedCreateWithoutTransactionInputObjectSchema } from './ReceiptUncheckedCreateWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpsertWithWhereUniqueWithoutTransactionInput> =
  z
    .object({
      where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReceiptUpdateWithoutTransactionInputObjectSchema),
        z.lazy(() => ReceiptUncheckedUpdateWithoutTransactionInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReceiptCreateWithoutTransactionInputObjectSchema),
        z.lazy(() => ReceiptUncheckedCreateWithoutTransactionInputObjectSchema),
      ]),
    })
    .strict();

export const ReceiptUpsertWithWhereUniqueWithoutTransactionInputObjectSchema =
  Schema;

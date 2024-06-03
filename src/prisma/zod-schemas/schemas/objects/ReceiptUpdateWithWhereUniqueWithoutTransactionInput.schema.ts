import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithoutTransactionInputObjectSchema } from './ReceiptUpdateWithoutTransactionInput.schema';
import { ReceiptUncheckedUpdateWithoutTransactionInputObjectSchema } from './ReceiptUncheckedUpdateWithoutTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateWithWhereUniqueWithoutTransactionInput> =
  z
    .object({
      where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReceiptUpdateWithoutTransactionInputObjectSchema),
        z.lazy(() => ReceiptUncheckedUpdateWithoutTransactionInputObjectSchema),
      ]),
    })
    .strict();

export const ReceiptUpdateWithWhereUniqueWithoutTransactionInputObjectSchema =
  Schema;

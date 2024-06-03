import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithoutItemsInputObjectSchema } from './ReceiptUpdateWithoutItemsInput.schema';
import { ReceiptUncheckedUpdateWithoutItemsInputObjectSchema } from './ReceiptUncheckedUpdateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateWithWhereUniqueWithoutItemsInput> =
  z
    .object({
      where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReceiptUpdateWithoutItemsInputObjectSchema),
        z.lazy(() => ReceiptUncheckedUpdateWithoutItemsInputObjectSchema),
      ]),
    })
    .strict();

export const ReceiptUpdateWithWhereUniqueWithoutItemsInputObjectSchema = Schema;

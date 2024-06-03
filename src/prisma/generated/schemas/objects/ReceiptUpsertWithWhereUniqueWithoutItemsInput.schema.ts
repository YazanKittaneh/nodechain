import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithoutItemsInputObjectSchema } from './ReceiptUpdateWithoutItemsInput.schema';
import { ReceiptUncheckedUpdateWithoutItemsInputObjectSchema } from './ReceiptUncheckedUpdateWithoutItemsInput.schema';
import { ReceiptCreateWithoutItemsInputObjectSchema } from './ReceiptCreateWithoutItemsInput.schema';
import { ReceiptUncheckedCreateWithoutItemsInputObjectSchema } from './ReceiptUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpsertWithWhereUniqueWithoutItemsInput> =
  z
    .object({
      where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReceiptUpdateWithoutItemsInputObjectSchema),
        z.lazy(() => ReceiptUncheckedUpdateWithoutItemsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReceiptCreateWithoutItemsInputObjectSchema),
        z.lazy(() => ReceiptUncheckedCreateWithoutItemsInputObjectSchema),
      ]),
    })
    .strict();

export const ReceiptUpsertWithWhereUniqueWithoutItemsInputObjectSchema = Schema;

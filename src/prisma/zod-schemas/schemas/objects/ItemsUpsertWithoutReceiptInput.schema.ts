import { z } from 'zod';
import { ItemsUpdateWithoutReceiptInputObjectSchema } from './ItemsUpdateWithoutReceiptInput.schema';
import { ItemsUncheckedUpdateWithoutReceiptInputObjectSchema } from './ItemsUncheckedUpdateWithoutReceiptInput.schema';
import { ItemsCreateWithoutReceiptInputObjectSchema } from './ItemsCreateWithoutReceiptInput.schema';
import { ItemsUncheckedCreateWithoutReceiptInputObjectSchema } from './ItemsUncheckedCreateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsUpsertWithoutReceiptInput> = z
  .object({
    update: z.union([
      z.lazy(() => ItemsUpdateWithoutReceiptInputObjectSchema),
      z.lazy(() => ItemsUncheckedUpdateWithoutReceiptInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ItemsCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => ItemsUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict();

export const ItemsUpsertWithoutReceiptInputObjectSchema = Schema;

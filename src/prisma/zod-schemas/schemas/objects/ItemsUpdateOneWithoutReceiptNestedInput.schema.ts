import { z } from 'zod';
import { ItemsCreateWithoutReceiptInputObjectSchema } from './ItemsCreateWithoutReceiptInput.schema';
import { ItemsUncheckedCreateWithoutReceiptInputObjectSchema } from './ItemsUncheckedCreateWithoutReceiptInput.schema';
import { ItemsCreateOrConnectWithoutReceiptInputObjectSchema } from './ItemsCreateOrConnectWithoutReceiptInput.schema';
import { ItemsUpsertWithoutReceiptInputObjectSchema } from './ItemsUpsertWithoutReceiptInput.schema';
import { ItemsWhereUniqueInputObjectSchema } from './ItemsWhereUniqueInput.schema';
import { ItemsUpdateWithoutReceiptInputObjectSchema } from './ItemsUpdateWithoutReceiptInput.schema';
import { ItemsUncheckedUpdateWithoutReceiptInputObjectSchema } from './ItemsUncheckedUpdateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsUpdateOneWithoutReceiptNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ItemsCreateWithoutReceiptInputObjectSchema),
        z.lazy(() => ItemsUncheckedCreateWithoutReceiptInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ItemsCreateOrConnectWithoutReceiptInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => ItemsUpsertWithoutReceiptInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ItemsWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ItemsUpdateWithoutReceiptInputObjectSchema),
        z.lazy(() => ItemsUncheckedUpdateWithoutReceiptInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ItemsUpdateOneWithoutReceiptNestedInputObjectSchema = Schema;

import { z } from 'zod';
import { ItemsCreateWithoutReceiptInputObjectSchema } from './ItemsCreateWithoutReceiptInput.schema';
import { ItemsUncheckedCreateWithoutReceiptInputObjectSchema } from './ItemsUncheckedCreateWithoutReceiptInput.schema';
import { ItemsCreateOrConnectWithoutReceiptInputObjectSchema } from './ItemsCreateOrConnectWithoutReceiptInput.schema';
import { ItemsWhereUniqueInputObjectSchema } from './ItemsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsCreateNestedOneWithoutReceiptInput> = z
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
    connect: z.lazy(() => ItemsWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ItemsCreateNestedOneWithoutReceiptInputObjectSchema = Schema;

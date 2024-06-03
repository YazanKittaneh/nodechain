import { z } from 'zod';
import { ItemsWhereUniqueInputObjectSchema } from './ItemsWhereUniqueInput.schema';
import { ItemsCreateWithoutReceiptInputObjectSchema } from './ItemsCreateWithoutReceiptInput.schema';
import { ItemsUncheckedCreateWithoutReceiptInputObjectSchema } from './ItemsUncheckedCreateWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsCreateOrConnectWithoutReceiptInput> = z
  .object({
    where: z.lazy(() => ItemsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ItemsCreateWithoutReceiptInputObjectSchema),
      z.lazy(() => ItemsUncheckedCreateWithoutReceiptInputObjectSchema),
    ]),
  })
  .strict();

export const ItemsCreateOrConnectWithoutReceiptInputObjectSchema = Schema;

import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptCreateWithoutItemsInputObjectSchema } from './ReceiptCreateWithoutItemsInput.schema';
import { ReceiptUncheckedCreateWithoutItemsInputObjectSchema } from './ReceiptUncheckedCreateWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateOrConnectWithoutItemsInput> = z
  .object({
    where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReceiptCreateWithoutItemsInputObjectSchema),
      z.lazy(() => ReceiptUncheckedCreateWithoutItemsInputObjectSchema),
    ]),
  })
  .strict();

export const ReceiptCreateOrConnectWithoutItemsInputObjectSchema = Schema;

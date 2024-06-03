import { z } from 'zod';
import { ReceiptCreateWithoutItemsInputObjectSchema } from './ReceiptCreateWithoutItemsInput.schema';
import { ReceiptUncheckedCreateWithoutItemsInputObjectSchema } from './ReceiptUncheckedCreateWithoutItemsInput.schema';
import { ReceiptCreateOrConnectWithoutItemsInputObjectSchema } from './ReceiptCreateOrConnectWithoutItemsInput.schema';
import { ReceiptCreateManyItemsInputEnvelopeObjectSchema } from './ReceiptCreateManyItemsInputEnvelope.schema';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateNestedManyWithoutItemsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReceiptCreateWithoutItemsInputObjectSchema),
        z.lazy(() => ReceiptCreateWithoutItemsInputObjectSchema).array(),
        z.lazy(() => ReceiptUncheckedCreateWithoutItemsInputObjectSchema),
        z
          .lazy(() => ReceiptUncheckedCreateWithoutItemsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ReceiptCreateOrConnectWithoutItemsInputObjectSchema),
        z
          .lazy(() => ReceiptCreateOrConnectWithoutItemsInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ReceiptCreateManyItemsInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReceiptCreateNestedManyWithoutItemsInputObjectSchema = Schema;

import { z } from 'zod';
import { ReceiptCreateWithoutItemsInputObjectSchema } from './ReceiptCreateWithoutItemsInput.schema';
import { ReceiptUncheckedCreateWithoutItemsInputObjectSchema } from './ReceiptUncheckedCreateWithoutItemsInput.schema';
import { ReceiptCreateOrConnectWithoutItemsInputObjectSchema } from './ReceiptCreateOrConnectWithoutItemsInput.schema';
import { ReceiptUpsertWithWhereUniqueWithoutItemsInputObjectSchema } from './ReceiptUpsertWithWhereUniqueWithoutItemsInput.schema';
import { ReceiptCreateManyItemsInputEnvelopeObjectSchema } from './ReceiptCreateManyItemsInputEnvelope.schema';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithWhereUniqueWithoutItemsInputObjectSchema } from './ReceiptUpdateWithWhereUniqueWithoutItemsInput.schema';
import { ReceiptUpdateManyWithWhereWithoutItemsInputObjectSchema } from './ReceiptUpdateManyWithWhereWithoutItemsInput.schema';
import { ReceiptScalarWhereInputObjectSchema } from './ReceiptScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateManyWithoutItemsNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => ReceiptUpsertWithWhereUniqueWithoutItemsInputObjectSchema),
        z
          .lazy(() => ReceiptUpsertWithWhereUniqueWithoutItemsInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ReceiptCreateManyItemsInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ReceiptUpdateWithWhereUniqueWithoutItemsInputObjectSchema),
        z
          .lazy(() => ReceiptUpdateWithWhereUniqueWithoutItemsInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ReceiptUpdateManyWithWhereWithoutItemsInputObjectSchema),
        z
          .lazy(() => ReceiptUpdateManyWithWhereWithoutItemsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ReceiptScalarWhereInputObjectSchema),
        z.lazy(() => ReceiptScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReceiptUpdateManyWithoutItemsNestedInputObjectSchema = Schema;

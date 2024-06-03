import { z } from 'zod';
import { ReceiptCreateWithoutMerchantInputObjectSchema } from './ReceiptCreateWithoutMerchantInput.schema';
import { ReceiptUncheckedCreateWithoutMerchantInputObjectSchema } from './ReceiptUncheckedCreateWithoutMerchantInput.schema';
import { ReceiptCreateOrConnectWithoutMerchantInputObjectSchema } from './ReceiptCreateOrConnectWithoutMerchantInput.schema';
import { ReceiptUpsertWithWhereUniqueWithoutMerchantInputObjectSchema } from './ReceiptUpsertWithWhereUniqueWithoutMerchantInput.schema';
import { ReceiptCreateManyMerchantInputEnvelopeObjectSchema } from './ReceiptCreateManyMerchantInputEnvelope.schema';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithWhereUniqueWithoutMerchantInputObjectSchema } from './ReceiptUpdateWithWhereUniqueWithoutMerchantInput.schema';
import { ReceiptUpdateManyWithWhereWithoutMerchantInputObjectSchema } from './ReceiptUpdateManyWithWhereWithoutMerchantInput.schema';
import { ReceiptScalarWhereInputObjectSchema } from './ReceiptScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUncheckedUpdateManyWithoutMerchantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReceiptCreateWithoutMerchantInputObjectSchema),
          z.lazy(() => ReceiptCreateWithoutMerchantInputObjectSchema).array(),
          z.lazy(() => ReceiptUncheckedCreateWithoutMerchantInputObjectSchema),
          z
            .lazy(() => ReceiptUncheckedCreateWithoutMerchantInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReceiptCreateOrConnectWithoutMerchantInputObjectSchema),
          z
            .lazy(() => ReceiptCreateOrConnectWithoutMerchantInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ReceiptUpsertWithWhereUniqueWithoutMerchantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReceiptUpsertWithWhereUniqueWithoutMerchantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ReceiptCreateManyMerchantInputEnvelopeObjectSchema)
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
          z.lazy(
            () => ReceiptUpdateWithWhereUniqueWithoutMerchantInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReceiptUpdateWithWhereUniqueWithoutMerchantInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ReceiptUpdateManyWithWhereWithoutMerchantInputObjectSchema,
          ),
          z
            .lazy(
              () => ReceiptUpdateManyWithWhereWithoutMerchantInputObjectSchema,
            )
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

export const ReceiptUncheckedUpdateManyWithoutMerchantNestedInputObjectSchema =
  Schema;

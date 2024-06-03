import { z } from 'zod';
import { ReceiptCreateWithoutTransactionInputObjectSchema } from './ReceiptCreateWithoutTransactionInput.schema';
import { ReceiptUncheckedCreateWithoutTransactionInputObjectSchema } from './ReceiptUncheckedCreateWithoutTransactionInput.schema';
import { ReceiptCreateOrConnectWithoutTransactionInputObjectSchema } from './ReceiptCreateOrConnectWithoutTransactionInput.schema';
import { ReceiptUpsertWithWhereUniqueWithoutTransactionInputObjectSchema } from './ReceiptUpsertWithWhereUniqueWithoutTransactionInput.schema';
import { ReceiptCreateManyTransactionInputEnvelopeObjectSchema } from './ReceiptCreateManyTransactionInputEnvelope.schema';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithWhereUniqueWithoutTransactionInputObjectSchema } from './ReceiptUpdateWithWhereUniqueWithoutTransactionInput.schema';
import { ReceiptUpdateManyWithWhereWithoutTransactionInputObjectSchema } from './ReceiptUpdateManyWithWhereWithoutTransactionInput.schema';
import { ReceiptScalarWhereInputObjectSchema } from './ReceiptScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateManyWithoutTransactionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReceiptCreateWithoutTransactionInputObjectSchema),
          z
            .lazy(() => ReceiptCreateWithoutTransactionInputObjectSchema)
            .array(),
          z.lazy(
            () => ReceiptUncheckedCreateWithoutTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () => ReceiptUncheckedCreateWithoutTransactionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ReceiptCreateOrConnectWithoutTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () => ReceiptCreateOrConnectWithoutTransactionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ReceiptUpsertWithWhereUniqueWithoutTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReceiptUpsertWithWhereUniqueWithoutTransactionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ReceiptCreateManyTransactionInputEnvelopeObjectSchema)
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
            () =>
              ReceiptUpdateWithWhereUniqueWithoutTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReceiptUpdateWithWhereUniqueWithoutTransactionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ReceiptUpdateManyWithWhereWithoutTransactionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReceiptUpdateManyWithWhereWithoutTransactionInputObjectSchema,
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

export const ReceiptUpdateManyWithoutTransactionNestedInputObjectSchema =
  Schema;

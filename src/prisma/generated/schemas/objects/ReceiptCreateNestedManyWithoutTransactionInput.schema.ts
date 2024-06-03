import { z } from 'zod';
import { ReceiptCreateWithoutTransactionInputObjectSchema } from './ReceiptCreateWithoutTransactionInput.schema';
import { ReceiptUncheckedCreateWithoutTransactionInputObjectSchema } from './ReceiptUncheckedCreateWithoutTransactionInput.schema';
import { ReceiptCreateOrConnectWithoutTransactionInputObjectSchema } from './ReceiptCreateOrConnectWithoutTransactionInput.schema';
import { ReceiptCreateManyTransactionInputEnvelopeObjectSchema } from './ReceiptCreateManyTransactionInputEnvelope.schema';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateNestedManyWithoutTransactionInput> =
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
      createMany: z
        .lazy(() => ReceiptCreateManyTransactionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
          z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ReceiptCreateNestedManyWithoutTransactionInputObjectSchema =
  Schema;

import { z } from 'zod';
import { ReceiptCreateWithoutMerchantInputObjectSchema } from './ReceiptCreateWithoutMerchantInput.schema';
import { ReceiptUncheckedCreateWithoutMerchantInputObjectSchema } from './ReceiptUncheckedCreateWithoutMerchantInput.schema';
import { ReceiptCreateOrConnectWithoutMerchantInputObjectSchema } from './ReceiptCreateOrConnectWithoutMerchantInput.schema';
import { ReceiptCreateManyMerchantInputEnvelopeObjectSchema } from './ReceiptCreateManyMerchantInputEnvelope.schema';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateNestedManyWithoutMerchantInput> = z
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
    createMany: z
      .lazy(() => ReceiptCreateManyMerchantInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReceiptCreateNestedManyWithoutMerchantInputObjectSchema = Schema;

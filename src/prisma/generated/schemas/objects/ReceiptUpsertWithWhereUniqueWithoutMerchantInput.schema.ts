import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithoutMerchantInputObjectSchema } from './ReceiptUpdateWithoutMerchantInput.schema';
import { ReceiptUncheckedUpdateWithoutMerchantInputObjectSchema } from './ReceiptUncheckedUpdateWithoutMerchantInput.schema';
import { ReceiptCreateWithoutMerchantInputObjectSchema } from './ReceiptCreateWithoutMerchantInput.schema';
import { ReceiptUncheckedCreateWithoutMerchantInputObjectSchema } from './ReceiptUncheckedCreateWithoutMerchantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpsertWithWhereUniqueWithoutMerchantInput> =
  z
    .object({
      where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReceiptUpdateWithoutMerchantInputObjectSchema),
        z.lazy(() => ReceiptUncheckedUpdateWithoutMerchantInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReceiptCreateWithoutMerchantInputObjectSchema),
        z.lazy(() => ReceiptUncheckedCreateWithoutMerchantInputObjectSchema),
      ]),
    })
    .strict();

export const ReceiptUpsertWithWhereUniqueWithoutMerchantInputObjectSchema =
  Schema;

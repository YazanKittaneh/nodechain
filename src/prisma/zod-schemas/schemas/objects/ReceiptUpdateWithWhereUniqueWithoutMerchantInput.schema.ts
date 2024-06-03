import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptUpdateWithoutMerchantInputObjectSchema } from './ReceiptUpdateWithoutMerchantInput.schema';
import { ReceiptUncheckedUpdateWithoutMerchantInputObjectSchema } from './ReceiptUncheckedUpdateWithoutMerchantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateWithWhereUniqueWithoutMerchantInput> =
  z
    .object({
      where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReceiptUpdateWithoutMerchantInputObjectSchema),
        z.lazy(() => ReceiptUncheckedUpdateWithoutMerchantInputObjectSchema),
      ]),
    })
    .strict();

export const ReceiptUpdateWithWhereUniqueWithoutMerchantInputObjectSchema =
  Schema;

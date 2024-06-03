import { z } from 'zod';
import { ReceiptWhereUniqueInputObjectSchema } from './ReceiptWhereUniqueInput.schema';
import { ReceiptCreateWithoutMerchantInputObjectSchema } from './ReceiptCreateWithoutMerchantInput.schema';
import { ReceiptUncheckedCreateWithoutMerchantInputObjectSchema } from './ReceiptUncheckedCreateWithoutMerchantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateOrConnectWithoutMerchantInput> = z
  .object({
    where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReceiptCreateWithoutMerchantInputObjectSchema),
      z.lazy(() => ReceiptUncheckedCreateWithoutMerchantInputObjectSchema),
    ]),
  })
  .strict();

export const ReceiptCreateOrConnectWithoutMerchantInputObjectSchema = Schema;

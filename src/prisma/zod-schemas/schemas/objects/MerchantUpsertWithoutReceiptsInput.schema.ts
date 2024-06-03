import { z } from 'zod';
import { MerchantUpdateWithoutReceiptsInputObjectSchema } from './MerchantUpdateWithoutReceiptsInput.schema';
import { MerchantUncheckedUpdateWithoutReceiptsInputObjectSchema } from './MerchantUncheckedUpdateWithoutReceiptsInput.schema';
import { MerchantCreateWithoutReceiptsInputObjectSchema } from './MerchantCreateWithoutReceiptsInput.schema';
import { MerchantUncheckedCreateWithoutReceiptsInputObjectSchema } from './MerchantUncheckedCreateWithoutReceiptsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantUpsertWithoutReceiptsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MerchantUpdateWithoutReceiptsInputObjectSchema),
      z.lazy(() => MerchantUncheckedUpdateWithoutReceiptsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MerchantCreateWithoutReceiptsInputObjectSchema),
      z.lazy(() => MerchantUncheckedCreateWithoutReceiptsInputObjectSchema),
    ]),
  })
  .strict();

export const MerchantUpsertWithoutReceiptsInputObjectSchema = Schema;

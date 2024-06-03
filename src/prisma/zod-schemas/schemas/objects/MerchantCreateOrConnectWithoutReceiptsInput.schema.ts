import { z } from 'zod';
import { MerchantWhereUniqueInputObjectSchema } from './MerchantWhereUniqueInput.schema';
import { MerchantCreateWithoutReceiptsInputObjectSchema } from './MerchantCreateWithoutReceiptsInput.schema';
import { MerchantUncheckedCreateWithoutReceiptsInputObjectSchema } from './MerchantUncheckedCreateWithoutReceiptsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutReceiptsInput> = z
  .object({
    where: z.lazy(() => MerchantWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MerchantCreateWithoutReceiptsInputObjectSchema),
      z.lazy(() => MerchantUncheckedCreateWithoutReceiptsInputObjectSchema),
    ]),
  })
  .strict();

export const MerchantCreateOrConnectWithoutReceiptsInputObjectSchema = Schema;

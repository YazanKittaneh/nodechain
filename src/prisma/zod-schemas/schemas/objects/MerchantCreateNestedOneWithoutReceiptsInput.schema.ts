import { z } from 'zod';
import { MerchantCreateWithoutReceiptsInputObjectSchema } from './MerchantCreateWithoutReceiptsInput.schema';
import { MerchantUncheckedCreateWithoutReceiptsInputObjectSchema } from './MerchantUncheckedCreateWithoutReceiptsInput.schema';
import { MerchantCreateOrConnectWithoutReceiptsInputObjectSchema } from './MerchantCreateOrConnectWithoutReceiptsInput.schema';
import { MerchantWhereUniqueInputObjectSchema } from './MerchantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutReceiptsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MerchantCreateWithoutReceiptsInputObjectSchema),
        z.lazy(() => MerchantUncheckedCreateWithoutReceiptsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MerchantCreateOrConnectWithoutReceiptsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MerchantWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MerchantCreateNestedOneWithoutReceiptsInputObjectSchema = Schema;

import { z } from 'zod';
import { MerchantCreateWithoutReceiptsInputObjectSchema } from './MerchantCreateWithoutReceiptsInput.schema';
import { MerchantUncheckedCreateWithoutReceiptsInputObjectSchema } from './MerchantUncheckedCreateWithoutReceiptsInput.schema';
import { MerchantCreateOrConnectWithoutReceiptsInputObjectSchema } from './MerchantCreateOrConnectWithoutReceiptsInput.schema';
import { MerchantUpsertWithoutReceiptsInputObjectSchema } from './MerchantUpsertWithoutReceiptsInput.schema';
import { MerchantWhereUniqueInputObjectSchema } from './MerchantWhereUniqueInput.schema';
import { MerchantUpdateWithoutReceiptsInputObjectSchema } from './MerchantUpdateWithoutReceiptsInput.schema';
import { MerchantUncheckedUpdateWithoutReceiptsInputObjectSchema } from './MerchantUncheckedUpdateWithoutReceiptsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantUpdateOneWithoutReceiptsNestedInput> = z
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
    upsert: z
      .lazy(() => MerchantUpsertWithoutReceiptsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => MerchantWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => MerchantUpdateWithoutReceiptsInputObjectSchema),
        z.lazy(() => MerchantUncheckedUpdateWithoutReceiptsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MerchantUpdateOneWithoutReceiptsNestedInputObjectSchema = Schema;

import { z } from 'zod';
import { MerchantWhereInputObjectSchema } from './MerchantWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantRelationFilter> = z
  .object({
    is: z
      .lazy(() => MerchantWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MerchantWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MerchantRelationFilterObjectSchema = Schema;

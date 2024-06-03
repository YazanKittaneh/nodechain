import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantCreateManyInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    address: z.string(),
    email: z.string(),
    phone_number: z.string(),
    representative: z.string(),
  })
  .strict();

export const MerchantCreateManyInputObjectSchema = Schema;

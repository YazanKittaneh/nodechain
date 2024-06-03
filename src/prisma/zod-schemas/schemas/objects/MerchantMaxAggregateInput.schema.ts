import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    address: z.literal(true).optional(),
    email: z.literal(true).optional(),
    phone_number: z.literal(true).optional(),
    representative: z.literal(true).optional(),
  })
  .strict();

export const MerchantMaxAggregateInputObjectSchema = Schema;
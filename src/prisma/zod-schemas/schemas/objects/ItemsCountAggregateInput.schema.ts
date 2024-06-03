import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    Data: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ItemsCountAggregateInputObjectSchema = Schema;

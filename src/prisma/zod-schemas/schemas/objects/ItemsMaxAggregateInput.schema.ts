import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict();

export const ItemsMaxAggregateInputObjectSchema = Schema;
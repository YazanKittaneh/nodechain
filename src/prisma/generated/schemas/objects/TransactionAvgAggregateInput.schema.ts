import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    transactionId: z.literal(true).optional(),
  })
  .strict();

export const TransactionAvgAggregateInputObjectSchema = Schema;

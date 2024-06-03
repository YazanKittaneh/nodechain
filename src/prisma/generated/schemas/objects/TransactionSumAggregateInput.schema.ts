import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    transactionId: z.literal(true).optional(),
  })
  .strict();

export const TransactionSumAggregateInputObjectSchema = Schema;
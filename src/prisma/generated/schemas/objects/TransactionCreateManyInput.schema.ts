import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateManyInput> = z
  .object({
    id: z.number().optional(),
    transactionId: z.number(),
  })
  .strict();

export const TransactionCreateManyInputObjectSchema = Schema;

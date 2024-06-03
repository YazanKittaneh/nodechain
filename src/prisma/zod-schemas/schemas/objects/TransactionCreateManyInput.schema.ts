import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateManyInput> = z
  .object({
    id: z.number().optional(),
    transactionId: z.number(),
    refund_expiration_date: z.coerce.date(),
  })
  .strict();

export const TransactionCreateManyInputObjectSchema = Schema;

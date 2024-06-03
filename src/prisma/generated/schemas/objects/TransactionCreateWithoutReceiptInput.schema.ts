import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateWithoutReceiptInput> = z
  .object({
    transactionId: z.number(),
  })
  .strict();

export const TransactionCreateWithoutReceiptInputObjectSchema = Schema;

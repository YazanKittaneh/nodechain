import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionCreateWithoutReceiptInput> = z
  .object({
    transactionId: z.number(),
    refund_expiration_date: z.coerce.date(),
  })
  .strict();

export const TransactionCreateWithoutReceiptInputObjectSchema = Schema;

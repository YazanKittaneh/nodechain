import { z } from 'zod';
import { ReceiptCreateManyTransactionInputObjectSchema } from './ReceiptCreateManyTransactionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateManyTransactionInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReceiptCreateManyTransactionInputObjectSchema),
      z.lazy(() => ReceiptCreateManyTransactionInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ReceiptCreateManyTransactionInputEnvelopeObjectSchema = Schema;

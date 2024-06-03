import { z } from 'zod';
import { ReceiptCreateManyItemsInputObjectSchema } from './ReceiptCreateManyItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateManyItemsInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReceiptCreateManyItemsInputObjectSchema),
      z.lazy(() => ReceiptCreateManyItemsInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ReceiptCreateManyItemsInputEnvelopeObjectSchema = Schema;

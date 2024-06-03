import { z } from 'zod';
import { ReceiptCreateManyMerchantInputObjectSchema } from './ReceiptCreateManyMerchantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateManyMerchantInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReceiptCreateManyMerchantInputObjectSchema),
      z.lazy(() => ReceiptCreateManyMerchantInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ReceiptCreateManyMerchantInputEnvelopeObjectSchema = Schema;

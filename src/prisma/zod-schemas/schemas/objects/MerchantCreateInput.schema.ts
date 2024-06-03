import { z } from 'zod';
import { ReceiptCreateNestedManyWithoutMerchantInputObjectSchema } from './ReceiptCreateNestedManyWithoutMerchantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantCreateInput> = z
  .object({
    name: z.string(),
    address: z.string(),
    email: z.string(),
    phone_number: z.string(),
    representative: z.string(),
    receipts: z
      .lazy(() => ReceiptCreateNestedManyWithoutMerchantInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchantCreateInputObjectSchema = Schema;

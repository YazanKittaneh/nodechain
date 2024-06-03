import { z } from 'zod';
import { ReceiptUncheckedCreateNestedManyWithoutMerchantInputObjectSchema } from './ReceiptUncheckedCreateNestedManyWithoutMerchantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    address: z.string(),
    email: z.string(),
    phone_number: z.string(),
    representative: z.string(),
    receipts: z
      .lazy(
        () => ReceiptUncheckedCreateNestedManyWithoutMerchantInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MerchantUncheckedCreateInputObjectSchema = Schema;

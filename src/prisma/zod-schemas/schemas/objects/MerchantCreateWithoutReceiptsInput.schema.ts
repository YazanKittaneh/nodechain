import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantCreateWithoutReceiptsInput> = z
  .object({
    name: z.string(),
    address: z.string(),
    email: z.string(),
    phone_number: z.string(),
    representative: z.string(),
  })
  .strict();

export const MerchantCreateWithoutReceiptsInputObjectSchema = Schema;

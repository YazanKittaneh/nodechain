import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ReceiptListRelationFilterObjectSchema } from './ReceiptListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MerchantWhereInputObjectSchema),
        z.lazy(() => MerchantWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MerchantWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MerchantWhereInputObjectSchema),
        z.lazy(() => MerchantWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phone_number: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    representative: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    receipts: z.lazy(() => ReceiptListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const MerchantWhereInputObjectSchema = Schema;

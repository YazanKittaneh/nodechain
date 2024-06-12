import { z } from 'zod';
import { ReceiptTypeSchema } from '../enums/ReceiptType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumReceiptTypeNullableFilter> = z
  .object({
    equals: z
      .lazy(() => ReceiptTypeSchema)
      .optional()
      .nullable(),
    in: z
      .union([
        z.lazy(() => ReceiptTypeSchema).array(),
        z.lazy(() => ReceiptTypeSchema),
      ])
      .optional()
      .nullable(),
    notIn: z
      .union([
        z.lazy(() => ReceiptTypeSchema).array(),
        z.lazy(() => ReceiptTypeSchema),
      ])
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => ReceiptTypeSchema),
        z.lazy(() => NestedEnumReceiptTypeNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumReceiptTypeNullableFilterObjectSchema = Schema;

import { z } from 'zod';
import { ReceiptTypeSchema } from '../enums/ReceiptType.schema';
import { NestedEnumReceiptTypeNullableWithAggregatesFilterObjectSchema } from './NestedEnumReceiptTypeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumReceiptTypeNullableFilterObjectSchema } from './NestedEnumReceiptTypeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumReceiptTypeNullableWithAggregatesFilter> = z
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
        z.lazy(
          () => NestedEnumReceiptTypeNullableWithAggregatesFilterObjectSchema,
        ),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumReceiptTypeNullableFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumReceiptTypeNullableFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EnumReceiptTypeNullableWithAggregatesFilterObjectSchema = Schema;

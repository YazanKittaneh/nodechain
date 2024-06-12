import { z } from 'zod';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumPaymentMethodNullableFilterObjectSchema } from './NestedEnumPaymentMethodNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumPaymentMethodNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .lazy(() => PaymentMethodSchema)
        .optional()
        .nullable(),
      in: z
        .union([
          z.lazy(() => PaymentMethodSchema).array(),
          z.lazy(() => PaymentMethodSchema),
        ])
        .optional()
        .nullable(),
      notIn: z
        .union([
          z.lazy(() => PaymentMethodSchema).array(),
          z.lazy(() => PaymentMethodSchema),
        ])
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => PaymentMethodSchema),
          z.lazy(
            () =>
              NestedEnumPaymentMethodNullableWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumPaymentMethodNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumPaymentMethodNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumPaymentMethodNullableWithAggregatesFilterObjectSchema =
  Schema;

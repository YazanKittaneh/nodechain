import { z } from 'zod';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumPaymentMethodNullableFilter> = z
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
        z.lazy(() => NestedEnumPaymentMethodNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumPaymentMethodNullableFilterObjectSchema = Schema;

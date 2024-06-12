import { z } from 'zod';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NullableEnumPaymentMethodFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => PaymentMethodSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumPaymentMethodFieldUpdateOperationsInputObjectSchema =
  Schema;

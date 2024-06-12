import { z } from 'zod';
import { ReceiptTypeSchema } from '../enums/ReceiptType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NullableEnumReceiptTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => ReceiptTypeSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumReceiptTypeFieldUpdateOperationsInputObjectSchema =
  Schema;

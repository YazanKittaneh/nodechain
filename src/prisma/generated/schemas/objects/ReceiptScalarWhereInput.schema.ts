import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReceiptScalarWhereInputObjectSchema),
        z.lazy(() => ReceiptScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReceiptScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReceiptScalarWhereInputObjectSchema),
        z.lazy(() => ReceiptScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    merchantId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    itemsId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    transactionId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    date: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    card_info: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    total_price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    invoice_number: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tax_state_amount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tax_state_percent: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    tax_federal_amount: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tax_federal_percent: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    tax_total: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    method: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    fileName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ReceiptScalarWhereInputObjectSchema = Schema;

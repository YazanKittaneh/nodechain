import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { EnumPaymentMethodNullableFilterObjectSchema } from './EnumPaymentMethodNullableFilter.schema';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { EnumReceiptTypeNullableFilterObjectSchema } from './EnumReceiptTypeNullableFilter.schema';
import { ReceiptTypeSchema } from '../enums/ReceiptType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReceiptWhereInputObjectSchema),
        z.lazy(() => ReceiptWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReceiptWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReceiptWhereInputObjectSchema),
        z.lazy(() => ReceiptWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    back_of_receipt: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    date: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    credit_card_digits: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    total_price: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    total_tax_paid: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    receipt_number: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    tax_state_amount: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    tax_federal_amount: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    tax_total: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    payment_type: z
      .union([
        z.lazy(() => EnumPaymentMethodNullableFilterObjectSchema),
        z.lazy(() => PaymentMethodSchema),
      ])
      .optional()
      .nullable(),
    transaction_type: z
      .union([
        z.lazy(() => EnumReceiptTypeNullableFilterObjectSchema),
        z.lazy(() => ReceiptTypeSchema),
      ])
      .optional()
      .nullable(),
    fileName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    merchant_name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    merchant_address: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    merchant_email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    merchant_phone_number: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    merchant_representative: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    refund_expiration_date: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const ReceiptWhereInputObjectSchema = Schema;

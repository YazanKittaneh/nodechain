import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    back_of_receipt: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    credit_card_digits: z.lazy(() => SortOrderSchema).optional(),
    total_price: z.lazy(() => SortOrderSchema).optional(),
    total_tax_paid: z.lazy(() => SortOrderSchema).optional(),
    receipt_number: z.lazy(() => SortOrderSchema).optional(),
    tax_state_amount: z.lazy(() => SortOrderSchema).optional(),
    tax_federal_amount: z.lazy(() => SortOrderSchema).optional(),
    tax_total: z.lazy(() => SortOrderSchema).optional(),
    payment_type: z.lazy(() => SortOrderSchema).optional(),
    transaction_type: z.lazy(() => SortOrderSchema).optional(),
    fileName: z.lazy(() => SortOrderSchema).optional(),
    merchant_name: z.lazy(() => SortOrderSchema).optional(),
    merchant_address: z.lazy(() => SortOrderSchema).optional(),
    merchant_email: z.lazy(() => SortOrderSchema).optional(),
    merchant_phone_number: z.lazy(() => SortOrderSchema).optional(),
    merchant_representative: z.lazy(() => SortOrderSchema).optional(),
    refund_expiration_date: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReceiptMaxOrderByAggregateInputObjectSchema = Schema;

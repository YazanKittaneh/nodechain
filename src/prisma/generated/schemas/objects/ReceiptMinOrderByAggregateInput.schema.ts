import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    merchantId: z.lazy(() => SortOrderSchema).optional(),
    itemsId: z.lazy(() => SortOrderSchema).optional(),
    transactionId: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    card_info: z.lazy(() => SortOrderSchema).optional(),
    total_price: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    invoice_number: z.lazy(() => SortOrderSchema).optional(),
    tax_state_amount: z.lazy(() => SortOrderSchema).optional(),
    tax_state_percent: z.lazy(() => SortOrderSchema).optional(),
    tax_federal_amount: z.lazy(() => SortOrderSchema).optional(),
    tax_federal_percent: z.lazy(() => SortOrderSchema).optional(),
    tax_total: z.lazy(() => SortOrderSchema).optional(),
    method: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    fileName: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReceiptMinOrderByAggregateInputObjectSchema = Schema;

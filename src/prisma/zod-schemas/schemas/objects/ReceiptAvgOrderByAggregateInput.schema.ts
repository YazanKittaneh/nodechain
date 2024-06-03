import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    merchantId: z.lazy(() => SortOrderSchema).optional(),
    itemsId: z.lazy(() => SortOrderSchema).optional(),
    transactionId: z.lazy(() => SortOrderSchema).optional(),
    total_price: z.lazy(() => SortOrderSchema).optional(),
    tax_state_amount: z.lazy(() => SortOrderSchema).optional(),
    tax_state_percent: z.lazy(() => SortOrderSchema).optional(),
    tax_federal_amount: z.lazy(() => SortOrderSchema).optional(),
    tax_federal_percent: z.lazy(() => SortOrderSchema).optional(),
    tax_total: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReceiptAvgOrderByAggregateInputObjectSchema = Schema;

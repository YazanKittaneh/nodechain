import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    transactionId: z.lazy(() => SortOrderSchema).optional(),
    refund_expiration_date: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TransactionMinOrderByAggregateInputObjectSchema = Schema;

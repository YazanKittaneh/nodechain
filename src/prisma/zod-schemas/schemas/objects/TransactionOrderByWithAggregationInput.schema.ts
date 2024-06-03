import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TransactionCountOrderByAggregateInputObjectSchema } from './TransactionCountOrderByAggregateInput.schema';
import { TransactionAvgOrderByAggregateInputObjectSchema } from './TransactionAvgOrderByAggregateInput.schema';
import { TransactionMaxOrderByAggregateInputObjectSchema } from './TransactionMaxOrderByAggregateInput.schema';
import { TransactionMinOrderByAggregateInputObjectSchema } from './TransactionMinOrderByAggregateInput.schema';
import { TransactionSumOrderByAggregateInputObjectSchema } from './TransactionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    transactionId: z.lazy(() => SortOrderSchema).optional(),
    refund_expiration_date: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TransactionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TransactionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TransactionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TransactionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TransactionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionOrderByWithAggregationInputObjectSchema = Schema;

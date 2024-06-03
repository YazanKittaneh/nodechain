import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MerchantCountOrderByAggregateInputObjectSchema } from './MerchantCountOrderByAggregateInput.schema';
import { MerchantAvgOrderByAggregateInputObjectSchema } from './MerchantAvgOrderByAggregateInput.schema';
import { MerchantMaxOrderByAggregateInputObjectSchema } from './MerchantMaxOrderByAggregateInput.schema';
import { MerchantMinOrderByAggregateInputObjectSchema } from './MerchantMinOrderByAggregateInput.schema';
import { MerchantSumOrderByAggregateInputObjectSchema } from './MerchantSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone_number: z.lazy(() => SortOrderSchema).optional(),
    representative: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MerchantCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => MerchantAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => MerchantMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MerchantMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => MerchantSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const MerchantOrderByWithAggregationInputObjectSchema = Schema;

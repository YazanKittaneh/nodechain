import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ItemsCountOrderByAggregateInputObjectSchema } from './ItemsCountOrderByAggregateInput.schema';
import { ItemsAvgOrderByAggregateInputObjectSchema } from './ItemsAvgOrderByAggregateInput.schema';
import { ItemsMaxOrderByAggregateInputObjectSchema } from './ItemsMaxOrderByAggregateInput.schema';
import { ItemsMinOrderByAggregateInputObjectSchema } from './ItemsMinOrderByAggregateInput.schema';
import { ItemsSumOrderByAggregateInputObjectSchema } from './ItemsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    Data: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ItemsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ItemsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ItemsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ItemsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ItemsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ItemsOrderByWithAggregationInputObjectSchema = Schema;

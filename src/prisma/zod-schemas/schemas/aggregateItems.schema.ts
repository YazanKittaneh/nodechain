import { z } from 'zod';
import { ItemsOrderByWithRelationInputObjectSchema } from './objects/ItemsOrderByWithRelationInput.schema';
import { ItemsWhereInputObjectSchema } from './objects/ItemsWhereInput.schema';
import { ItemsWhereUniqueInputObjectSchema } from './objects/ItemsWhereUniqueInput.schema';
import { ItemsCountAggregateInputObjectSchema } from './objects/ItemsCountAggregateInput.schema';
import { ItemsMinAggregateInputObjectSchema } from './objects/ItemsMinAggregateInput.schema';
import { ItemsMaxAggregateInputObjectSchema } from './objects/ItemsMaxAggregateInput.schema';
import { ItemsAvgAggregateInputObjectSchema } from './objects/ItemsAvgAggregateInput.schema';
import { ItemsSumAggregateInputObjectSchema } from './objects/ItemsSumAggregateInput.schema';

export const ItemsAggregateSchema = z.object({
  orderBy: z
    .union([
      ItemsOrderByWithRelationInputObjectSchema,
      ItemsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ItemsWhereInputObjectSchema.optional(),
  cursor: ItemsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ItemsCountAggregateInputObjectSchema])
    .optional(),
  _min: ItemsMinAggregateInputObjectSchema.optional(),
  _max: ItemsMaxAggregateInputObjectSchema.optional(),
  _avg: ItemsAvgAggregateInputObjectSchema.optional(),
  _sum: ItemsSumAggregateInputObjectSchema.optional(),
});

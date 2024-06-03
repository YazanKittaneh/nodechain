import { z } from 'zod';
import { ItemsWhereInputObjectSchema } from './objects/ItemsWhereInput.schema';
import { ItemsOrderByWithAggregationInputObjectSchema } from './objects/ItemsOrderByWithAggregationInput.schema';
import { ItemsScalarWhereWithAggregatesInputObjectSchema } from './objects/ItemsScalarWhereWithAggregatesInput.schema';
import { ItemsScalarFieldEnumSchema } from './enums/ItemsScalarFieldEnum.schema';

export const ItemsGroupBySchema = z.object({
  where: ItemsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ItemsOrderByWithAggregationInputObjectSchema,
      ItemsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ItemsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ItemsScalarFieldEnumSchema),
});

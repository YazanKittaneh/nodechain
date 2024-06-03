import { z } from 'zod';
import { ItemsOrderByWithRelationInputObjectSchema } from './objects/ItemsOrderByWithRelationInput.schema';
import { ItemsWhereInputObjectSchema } from './objects/ItemsWhereInput.schema';
import { ItemsWhereUniqueInputObjectSchema } from './objects/ItemsWhereUniqueInput.schema';
import { ItemsScalarFieldEnumSchema } from './enums/ItemsScalarFieldEnum.schema';

export const ItemsFindFirstSchema = z.object({
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
  distinct: z.array(ItemsScalarFieldEnumSchema).optional(),
});

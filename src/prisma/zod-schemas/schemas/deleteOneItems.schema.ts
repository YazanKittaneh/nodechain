import { z } from 'zod';
import { ItemsWhereUniqueInputObjectSchema } from './objects/ItemsWhereUniqueInput.schema';

export const ItemsDeleteOneSchema = z.object({
  where: ItemsWhereUniqueInputObjectSchema,
});

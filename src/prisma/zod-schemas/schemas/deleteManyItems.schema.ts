import { z } from 'zod';
import { ItemsWhereInputObjectSchema } from './objects/ItemsWhereInput.schema';

export const ItemsDeleteManySchema = z.object({
  where: ItemsWhereInputObjectSchema.optional(),
});

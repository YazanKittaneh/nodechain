import { z } from 'zod';
import { ItemsUpdateManyMutationInputObjectSchema } from './objects/ItemsUpdateManyMutationInput.schema';
import { ItemsWhereInputObjectSchema } from './objects/ItemsWhereInput.schema';

export const ItemsUpdateManySchema = z.object({
  data: ItemsUpdateManyMutationInputObjectSchema,
  where: ItemsWhereInputObjectSchema.optional(),
});

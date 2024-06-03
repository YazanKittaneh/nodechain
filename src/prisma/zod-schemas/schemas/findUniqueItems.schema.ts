import { z } from 'zod';
import { ItemsWhereUniqueInputObjectSchema } from './objects/ItemsWhereUniqueInput.schema';

export const ItemsFindUniqueSchema = z.object({
  where: ItemsWhereUniqueInputObjectSchema,
});

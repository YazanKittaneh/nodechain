import { z } from 'zod';
import { ItemsUpdateInputObjectSchema } from './objects/ItemsUpdateInput.schema';
import { ItemsUncheckedUpdateInputObjectSchema } from './objects/ItemsUncheckedUpdateInput.schema';
import { ItemsWhereUniqueInputObjectSchema } from './objects/ItemsWhereUniqueInput.schema';

export const ItemsUpdateOneSchema = z.object({
  data: z.union([
    ItemsUpdateInputObjectSchema,
    ItemsUncheckedUpdateInputObjectSchema,
  ]),
  where: ItemsWhereUniqueInputObjectSchema,
});

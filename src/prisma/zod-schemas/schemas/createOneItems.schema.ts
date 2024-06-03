import { z } from 'zod';
import { ItemsCreateInputObjectSchema } from './objects/ItemsCreateInput.schema';
import { ItemsUncheckedCreateInputObjectSchema } from './objects/ItemsUncheckedCreateInput.schema';

export const ItemsCreateOneSchema = z.object({
  data: z.union([
    ItemsCreateInputObjectSchema,
    ItemsUncheckedCreateInputObjectSchema,
  ]),
});

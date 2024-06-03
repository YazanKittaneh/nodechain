import { z } from 'zod';
import { ItemsCreateManyInputObjectSchema } from './objects/ItemsCreateManyInput.schema';

export const ItemsCreateManySchema = z.object({
  data: z.union([
    ItemsCreateManyInputObjectSchema,
    z.array(ItemsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

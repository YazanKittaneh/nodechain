import { z } from 'zod';
import { ItemsWhereUniqueInputObjectSchema } from './objects/ItemsWhereUniqueInput.schema';
import { ItemsCreateInputObjectSchema } from './objects/ItemsCreateInput.schema';
import { ItemsUncheckedCreateInputObjectSchema } from './objects/ItemsUncheckedCreateInput.schema';
import { ItemsUpdateInputObjectSchema } from './objects/ItemsUpdateInput.schema';
import { ItemsUncheckedUpdateInputObjectSchema } from './objects/ItemsUncheckedUpdateInput.schema';

export const ItemsUpsertSchema = z.object({
  where: ItemsWhereUniqueInputObjectSchema,
  create: z.union([
    ItemsCreateInputObjectSchema,
    ItemsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ItemsUpdateInputObjectSchema,
    ItemsUncheckedUpdateInputObjectSchema,
  ]),
});

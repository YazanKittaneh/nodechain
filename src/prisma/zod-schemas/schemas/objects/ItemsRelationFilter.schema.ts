import { z } from 'zod';
import { ItemsWhereInputObjectSchema } from './ItemsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsRelationFilter> = z
  .object({
    is: z
      .lazy(() => ItemsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ItemsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ItemsRelationFilterObjectSchema = Schema;

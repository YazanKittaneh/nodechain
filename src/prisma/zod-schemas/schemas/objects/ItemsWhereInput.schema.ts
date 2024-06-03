import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { ReceiptListRelationFilterObjectSchema } from './ReceiptListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ItemsWhereInputObjectSchema),
        z.lazy(() => ItemsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ItemsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ItemsWhereInputObjectSchema),
        z.lazy(() => ItemsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    Data: z.lazy(() => JsonFilterObjectSchema).optional(),
    Receipt: z.lazy(() => ReceiptListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ItemsWhereInputObjectSchema = Schema;

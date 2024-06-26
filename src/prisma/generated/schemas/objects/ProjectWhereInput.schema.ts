import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjectWhereInputObjectSchema),
        z.lazy(() => ProjectWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjectWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjectWhereInputObjectSchema),
        z.lazy(() => ProjectWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ProjectWhereInputObjectSchema = Schema;

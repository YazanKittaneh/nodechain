import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateInput> = z
  .object({
    name: z.string(),
  })
  .strict();

export const ProjectCreateInputObjectSchema = Schema;

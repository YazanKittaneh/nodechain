import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const ItemsWhereUniqueInputObjectSchema = Schema;

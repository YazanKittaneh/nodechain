import { z } from 'zod';
import { TransactionWhereInputObjectSchema } from './TransactionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionRelationFilter> = z
  .object({
    is: z
      .lazy(() => TransactionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TransactionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TransactionRelationFilterObjectSchema = Schema;

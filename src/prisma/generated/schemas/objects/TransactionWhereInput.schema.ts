import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ReceiptListRelationFilterObjectSchema } from './ReceiptListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TransactionWhereInputObjectSchema),
        z.lazy(() => TransactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TransactionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TransactionWhereInputObjectSchema),
        z.lazy(() => TransactionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    transactionId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Receipt: z.lazy(() => ReceiptListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const TransactionWhereInputObjectSchema = Schema;

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReceiptOrderByRelationAggregateInputObjectSchema } from './ReceiptOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TransactionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    transactionId: z.lazy(() => SortOrderSchema).optional(),
    Receipt: z
      .lazy(() => ReceiptOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TransactionOrderByWithRelationInputObjectSchema = Schema;

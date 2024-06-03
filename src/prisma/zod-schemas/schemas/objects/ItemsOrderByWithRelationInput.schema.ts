import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReceiptOrderByRelationAggregateInputObjectSchema } from './ReceiptOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ItemsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    Data: z.lazy(() => SortOrderSchema).optional(),
    Receipt: z
      .lazy(() => ReceiptOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemsOrderByWithRelationInputObjectSchema = Schema;

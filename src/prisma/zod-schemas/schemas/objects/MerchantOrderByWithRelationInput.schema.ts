import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReceiptOrderByRelationAggregateInputObjectSchema } from './ReceiptOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchantOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone_number: z.lazy(() => SortOrderSchema).optional(),
    representative: z.lazy(() => SortOrderSchema).optional(),
    receipts: z
      .lazy(() => ReceiptOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchantOrderByWithRelationInputObjectSchema = Schema;

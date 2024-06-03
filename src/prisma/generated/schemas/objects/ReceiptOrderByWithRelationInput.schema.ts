import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MerchantOrderByWithRelationInputObjectSchema } from './MerchantOrderByWithRelationInput.schema';
import { ItemsOrderByWithRelationInputObjectSchema } from './ItemsOrderByWithRelationInput.schema';
import { TransactionOrderByWithRelationInputObjectSchema } from './TransactionOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    merchantId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    itemsId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    transactionId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    card_info: z.lazy(() => SortOrderSchema).optional(),
    total_price: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    invoice_number: z.lazy(() => SortOrderSchema).optional(),
    tax_state_amount: z.lazy(() => SortOrderSchema).optional(),
    tax_state_percent: z.lazy(() => SortOrderSchema).optional(),
    tax_federal_amount: z.lazy(() => SortOrderSchema).optional(),
    tax_federal_percent: z.lazy(() => SortOrderSchema).optional(),
    tax_total: z.lazy(() => SortOrderSchema).optional(),
    method: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    fileName: z.lazy(() => SortOrderSchema).optional(),
    merchant: z
      .lazy(() => MerchantOrderByWithRelationInputObjectSchema)
      .optional(),
    items: z.lazy(() => ItemsOrderByWithRelationInputObjectSchema).optional(),
    transaction: z
      .lazy(() => TransactionOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReceiptOrderByWithRelationInputObjectSchema = Schema;

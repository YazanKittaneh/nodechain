import { z } from 'zod';
import { MerchantOrderByWithRelationInputObjectSchema } from './objects/MerchantOrderByWithRelationInput.schema';
import { MerchantWhereInputObjectSchema } from './objects/MerchantWhereInput.schema';
import { MerchantWhereUniqueInputObjectSchema } from './objects/MerchantWhereUniqueInput.schema';
import { MerchantCountAggregateInputObjectSchema } from './objects/MerchantCountAggregateInput.schema';
import { MerchantMinAggregateInputObjectSchema } from './objects/MerchantMinAggregateInput.schema';
import { MerchantMaxAggregateInputObjectSchema } from './objects/MerchantMaxAggregateInput.schema';
import { MerchantAvgAggregateInputObjectSchema } from './objects/MerchantAvgAggregateInput.schema';
import { MerchantSumAggregateInputObjectSchema } from './objects/MerchantSumAggregateInput.schema';

export const MerchantAggregateSchema = z.object({
  orderBy: z
    .union([
      MerchantOrderByWithRelationInputObjectSchema,
      MerchantOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MerchantWhereInputObjectSchema.optional(),
  cursor: MerchantWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MerchantCountAggregateInputObjectSchema])
    .optional(),
  _min: MerchantMinAggregateInputObjectSchema.optional(),
  _max: MerchantMaxAggregateInputObjectSchema.optional(),
  _avg: MerchantAvgAggregateInputObjectSchema.optional(),
  _sum: MerchantSumAggregateInputObjectSchema.optional(),
});

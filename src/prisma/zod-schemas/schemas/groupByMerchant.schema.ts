import { z } from 'zod';
import { MerchantWhereInputObjectSchema } from './objects/MerchantWhereInput.schema';
import { MerchantOrderByWithAggregationInputObjectSchema } from './objects/MerchantOrderByWithAggregationInput.schema';
import { MerchantScalarWhereWithAggregatesInputObjectSchema } from './objects/MerchantScalarWhereWithAggregatesInput.schema';
import { MerchantScalarFieldEnumSchema } from './enums/MerchantScalarFieldEnum.schema';

export const MerchantGroupBySchema = z.object({
  where: MerchantWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MerchantOrderByWithAggregationInputObjectSchema,
      MerchantOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MerchantScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MerchantScalarFieldEnumSchema),
});

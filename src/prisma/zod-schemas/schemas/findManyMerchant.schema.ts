import { z } from 'zod';
import { MerchantOrderByWithRelationInputObjectSchema } from './objects/MerchantOrderByWithRelationInput.schema';
import { MerchantWhereInputObjectSchema } from './objects/MerchantWhereInput.schema';
import { MerchantWhereUniqueInputObjectSchema } from './objects/MerchantWhereUniqueInput.schema';
import { MerchantScalarFieldEnumSchema } from './enums/MerchantScalarFieldEnum.schema';

export const MerchantFindManySchema = z.object({
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
  distinct: z.array(MerchantScalarFieldEnumSchema).optional(),
});

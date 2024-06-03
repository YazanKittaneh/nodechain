import { z } from 'zod';
import { MerchantUpdateManyMutationInputObjectSchema } from './objects/MerchantUpdateManyMutationInput.schema';
import { MerchantWhereInputObjectSchema } from './objects/MerchantWhereInput.schema';

export const MerchantUpdateManySchema = z.object({
  data: MerchantUpdateManyMutationInputObjectSchema,
  where: MerchantWhereInputObjectSchema.optional(),
});

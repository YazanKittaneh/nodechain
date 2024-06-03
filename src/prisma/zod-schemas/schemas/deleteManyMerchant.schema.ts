import { z } from 'zod';
import { MerchantWhereInputObjectSchema } from './objects/MerchantWhereInput.schema';

export const MerchantDeleteManySchema = z.object({
  where: MerchantWhereInputObjectSchema.optional(),
});

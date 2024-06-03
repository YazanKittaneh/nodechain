import { z } from 'zod';
import { MerchantWhereUniqueInputObjectSchema } from './objects/MerchantWhereUniqueInput.schema';

export const MerchantFindUniqueSchema = z.object({
  where: MerchantWhereUniqueInputObjectSchema,
});

import { z } from 'zod';
import { MerchantWhereUniqueInputObjectSchema } from './objects/MerchantWhereUniqueInput.schema';

export const MerchantDeleteOneSchema = z.object({
  where: MerchantWhereUniqueInputObjectSchema,
});

import { z } from 'zod';
import { MerchantCreateInputObjectSchema } from './objects/MerchantCreateInput.schema';
import { MerchantUncheckedCreateInputObjectSchema } from './objects/MerchantUncheckedCreateInput.schema';

export const MerchantCreateOneSchema = z.object({
  data: z.union([
    MerchantCreateInputObjectSchema,
    MerchantUncheckedCreateInputObjectSchema,
  ]),
});

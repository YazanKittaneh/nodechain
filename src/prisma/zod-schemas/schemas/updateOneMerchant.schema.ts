import { z } from 'zod';
import { MerchantUpdateInputObjectSchema } from './objects/MerchantUpdateInput.schema';
import { MerchantUncheckedUpdateInputObjectSchema } from './objects/MerchantUncheckedUpdateInput.schema';
import { MerchantWhereUniqueInputObjectSchema } from './objects/MerchantWhereUniqueInput.schema';

export const MerchantUpdateOneSchema = z.object({
  data: z.union([
    MerchantUpdateInputObjectSchema,
    MerchantUncheckedUpdateInputObjectSchema,
  ]),
  where: MerchantWhereUniqueInputObjectSchema,
});

import { z } from 'zod';
import { MerchantWhereUniqueInputObjectSchema } from './objects/MerchantWhereUniqueInput.schema';
import { MerchantCreateInputObjectSchema } from './objects/MerchantCreateInput.schema';
import { MerchantUncheckedCreateInputObjectSchema } from './objects/MerchantUncheckedCreateInput.schema';
import { MerchantUpdateInputObjectSchema } from './objects/MerchantUpdateInput.schema';
import { MerchantUncheckedUpdateInputObjectSchema } from './objects/MerchantUncheckedUpdateInput.schema';

export const MerchantUpsertSchema = z.object({
  where: MerchantWhereUniqueInputObjectSchema,
  create: z.union([
    MerchantCreateInputObjectSchema,
    MerchantUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MerchantUpdateInputObjectSchema,
    MerchantUncheckedUpdateInputObjectSchema,
  ]),
});

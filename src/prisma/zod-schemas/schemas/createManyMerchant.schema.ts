import { z } from 'zod';
import { MerchantCreateManyInputObjectSchema } from './objects/MerchantCreateManyInput.schema';

export const MerchantCreateManySchema = z.object({
  data: z.union([
    MerchantCreateManyInputObjectSchema,
    z.array(MerchantCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

import { z } from 'zod';

export const MerchantScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'address',
  'email',
  'phone_number',
  'representative',
]);

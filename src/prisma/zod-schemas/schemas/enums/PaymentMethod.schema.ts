import { z } from 'zod';

export const PaymentMethodSchema = z.enum([
  'GIFT_CARD',
  'STORE_CREDIT',
  'CREDIT',
  'DEBIT',
]);

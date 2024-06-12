import { z } from 'zod';

export const ReceiptTypeSchema = z.enum([
  'PURCHASE',
  'RETURN',
  'REFUND',
  'OTHER',
]);

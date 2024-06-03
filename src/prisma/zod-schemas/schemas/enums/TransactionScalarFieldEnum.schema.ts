import { z } from 'zod';

export const TransactionScalarFieldEnumSchema = z.enum([
  'id',
  'transactionId',
  'refund_expiration_date',
]);

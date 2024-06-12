import { z } from 'zod';

export const ReceiptScalarFieldEnumSchema = z.enum([
  'id',
  'back_of_receipt',
  'date',
  'credit_card_digits',
  'total_price',
  'total_tax_paid',
  'receipt_number',
  'tax_state_amount',
  'tax_federal_amount',
  'tax_total',
  'payment_type',
  'transaction_type',
  'fileName',
  'merchant_name',
  'merchant_address',
  'merchant_email',
  'merchant_phone_number',
  'merchant_representative',
  'refund_expiration_date',
]);

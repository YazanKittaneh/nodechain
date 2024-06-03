import { z } from 'zod';

export const ReceiptScalarFieldEnumSchema = z.enum([
  'id',
  'merchantId',
  'itemsId',
  'transactionId',
  'date',
  'card_info',
  'total_price',
  'title',
  'invoice_number',
  'tax_state_amount',
  'tax_state_percent',
  'tax_federal_amount',
  'tax_federal_percent',
  'tax_total',
  'method',
  'type',
  'fileName',
]);

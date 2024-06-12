/*
  Warnings:

  - The `date` column on the `Receipt` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Receipt" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3),
ALTER COLUMN "card_info" DROP NOT NULL,
ALTER COLUMN "invoice_number" DROP NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "total_price" DROP NOT NULL,
ALTER COLUMN "fileName" DROP NOT NULL,
ALTER COLUMN "tax_federal_amount" DROP NOT NULL,
ALTER COLUMN "tax_federal_percent" DROP NOT NULL,
ALTER COLUMN "tax_state_amount" DROP NOT NULL,
ALTER COLUMN "tax_state_percent" DROP NOT NULL,
ALTER COLUMN "tax_total" DROP NOT NULL,
ALTER COLUMN "method" DROP NOT NULL,
ALTER COLUMN "type" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "refund_expiration_date" DROP NOT NULL,
ALTER COLUMN "refund_expiration_date" SET DATA TYPE TEXT;

/*
  Warnings:

  - You are about to drop the column `card_info` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `invoice_number` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `itemsId` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `merchantId` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `method` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `tax_federal_percent` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `tax_state_percent` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `transactionId` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the `Items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Merchant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_itemsId_fkey";

-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_merchantId_fkey";

-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_transactionId_fkey";

-- AlterTable
ALTER TABLE "Receipt" DROP COLUMN "card_info",
DROP COLUMN "invoice_number",
DROP COLUMN "itemsId",
DROP COLUMN "merchantId",
DROP COLUMN "method",
DROP COLUMN "tax_federal_percent",
DROP COLUMN "tax_state_percent",
DROP COLUMN "title",
DROP COLUMN "transactionId",
DROP COLUMN "type",
ADD COLUMN     "credit_card_digits" TEXT,
ADD COLUMN     "merchant_address" TEXT,
ADD COLUMN     "merchant_email" TEXT,
ADD COLUMN     "merchant_name" TEXT,
ADD COLUMN     "merchant_phone_number" TEXT,
ADD COLUMN     "merchant_representative" TEXT,
ADD COLUMN     "payment_type" "PaymentMethod",
ADD COLUMN     "receipt_number" TEXT,
ADD COLUMN     "refund_expiration_date" TEXT,
ADD COLUMN     "total_tax_paid" DOUBLE PRECISION,
ADD COLUMN     "transaction_type" "ReceiptType",
ALTER COLUMN "tax_federal_amount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "tax_state_amount" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "Items";

-- DropTable
DROP TABLE "Merchant";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "Transaction";

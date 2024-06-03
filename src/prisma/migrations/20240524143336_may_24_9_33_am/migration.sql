/*
  Warnings:

  - You are about to drop the column `bank_trans_ref` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `card_info` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `invoice_number` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `method` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `total_price` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_id` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `card_info` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoice_number` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('GIFT_CARD', 'STORE_CREDIT', 'CREDIT', 'DEBIT');

-- CreateEnum
CREATE TYPE "ReceiptType" AS ENUM ('PURCHASE', 'RETURN', 'REFUND', 'OTHER');

-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_transactionId_fkey";

-- DropIndex
DROP INDEX "Receipt_transactionId_key";

-- AlterTable
ALTER TABLE "Receipt" DROP COLUMN "bank_trans_ref",
DROP COLUMN "companyId",
ADD COLUMN     "card_info" TEXT NOT NULL,
ADD COLUMN     "invoice_number" TEXT NOT NULL,
ADD COLUMN     "method" "PaymentMethod" NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "total_price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "type" "ReceiptType" NOT NULL,
ALTER COLUMN "transactionId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "card_info",
DROP COLUMN "invoice_number",
DROP COLUMN "method",
DROP COLUMN "status",
DROP COLUMN "title",
DROP COLUMN "total_price",
DROP COLUMN "transaction_id",
DROP COLUMN "type",
ADD COLUMN     "transactionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Company";

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

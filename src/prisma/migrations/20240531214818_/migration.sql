/*
  Warnings:

  - Added the required column `refund_expiration_date` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "refund_expiration_date" TIMESTAMP(3) NOT NULL;

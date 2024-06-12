-- AlterTable
ALTER TABLE "Merchant" ALTER COLUMN "email" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "transactionId" DROP NOT NULL;

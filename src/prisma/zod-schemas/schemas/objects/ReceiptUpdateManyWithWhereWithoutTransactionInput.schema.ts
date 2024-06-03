import { z } from 'zod';
import { ReceiptScalarWhereInputObjectSchema } from './ReceiptScalarWhereInput.schema';
import { ReceiptUpdateManyMutationInputObjectSchema } from './ReceiptUpdateManyMutationInput.schema';
import { ReceiptUncheckedUpdateManyWithoutReceiptInputObjectSchema } from './ReceiptUncheckedUpdateManyWithoutReceiptInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateManyWithWhereWithoutTransactionInput> =
  z
    .object({
      where: z.lazy(() => ReceiptScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ReceiptUpdateManyMutationInputObjectSchema),
        z.lazy(() => ReceiptUncheckedUpdateManyWithoutReceiptInputObjectSchema),
      ]),
    })
    .strict();

export const ReceiptUpdateManyWithWhereWithoutTransactionInputObjectSchema =
  Schema;

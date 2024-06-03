import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ReceiptUpdateManyWithoutItemsNestedInputObjectSchema } from './ReceiptUpdateManyWithoutItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.ItemsUpdateInput> = z
  .object({
    Data: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
    Receipt: z
      .lazy(() => ReceiptUpdateManyWithoutItemsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemsUpdateInputObjectSchema = Schema;

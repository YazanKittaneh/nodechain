import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ReceiptUncheckedUpdateManyWithoutItemsNestedInputObjectSchema } from './ReceiptUncheckedUpdateManyWithoutItemsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.ItemsUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Data: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
    Receipt: z
      .lazy(() => ReceiptUncheckedUpdateManyWithoutItemsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemsUncheckedUpdateInputObjectSchema = Schema;

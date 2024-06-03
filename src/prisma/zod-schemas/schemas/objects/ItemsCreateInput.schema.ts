import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ReceiptCreateNestedManyWithoutItemsInputObjectSchema } from './ReceiptCreateNestedManyWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.ItemsCreateInput> = z
  .object({
    Data: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    Receipt: z
      .lazy(() => ReceiptCreateNestedManyWithoutItemsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemsCreateInputObjectSchema = Schema;

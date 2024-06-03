import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ReceiptUncheckedCreateNestedManyWithoutItemsInputObjectSchema } from './ReceiptUncheckedCreateNestedManyWithoutItemsInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.ItemsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    Data: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    Receipt: z
      .lazy(() => ReceiptUncheckedCreateNestedManyWithoutItemsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ItemsUncheckedCreateInputObjectSchema = Schema;
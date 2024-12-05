import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { saleType } from "./saleType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, saleType],
};

import { Product } from "@/types/Products";

// Extract unique values helper function
export const extractUniqueValues = (products: Product[], field: keyof Product) => {
  const valuesSet = new Set<string>();

  products.forEach(product => {
    if (Array.isArray(product[field])) {
      (product[field] as string[]).forEach(value => valuesSet.add(value));
    } else if (typeof product[field] === 'string') {
      valuesSet.add(product[field] as string);
    }
  });

  return Array.from(valuesSet);
};

import { Product } from "@/types/Products";

export type GroupedResult<K extends keyof Product> = {
  [key in K]: string;
} & {
  products: Product[];
};

export function getProductsBy<K extends keyof Product>(
  products: Product[],
  key: K
): GroupedResult<K>[] {
  const grouped = new Map<string, Product[]>();

  for (const product of products) {
    const groupKey = String(product[key]);
    if (!grouped.has(groupKey)) {
      grouped.set(groupKey, []);
    }
    grouped.get(groupKey)!.push(product);
  }

  const result: GroupedResult<K>[] = [];

  for (const [groupKey, groupProducts] of grouped.entries()) {
    result.push({
      [key]: groupKey,
      products: groupProducts,
    } as GroupedResult<K>);
  }

  return result;
}


// Price formatter
export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price);
};



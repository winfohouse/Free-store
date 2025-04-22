import { Product } from "@/types/Products";

export function FilteredProduct(products: Product[], key: keyof Product, value: string | boolean) {
  let filteredProduct = products.filter(product => (product[key] === value))
  
  return filteredProduct;
}
  
export function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word characters
    .replace(/\s+/g, '-')     // replace spaces with hyphens
    .trim();
}

export const isTrendingProduct = (product: Product): boolean => {
  const VIEWS_THRESHOLD = 1000;
  const SOLD_THRESHOLD = 100;

  return (
    (product.viewsCount !== undefined && product.viewsCount >= VIEWS_THRESHOLD) ||
    (product.soldCount !== undefined && product.soldCount >= SOLD_THRESHOLD)
  );
};

export const isLimitedTimeDeal = (product: Product): boolean => {
  if (!product.offerEndsAt) return false;
  const now = new Date();
  const offerEnd = new Date(product.offerEndsAt);
  return offerEnd > now;
};



export function discountPercent(originalPrice: number, price: number): number {
  return originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;
};

export function incrementQuantity(
  quantity: number,
  stock: number | undefined
): number {
  if (stock && quantity < stock) {
    return quantity + 1;
  }
  return quantity;
};

export function decrementQuantity(quantity: number): number {
  return quantity > 1 ? quantity - 1 : quantity;
};

export function handleAddToCart({
  productId,
  quantity,
  selectedVariant,
  variants,
  selectedColor,
  colors,
}: {
  productId: string | number;
  quantity: number;
  selectedVariant: number | null;
  variants?: { name: string }[];
  selectedColor: number | null;
  colors?: { name: string }[];
}) {
  console.log('Adding to cart:', {
    product: productId,
    quantity,
    variant: selectedVariant !== null ? variants?.[selectedVariant]?.name : null,
    color: selectedColor !== null ? colors?.[selectedColor]?.name : null,
  });
};

export function handleShare(productId: string | number) {
  console.log('Sharing product:', productId);
};


export function calculateBundlePrice(product: Product) {
  let total = product.price;
  product.frequentlyBoughtTogether && product.frequentlyBoughtTogether.length > 0 && product.frequentlyBoughtTogether.forEach(item => {
    total += item.price;
  });
  return total;

};

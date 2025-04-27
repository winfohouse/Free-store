
import jsonProductsData from "@/demoData/product.json";
import { Product } from "@/types/Products";
import { normalizeProduct } from "@/utily/normalizaProduct";

let uniqueCategories = new Set<string>();
let uniquePlatforms = new Set<string>();
let uniqueBrands = new Set<string>();
let uniqueTags = new Set<string>();
let uniqueModels = new Set<string>();

export const products: Product[] = jsonProductsData.products.map((product, index) => {
  // Use a fixed seed: index divided by total products
  const seed = index / jsonProductsData.products.length;
  const normalizedProduct = normalizeProduct(product, seed);

  uniqueCategories.add(normalizedProduct.category);
  uniquePlatforms.add(normalizedProduct.platform);
  uniqueBrands.add(normalizedProduct.brand);
  normalizedProduct.tags.forEach((tag: string) => uniqueTags.add(tag));
  uniqueModels.add(normalizedProduct.model);

  return normalizedProduct;
});

export const categories: string[] = [...uniqueCategories];
export const platforms: string[] = [...uniquePlatforms];
export const brands: string[] = [...uniqueBrands];
export const tags: string[] = [...uniqueTags];
export const models: string[] = [...uniqueModels];

export const platformsLinks = platforms.map((plat) => {
  let slug = encodeURIComponent(plat);
  return {
    name: plat,
    slug: slug,
    href: `/markets/${slug}`,
  };
});

export const categoryLinks = categories.map((cat) => {
  let slug = encodeURIComponent(cat);
  return {
    name: cat,
    slug: slug,
    href: `/categories/${slug}`,
  };
});

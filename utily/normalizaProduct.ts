
import { Product } from "@/types/Products";

const defaultCategory = [
  "Electronics",
  "Clothing & Fashion",
  "Home & Kitchen",
  "Toys & Games",
  "Books & Media",
  "Health & Beauty",
  "Sports & Outdoors",
];

const defaultBrands = ["Sony", "Samsung", "Apple", "LG", "Nike", "Adidas", "Dell", "HP"];

const defaultModels = ["X100", "Pro Max", "Series 9", "EliteBook", "EcoPack", "SlimFit"];

const defaultPlatformIcons = {
  Amazon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg",
  eBay: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ebay.svg",
  AliExpress: "https://upload.wikimedia.org/wikipedia/commons/2/2b/AliExpress_logo.svg",
  Walmart: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
  Target: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",
} as const;

const defaultPlatforms = Object.keys(defaultPlatformIcons) as (keyof typeof defaultPlatformIcons)[];

const tagsPool = ["hot", "sale", "trending", "limited", "eco-friendly"];

function getRandom<T>(arr: T[], seed: number): T {
  const index = Math.floor(seed * arr.length) % arr.length;
  return arr[index];
}

function getRandomTags(seed: number): string[] {
  const shuffled = [...tagsPool];
  // Simple deterministic shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seed * (i + 1)) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const count = (Math.floor(seed * 5) % tagsPool.length) + 1;
  return shuffled.slice(0, count);
}

function getRandomImage(seed: number): string {
  const id = Math.floor(seed * 10000);
  return `https://picsum.photos/seed/${id}/400/400`;
}

export function normalizeProduct(raw: any, seed: number): Product {
  const randomPlatform = getRandom(defaultPlatforms, seed);

  const id = raw.id ?? `product-${Math.floor(seed * 100000)}`;

  return {
    id,
    title: raw.title ?? `Product ${Math.floor(seed * 1000)}`,
    brand: raw.brand ?? getRandom(defaultBrands, seed),
    rating: raw.rating ?? parseFloat(((seed * 5) % 5).toFixed(2)),
    reviewCount: raw.reviewCount ?? Math.floor(seed * 500),
    price: raw.price ?? parseFloat(((seed * 1000) % 990 + 10).toFixed(2)),
    category: raw.category ?? getRandom(defaultCategory, seed),
    model: raw.model ?? getRandom(defaultModels, seed),
    description: raw.description ?? "This is a top-quality product loved by users.",
    tags: Array.isArray(raw.tags) ? raw.tags : getRandomTags(seed),
    images: raw.images ?? [getRandomImage(seed)],
    originalPrice: raw.originalPrice ?? undefined,
    discount: raw.discountPercentage ? `${raw.discountPercentage}%` : `${Math.floor(seed * 50)}%`,
    available: raw.availabilityStatus === "In Stock" || (seed % 1) > 0.2,
    freeShipping: raw.freeShipping ?? (seed % 1) > 0.5,
    releaseDate: raw.releaseDate ?? new Date(Date.now() - Math.floor(seed * 10000000000)).toISOString(),
    features: raw.features ?? ["Durable", "Compact", "Eco-friendly"],
    variants: raw.variants ?? [],
    colors: raw.colors ?? [],
    specifications: raw.specifications ?? [],
    reviews: raw.reviews ?? [],
    frequentlyBoughtTogether: raw.frequentlyBoughtTogether ?? [],
    similarProducts: raw.similarProducts ?? [],
    platform: raw.platform ?? randomPlatform,
    platformIcon: raw.platformIcon ?? defaultPlatformIcons[randomPlatform],
    stock: raw.stock ?? Math.floor(seed * 500),
    ctaText: raw.ctaText ?? "Shop Now",
    ctaLink: raw.ctaLink ?? `/products/${id}`,
    bestPrice: raw.bestPrice ?? (seed % 1) > 0.5,
    offerEndsAt: raw.offerEndsAt ?? new Date(Date.now() + 3 * 86400000).toISOString(),
    viewsCount: raw.viewsCount ?? Math.floor(seed * 10000),
    soldCount: raw.soldCount ?? Math.floor(seed * 5000),
    wishlistCount: raw.wishlistCount ?? Math.floor(seed * 300),
    sharedCount: raw.sharedCount ?? Math.floor(seed * 150),
  };
}

export type Product = {
  id: string;
  title: string;
  brand: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  discount?: string | null;
  available?: boolean;
  freeShipping?: boolean;
  category: string;
  model: string;
  releaseDate?: string;
  description?: string;
  features?: string[];
  variants?: { name: string; price: number; color: string }[];
  colors?: { name: string; code: string }[];
  images: string[];
  specifications?: { name: string; value: string }[];
  reviews?: {
    author: string;
    date: string;
    rating: number;
    title: string;
    content: string;
    helpful: number;
  }[];
  frequentlyBoughtTogether?: {
    name: string;
    price: number;
    image: string;
  }[];
  similarProducts?: {
    name: string;
    price: number;
    rating: number;
    image: string;
  }[];
  platform: string;
  platformIcon: string;
  tags: string[];
  stock?: number;
  ctaText?: string;
  ctaLink?: string;
  bestPrice?: boolean;
  offerEndsAt?: string;         // e.g., "2025-04-20T23:59:59Z"
  viewsCount?: number;          // e.g., 1023
  soldCount?: number;           // e.g., 348
  wishlistCount: number,
  sharedCount: number,
};

export type ProductsProps = { products : Product[], }

export type deal = {
    id: number;
    name: string;
    image: string;
}

export type Category = {
    id: number;
    name: string;
    icon: string;
}
// Based on your Product type definitiontype
export type ProductTypeFilterProps = {
  filters: Record<string, string | string[] | undefined>;
  categorySlug: string;
}



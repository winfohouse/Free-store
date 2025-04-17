import { Product } from "./ProductsHendeler";

  // Categories for filtering
  export const categories = [
    "Electronics",
    "Computers",
    "Smart Home",
    "Wearable Technology",
    "Cell Phones & Accessories"
  ];

  // Brands for filtering
 export const brands = [
    "Apple",
    "Samsung",
    "Sony",
    "Logitech",
    "Amazon",
    "Microsoft",
    "Google",
    "LG",
    "Bose"
  ];

 // Sort products
  export function sortProducts(sortOption:string, filteredProducts: Product[]){
    return [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'reviews': return b.reviewCount - a.reviewCount;
        default: return 0; // relevance - keep original order
      }
    });
  }

   // Price formatter
  export function formatPrice(price:number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

import { Category } from "@/app/markets/CategorySection";

// Sample data
export const categories: Category[] = [
  { id: 1, name: 'Electronics', icon: '📱' },
  { id: 2, name: 'Fashion', icon: '👕' },
  { id: 3, name: 'Home & Garden', icon: '🏠' },
  { id: 4, name: 'Sports', icon: '⚽' },
  { id: 5, name: 'Toys & Games', icon: '🎮' },
  { id: 6, name: 'Beauty', icon: '💄' },
  { id: 7, name: 'Automotive', icon: '🚗' },
  { id: 8, name: 'Books', icon: '📚' },
];

export const markets = [
  { id: 1, name: 'United States', flag: '🇺🇸' },
  { id: 2, name: 'Europe', flag: '🇪🇺' },
  { id: 3, name: 'Asia', flag: '🌏' },
  { id: 4, name: 'Local Sellers', flag: '🏪' },
];

export const deals = [
  { id: 1, name: 'Flash Deal: 50% Off Electronics', image: '/api/placeholder/400/200' },
  { id: 2, name: 'Clearance Sale: Fashion', image: '/api/placeholder/400/200' },
  { id: 3, name: 'Buy One Get One Free: Home Goods', image: '/api/placeholder/400/200' },
];


// Root component: ProductsPage.tsx
'use client'
import SearchBar from '@/components/layout/search/SearchBar';
import ViewToggle from '@/components/layout/search/ViewToggle';
import ProductsSection from '@/components/product/ProductsSection';
import ProductTypeFilter from '@/components/ui/FilterPanel'; // Import our new filter component

import { sortProducts } from '@/demoData/Products';
import { products } from '@/demoData/Products2';
import { Product } from '@/types/Products';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  
  
  // State management
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(
    searchParams.get('view') === 'list' ? 'list' : 'grid'
  );
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  
  // Core filter state
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get('q') || ''
  );
  const [sortOption, setSortOption] = useState<string>(
    searchParams.get('sort') || 'relevance'
  );
  
  // Prepare filters object for our new filter component
  const getFiltersFromParams = () => {
    const filters: Record<string, string | string[] | undefined> = {};
    
    // Handle price range
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    if (minPrice) filters.minPrice = minPrice;
    if (maxPrice) filters.maxPrice = maxPrice;
    
    // Handle categories
    const categories = searchParams.get('categories');
    if (categories) filters.categories = categories.split(',');
    
    // Handle rating
    const rating = searchParams.get('rating');
    if (rating) filters.rating = rating;
    
    // Handle brand
    const brand = searchParams.get('brand');
    if (brand) filters.brand = brand;
    
    // Handle tags/product types
    const tags = searchParams.getAll('tag');
    if (tags.length > 0) filters.tag = tags;
    
    // Handle platform
    const platform = searchParams.get('platform');
    if (platform) filters.platform = platform;
    
    // Handle availability
    const availability = searchParams.get('availability');
    if (availability) filters.availability = availability;
    
    // Handle shipping
    const shipping = searchParams.get('shipping');
    if (shipping) filters.shipping = shipping;
    
    // Handle deals
    const deal = searchParams.get('deal');
    if (deal) filters.deal = deal;
    
    return filters;
  };
  
  const filters = getFiltersFromParams();
  
  // Filter product data based on all filter criteria
  const filteredProducts = products.filter((p: Product) => {
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filter by category
    const categoryFilters = searchParams.get('categories')?.split(',') || [];
    const matchesCategory = categoryFilters.length === 0 || 
      categoryFilters.includes(p.category);
    
    // Filter by price range
    const minPrice = parseInt(searchParams.get('minPrice') || '0');
    const maxPrice = parseInt(searchParams.get('maxPrice') || '1000');
    const matchesPrice = p.price >= minPrice && p.price <= maxPrice;
    
    // Filter by rating
    const ratingFilter = parseInt(searchParams.get('rating') || '0');
    const matchesRating = ratingFilter === 0 || p.rating >= ratingFilter;
    
    // Filter by brand
    const brandFilter = searchParams.get('brand');
    const matchesBrand = !brandFilter || p.brand.toLowerCase() === brandFilter.toLowerCase();
    
    // Filter by tags/product types
    const tagFilters = searchParams.getAll('tag');
    const matchesTags = tagFilters.length === 0 || 
      tagFilters.some(tag => p.tags.includes(tag));
    
    // Filter by platform
    const platformFilter = searchParams.get('platform');
    const matchesPlatform = !platformFilter || 
      p.platform.toLowerCase() === platformFilter.toLowerCase();
    
    // Filter by availability
    const availabilityFilter = searchParams.get('availability');
    const matchesAvailability = !availabilityFilter || 
      (availabilityFilter === 'in-stock' && p.available) ||
      (availabilityFilter === 'low-stock' && p.available && (p.stock !== undefined && p.stock < 10)) ||
      (availabilityFilter === 'pre-order' && !p.available);
    
    // Filter by shipping
    const shippingFilter = searchParams.get('shipping');
    const matchesShipping = !shippingFilter || 
      (shippingFilter === 'free-shipping' && p.freeShipping);
    
    // Filter by deals
    const dealFilter = searchParams.get('deal');
    const matchesDeal = !dealFilter || 
      (dealFilter === 'todays-deals' && p.discount) ||
      (dealFilter === 'best-price' && p.bestPrice);
    
    return matchesSearch && matchesCategory && matchesPrice && 
           matchesRating && matchesBrand && matchesTags && 
           matchesPlatform && matchesAvailability && matchesShipping && 
           matchesDeal;
  });

  const sortedProducts = sortProducts(sortOption, filteredProducts);

  // Clear all filters by navigating to base URL

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-6 px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home &gt; Electronics &gt; All Electronics
        </div>

        {/* Search Bar Component */}
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        {/* Title and controls */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Electronics & Accessories</h1>
          
          {/* View Toggle Component */}
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <ViewToggle 
              viewMode={viewMode} 
              setViewMode={setViewMode} 
              setIsFilterVisible={setIsFilterVisible}
              isFilterVisible={isFilterVisible}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Type Filter Component - replacing the old FilterPanel */}
          <div className={`${isFilterVisible ? 'block' : 'hidden'} md:block`}>
            <ProductTypeFilter
              filters={filters}
              categorySlug=""
            />
          </div>

          {/* Products Display Component */}
          <ProductsSection 
            products={sortedProducts}
          />
        </div>
      </div>
    </div>
  );
}

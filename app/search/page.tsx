// Root component: ProductsPage.tsx
'use client'
import SearchBar from '@/components/layout/search/SearchBar';
import ViewToggle from '@/components/layout/search/ViewToggle';
import ProductsSection from '@/components/product/ProductsSection';
import ProductTypeFilter from '@/components/ui/FilterPanel'; // Import our new filter component

import { sortProducts } from '@/demoData/Products';
import { products } from '@/demoData/Products2';
import { Product } from '@/types/Products';
import { filterProducts, getFiltersFromSearchParams } from '@/utily/FilterPanel';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const filters = getFiltersFromSearchParams(searchParams);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(
    searchParams.get('view') === 'list' ? 'list' : 'grid'
  );
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const [searchQuery, setSearchQuery] = useState(filters.searchQuery || '');
  const [sortOption, setSortOption] = useState<string>(filters.sort || 'relevance');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  const handleFiltersChange = (filters: Record<string, string | string[]>) => {
    const filtered = filterProducts(filters);
    setFilteredProducts(filtered);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-6 px-4">
        <div className="text-sm text-gray-500 mb-4">Home &gt; Electronics &gt; All Electronics</div>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Electronics & Accessories</h1>
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
          <div className={`${isFilterVisible ? 'block' : 'hidden'} md:block`}>
            <ProductTypeFilter products={products} onFiltersChange={handleFiltersChange} />
          </div>

          <ProductsSection products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
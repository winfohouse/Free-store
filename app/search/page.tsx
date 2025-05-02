// Root component: ProductsPage.tsx
'use client'
import SearchBar from '@/components/layout/search/SearchBar';
import ViewToggle from '@/components/layout/search/ViewToggle';
import ProductsSection from '@/components/product/ProductsSection';
import FilterPanel from '@/components/ui/FilterPanel';

import { Product } from '@/types/Products';
import { filterProducts, useProductFilters } from '@/utily/FilterPanel';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const productFilters = useProductFilters();

  const [viewMode, setViewMode] = useState<'grid' | 'list'>(
    searchParams.get('view') === 'list' ? 'list' : 'grid'
  );
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [previousSearchQuery, setPreviousSearchQuery] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState(decodeURIComponent((typeof productFilters.filters.searchQuery === "string") ? productFilters.filters.searchQuery : ''));
  const [sortOption, setSortOption] = useState<string>((typeof productFilters.filters.sort === "string") ? productFilters.filters.sort : 'relevance');

  const [filteredProducts, setFilteredProducts] = useState<Product[]>();

  useEffect(() => {
    if (searchQuery !== previousSearchQuery) {
      productFilters.updateFilter("q", searchQuery);
      setPreviousSearchQuery(searchQuery);
    }
  }, [searchQuery, previousSearchQuery, productFilters]);

  useEffect(() => {
    setFilteredProducts(filterProducts(productFilters.filters, searchQuery));
  }, [productFilters.filters, searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase())
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
          handleSearch={handleSearch}
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
            <FilterPanel {...productFilters} />
          </div>

          <ProductsSection products={filteredProducts ?? []} />
        </div>
      </div>
    </div>
  );
}

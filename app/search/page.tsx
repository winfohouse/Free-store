
// Root component: ProductsPage.tsx
'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { products } from '@/demoData/Products2';
import { sortProducts } from '@/demoData/Products';
import { Product } from '@/demoData/ProductsHendeler';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import ProductsDisplay from './ProductsDisplay';
import ViewToggle from './ViewToggle';

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // State management
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(
    searchParams.get('view') === 'list' ? 'list' : 'grid'
  );
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    parseInt(searchParams.get('minPrice') || '0'),
    parseInt(searchParams.get('maxPrice') || '1000')
  ]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('categories') ? searchParams.get('categories')!.split(',') : ['Electronics']
  );
  const [selectedRating, setSelectedRating] = useState<number>(
    parseInt(searchParams.get('rating') || '0')
  );
  const [sortOption, setSortOption] = useState<string>(
    searchParams.get('sort') || 'relevance'
  );
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get('q') || ''
  );

  // Update URL when filters change
  const updateUrlParams = () => {
    const params = new URLSearchParams();
    
    if (searchQuery) params.set('q', searchQuery);
    if (viewMode !== 'grid') params.set('view', viewMode);
    if (priceRange[0] > 0) params.set('minPrice', priceRange[0].toString());
    if (priceRange[1] < 1000) params.set('maxPrice', priceRange[1].toString());
    if (selectedCategories.length > 0) params.set('categories', selectedCategories.join(','));
    if (selectedRating > 0) params.set('rating', selectedRating.toString());
    if (sortOption !== 'relevance') params.set('sort', sortOption);
    
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Apply URL updates when filters change
  useEffect(() => {
    updateUrlParams();
  }, [searchQuery, viewMode, priceRange, selectedCategories, selectedRating, sortOption]);

  // Filter and sort product data
  const filteredProducts = products.filter((p: Product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchesRating = selectedRating === 0 || p.rating >= selectedRating;
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesPrice && matchesRating && matchesSearch;
  });

  const sortedProducts = sortProducts(sortOption, filteredProducts);

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
    setSelectedRating(0);
    setSortOption('relevance');
  };

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
          {/* Filter Panel Component */}
          <FilterPanel 
            isVisible={isFilterVisible}
            setIsVisible={setIsFilterVisible}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            clearAllFilters={clearAllFilters}
          />

          {/* Products Display Component */}
          <ProductsDisplay 
            products={sortedProducts}
            viewMode={viewMode}
          />
        </div>
      </div>
    </div>
  );
}


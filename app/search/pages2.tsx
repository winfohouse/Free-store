'use client'
import { brands, categories, sortProducts } from '@/demoData/Products';
import { products  } from '@/demoData/Products2';

import { Filter, Grid, List, Sliders, X } from 'lucide-react';
import { useState } from 'react';

import ListProductCard, { renderStars } from './Product';
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/demoData/ProductsHendeler';

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Electronics']);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [sortOption, setSortOption] = useState<string>('relevance');
  const [searchQuery] = useState<string>('');

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


  // Toggle category selection
  const toggleCategory = (category:string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Handle price range change
  const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.max(0, parseInt(e.target.value) || 0);
    setPriceRange([newMin, priceRange[1]]);
  };

  const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(priceRange[0], parseInt(e.target.value) || 0);
    setPriceRange([priceRange[0], newMax]);
  };

  return (
    <div className="bg-gray-100 min-h-screen ">

     {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home &gt; Electronics &gt; All Electronics
        </div>

        {/* Title and controls */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Electronics & Accessories</h1>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <div className="flex items-center space-x-2">
              <span className="text-sm">View:</span>
              <button 
                onClick={() => setViewMode('grid')} 
                className={`p-1 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
              >
                <Grid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')} 
                className={`p-1 rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
              >
                <List size={20} />
              </button>
            </div>
            <div>
              <select 
                className="p-2 border rounded bg-white"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="relevance">Sort by: Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
                <option value="reviews">Most Reviews</option>
              </select>
            </div>
            <button
              className="md:hidden bg-white p-2 rounded border flex items-center"
              onClick={() => setIsFilterVisible(!isFilterVisible)}
            >
              <Filter size={18} className="mr-1" /> 
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Panel */}
          <div className={`${isFilterVisible ? 'block' : 'hidden'} md:block md:w-64 bg-white p-4 rounded-lg shadow`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg flex items-center">
                <Sliders size={18} className="mr-2" /> Filters
              </h2>
              <button onClick={() => setIsFilterVisible(false)} className="md:hidden">
                <X size={18} />
              </button>
            </div>

            {/* Department/Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Department</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="mr-2"
                    />
                    <label htmlFor={`category-${category}`} className="text-sm">{category}</label>
                  </div>
                ))}
              </div>
            </div>


            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 p-2 border rounded"
                  value={priceRange[0]}
                  onChange={handlePriceMinChange}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 p-2 border rounded"
                  value={priceRange[1]}
                  onChange={handlePriceMaxChange}
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Customer Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <input
                      type="radio"
                      id={`rating-${rating}`}
                      name="rating"
                      checked={selectedRating === rating}
                      onChange={() => setSelectedRating(rating)}
                      className="mr-2"
                    />
                    <label htmlFor={`rating-${rating}`} className="flex items-center">
                      {renderStars(rating)}
                      <span className="text-sm ml-1">& Up</span>
                    </label>
                  </div>
                ))}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="rating-any"
                    name="rating"
                    checked={selectedRating === 0}
                    onChange={() => setSelectedRating(0)}
                    className="mr-2"
                  />
                  <label htmlFor="rating-any" className="text-sm">Any Rating</label>
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Brand</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center">
                    <input type="checkbox" id={`brand-${brand}`} className="mr-2" />
                    <label htmlFor={`brand-${brand}`} className="text-sm">{brand}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Deal Type Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Deals & Discounts</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="deal-today" className="mr-2" />
                  <label htmlFor="deal-today" className="text-sm">Today&apos;s Deals</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="deal-discount" className="mr-2" />
                  <label htmlFor="deal-discount" className="text-sm">Discounted Items</label>
                </div>
              </div>
            </div>

            {/* Shipping Options */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Shipping Options</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="prime" className="mr-2" />
                  <label htmlFor="prime" className="text-sm flex items-center">
                    <span className="text-blue-500 font-bold mr-1">Prime</span>
                    Eligible
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="free-shipping" className="mr-2" />
                  <label htmlFor="free-shipping" className="text-sm">Free Shipping</label>
                </div>
              </div>
            </div>

            <button className="w-full bg-gray-200 p-2 rounded text-sm">Clear All Filters</button>
          </div>

          {/* Products Grid/List */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold">No products found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
              </div>
            ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                  <div className="space-y-4">
                    {sortedProducts.map((product) => (
                     <ListProductCard key={product.id} {...product} />
                    ))}
                  </div>
                )}

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-1">
                <button className="px-4 py-2 border rounded bg-gray-100">Previous</button>
                <button className="px-4 py-2 border rounded bg-blue-500 text-white">1</button>
                <button className="px-4 py-2 border rounded">2</button>
                <button className="px-4 py-2 border rounded">3</button>
                <button className="px-4 py-2 border rounded">...</button>
                <button className="px-4 py-2 border rounded">10</button>
                <button className="px-4 py-2 border rounded bg-gray-100">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>

       </div>
  );
}

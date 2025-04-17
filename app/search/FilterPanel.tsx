// FilterPanel.tsx
import { Dispatch, SetStateAction } from 'react';
import { brands, categories } from '@/demoData/Products';
import { Sliders, X } from 'lucide-react';
import { renderStars } from './Product';

interface FilterPanelProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  priceRange: [number, number];
  setPriceRange: Dispatch<SetStateAction<[number, number]>>;
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
  selectedRating: number;
  setSelectedRating: Dispatch<SetStateAction<number>>;
  clearAllFilters: () => void;
}

export default function FilterPanel({
  isVisible,
  setIsVisible,
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  selectedRating,
  setSelectedRating,
  clearAllFilters
}: FilterPanelProps) {
  // Toggle category selection
  const toggleCategory = (category: string) => {
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
    <div className={`${isVisible ? 'block' : 'hidden'} md:block md:w-64 bg-white p-4 rounded-lg shadow`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg flex items-center">
          <Sliders size={18} className="mr-2" /> Filters
        </h2>
        <button onClick={() => setIsVisible(false)} className="md:hidden">
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

      <button 
        className="w-full bg-gray-200 p-2 rounded text-sm"
        onClick={clearAllFilters}
      >
        Clear All Filters
      </button>
    </div>
  );
}


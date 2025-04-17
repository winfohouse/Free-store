
import { ChevronDown, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface FilterSidebarProps {
  filters: Record<string, string | string[] | undefined>;
  categorySlug: string;
}

export default function FilterSidebar({ filters, categorySlug }: FilterSidebarProps) {
  // State for expanded filter sections
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    brand: true,
    rating: true,
    features: false,
    availability: true,
  });

  // Toggle a section's expanded state
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Create a URL with a filter added/removed
  const getFilterUrl = (key: string, value: string) => {
    const params = new URLSearchParams();
    
    // Copy existing filters
    for (const [filterKey, filterValue] of Object.entries(filters)) {
      if (filterKey !== 'page') { // Reset page when applying filters
        if (filterKey !== key) {
          // Keep other filters as-is
          if (Array.isArray(filterValue)) {
            filterValue.forEach(v => params.append(filterKey, v));
          } else if (filterValue) {
            params.append(filterKey, filterValue);
          }
        } else if (Array.isArray(filterValue)) {
          // For array values (like multiple brands)
          if (filterValue.includes(value)) {
            // Remove this value
            filterValue.filter(v => v !== value).forEach(v => params.append(filterKey, v));
          } else {
            // Add this value while keeping existing ones
            filterValue.forEach(v => params.append(filterKey, v));
            params.append(filterKey, value);
          }
        }
      }
    }
    
    // Handle adding a new filter that wasn't present before
    if (!filters[key]) {
      params.append(key, value);
    } else if (!Array.isArray(filters[key])) {
      // Toggle single value
      if (filters[key] !== value) {
        params.append(key, value);
      }
    }
    
    return `/category/${categorySlug}?${params.toString()}`;
  };

  // Check if a filter value is active
  const isFilterActive = (key: string, value: string) => {
    const filter = filters[key];
    if (!filter) return false;
    if (Array.isArray(filter)) return filter.includes(value);
    return filter === value;
  };

  // Clear all filters
  const clearAllFiltersUrl = `/category/${categorySlug}`;

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Link 
          href={clearAllFiltersUrl}
          className="text-sm text-blue-600 hover:underline"
        >
          Clear All
        </Link>
      </div>

      {/* Active filters */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-2">Active Filters:</div>
        <div className="flex flex-wrap gap-2">
          {Object.entries(filters).flatMap(([key, value]) => {
            if (key === 'page') return [];
            
            if (Array.isArray(value)) {
              return value.map(v => (
                <Link
                  key={`${key}-${v}`}
                  href={getFilterUrl(key, v)}
                  className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  <span>{key}: {v}</span>
                  <X size={12} className="ml-1" />
                </Link>
              ));
            }
            
            return value ? [(
              <Link
                key={`${key}-${value}`}
                href={getFilterUrl(key, value)}
                className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                <span>{key}: {value}</span>
                <X size={12} className="ml-1" />
              </Link>
            )] : [];
          })}
          {Object.keys(filters).filter(k => k !== 'page').length === 0 && (
            <span className="text-sm text-gray-400 italic">None</span>
          )}
        </div>
      </div>

      {/* Price range filter */}
      <div className="mb-4 border-b pb-4">
        <button 
          onClick={() => toggleSection('price')}
          className="flex justify-between items-center w-full font-medium mb-2"
        >
          <span>Price Range</span>
          <ChevronDown 
            size={18} 
            className={`transform transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {expandedSections.price && (
          <div className="space-y-2">
            {['Under $25', '$25 - $50', '$50 - $100', '$100 - $200', 'Over $200'].map(range => {
              const rangeValue = range.toLowerCase().replace(/\s/g, '-');
              return (
                <div key={range} className="flex items-center">
                  <Link
                    href={getFilterUrl('price', rangeValue)}
                    className={`flex items-center w-full text-sm py-1 ${isFilterActive('price', rangeValue) ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                  >
                    <div className={`w-4 h-4 rounded-sm border mr-2 flex items-center justify-center ${isFilterActive('price', rangeValue) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                      {isFilterActive('price', rangeValue) && (
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                      )}
                    </div>
                    {range}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Brand filter */}
      <div className="mb-4 border-b pb-4">
        <button 
          onClick={() => toggleSection('brand')}
          className="flex justify-between items-center w-full font-medium mb-2"
        >
          <span>Brand</span>
          <ChevronDown 
            size={18} 
            className={`transform transition-transform ${expandedSections.brand ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {expandedSections.brand && (
          <div className="space-y-2">
            {['Apple', 'Samsung', 'Sony', 'Google', 'Microsoft'].map(brand => (
              <div key={brand} className="flex items-center">
                <Link
                  href={getFilterUrl('brand', brand.toLowerCase())}
                  className={`flex items-center w-full text-sm py-1 ${isFilterActive('brand', brand.toLowerCase()) ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                >
                  <div className={`w-4 h-4 rounded-sm border mr-2 flex items-center justify-center ${isFilterActive('brand', brand.toLowerCase()) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                    {isFilterActive('brand', brand.toLowerCase()) && (
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    )}
                  </div>
                  {brand}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Rating filter */}
      <div className="mb-4 border-b pb-4">
        <button 
          onClick={() => toggleSection('rating')}
          className="flex justify-between items-center w-full font-medium mb-2"
        >
          <span>Customer Rating</span>
          <ChevronDown 
            size={18} 
            className={`transform transition-transform ${expandedSections.rating ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {expandedSections.rating && (
          <div className="space-y-2">
            {[4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center">
                <Link
                  href={getFilterUrl('rating', `${rating}`)}
                  className={`flex items-center w-full text-sm py-1 ${isFilterActive('rating', `${rating}`) ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                >
                  <div className={`w-4 h-4 rounded-sm border mr-2 flex items-center justify-center ${isFilterActive('rating', `${rating}`) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                    {isFilterActive('rating', `${rating}`) && (
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    )}
                  </div>
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1">& Up</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Features filter */}
      <div className="mb-4 border-b pb-4">
        <button 
          onClick={() => toggleSection('features')}
          className="flex justify-between items-center w-full font-medium mb-2"
        >
          <span>Features</span>
          <ChevronDown 
            size={18} 
            className={`transform transition-transform ${expandedSections.features ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {expandedSections.features && (
          <div className="space-y-2">
            {['Free Shipping', 'On Sale', 'Best Seller', 'New Arrivals'].map(feature => (
              <div key={feature} className="flex items-center">
                <Link
                  href={getFilterUrl('feature', feature.toLowerCase().replace(/\s/g, '-'))}
                  className={`flex items-center w-full text-sm py-1 ${isFilterActive('feature', feature.toLowerCase().replace(/\s/g, '-')) ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                >
                  <div className={`w-4 h-4 rounded-sm border mr-2 flex items-center justify-center ${isFilterActive('feature', feature.toLowerCase().replace(/\s/g, '-')) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                    {isFilterActive('feature', feature.toLowerCase().replace(/\s/g, '-')) && (
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    )}
                  </div>
                  {feature}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Availability filter */}
      <div className="mb-4">
        <button 
          onClick={() => toggleSection('availability')}
          className="flex justify-between items-center w-full font-medium mb-2"
        >
          <span>Availability</span>
          <ChevronDown 
            size={18} 
            className={`transform transition-transform ${expandedSections.availability ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {expandedSections.availability && (
          <div className="space-y-2">
            {['In Stock', 'Out of Stock'].map(status => (
              <div key={status} className="flex items-center">
                <Link
                  href={getFilterUrl('availability', status.toLowerCase().replace(/\s/g, '-'))}
                  className={`flex items-center w-full text-sm py-1 ${isFilterActive('availability', status.toLowerCase().replace(/\s/g, '-')) ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                >
                  <div className={`w-4 h-4 rounded-sm border mr-2 flex items-center justify-center ${isFilterActive('availability', status.toLowerCase().replace(/\s/g, '-')) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                    {isFilterActive('availability', status.toLowerCase().replace(/\s/g, '-')) && (
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    )}
                  </div>
                  {status}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

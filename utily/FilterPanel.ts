// hooks/useFilters.ts
"use client"
import { useState, useEffect } from 'react';
import { useSearchParams, ReadonlyURLSearchParams } from 'next/navigation';
import { Product } from '@/types/Products';
import { brands, categories, platforms, products, tags } from '@/demoData/Products2';

export type FilterOption = {
  label: string;
  value: string;
};

export type FilterSectionData = {
  id: string;
  title: string;
  options: FilterOption[];
};


// Generate filter sections from product data
const mapOptions = (items: string[]) =>
  items.map(item => ({ label: item, value: item.toLowerCase() }));

const generateRangeOptions = (
  min: number,
  max: number,
  step: number,
  labelFormatter: (start: number, end: number | null) => string,
  valueFormatter: (start: number, end: number | null) => string
) => {
  const options = [];
  for (let i = min; i < max; i += step) {
    const end = i + step;
    if (end >= max) {
      options.push({
        label: labelFormatter(i, null),
        value: valueFormatter(i, null),
      });
    } else {
      options.push({
        label: labelFormatter(i, end),
        value: valueFormatter(i, end),
      });
    }
  }
  return options;
};

export const generateFilterSections = (): FilterSectionData[] => [
  {
    id: 'discount',
    title: 'Discount',
    options: generateRangeOptions(
      0,    // min
      70,   // max
      10,   // stape
      (start, end) => (end ? `${start}% - ${end}%` : `${start}% & Above`),
      (start, end) => (end ? `${start}_${end}` : `${start}_plus`)
    )
  },
  {
    id: 'price',
    title: 'Price Range',
    options: generateRangeOptions(
      0,    // minPrice
      250,  // maxPrice
      50,   // stape
      (start, end) => (end ? `$${start} - $${end}` : `Over $${start}`),
      (start, end) => (end ? `${start}_${end}` : `over_${start}`)
    )
  },
  {
    id: 'category',
    title: 'Category',
    options: mapOptions(categories)
  },
  {
    id: 'platform',
    title: 'Platform',
    options: mapOptions(platforms)
  },
  {
    id: 'brand',
    title: 'Brand',
    options: mapOptions(brands)
  },
  {
    id: 'rating',
    title: 'Rating',
    options: [
      { label: '4★ & Above', value: '4_and_up' },
      { label: '3★ & Above', value: '3_and_up' },
      { label: '2★ & Above', value: '2_and_up' }
    ]
  },
  {
    id: 'shipping',
    title: 'Shipping',
    options: [{ label: 'Free Shipping', value: 'true' }]
  },
  {
    id: 'tags',
    title: 'Tags',
    options: mapOptions(tags)
  },
  {
    id: 'availability',
    title: 'Availability',
    options: [
      { label: 'In Stock', value: 'true' },
      { label: 'Stock Out', value: 'false' }
    ]
  }
];

// Main hook for managing filters
export const useProductFilters = () => {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});
  const filterSections = generateFilterSections();

  // Initialize expanded sections
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    filterSections.reduce((acc, section) => ({
      ...acc,
      [section.id]: ['price', 'brand', 'rating', 'platform', 'tags', 'availability', 'shipping'].includes(section.id)
    }), {})
  );

  // Initialize filters from URL
  useEffect(() => {
    const initialFilters: Record<string, string | string[]> = {};
    // Process URL query into filters object
    searchParams.forEach((value, key) => {
      if (key !== 'page' && value) {
        initialFilters[key] = value;
      }
    });
    setFilters(initialFilters);
  }, [searchParams]);

  // Toggle a section's expanded state
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Update filters
  const updateFilter  = (key: string, value: string)  => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };

      if (!newFilters[key]) {
        // Add new filter
        newFilters[key] = value;
      } else if (Array.isArray(newFilters[key])) {
        // Toggle array value
        const valuesArray = newFilters[key] as string[];
        if (valuesArray.includes(value)) {
          // Remove value
          newFilters[key] = valuesArray.filter(v => v !== value);
          if ((newFilters[key] as string[]).length === 0) {
            delete newFilters[key];
          }
        } else {
          // Add value
          newFilters[key] = [...valuesArray, value];
        }
      } else if (newFilters[key] === value) {
        // Remove single value if it's the same (toggle off)
        delete newFilters[key];
      } else {
        // Replace single value with new value
        newFilters[key] = value;
      }
      console.log("newFilters",newFilters)
      return newFilters;
    });
  };

  const removeFilter = (key: string) => {
    setFilters(prev => {
      const { [key]: removed, ...rest } = prev;
      return rest;
    });
  };

  const clearAllFilters = () => setFilters({});
  return {
    filters,
    expandedSections,
    filterSections,
    updateFilter,
    toggleSection,
    removeFilter,
    clearAllFilters,
  };
};

export const filterProducts = (
  filters: Record<string, string | string[]>,
  searchParam: string = ''
): Product[] => {
  if (Object.keys(filters).length === 0 && !searchParam) return products;

  return products.filter(product => {
    const titleMatch = !searchParam || product.title.toLowerCase().includes(searchParam.toLowerCase());
    if (!titleMatch) return false;

    for (const [key, value] of Object.entries(filters)) {
      if (!applyFilter(key, value, product)) return false;
    }

    return true;
  });
};

const applyFilter = (key: string, value: string | string[], product: Product): boolean => {
  switch (key) {
    case 'price':
      return filterByPrice(value as string, product.price);
    case 'discount':
      return filterByDiscount(value as string, product.discount ?? undefined);
    case 'rating':
      return filterByRating(value as string, product.rating);
    case 'brand':
      return product.brand.toLowerCase() === (value as string).toLowerCase();
    case 'category':
      return product.category.toLowerCase() === (value as string).toLowerCase();
    case 'platform':
      return product.platform.toLowerCase() === (value as string).toLowerCase();
    case 'tags':
      return filterByTags(value, product.tags);
    case 'availability':
      const inStock = product.stock !== undefined ? product.stock > 0 : product.available === true;
      return String(inStock) === value;
    case 'shipping':
      return String(product.freeShipping) === value;
    default:
      return true;
  }
};

const parseRange = (range: string): [number, number | null] => {
  const [start, end] = range.includes('_plus')
    ? [parseInt(range.split('_')[0]), null]
    : range.split('_').map(Number);
  return [start, end ?? null];
};

const filterByPrice = (range: string, price: number): boolean => {
  const [min, max] = parseRange(range);
  if (max === null) return price > min;
  return price >= min && price <= max;
};

const filterByDiscount = (range: string, discount: string | undefined): boolean => {
  if (!discount) return false;
  const value = parseFloat(discount.replace('%', ''));
  const [min, max] = parseRange(range);
  if (max === null) return value > min;
  return value >= min && value <= max;
};

const filterByRating = (range: string, rating: number): boolean => {
  const min = parseInt(range[0]);
  return rating >= min;
};

const filterByTags = (filterTags: string | string[], productTags: string[]): boolean => {
  const tags = Array.isArray(filterTags) ? filterTags : [filterTags];
  const lowerTags = productTags.map(tag => tag.toLowerCase());
  return tags.every(tag => lowerTags.includes(tag.toLowerCase()));
};

export type Filters = {
  searchQuery: string,
  sort: string,
  minPrice: string,
  maxPrice: string,
  categories: string[],
  rating: string,
  brand: string,
  tags: string[],
  platform: string,
  availability: string,
  shipping: string,
  deal: string,
}

export const getFiltersFromSearchParams = (searchParams: ReadonlyURLSearchParams): Filters => ({
  searchQuery: searchParams.get('q') || '',
  sort: searchParams.get('sort') || '',
  minPrice: searchParams.get('minPrice') || '',
  maxPrice: searchParams.get('maxPrice') || '',
  categories: searchParams.get('categories')?.split(',') || [],
  rating: searchParams.get('rating') || '',
  brand: searchParams.get('brand') || '',
  tags: searchParams.getAll('tag') || [],
  platform: searchParams.get('platform') || '',
  availability: searchParams.get('availability') || '',
  shipping: searchParams.get('shipping') || '',
  deal: searchParams.get('deal') || '',
});


// Function to remove duplicate products
export const removeDuplicateProducts = (products: Product[]) => {
  // Use a Map to track unique products by ID
  const uniqueProductsMap = new Map();

  // Loop through all products
  products.forEach(product => {
    // If this ID hasn't been seen yet, add it to our map
    if (!uniqueProductsMap.has(product.id)) {
      uniqueProductsMap.set(product.id, product);
    }
  });

  // Convert the Map values back to an array
  return Array.from(uniqueProductsMap.values());
};



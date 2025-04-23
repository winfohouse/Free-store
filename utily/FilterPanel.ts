// hooks/useFilters.ts
import { useState, useEffect } from 'react';
import { useSearchParams , ReadonlyURLSearchParams} from 'next/navigation';
import { Product } from '@/types/Products';
import { products } from '@/demoData/Products2';

export type FilterOption = {
  label: string;
  value: string;
};

export type FilterSectionData = {
  id: string;
  title: string;
  options: FilterOption[];
};

// Extract unique values helper function
export const extractUniqueValues = (products: Product[], field: keyof Product) => {
  const valuesSet = new Set<string>();

  products.forEach(product => {
    if (Array.isArray(product[field])) {
      (product[field] as string[]).forEach(value => valuesSet.add(value));
    } else if (typeof product[field] === 'string') {
      valuesSet.add(product[field] as string);
    }
  });

  return Array.from(valuesSet);
};

// Generate filter sections from product data
export const generateFilterSections = (products: Product[]): FilterSectionData[] => {
  // Extract all available tags, platforms, and brands for filters
  const tags = extractUniqueValues(products, 'tags');
  const platforms = extractUniqueValues(products, 'platform');
  const brands = extractUniqueValues(products, 'brand');

  return [
    {
      id: 'discount',
      title: 'Discount',
      options: [
        { label: '0% - 5%', value: '0_5' },
        { label: '5% - 10%', value: '5_10' },
        { label: '10% - 20%', value: '10_20' },
        { label: '20% - 30%', value: '20_30' },
        { label: '30% - 50%', value: '30_50' },
        { label: '50% & Above', value: '50_plus' }
      ]
    },
    {
      id: 'platform',
      title: 'Platform',
      options: platforms.map(platform => ({ label: platform, value: platform.toLowerCase() }))
    },
    {
      id: 'price',
      title: 'Price Range',
      options: [
        { label: 'Under $25', value: 'under_25' },
        { label: '$25 - $50', value: '25_50' },
        { label: '$50 - $100', value: '50_100' },
        { label: '$100 - $200', value: '100_200' },
        { label: 'Over $200', value: 'over_200' }
      ]
    },
    {
      id: 'brand',
      title: 'Brand',
      options: brands.map(brand => ({ label: brand, value: brand.toLowerCase() }))
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
      options: [
        { label: 'Free Shipping', value: 'true' },
      ]
    },
    {
      id: 'tags',
      title: 'Tags',
      options: tags.map(tag => ({ label: tag, value: tag.toLowerCase() }))
    },
    {
      id: 'availability',
      title: 'Availability',
      options: [
        { label: 'In Stock', value: 'true' },
        { label: 'Stock Out', value: 'false' },
      ]
    },
  ];
}

// Main hook for managing filters
export const useProductFilters = (products: Product[]) => {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});
  const filterSections = generateFilterSections(products);

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
  const updateFilter = (key: string, value: string) => {
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

export const filterProducts = (filters: Record<string, string | string[]>): Product[] => {
  if (Object.keys(filters).length === 0) return products;

  return products.filter(product => {
    for (const [key, value] of Object.entries(filters)) {
      if (key === 'price') {
        const price = product.price;
        if (value === 'under_25' && price >= 25) return false;
        if (value === '25_50' && (price < 25 || price > 50)) return false;
        if (value === '50_100' && (price < 50 || price > 100)) return false;
        if (value === '100_200' && (price < 100 || price > 200)) return false;
        if (value === 'over_200' && price <= 200) return false;
      } else if (key === 'discount') {
        if (!product.discount) return false;
        const discountValue = parseFloat(product.discount.replace('%', ''));
        if (value === '0_5' && (discountValue < 0 || discountValue > 5)) return false;
        if (value === '5_10' && (discountValue <= 5 || discountValue > 10)) return false;
        if (value === '10_20' && (discountValue <= 10 || discountValue > 20)) return false;
        if (value === '20_30' && (discountValue <= 20 || discountValue > 30)) return false;
        if (value === '30_50' && (discountValue <= 30 || discountValue > 50)) return false;
        if (value === '50_plus' && discountValue <= 50) return false;
      } else if (key === 'rating') {
        const rating = product.rating;
        if (value === '4_and_up' && rating < 4) return false;
        if (value === '3_and_up' && rating < 3) return false;
        if (value === '2_and_up' && rating < 2) return false;
      } else if (key === 'brand') {
        if (product.brand.toLowerCase() !== (value as string).toLowerCase()) return false;
      } else if (key === 'platform') {
        if (product.platform.toLowerCase() !== (value as string).toLowerCase()) return false;
      } else if (key === 'tags') {
        const productTags = product.tags.map(tag => tag.toLowerCase());
        if (Array.isArray(value)) {
          if (!value.every(tag => productTags.includes(tag.toLowerCase()))) return false;
        } else {
          if (!productTags.includes((value as string).toLowerCase())) return false;
        }
      } else if (key === 'availability') {
        const inStock = product.stock !== undefined ? product.stock > 0 : product.available === true;
        if (String(inStock) !== value) return false;
      } else if (key === 'shipping') {
        if (String(product.freeShipping) !== value) return false;
      }
    }
    return true;
  });
};

export const getFiltersFromSearchParams = (searchParams: ReadonlyURLSearchParams) => {
  const filters: Record<string, string | string[]> = {};

  if (searchParams.get('q')) filters.searchQuery = searchParams.get('q')!;
  if (searchParams.get('sort')) filters.sort = searchParams.get('sort')!;
  if (searchParams.get('minPrice')) filters.minPrice = searchParams.get('minPrice')!;
  if (searchParams.get('maxPrice')) filters.maxPrice = searchParams.get('maxPrice')!;
  if (searchParams.get('categories')) filters.categories = searchParams.get('categories')!.split(',');
  if (searchParams.get('rating')) filters.rating = searchParams.get('rating')!;
  if (searchParams.get('brand')) filters.brand = searchParams.get('brand')!;
  if (searchParams.getAll('tag').length > 0) filters.tags = searchParams.getAll('tag');
  if (searchParams.get('platform')) filters.platform = searchParams.get('platform')!;
  if (searchParams.get('availability')) filters.availability = searchParams.get('availability')!;
  if (searchParams.get('shipping')) filters.shipping = searchParams.get('shipping')!;
  if (searchParams.get('deal')) filters.deal = searchParams.get('deal')!;

  return filters;
};
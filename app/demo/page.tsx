'use client'
import ProductsSection from '@/components/product/ProductsSection';
import ProductTypeFilter from '@/components/ui/FilterPanel';
import { products } from '@/demoData/Products2';
import { useProductFilters } from '@/utily/FilterPanel';
import { useEffect, useState } from 'react';
import Clog from './log';

export default function ProductPage() {
  // Option 1: Using the filter component and handling filtered data yourself
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const handleFiltersChange = (filters: Record<string, string | string[]>) => {
    // Apply filters to products based on filter criteria
    // This is a simplified example - you'd implement more complex filtering logic
    if (Object.keys(filters).length === 0) {
      setFilteredProducts(products);
      return;
    }
    
    // Filter products based on selected criteria
    const filtered = products.filter(product => {
      // Implement your filtering logic here
      // This is just an example for the brand filter
      if (filters.brand && product.brand.toLowerCase() !== filters.brand) {
        return false;
      }
      return true;
    });
    
    setFilteredProducts(filtered);
  };

  // Option 2: Using the hook directly to get access to filtered products and filter data
  const {
    filters,
    filteredProducts: hookFilteredProducts,
    clearAllFilters,
    // You have access to all filter data and actions
  } = useProductFilters(products);
  
  // Example of accessing filter data outside the component
  useEffect(() => {
    // You can use the filtered products or filter state here
    Clog(filters);
    Clog(hookFilteredProducts.length);
    
    // You could sync this with URL parameters, send to analytics, etc.
  }, [filters, hookFilteredProducts]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          {/* Option 1: Using the ProductTypeFilter component */}
          <ProductTypeFilter 
            products={products}
            onFiltersChange={handleFiltersChange} 
          />
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="mb-4">
            <p>Showing {filteredProducts.length} products</p>
          </div>
          
          {/* Display products */}
          <ProductsSection products={filteredProducts} />
          
          {/* Alternative: Use the filtered products directly from the hook */}
          {/* <ProductGrid products={hookFilteredProducts} /> */}
        </div>
      </div>
    </div>
  );
}

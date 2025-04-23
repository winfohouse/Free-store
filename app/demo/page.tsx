'use client'
import ProductsSection from '@/components/product/ProductsSection';
import ProductTypeFilter from '@/components/ui/FilterPanel';
import { useState } from 'react';
import { products } from '@/demoData/Products2'; // Adjust path if needed
import { Product } from '@/types/Products';
import { filterProducts } from '@/utily/FilterPanel';

export default function ProductPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleFiltersChange = (filters: Record<string, string | string[]>) => {
    const filtered = filterProducts(filters);
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <ProductTypeFilter
            products={products}
            onFiltersChange={handleFiltersChange}
          />
        </div>

        <div className="w-full md:w-3/4">
          <div className="mb-4">
            <p>Showing {filteredProducts.length} products</p>
          </div>

          <ProductsSection products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

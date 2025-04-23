"use client"
import ProductCard from "@/components/product/ProductCard";
import { categories } from "@/demoData/Market";
import { Product } from "@/types/Products";
import { removeDuplicateProducts } from "@/utily/FilterPanel";
import { useEffect, useState } from "react";

type props ={ products: Product[], };

export default function ProductsSection({products}: props) {
  const [filter, setFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(removeDuplicateProducts(products));

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProducts(removeDuplicateProducts(products));
    } else {
      setFilteredProducts(removeDuplicateProducts(products.filter(product => product.category === filter)));
    }
  }, [filter, products]);

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-xl font-bold mb-2 md:mb-0">Popular Products</h2>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1 rounded-full text-sm ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            {categories.slice(0, 5).map(category => (
              <button
                key={category.id}
                className={`px-3 py-1 rounded-full text-sm ${filter === category.name ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setFilter(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-full">
            View More Products
          </button>
        </div>
      </div>
    </div>
  );
};



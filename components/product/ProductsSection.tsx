"use client"
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/Products";
import { removeDuplicateProducts } from "@/utily/FilterPanel";

type props = { products: Product[], };

export default function ProductsSection({ products }: props) {
  const filteredProducts = (removeDuplicateProducts(products));

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => <ProductCard key={product.id} {...product} />)
          }
          {(filteredProducts.length == 0) && <h2 className="px-6 py-2 text-center text-gray-100">No Product Found!</h2>}
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




// 4. ProductGrid component - components/category/ProductGrid.tsx
'use client'
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/demoData/ProductsHendeler";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}


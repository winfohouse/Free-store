
// ProductsDisplay.tsx
import ProductCard from '@/components/product/ProductCard';
import { Product } from '@/demoData/ProductsHendeler';
import Pagination from './Pagination';
import ListProductCard from './Product';

interface ProductsDisplayProps {
  products: Product[];
  viewMode: 'grid' | 'list';
}

export default function ProductsDisplay({ products, viewMode }: ProductsDisplayProps) {
  return (
    <div className="flex-1">
      {products.length === 0 ? (
        <div className="bg-white p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold">No products found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <ListProductCard key={product.id} {...product} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <Pagination />
    </div>
  );
}


import ProductCard from "@/components/product/ProductCard";
import { products } from "@/demoData/Products2";
import { getProductsBy } from "@/utily/products";
import Link from "next/link";

export default function CategoryPage() {
  const productByCategories = getProductsBy(products, "category")


  return (
    <div className="container mx-auto px-4 py-8">
      {
        productByCategories.map(group => (
          <div className="py-6" key={group.category}>
            <div className="container mx-auto px-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold mb-4">{group.category}</h2>
                <Link className="bold text-blue-600" href={`./${group.category}/`}>See More</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {group.products.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}


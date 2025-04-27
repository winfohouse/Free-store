"use client"
import ProductCard from '@/components/product/ProductCard';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import { categoryLinks, products } from '@/demoData/Products2';
import { getProductsBy } from '@/utily/products';
import Link from 'next/link';

// Generate breadcrumb trail
type props = { params: { category: string } }

export default function CategoryPage({ params }: props) {

  // Get category slug from URL parameters
  const { category } = params
  const categoryName = categoryLinks.find((name) => name.slug == category);
  // Get products for this category
  const categoryProducts = products.filter(product => encodeURIComponent(product.category).toLowerCase() == category.toLowerCase());

  const productByPlatforms = getProductsBy(categoryProducts, "platform")

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-6 px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <BreadcrumbNav
            items={[
              { label: "Home", href: "/" },
              { label: "categories", href: "/categories" },
              { label: categoryName?.name ?? "" , href: null }  // Current page
            ]}
          />
        </div>

        {/* Title and controls */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-bold capitalize">{categoryName?.name}</h1>
        </div>

        <div className="flex flex-col gap-6">

          {/* Products Display Component */}
          {
            productByPlatforms.map(group => (
              <div className="py-6" key={group.platform}>
                <div className="container mx-auto px-4">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold mb-4">{group.platform}</h2>
                    <Link className="bold text-blue-600" href={`/marteks/${group.platform}/`}>See More</Link>
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
          {(categoryProducts.length == 0) && <div className='container flex-col'>
            <h2 className='text-2xl font-bold mb-10'>No Category Found</h2>
            <br />
            {getProductsBy(products, "platform").map(group => (
              <div className="py-6" key={group.platform}>
                <div className="container mx-auto px-4">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold mb-4">{group.platform}</h2>
                    <Link className="bold text-blue-600" href={`/markets/${group.platform}/`}>See More</Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {group.products.map(product => (
                      <ProductCard key={product.id} {...product} />
                    ))
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>}
        </div>
      </div>
    </div>
  );
}

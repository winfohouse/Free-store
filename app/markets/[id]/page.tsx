"use client"
import ProductCard from '@/components/product/ProductCard';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import { platformsLinks, products } from '@/demoData/Products2';
import { getProductsBy } from '@/utily/products';
import Link from 'next/link';

// Generate breadcrumb trail
type props = { params: { id: string } }

export default function MarketsPage({ params }: props) {

  // Get category slug from URL parameters
  const { id } = params
  const platformName = platformsLinks.find((name) => name.slug == id);
  // Get products for this category
  const categoryProducts = products.filter(product => encodeURIComponent(product.platform)  == id);

  const productByCategory = getProductsBy(categoryProducts, "category")
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-6 px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <BreadcrumbNav
            items={[
              { label: "Home", href: "/" },
              { label: "markets", href: "/markets" },
              { label: platformName?.name ?? "" , href: null }  // Current page
            ]}
          />
        </div>

        {/* Title and controls */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{platformName?.name}</h1>
        </div>

        <div className="flex flex-col gap-6">

          {/* Products Display Component */}
          {
            productByCategory.map(group => (
              <div className="py-6" key={group.category}>
                <div className="container mx-auto px-4">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold mb-4">{group.category}</h2>
                    <Link className="bold text-blue-600" href={`/marteks/${group.category}/`}>See More</Link>
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
            {getProductsBy(products, "category").map(group => (
              <div className="py-6" key={group.category}>
                <div className="container mx-auto px-4">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold mb-4">{group.category}</h2>
                    <Link className="bold text-blue-600" href={`/markets/${group.category}/`}>See More</Link>
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

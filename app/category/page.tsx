'use client'
import { FilterIcon, Grid3x3, LayoutGrid } from "lucide-react";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import ProductCard from "@/components/product/ProductCard";
import FilterSidebar from "@/components/ui/FilterSidebar";
import Loading from "@/components/ui/Loding";
import Pagination from "@/components/ui/Paginatio";
import { products } from "@/demoData/Products2";

// This would be replaced with your actual data fetching function
function getCategoryData() {
  // Fetch category data and products based on slug, page, and filters
  // This is a placeholder - replace with your actual data fetching logic 
  const categories = [...new Set(products.map(p => p.category))];
  return {
    categories,
    pagination: {
      currentPage: 1,
      totalPages: 10,
      totalItems: products.length,
    }
  };
}

export default function CategoryPage() {
  const categoryData = getCategoryData()
  if (!categoryData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      {/*<div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight size={16} className="mx-2" />
        <Link href="/categories" className="hover:text-blue-600">Categories</Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-900 font-medium">{category.name}</span>
      </div>*/}

      {/* Category Header */}
      {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 flex items-center">
        <div className="w-24 h-24 relative mr-6 hidden sm:block">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">{category.name}</h1>
          <p className="text-gray-600">{category.description}</p>
          <div className="mt-2 text-sm text-gray-500">{category.productCount} products</div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8"> */}
      {/* Filter Sidebar */}
      <div className="lg:w-1/4">
        <FilterSidebar filters={{brand:""}} categorySlug={""} />
      </div>

      {/* Product Grid */}
      <div className="lg:w-3/4">
        {/* Sorting and view options */}
        <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b">
          <div className="mb-2 sm:mb-0">
            <span className="text-gray-500">Showing {categoryData.pagination.currentPage * 12 - 11}-{Math.min(categoryData.pagination.currentPage * 12, categoryData.pagination.totalItems)} of {categoryData.pagination.totalItems} products</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-sm text-gray-500">Sort by:</label>
              <select
                id="sort"
                className="border rounded py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button className="p-1 rounded text-gray-500 hover:bg-gray-100">
                <Grid3x3 size={20} />
              </button>
              <button className="p-1 rounded bg-blue-50 text-blue-600">
                <LayoutGrid size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded">
            <FilterIcon size={16} />
            <span>Filter Products</span>
          </button>
        </div>

        {/* Product grid */}
        <Suspense fallback={<Loading message="Loading products..." />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </Suspense>

        {/* Pagination */}
        {categoryData.pagination.totalPages > 1 && (
          <div className="mt-8">
            <Pagination
              currentPage={categoryData.pagination.currentPage}
              totalPages={categoryData.pagination.totalPages}
              baseUrl={`/category/`}
              searchParams={{brand: ""}}
            />
          </div>
        )}
      </div>
    </div>
  );
}

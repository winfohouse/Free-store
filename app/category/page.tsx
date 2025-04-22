// 1. Main CategoryPage component - pages/category/index.tsx or app/category/page.tsx
'use client'

import CategoryHeader from "@/components/layout/category/CategoryHeader";
import CategoryLayout from "@/components/layout/category/CategoryLayout";
import MobileFilterButton from "@/components/layout/category/MobileFilterButton";
import ProductGrid from "@/components/layout/category/ProductGrid";
import SortingControls from "@/components/layout/category/SortingControls";
import BreadcrumbNav from "@/components/ui/BreadcrumbNav";
import Loading from "@/components/ui/Loading";
import Pagination from "@/components/ui/Pagination";
import { products } from "@/demoData/Products2";
import { notFound, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FilterPanel from "@/components/ui/FilterPanel"



// This would be replaced with your actual data fetching function
function getCategoryData() {
  // Fetch category data and products based on slug, page, and filters
  // This is a placeholder - replace with your actual data fetching logic 
  const categories = [...new Set(products.map(p => p.category))];
  return {
    category: {
      name: "Electronics",
      description: "All electronic products and accessories",
      image: "/images/categories/electronics.jpg",
      productCount: products.length
    },
    products: products,
    categories,
    pagination: {
      currentPage: 1,
      totalPages: 10,
      totalItems: products.length,
    }
  };
}

export default function CategoryPage() {
  const searchParams = useSearchParams();

  // Prepare filters object for our new filter component
  const getFiltersFromParams = () => {
    const filters: Record<string, string | string[] | undefined> = {};

    // Handle price range
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    if (minPrice) filters.minPrice = minPrice;
    if (maxPrice) filters.maxPrice = maxPrice;

    // Handle categories
    const categories = searchParams.get('categories');
    if (categories) filters.categories = categories.split(',');

    // Handle rating
    const rating = searchParams.get('rating');
    if (rating) filters.rating = rating;

    // Handle brand
    const brand = searchParams.get('brand');
    if (brand) filters.brand = brand;

    // Handle tags/product types
    const tags = searchParams.getAll('tag');
    if (tags.length > 0) filters.tag = tags;

    // Handle platform
    const platform = searchParams.get('platform');
    if (platform) filters.platform = platform;

    // Handle availability
    const availability = searchParams.get('availability');
    if (availability) filters.availability = availability;

    // Handle shipping
    const shipping = searchParams.get('shipping');
    if (shipping) filters.shipping = shipping;


    return filters;
  };

  const categoryData = getCategoryData();
  if (!categoryData) {
    notFound();
  }


  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: categoryData.category.name, href: null }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbNav items={breadcrumbItems} />

      <CategoryHeader category={categoryData.category} />

      <CategoryLayout
        sidebar={
          <FilterPanel
            onFiltersChange={()=>{}}
          />
        }
        content={
          <>
            <SortingControls
              currentPage={categoryData.pagination.currentPage}
              pageSize={12}
              totalItems={categoryData.pagination.totalItems}
            />

            <MobileFilterButton />

            <Suspense fallback={<Loading message="Loading products..." />}>
              <ProductGrid products={categoryData.products} />
            </Suspense>

            {categoryData.pagination.totalPages > 1 && (
              <div className="mt-8">
                <Pagination
                  currentPage={categoryData.pagination.currentPage}
                  totalPages={categoryData.pagination.totalPages}
                  baseUrl={`/category/`}
                  searchParams={{ brand: "" }}
                />
              </div>
            )}
          </>
        }
      />
    </div>
  );
}


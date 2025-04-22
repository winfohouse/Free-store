// 9. MobileFilterDrawer component - components/category/MobileFilterDrawer.tsx
'use client'
import { useState } from "react";
import FilterSidebar from "@/components/ui/FilterSidebar";
import MobileFilterButton from "@/components/category/MobileFilterButton";

export default function MobileFilterDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <MobileFilterButton onOpen={openDrawer} />
      
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeDrawer} />
          <div className="fixed inset-0 z-50 lg:hidden">
            <FilterSidebar 
              filters={{brand:""}} 
              categorySlug={""} 
              onClose={closeDrawer}
              isMobileVisible 
            />
          </div>
        </>
      )}
    </>
  );
}

// Updated CategoryPage to use MobileFilterDrawer
export function CategoryPageWithMobileDrawer() {
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
          <FilterSidebar filters={{brand:""}} categorySlug={""} />
        }
        content={
          <>
            <SortingControls 
              currentPage={categoryData.pagination.currentPage}
              pageSize={12}
              totalItems={categoryData.pagination.totalItems}
            />
            
            <MobileFilterDrawer />
            
            <Suspense fallback={<Loading message="Loading products..." />}>
              <ProductGrid products={categoryData.products} />
            </Suspense>
            
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
          </>
        }
      />
    </div>
  );
}

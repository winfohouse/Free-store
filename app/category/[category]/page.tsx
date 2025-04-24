"use client"
import { products } from '@/demoData/Products2';
import { extractUniqueValues } from '@/utily/FilterPanel';
import { getProductsBy } from '@/utily/products';

// Get friendly category name
const getCategoryName = (categorySlug: string): string => {
  const categoryMap: Record<string, string> = {
    'electronics': 'Electronics & Accessories',
    'computers': 'Computers & Laptops',
    'phones': 'Phones & Tablets',
    'cameras': 'Cameras & Photography',
    'audio': 'Audio & Headphones',
    'wearables': 'Wearables & Smartwatches',
    // Add more mappings as needed
  };

  return categoryMap[categorySlug.toLowerCase()] ||
    categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
};

// Generate breadcrumb trail
const getBreadcrumb = (categorySlug: string): string => {
  return `Home > ${getCategoryName(categorySlug)}`;
};
type props = { params: { category: string } }

export default function CategoryPage({ params }: props) {

  // Get category slug from URL parameters
  const { category } = params
  const categoryName = getCategoryName(category)

  const categories = extractUniqueValues(products, 'category'); 
  // Get products for this category
  const categoryProducts = getProductsBy(products, "category").filter(product => product.category.toLowerCase() === categoryName.toLowerCase());
console.log(categoryProducts, categories);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-6 px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          {getBreadcrumb(category)}
        </div>
        {/* Title and controls */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{categoryName}</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
            
          {/* Products Display Component */}
          
          {(categoryProducts.length == 0) && <h2 className='text-2xl font-bold'>No Category Found</h2>}
        </div>
      </div>
    </div>
  );
}

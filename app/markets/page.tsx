'use client';
import CategorySection from "@/components/layout/markets/CategorySection";
import DealsSection from "@/components/layout/markets/DealsSection";
import { MarketplaceSection } from "@/components/layout/markets/MarketplaceSection";
import ProductsSection from "@/components/product/ProductsSection";
import { categories, deals, markets } from "@/demoData/Market";
import { products } from "@/demoData/Products2";
import { Search } from "lucide-react";


const MarketplaceHomepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to MarketWorld</h1>
          <p className="text-lg mb-8">Discover millions of products from sellers around the globe</p>
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <input 
                type="text"
                placeholder="What are you looking for today?"
                className="w-full py-3 px-6 rounded-full text-black"
              />
              <button className="absolute right-2 top-2 bg-blue-700 text-white p-1.5 rounded-full">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <CategorySection categories={categories} />
      <DealsSection deals={deals} />
      <MarketplaceSection markets={markets} />
      <ProductsSection products={products} />
     
    </div>
  );
};

export default MarketplaceHomepage;

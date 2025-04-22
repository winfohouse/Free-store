import ProductCard from "@/components/product/ProductCard";
import ExpandedEcommerceNav from "@/components/ui/ExpandedEcommerceNav";
import Hero from "@/components/ui/Hero";
import Testimonials from "@/components/ui/Testimonials";
import { products } from "@/demoData/Products2";
import { Product } from "@/types/Products";
import { BarChart2, Check, Link, Search, ShoppingCart } from "lucide-react";

// Mock data - in a real app, this would come from an API
export default function HomePage() {
  return (

    <main className="flex-grow">
      <Hero />

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Any Product</h3>
              <p className="text-gray-600">Find exactly what you need with our powerful search.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart2 className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find the Best of the Best</h3>
              <p className="text-gray-60">Products from All Over the worlds</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compare & Choose</h3>
              <p className="text-gray-600">Compare prices, ratings, and shipping options.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Buy & Save</h3>
              <p className="text-gray-600">Purchase more and save money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Platforms */}
      <ExpandedEcommerceNav />

      {/* Product Demos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Trending Products</h2>
            <Link href="/products/trending" className="text-blue-600 hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product: Product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of smart shoppers who compare before they buy. Find the best deals across all your favorite online stores.
          </p>
          <button className="bg-white text-blue-600" />
        </div>
      </section>

    </main>


  );
};

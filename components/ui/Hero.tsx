import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Compare Products Across Amazon, Alibaba, Flipkart & More
            </h1>
            <p className="text-xl mb-6">
              Find the best deals in one place. Save time, save money.
            </p>
            <Link 
              href="/products/trending" 
              className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition"
            >
              Start Exploring
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full p-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600">
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Laptop</span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Smartphone</span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Headphones</span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Smart Watch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

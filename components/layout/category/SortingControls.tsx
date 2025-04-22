
// 5. SortingControls component - components/category/SortingControls.tsx
'use client'
import { useState } from "react";
import { Grid3x3, LayoutGrid } from "lucide-react";

interface SortingControlsProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}

export default function SortingControls({ currentPage, pageSize, totalItems }: SortingControlsProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Calculate the range of items being shown
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);
  
  return (
    <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b">
      <div className="mb-2 sm:mb-0">
        <span className="text-gray-500">
          Showing {startItem}-{endItem} of {totalItems} products
        </span>
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
          <button 
            onClick={() => setViewMode('list')}
            className={`p-1 rounded ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <Grid3x3 size={20} />
          </button>
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-1 rounded ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <LayoutGrid size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}


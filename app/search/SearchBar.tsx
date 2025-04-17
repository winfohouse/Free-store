// SearchBar.tsx
import { Search } from 'lucide-react';
import { Dispatch, SetStateAction, FormEvent } from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  sortOption: string;
  setSortOption: Dispatch<SetStateAction<string>>;
}

export default function SearchBar({ 
  searchQuery, 
  setSearchQuery, 
  sortOption, 
  setSortOption 
}: SearchBarProps) {
  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full py-2 px-4 pr-10 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="absolute right-0 top-0 h-full px-3 flex items-center">
            <Search size={20} className="text-gray-500" />
          </button>
        </div>
        <select 
          className="p-2 border border-l-0 rounded-r-lg bg-white"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="relevance">Sort by: Relevance</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rating</option>
          <option value="reviews">Most Reviews</option>
        </select>
      </form>
    </div>
  );
}


  // viewToggle.tsx
import { Grid, List, Filter } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  setViewMode: Dispatch<SetStateAction<'grid' | 'list'>>;
  isFilterVisible: boolean;
  setIsFilterVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ViewToggle({ 
  viewMode, 
  setViewMode,
  isFilterVisible,
  setIsFilterVisible
}: ViewToggleProps) {
  return (
    <>
      <div className="flex items-center space-x-2">
        <span className="text-sm">View:</span>
        <button 
          onClick={() => setViewMode('grid')} 
          className={`p-1 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
        >
          <Grid size={20} />
        </button>
        <button 
          onClick={() => setViewMode('list')} 
          className={`p-1 rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
        >
          <List size={20} />
        </button>
      </div>
      <button
        className="md:hidden bg-white p-2 rounded border flex items-center"
        onClick={() => setIsFilterVisible(!isFilterVisible)}
      >
        <Filter size={18} className="mr-1" /> 
        Filters
      </button>
    </>
  );
}

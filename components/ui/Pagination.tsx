import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Pagination({ currentPage, totalPages, baseUrl, searchParams }: PaginationProps) {
  // Create URL with updated page parameter
  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams();
    
    // Add all existing search params except page
    for (const [key, value] of Object.entries(searchParams)) {
      if (key !== 'page' && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach(v => params.append(key, v));
        } else {
          params.append(key, value);
        }
      }
    }
    
    // Add the page parameter
    params.set('page', pageNumber.toString());
    
    return `${baseUrl}?${params.toString()}`;
  };

  // Calculate page range to display
  const getPageRange = () => {
    const range = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are less than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      // Always include first page
      range.push(1);
      
      // Calculate middle range
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if at boundaries
      if (currentPage <= 2) {
        endPage = 4;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3;
      }
      
      // Add ellipsis if needed
      if (startPage > 2) {
        range.push('ellipsis-start');
      }
      
      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        range.push(i);
      }
      
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        range.push('ellipsis-end');
      }
      
      // Always include last page
      range.push(totalPages);
    }
    
    return range;
  };

  const pageRange = getPageRange();

  return (
    <div className="flex justify-center items-center">
      {/* Previous page button */}
      <Link 
        href={currentPage > 1 ? createPageUrl(currentPage - 1) : '#'}
        className={`flex items-center mr-2 px-3 py-2 rounded-md ${
          currentPage > 1 
            ? 'text-gray-700 hover:bg-gray-100' 
            : 'text-gray-400 cursor-not-allowed'
        }`}
        aria-disabled={currentPage <= 1}
        tabIndex={currentPage <= 1 ? -1 : undefined}
      >
        <ChevronLeft size={16} className="mr-1" />
        <span className="hidden sm:inline">Previous</span>
      </Link>
      
      {/* Page numbers */}
      <div className="flex items-center">
        {pageRange.map((page, index) => {
          // Render ellipsis
          if (page === 'ellipsis-start' || page === 'ellipsis-end') {
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                ...
              </span>
            );
          }
          
          // Render page number
          return (
            <Link
              key={`page-${page}`}
              href={createPageUrl(page as number)}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </Link>
          );
        })}
      </div>
      
      {/* Next page button */}
      <Link 
        href={currentPage < totalPages ? createPageUrl(currentPage + 1) : '#'}
        className={`flex items-center ml-2 px-3 py-2 rounded-md ${
          currentPage < totalPages 
            ? 'text-gray-700 hover:bg-gray-100' 
            : 'text-gray-400 cursor-not-allowed'
        }`}
        aria-disabled={currentPage >= totalPages}
        tabIndex={currentPage >= totalPages ? -1 : undefined}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} className="ml-1" />
      </Link>
    </div>
  );
}

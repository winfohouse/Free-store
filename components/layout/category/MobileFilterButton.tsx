
// 6. MobileFilterButton component - components/category/MobileFilterButton.tsx
'use client'
import { FilterIcon } from "lucide-react";
import { useState } from "react";

interface MobileFilterButtonProps {
  onOpen?: () => void;
}

export default function MobileFilterButton({ onOpen }: MobileFilterButtonProps) {
  const handleClick = () => {
    if (onOpen) {
      onOpen();
    }
  };

  return (
    <div className="lg:hidden mb-4">
      <button 
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded"
      >
        <FilterIcon size={16} />
        <span>Filter Products</span>
      </button>
    </div>
  );
}


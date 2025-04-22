
// 3. CategoryLayout component - components/category/CategoryLayout.tsx
'use client'
import { ReactNode } from "react";

interface CategoryLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export default function CategoryLayout({ sidebar, content }: CategoryLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filter Sidebar */}
      <div className="lg:w-1/4">
        {sidebar}
      </div>

      {/* Product Grid */}
      <div className="lg:w-3/4">
        {content}
      </div>
    </div>
  );
}


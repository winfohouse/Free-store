// 7. BreadcrumbNav component - components/ui/BreadcrumbNav.tsx
'use client'
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string | null;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export default function breadcrumbnav({ items }: BreadcrumbNavProps) {
  return (
    <div className="flex items-center text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight size={16} className="mx-2" />}
          
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-600">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}


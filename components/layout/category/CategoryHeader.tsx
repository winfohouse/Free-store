
// 2. CategoryHeader component - components/category/CategoryHeader.tsx
'use client'
import Image from "next/image";

interface CategoryHeaderProps {
  category: {
    name: string;
    description: string;
    image: string;
    productCount: number;
  };
}

export default function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 flex items-center">
      <div className="w-24 h-24 relative mr-6 hidden sm:block">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">{category.name}</h1>
        <p className="text-gray-600">{category.description}</p>
        <div className="mt-2 text-sm text-gray-500">{category.productCount} products</div>
      </div>
    </div>
  );
}


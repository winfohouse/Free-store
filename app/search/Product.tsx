import { formatPrice } from "@/demoData/Products";
import { Product } from "@/demoData/ProductsHendeler";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

export default function ListProductCard(product:Product){
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex">
        <div className="w-48 h-48 bg-gray-100 flex items-center justify-center relative">
          <Image src={product.images[0]} alt={product.title} className="max-h-full" />
          {product.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {product.discount}
            </div>
          )}
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between">
            <h3 className="font-medium mb-2">{product.title}</h3>
            <button className="text-gray-400 hover:text-red-500">
              <Heart size={20} />
            </button>
          </div>
          <div className="flex items-center mb-2">
            {renderStars(product.rating)}
            <span className="text-sm text-gray-500 ml-1">({product.reviewCount})</span>
          </div>
          <div className="text-sm text-gray-600 mb-3">
            Category: {product.category} | Tags: {product.tags.join(', ')}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold text-xl">{formatPrice(product.price)}</div>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded font-medium">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

)
}

// Render 5 stars with filled or unfilled based on rating
export const renderStars = (rating:number) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

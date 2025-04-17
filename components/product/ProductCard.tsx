'use client'
import { discountPercent, Product } from '@/demoData/ProductsHendeler';
import { Award, Eye, Heart, ShoppingCart, Star, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export type ProductsProps = { products : Product[], }
type FrequentlyBoughtTogetherProps ={ image: string, alt: string, price: number };

export default function ProductCard(product: Product ) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuickView = () => {
    // Quick view implementation
  };

  const handleAddToCart = () => {
    // Add to cart implementation
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    // Wishlist toggle implementation
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative block">
        <div className="aspect-video relative overflow-hidden group">
          {/*<img
            src={product.images[0] || 'https://placehold.co/400'}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            priority={false}
            quality={80}
          />*/}
          <img
            src='https://placehold.co/400'
            alt={product.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />

          {/* Overlay with quick actions that appears on hover */}
          <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={handleQuickView}
              className="bg-white text-gray-800 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-colors"
              aria-label="Quick view"
            >
              <Eye size={18} />
            </button>
            <button 
              onClick={handleAddToCart}
              className="bg-white text-gray-800 rounded-full p-2 hover:bg-blue-500 hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
            <button 
              onClick={handleWishlistToggle}
              className={`rounded-full p-2 transition-colors ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-800 hover:bg-red-500 hover:text-white'}`}
              aria-label="Add to wishlist"
            >
              <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.discount && (
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center">
              <Tag size={12} className="mr-1" />
              <span>{product.discount}</span>
            </div>
          )}

          {product.bestPrice && (
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center">
              <Award size={12} className="mr-1" />
              <span>Best Price</span>
            </div>
          )}

          {product.freeShipping && (
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
              Free Shipping
            </div>
          )}
        </div>

        {/* Platform badge */}
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <img
            src={product.platformIcon || '/placeholder-icon.png'}
            alt={product.platform}
            width={24}
            height={24}
          />
        </div>

        {/* Stock status */}
        {!product.available && (
          <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
            <div className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
              Out of Stock
            </div>
          </div>
        )}
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>

        <Link href={`/products/${product.id}`} className="group">
          <h3 className="font-semibold mb-1 line-clamp-2 h-12 group-hover:text-blue-600 transition-colors" title={product.title}>
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center mb-2 mt-auto">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16}
                className={`${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-1">({product.reviewCount})</span>
        </div>

        <div className="flex justify-between items-center mt-1">
          <div>
            {product.originalPrice ? (
              <div className="flex items-center">
                <span className="text-red-500 font-bold">${product.price.toFixed(2)}</span>
                <span className="text-gray-400 line-through text-sm ml-2">${product.originalPrice.toFixed(2)}</span>
                <span className="ml-2 text-xs bg-red-100 text-red-700 px-1 rounded">
                  -{discountPercent(product.originalPrice, product.price)}%
                </span>
              </div>
            ) : (
                <span className="text-gray-900 font-bold">${product.price.toFixed(2)}</span>
              )}
          </div>

          <div className="text-sm text-blue-600">
            {product.platform}
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <Link 
            href={`/product/${product.id}`} 
            className="text-blue-600 text-sm font-medium hover:underline flex-grow text-center py-1 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
          >
            View Details
          </Link>
          <button 
            onClick={handleAddToCart}
            className="bg-blue-600 text-white text-sm py-1 px-3 rounded hover:bg-blue-700 transition-colors flex items-center justify-center"
            disabled={!product.available}
          >
            <ShoppingCart size={16} className="mr-1" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function FrequentlyBoughtTogether({image, alt, price}: FrequentlyBoughtTogetherProps) {
  return (
    <div className="w-20 h-20 bg-gray-50 flex flex-col items-center justify-center space-y-4">
      <img
        src={'https://placehold.co/80'}
        alt={alt}
        width={80}
        height={80}
        className="max-h-full max-w-full object-cover"
      />
      <span className="font-bold">${price.toFixed(2)}</span>
    </div>
  )
}

'use client'
import { FrequentlyBoughtTogether } from '@/components/product/ProductCard';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import { products } from '@/demoData/Products2';
import {
  calculateBundlePrice,
  decrementQuantity,
  discountPercent,
  handleAddToCart,
  handleShare,
  incrementQuantity,
} from '@/demoData/ProductsHendeler';
import { Product } from '@/types/Products';
import {
  ArrowLeft,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Heart,
  Share2,
  Shield,
  ShoppingCart,
  Star,
  Truck
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type props ={params: {id: string}} 
export default function ProductDetailPage({params} :props) {
  const productId = params.id; 
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  useEffect(() => {
    if (!productId) return;

    const loadProduct = async () => {
      setLoading(true);
      try {
        const data = products.find(p => p.id == productId);
        data && setProduct(data);

        // Set default selections
        if (data?.variants?.length) {
          setSelectedVariant(0);
        }
        if (data?.colors?.length) {
          setSelectedColor(0);
        }
      } catch (error) {
        console.error('Failed to load product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
        <p className="text-gray-600 mb-4">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/categories" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft size={16} className="mr-1" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb navigation */}
          <BreadcrumbNav
            items={[
              { label: "Home", href: "/" },
              { label: "categories", href: `/categories/${product.category}` },
              { label: product.title, href: null }  // Current page
            ]}
          />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <img
                src={product.images[activeImageIndex]}
                alt={product.title}
                className="object-contain max-h-[100%] ml-[25%] mr-[25%] bg-gray-400"
              />

              {/* Navigation arrows for images */}
              {product.images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-800 hover:bg-gray-100"
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-800 hover:bg-gray-100"
                    onClick={() => setActiveImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail gallery */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    className={`relative h-16 w-24 border-2 rounded overflow-hidden ${
                      activeImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.title} - Image ${index + 1}`}
                      className="object-contain bg-gray-400 h-full w-full"
                    />
                  </button>
                ))}
              </div>
            )}
            
            {/* Frequently Bought Together */}
            {product.frequentlyBoughtTogether && product.frequentlyBoughtTogether.length > 0 && (
              <div className="p-6 rounded-lg shadow-sm mb-6 mt-12">
                <h2 className="text-lg font-medium mb-4">Frequently Bought Together</h2>

                <div className="flex flex-wrap items-center mb-4">
                  <div className="flex items-center">
                    <FrequentlyBoughtTogether image={product.images[0]} alt={product.title} price={product.price} />
                    <div className="mx-2 text-xl">+</div>
                  </div>

                  {product.frequentlyBoughtTogether.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <FrequentlyBoughtTogether image={item.image} alt={item.name} price={item.price} />
                      {(product.frequentlyBoughtTogether) && (index < product.frequentlyBoughtTogether.length - 1) && (
                        <div className="mx-2 text-xl">+</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="text-sm mb-1">
                    Price for all: <span className="font-bold">${calculateBundlePrice(product).toFixed(2)}</span>
                  </div>
                  <button className="bg-yellow-400 hover:bg-yellow-500 py-1 px-4 rounded-full text-sm">
                    Add all to Cart
                  </button>
                </div>

                <div className="border-t pt-3">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" checked={true} className="mr-2" readOnly />
                      <span>This item: {product.title} <span className="font-bold">${product.price.toFixed(2)}</span></span>
                    </div>

                    {product.frequentlyBoughtTogether.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <input type="checkbox" checked={true} className="mr-2" readOnly />
                        <span>{item.name} </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-500 mr-2">{product.brand}</span>
              <span className="text-sm px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                {product.platform}
              </span>
              {product.bestPrice && (
                <span className="ml-2 text-sm px-2 py-0.5 bg-green-100 text-green-800 rounded flex items-center">
                  <CheckCircle size={12} className="mr-1" />
                  Best Price
                </span>
              )}
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="flex items-center">
                {product.originalPrice ? (
                  <>
                    <span className="text-2xl font-bold text-red-600">${product.price.toFixed(2)}</span>
                    <span className="text-gray-500 line-through text-lg ml-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="ml-2 text-sm bg-red-100 text-red-700 px-2 py-0.5 rounded">
                      -{discountPercent(product.originalPrice, product.price)}%
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                )}
              </div>

              {product.offerEndsAt && (
                <div className="text-sm text-red-600 mt-1">
                  Offer ends: {new Date(product.offerEndsAt).toLocaleDateString()}
                </div>
              )}
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {product.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Short description */}
            {product.description && (
              <p className="text-gray-600 mb-6 line-clamp-3">{product.description}</p>
            )}

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Variants</h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      className={`px-3 py-2 rounded-md border ${
                        selectedVariant === index
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => setSelectedVariant(index)}
                    >
                      {variant.name} - ${variant.price.toFixed(2)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`h-10 w-10 rounded-full border-2 ${
                        selectedColor === index ? 'border-blue-500' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.code }}
                      title={color.name}
                      onClick={() => setSelectedColor(index)}
                      aria-label={`Select ${color.name} color`}
                    ></button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-100"
                  onClick={() => decrementQuantity(quantity)}
                  disabled={quantity <= 1}
                >
                  <ChevronDown size={18} />
                </button>
                <input
                  type="number"
                  className="p-2 w-16 text-center border-t border-b border-gray-300"
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0) {
                      setQuantity(val);
                    }
                  }}
                  min="1"
                  max={product.stock || undefined}
                />
                <button
                  className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-100"
                  onClick={() => incrementQuantity(quantity, product.stock)}
                  disabled={product.stock ? quantity >= product.stock : false}
                >
                  <ChevronUp size={18} />
                </button>
                {product.stock && (
                  <span className="ml-3 text-sm text-gray-500">
                    {product.stock} available
                  </span>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-4 mb-6">
              <button
                className="flex-grow bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors"
                onClick={() => handleAddToCart({
                  productId: product.id,
                  quantity: quantity,
                  selectedVariant: selectedVariant,
                  variants: product.variants,
                  selectedColor: selectedColor,
                  colors: product.colors
                })}
                disabled={!product.available}
              >
                <ShoppingCart size={18} className="mr-2" />
                {product.ctaText || 'Add to Cart'}
              </button>
              <button
                className={`p-3 rounded-md border ${
                  isWishlisted
                  ? 'border-red-500 bg-red-50 text-red-500'
                  : 'border-gray-300 hover:border-gray-400 text-gray-600'
                }`}
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Add to wishlist"
              >
                <Heart fill={isWishlisted ? 'currentColor' : 'none'} size={22} />
              </button>
              <button
                className="p-3 rounded-md border border-gray-300 hover:border-gray-400 text-gray-600"
                onClick={() => handleShare(product.id)}
                aria-label="Share product"
              >
                <Share2 size={22} />
              </button>
            </div>

            {/* Delivery and warranty info */}
            <div className="bg-gray-50 p-4 rounded-md space-y-3">
              {product.freeShipping && (
                <div className="flex items-center text-gray-700">
                  <Truck size={18} className="mr-2 text-green-600" />
                  <span>Free Shipping</span>
                </div>
              )}
              <div className="flex items-center text-gray-700">
                <Shield size={18} className="mr-2 text-blue-600" />
                <span>12 Month Manufacturer Warranty</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <span>Model: {product.model}</span>
                {product.releaseDate && (
                  <>
                    <span className="mx-2">•</span>
                    <span>Released: {new Date(product.releaseDate).toLocaleDateString()}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product details tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                className={`py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'description'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'specifications'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button
                className={`py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'reviews'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({product.reviews?.length || 0})
              </button>
            </nav>
          </div>

          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="mb-4">{product.description}</p>

                {product.features && product.features.length > 0 && (
                  <>
                    <h3 className="text-lg font-medium mb-3">Key Features</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                {product.specifications && product.specifications.length > 0 ? (
                  <div className="border-t border-gray-200">
                    {product.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className={`grid grid-cols-3 py-3 ${
                          index < product.specifications!.length - 1 ? 'border-b border-gray-200' : ''
                        }`}
                      >
                        <dt className="text-sm font-medium text-gray-500">{spec.name}</dt>
                        <dd className="text-sm text-gray-900 col-span-2">{spec.value}</dd>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No specifications available for this product.</p>
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">{review.title}</h4>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mb-2">
                          By {review.author} on {new Date(review.date).toLocaleDateString()}
                        </div>
                        <p className="text-gray-700">{review.content}</p>
                        <div className="flex items-center mt-3 text-sm">
                          <span className="text-gray-500">{review.helpful} people found this helpful</span>
                          <button className="ml-4 text-blue-600 hover:text-blue-800">
                            Was this review helpful?
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No reviews yet for this product.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Similar products */}
        {product.similarProducts && product.similarProducts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.similarProducts.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 w-full bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">{item.name}</h3>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${i < Math.round(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600">${item.price.toFixed(2)}</span>
                      <button className="text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 px-2 py-1 rounded">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

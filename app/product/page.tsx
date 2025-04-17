'use client';
import { useState } from 'react';

import { formatPrice, products } from '@/demoData/Products';
import { ChevronDown, ChevronUp, Heart, MapPin, Share2, Truck } from 'lucide-react';
import { renderStars } from '../amazan/Product';
import { product, SimilarProducts } from './product';
 
export default function AmazonProductPage() {
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState('description');
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(0);

  // Calculate the total price of frequently bought together items
  const calculateBundlePrice = () => {
    const mainProductPrice = product.price;
    const accessoriesPrice = product.frequentlyBoughtTogether.reduce((total, item) => total + item.price, 0);
    return mainProductPrice + accessoriesPrice;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home &gt; Electronics &gt; Cell Phones & Accessories &gt; Smartphones
        </div>

        {/* Product Detail Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col lg:flex-row">
            {/* Product Images */}
            <div className="lg:w-2/5">
              <div className="sticky top-6">
                <div className="flex">
                  {/* Thumbnails */}
                  <div className="w-16 mr-4">
                    {product.images.map((img, index) => (
                      <div 
                        key={index}
                        className={`mb-2 border-2 ${mainImage === index ? 'border-orange-400' : 'border-gray-200'} cursor-pointer`}
                        onClick={() => setMainImage(index)}
                      >
                        <img src={img} alt={`${product.name} - view ${index + 1}`} className="w-full" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Main Image */}
                  <div className="flex-1">
                    <div className="bg-gray-50 flex items-center justify-center h-96">
                      <img 
                        src={product.images[mainImage]} 
                        alt={product.name} 
                        className="max-h-full max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:w-3/5 lg:pl-8 mt-6 lg:mt-0">
              <h1 className="text-xl md:text-2xl font-medium mb-1">{product.name}</h1>
              <div className="text-sm mb-2">
                <span className="text-blue-500 hover:text-orange-400 cursor-pointer">Visit the {product.brand} Store</span>
              </div>
              
              <div className="flex items-center mb-4">
                {renderStars(product.rating)}
                <span className="ml-2 text-blue-500 hover:text-orange-400 cursor-pointer">
                  {product.reviewCount} ratings
                </span>
              </div>
              
              {product.discount && (
                <div className="mb-1">
                  <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">{product.discount}</span>
                </div>
              )}
              
              <div className="mb-4">
                <div className="flex items-end">
                  <span className="text-sm">$</span>
                  <span className="text-3xl font-medium">{Math.floor(product.price)}</span>
                  <span className="text-sm">{(product.price % 1).toFixed(2).substring(1)}</span>
                </div>
                {product.oldPrice && (
                  <div className="text-sm text-gray-500">
                    List Price: <span className="line-through">{formatPrice(product.oldPrice)}</span>
                  </div>
                )}
              </div>
              
              {/* Variants */}
              <div className="mb-6">
                <div className="font-medium mb-2">Size</div>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant, index) => (
                    <button
                      key={index}
                      className={`border-2 px-4 py-2 rounded ${
                        selectedVariant === index ? 'border-orange-400' : 'border-gray-300'
                      }`}
                      onClick={() => setSelectedVariant(index)}
                    >
                      <div className="font-medium">{variant.name}</div>
                      <div className="text-sm">{formatPrice(variant.price)}</div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Colors */}
              <div className="mb-6">
                <div className="font-medium mb-2">Color: {product.colors[0].name}</div>
                <div className="flex space-x-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-10 h-10 rounded-full cursor-pointer ${color.code} border-2 ${
                        index === 0 ? 'border-orange-400' : 'border-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="border-t border-b py-4 mb-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex">
                    <div className="w-24 text-sm text-gray-500">Brand</div>
                    <div>{product.brand}</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 text-sm text-gray-500">Model</div>
                    <div>{product.model}</div>
                  </div>
                  <div className="flex">
                    <div className="w-24 text-sm text-gray-500">Released</div>
                    <div>{product.releaseDate}</div>
                  </div>
                </div>
              </div>
              
              {/* About This Item */}
              <div className="mb-6">
                <h2 className="font-medium text-lg mb-2">About this item</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Purchase Box */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-xl mb-1">{formatPrice(product.price)}</div>
              
              {product.oldPrice && (
                <div className="text-sm text-gray-500 mb-3">
                  List Price: <span className="line-through">{formatPrice(product.oldPrice)}</span>
                </div>
              )}
              
              {product.prime && (
                <div className="flex items-center text-sm mb-3">
                  <span className="text-blue-600 font-bold mr-1">Prime</span> 
                  FREE delivery
                </div>
              )}
              
              <div className="flex items-center text-sm mb-4">
                <MapPin size={16} className="text-gray-600 mr-1" />
                <span>Deliver to United States</span>
              </div>
              
              <div className="text-lg font-medium text-green-600 mb-3">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
              
              <div className="mb-4">
                <label className="text-sm mb-1 block">Quantity:</label>
                <select 
                  className="border rounded p-1 w-20"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full mb-3">
                Add to Cart
              </button>
              
              <button className="w-full bg-orange-400 hover:bg-orange-500 py-2 rounded-full mb-4">
                Buy Now
              </button>
              
              <div className="flex text-sm mb-4">
                <div className="mr-4 cursor-pointer text-blue-500 hover:text-orange-400 flex items-center">
                  <Heart size={18} className="mr-1" /> Add to List
                </div>
                <div className="cursor-pointer text-blue-500 hover:text-orange-400 flex items-center">
                  <Share2 size={18} className="mr-1" /> Share
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="text-sm">
                  <div className="flex items-start mb-2">
                    <Truck size={18} className="mr-2 text-gray-600 mt-1" />
                    <div>
                      <div>FREE delivery <span className="font-bold">{product.arrival}</span></div>
                      <div className="text-gray-600 text-xs">Order within 22 hrs 16 mins</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={18} className="mr-2 text-gray-600 mt-1" />
                    <div>
                      <div>Deliver to United States</div>
                      <div className="text-blue-500 cursor-pointer mt-1">Update location</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Seller Information */}
            <div className="mt-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-sm">
              <div className="mb-2">Sold by <span className="text-blue-500">Apple</span></div>
              <div className="mb-2">Fulfilled by <span className="text-blue-500">Amazon</span></div>
              <div>Return policy: <span className="text-blue-500">Eligible for Return, Refund or Replacement within 30 days</span></div>
            </div>
          </div>
          
          {/* Product Details and Frequently Bought Together */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {/* Frequently Bought Together */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-lg font-medium mb-4">Frequently bought together</h2>
              
              <div className="flex flex-wrap items-center mb-4">
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-gray-50 flex items-center justify-center">
                    <img src={product.images[0]} alt={product.name} className="max-h-full max-w-full" />
                  </div>
                  <div className="mx-2 text-xl">+</div>
                </div>
                
                {product.frequentlyBoughtTogether.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-20 h-20 bg-gray-50 flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="max-h-full max-w-full" />
                    </div>
                    {index < product.frequentlyBoughtTogether.length - 1 && (
                      <div className="mx-2 text-xl">+</div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mb-4">
                <div className="text-sm mb-1">
                  Price for all: <span className="font-bold">{formatPrice(calculateBundlePrice())}</span>
                </div>
                <button className="bg-yellow-400 hover:bg-yellow-500 py-1 px-4 rounded-full text-sm">
                  Add all to Cart
                </button>
              </div>
              
              <div className="border-t pt-3">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" checked={true} className="mr-2" readOnly />
                    <span>This item: {product.name} <span className="font-bold">{formatPrice(product.price)}</span></span>
                  </div>
                  
                  {product.frequentlyBoughtTogether.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <input type="checkbox" checked={true} className="mr-2" readOnly />
                      <span>{item.name} <span className="font-bold">{formatPrice(item.price)}</span></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Product Information */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b">
                <button 
                  className={`p-4 w-full text-left font-medium flex justify-between items-center ${expandedSection === 'description' ? 'bg-gray-50' : ''}`}
                  onClick={() => setExpandedSection(expandedSection === 'description' ? '' : 'description')}
                >
                  <span>Product Description</span>
                  {expandedSection === 'description' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {expandedSection === 'description' && (
                  <div className="px-4 py-3">
                    <p className="text-sm">{product.description}</p>
                  </div>
                )}
              </div>
              
              <div className="border-b">
                <button 
                  className={`p-4 w-full text-left font-medium flex justify-between items-center ${expandedSection === 'details' ? 'bg-gray-50' : ''}`}
                  onClick={() => setExpandedSection(expandedSection === 'details' ? '' : 'details')}
                >
                  <span>Product Information</span>
                  {expandedSection === 'details' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {expandedSection === 'details' && (
                  <div className="px-4 py-3">
                    <table className="w-full text-sm">
                      <tbody>
                        {product.specifications.map((spec, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="py-2 px-2 font-medium w-1/3">{spec.name}</td>
                            <td className="py-2 px-2">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              
              <div>
                <button 
                  className={`p-4 w-full text-left font-medium flex justify-between items-center ${expandedSection === 'reviews' ? 'bg-gray-50' : ''}`}
                  onClick={() => setExpandedSection(expandedSection === 'reviews' ? '' : 'reviews')}
                >
                  <span>Customer Reviews</span>
                  {expandedSection === 'reviews' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {expandedSection === 'reviews' && (
                  <div className="px-4 py-3">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <div className="text-yellow-400 text-3xl font-medium">{product.rating}</div>
                        <div className="flex mt-1">
                          {renderStars(product.rating)}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{product.reviewCount} ratings</div>
                      </div>
                      
                      <div className="flex-1">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <div key={star} className="flex items-center text-sm mb-1">
                            <div className="w-12 text-blue-500 hover:text-orange-400 cursor-pointer">{star} star</div>
                            <div className="w-32 mx-2 bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-yellow-400 h-2.5 rounded-full" 
                                style={{ width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2}%` }}
                              ></div>
                            </div>
                            <div className="text-blue-500 hover:text-orange-400 cursor-pointer">
                              {star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h3 className="font-medium mb-3">Top reviews from the United States</h3>
                      
                      {product.reviews.slice(0, showMoreReviews ? product.reviews.length : 1).map((review, index) => (
                        <div key={index} className={`mb-6 ${index > 0 ? 'border-t pt-4' : ''}`}>
                          <div className="flex items-center mb-1">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm mr-2">
                              {review.author.charAt(0)}
                            </div>
                            <span>{review.author}</span>
                          </div>
                          
                          <div className="flex items-center mb-1">
                            {renderStars(review.rating)}
                            <span className="ml-2 font-medium">{review.title}</span>
                          </div>
                          
                          <div className="text-sm text-gray-500 mb-2">
                            Reviewed on {review.date}
                          </div>
                          
                          <p className="text-sm mb-2">{review.content}</p>
                          
                          <div className="text-sm text-gray-500">
                            {review.helpful} people found this helpful
                          </div>
                          
                          <div className="mt-2">
                            <button className="border border-gray-300 rounded-full px-3 py-1 text-xs">Helpful</button>
                            <span className="text-xs text-blue-500 ml-4 cursor-pointer">Report</span>
                          </div>
                        </div>
                      ))}
                      
                      {!showMoreReviews && product.reviews.length > 1 && (
                        <button 
                          className="text-blue-500 hover:text-orange-400 font-medium"
                          onClick={() => setShowMoreReviews(true)}
                        >
                          See more reviews
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Similar Products */}
            <SimilarProducts products={products}/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

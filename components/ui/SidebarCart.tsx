'use client'  
import { useState, useEffect } from 'react';
import { 
  ShoppingCart, Heart, X, Plus, Minus, Trash2, 
  ArrowRight, ShoppingBag, AlertCircle 
} from 'lucide-react';

/**
 * Sidebar Cart Component
 * Displays cart and wishlist items in a sliding sidebar
 */
type props = {
  isOpen : boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: ( newTab: "cart" | "wishlist") => void;
}
type cartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    color: string;
    inStock: boolean;
    size?: string;
}
type wishlistItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    inStock: boolean;
}

const SidebarCart = ({ 
  isOpen, 
  onClose, 
  activeTab = 'cart',
  onTabChange,
}: props) => {
  // Sample data - in a real app, this would come from context or props
  const [cartItems, setCartItems] = useState<cartItem[]>([
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: 199.99,
      quantity: 1,
      image: "/api/placeholder/80/80",
      color: "Black",
      inStock: true
    },
    {
      id: 2,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      quantity: 2,
      image: "/api/placeholder/80/80",
      color: "Navy Blue",
      size: "M",
      inStock: true
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 149.99,
      quantity: 1,
      image: "/api/placeholder/80/80",
      color: "Silver",
      inStock: false
    }
  ]);

  const [wishlistItems, setWishlistItems] = useState<wishlistItem[]>([
    {
      id: 4,
      name: "Leather Weekend Bag",
      price: 189.99,
      image: "/api/placeholder/80/80",
      inStock: true
    },
    {
      id: 5,
      name: "Wireless Charging Pad",
      price: 39.99,
      image: "/api/placeholder/80/80",
      inStock: true
    }
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Handle quantity changes
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };
  
  // Remove from cart
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // Move from wishlist to cart
  const moveToCart = (id: number) => {
    const item = wishlistItems.find(item => item.id === id);
    if (item) {
      setWishlistItems(wishlistItems.filter(item => item.id !== id));
    }
  };
  
  // Remove from wishlist
  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  // Handle escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <div className="flex gap-4">
            <button 
              onClick={() => onTabChange('cart')}
              className={`flex items-center gap-1 py-2 px-3 rounded-md ${
                activeTab === 'cart' 
                  ? 'bg-blue-100 text-blue-600 font-medium' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ShoppingCart size={18} />
              <span>Cart ({cartItems.length})</span>
            </button>
            
            <button 
              onClick={() => onTabChange('wishlist')}
              className={`flex items-center gap-1 py-2 px-3 rounded-md ${
                activeTab === 'wishlist' 
                  ? 'bg-blue-100 text-blue-600 font-medium' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Heart size={18} />
              <span>Wishlist ({wishlistItems.length})</span>
            </button>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Cart Items */}
        {activeTab === 'cart' && (
          <>
            <div className="px-4 py-3">
              <h2 className="text-lg font-semibold">Your Shopping Cart</h2>
              <p className="text-sm text-gray-500">{cartItems.length} items</p>
            </div>
            
            {/* Cart Item List */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 px-4 text-center">
                  <ShoppingBag size={48} className="text-gray-300 mb-2" />
                  <p className="text-gray-600 font-medium">Your cart is empty</p>
                  <p className="text-sm text-gray-500 mt-1">Add items to your cart to see them here.</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="divide-y">
                  {cartItems.map(item => (
                    <li key={item.id} className="px-4 py-4">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-20 h-20 object-cover rounded-md"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-medium line-clamp-1">{item.name}</h3>
                          
                          <div className="flex flex-wrap gap-x-3 mt-1 text-sm text-gray-500">
                            {item.color && <p>Color: {item.color}</p>}
                            {item.size && <p>Size: {item.size}</p>}
                          </div>
                          
                          {!item.inStock && (
                            <div className="flex items-center mt-1 text-red-600 text-sm">
                              <AlertCircle size={14} className="mr-1" />
                              Out of stock
                            </div>
                          )}
                          
                          <div className="flex justify-between items-center mt-3">
                            <div className="flex items-center border rounded-md">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-1 hover:bg-gray-100"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="px-2">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 hover:bg-gray-100"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-600"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Checkout Section */}
            {cartItems.length > 0 && (
              <div className="border-t mt-auto">
                <div className="px-4 py-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium flex items-center justify-center">
                    Checkout
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                  <button 
                    onClick={onClose}
                    className="w-full mt-2 text-blue-600 hover:bg-blue-50 py-2 rounded-md font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        
        {/* Wishlist Items */}
        {activeTab === 'wishlist' && (
          <>
            <div className="px-4 py-3">
              <h2 className="text-lg font-semibold">Your Wishlist</h2>
              <p className="text-sm text-gray-500">{wishlistItems.length} items</p>
            </div>
            
            {/* Wishlist Item List */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
              {wishlistItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 px-4 text-center">
                  <Heart size={48} className="text-gray-300 mb-2" />
                  <p className="text-gray-600 font-medium">Your wishlist is empty</p>
                  <p className="text-sm text-gray-500 mt-1">Save items you love to your wishlist.</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="divide-y">
                  {wishlistItems.map(item => (
                    <li key={item.id} className="px-4 py-4">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-20 h-20 object-cover rounded-md"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-medium line-clamp-1">{item.name}</h3>
                          <p className="text-blue-600 font-medium mt-1">${item.price.toFixed(2)}</p>
                          
                          {!item.inStock && (
                            <div className="flex items-center mt-1 text-red-600 text-sm">
                              <AlertCircle size={14} className="mr-1" />
                              Out of stock
                            </div>
                          )}
                          
                          <div className="mt-3">
                            <button 
                              onClick={() => moveToCart(item.id)}
                              className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded flex items-center w-full justify-center"
                              disabled={!item.inStock}
                            >
                              <ShoppingCart size={14} className="mr-1" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-gray-400 hover:text-red-600"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SidebarCart;

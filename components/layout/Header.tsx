"use client";

import {
  Bell,
  ChevronDown,
  ChevronRight,
  Heart,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Package,
  Search,
  Settings,
  ShoppingCart,
  User,
  X
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SidebarCart from "../ui/SidebarCart";

// Define types for categories
interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  subcategories?: string[];
}

// Mock categories - replace with your actual data
const categories: Category[] = [
  { id: "electronics", name: "Electronics", icon: <Package size={16} /> },
  { id: "clothing", name: "Clothing", icon: <Package size={16} /> },
  { id: "home", name: "Home & Garden", icon: <Home size={16} /> },
  { id: "sports", name: "Sports", icon: <Package size={16} /> },
  { id: "beauty", name: "Beauty", icon: <Package size={16} /> },
];

const Navbar = () => {
  // State for mobile menu and dropdowns
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // UI state for indicators
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(5);
  const [notificationCount, setNotificationCount] = useState(2);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('cart');

  // Refs for click outside detection
  const accountDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);



  const pathname = usePathname();
  const router = useRouter();

  // Hide navbar on specific routes
  const hiddenRoutes = ["/login", "/signup", "/dashboard"];
  if (hiddenRoutes.includes(pathname as string)) return null;

  // Sample search suggestions
  const popularSearches = [
    "Wireless Earbuds",
    "Smart Watches",
    "Gaming Laptops",
    "4K Monitors",
    "Fitness Trackers"
  ];

  // Simulate search suggestions
  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = popularSearches.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  // Handle sticky header and click outside for dropdowns
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        accountDropdownRef.current &&
        !accountDropdownRef.current.contains(event.target as Node)
      ) {
        setShowAccountDropdown(false);
      }

      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCategoryDropdown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  // Avoid hydration errors
  if (!isMounted) return null;

  const navbarClasses = `transition-all duration-300 ${isSticky ? "sticky top-0 shadow-md z-50 bg-blue-800" : "bg-blue-700"
    } text-white`;

  return (
    <div className={navbarClasses}>
      {/* Top bar with promotions/announcements */}
      <div className="bg-blue-900 text-white py-1 px-4 text-center text-sm">
        <p>Free shipping on orders over $50 | Use code WELCOME10 for 10% off your first order</p>
      </div>

      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <button
              className="mr-3 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>

            <Link href="/" className="text-2xl font-bold">MarketWorld</Link>

            <div className="hidden md:flex place-items-center ml-8 space-x-1 text-center" ref={categoryDropdownRef}>
              <button
                className="px-3 py-2 hover:bg-blue-600 rounded-md flex items-center"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                Categories <ChevronDown size={16} className="ml-1" />
              </button>

              {showCategoryDropdown && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-40">
                  <div className="container mx-auto px-4 py-6 grid grid-cols-4 gap-4 text-black">
                    <div className="col-span-1 border-r">
                      {categories.map(category => (
                        <div
                          key={category.id}
                          className={`py-2 px-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer ${activeCategory === category.id ? 'bg-gray-100' : ''}`}
                          onMouseEnter={() => setActiveCategory(category.id)}
                        >
                          <div className="flex items-center">
                            <span className="mr-2 text-blue-700">{category.icon}</span>
                            <span>{category.name}</span>
                          </div>
                          <ChevronRight size={16} />
                        </div>
                      ))}
                    </div>
                    <div className="col-span-3 px-6">
                      {activeCategory !== null && (
                        <div>
                          <h3 className="font-bold text-lg mb-4">{categories.find(c => c.id === activeCategory)?.name}</h3>
                          <div className="grid grid-cols-3 gap-4">
                            {Array(9).fill(0).map((_, idx) => (
                              <Link key={idx} href={`/category/${activeCategory}/subcategory-${idx + 1}`} className="hover:text-blue-600">
                                Subcategory {idx + 1}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-6 grid grid-cols-4 gap-4">
                            {Array(4).fill(0).map((_, idx) => (
                              <div key={idx} className="bg-gray-50 p-4 rounded">
                                <div className="mb-2 bg-gray-200 h-32 rounded flex items-center justify-center">
                                  <Package size={32} className="text-gray-400" />
                                </div>
                                <p className="font-medium">Featured Item {idx + 1}</p>
                                <p className="text-blue-600">$99.99</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <Link href="/category" className="px-3 py-2 hover:bg-blue-600 rounded-md">Deals</Link>
            </div>
          </div>

          <div className="flex-1 mx-4 hidden md:block relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands, and more..."
                className="w-full py-2 px-4 rounded-lg text-black"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-2 text-gray-500">
                <Search size={20} />
              </button>
            </div>

            {isSearchFocused && searchSuggestions.length > 0 && (
              <div className="absolute w-full bg-white mt-1 rounded-lg shadow-lg z-30 text-black py-2">
                {searchSuggestions.map((suggestion, idx) => (
                  <div key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {suggestion}
                  </div>
                ))}
                <div className="border-t mt-2 pt-2 px-4">
                  <p className="text-sm font-medium">Popular Searches</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {popularSearches.slice(0, 3).map((term, idx) => (
                      <span key={idx} className="bg-gray-100 px-2 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer">
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center relative hover:text-blue-200">
                <Bell size={20} className="mr-1" />
                {notificationCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {notificationCount}
                  </span>
                )}
                <span className="hidden lg:inline">Notifications</span>
              </button>

              <Link href="/wishlist" className="flex items-center relative hover:text-blue-200">
                <Heart size={20} className="mr-1" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {wishlistCount}
                  </span>
                )}
                <span className="hidden lg:inline">Wishlist</span>
              </Link>

              <div className="flex items-center relative hover:text-blue-200" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart size={20} className="mr-1" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
                <span className="hidden lg:inline">Cart</span>
              </div>
              <SidebarCart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                activeTab={activeTab}
                onTabChange={activeTab}
              />

              <div className="relative" ref={accountDropdownRef}>
                <button
                  className="flex items-center hover:text-blue-200"
                  onClick={() => setShowAccountDropdown(!showAccountDropdown)}
                >
                  <User size={20} className="mr-1" />
                  <span className="hidden lg:inline">Account</span>
                  <ChevronDown size={16} className="ml-1" />
                </button>

                {showAccountDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-30 text-black py-2">
                    <div className="px-4 py-3 border-b">
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">sarah.j@example.com</p>
                    </div>
                    <div className="py-1">
                      <Link href="/profile" className=" px-4 py-2 hover:bg-gray-100 flex items-center">
                        <User size={16} className="mr-3 text-gray-500" />
                        <span>My Profile</span>
                      </Link>
                      <Link href="/orders" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                        <Package size={16} className="mr-3 text-gray-500" />
                        <span>My Orders</span>
                      </Link>
                      <Link href="/settings" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                        <Settings size={16} className="mr-3 text-gray-500" />
                        <span>Account Settings</span>
                      </Link>
                      <Link href="/help" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                        <HelpCircle size={16} className="mr-3 text-gray-500" />
                        <span>Help Center</span>
                      </Link>
                    </div>
                    <div className="border-t py-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center text-red-600"
                      >
                        <LogOut size={16} className="mr-3" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex md:hidden space-x-3">
              <button className="relative">
                <Bell size={24} />
                {notificationCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {notificationCount}
                  </span>
                )}
              </button>
              <Link href="/cart" className="relative">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        <div className="md:hidden py-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 rounded-lg text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-2 text-gray-500">
              <Search size={20} />
            </button>
          </div>

          {searchQuery.length > 1 && searchSuggestions.length > 0 && (
            <div className="bg-white mt-1 rounded-lg shadow-lg z-30 text-black py-2">
              {searchSuggestions.map((suggestion, idx) => (
                <div key={idx} className="px-4 py-2 hover:bg-gray-100">
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white text-black h-full w-4/5 max-w-sm overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="p-4">
              <div className="border-b pb-4 mb-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-3">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Welcome!</p>
                    <div className="text-sm text-blue-600">
                      <Link href="/login">Sign In</Link> / <Link href="/signup">Register</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <Link href="/" className="flex items-center py-3 px-2 hover:bg-gray-100 rounded">
                  <Home size={20} className="mr-3 text-gray-600" />
                  <span>Home</span>
                </Link>
                <Link href="/deals" className="flex items-center py-3 px-2 hover:bg-gray-100 rounded">
                  <Package size={20} className="mr-3 text-gray-600" />
                  <span>Deals</span>
                </Link>
                <Link href="/wishlist" className="flex items-center py-3 px-2 hover:bg-gray-100 rounded">
                  <Heart size={20} className="mr-3 text-gray-600" />
                  <span>Wishlist</span>
                  {wishlistCount > 0 && (
                    <span className="ml-auto bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <Link href="/cart" className="flex items-center py-3 px-2 hover:bg-gray-100 rounded">
                  <ShoppingCart size={20} className="mr-3 text-gray-600" />
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="ml-auto bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <Link href="/notifications" className="flex items-center py-3 px-2 hover:bg-gray-100 rounded">
                  <Bell size={20} className="mr-3 text-gray-600" />
                  <span>Notifications</span>
                  {notificationCount > 0 && (
                    <span className="ml-auto bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {notificationCount}
                    </span>
                  )}
                </Link>
              </div>

              <div className="mt-6 border-t pt-4">
                <h3 className="font-bold mb-2">Categories</h3>
                {categories.map(category => (
                  <Link
                    href={`/category/${category.id}`}
                    key={category.id}
                    className="py-2 flex items-center justify-between hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <span className="mr-2 text-blue-700">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                    <ChevronRight size={18} />
                  </Link>
                ))}
              </div>

              <div className="mt-6 border-t pt-4">
                <h3 className="font-bold mb-2">Account</h3>
                <div className="space-y-1">
                  <Link href="/profile" className="flex items-center py-2 hover:text-blue-600">
                    <User size={18} className="mr-2" />
                    My Profile
                  </Link>
                  <Link href="/orders" className="flex items-center py-2 hover:text-blue-600">
                    <Package size={18} className="mr-2" />
                    My Orders
                  </Link>
                  <Link href="/settings" className="flex items-center py-2 hover:text-blue-600">
                    <Settings size={18} className="mr-2" />
                    Settings
                  </Link>
                  <Link href="/help" className="flex items-center py-2 hover:text-blue-600">
                    <HelpCircle size={18} className="mr-2" />
                    Help Center
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center py-2 text-red-600 w-full text-left"
                  >
                    <LogOut size={18} className="mr-2" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

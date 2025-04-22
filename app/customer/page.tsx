'use client'
import renderDashboard from '@/components/layout/customer/renderDashboard';
import { TabButton } from '@/components/layout/customer/compnents';
import renderAccount from '@/components/layout/customer/renderAccount';
import renderOrders from '@/components/layout/customer/renderOrders';
import {
  ChevronDown,
  HelpCircle,
  LogOut,
  Package,
  Settings,
  User
} from 'lucide-react';
import { useState } from 'react';

// Customer Profile Page
const EnhancedCustomerProfile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  
  const customer = {
    name: "Sarah Johnson",
    avatar: "https://placehold.co/80x80", 
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    memberSince: "March 2022",
    tier: "Gold Member",
    points: 3520,
    nextTier: {
      name: "Platinum",
      points: 5000
    },
    orders: {
      total: 47,
      pending: 2,
      shipped: 1,
      delivered: 41,
      returned: 3
    },
    favoriteCategories: ["Electronics", "Home & Garden", "Books", "Fashion", "Beauty"],
    recentPurchases: [
      { 
        id: 1, 
        name: "Wireless Noise Cancelling Headphones", 
        image: "https://placehold.co/100x100",
        date: "April 10, 2025", 
        status: "Delivered", 
        price: "$149.99",
        seller: "AudioTech Pro",
        tracking: "UPS-23456789",
        estimatedDelivery: "April 15, 2025"
      },
      { 
        id: 2, 
        name: "Smart Home Hub with Voice Assistant", 
        image: "https://placehold.co/100x100",
        date: "March 28, 2025", 
        status: "Shipped", 
        price: "$199.99",
        seller: "TechGadgets Inc",
        tracking: "FDX-87654321",
        estimatedDelivery: "April 2, 2025"
      },
      { 
        id: 3, 
        name: "Adjustable Desk Lamp with Wireless Charging", 
        image: "https://placehold.co/100x100",
        date: "March 15, 2025", 
        status: "Delivered", 
        price: "$79.99",
        seller: "HomeStyle Co.",
        tracking: "DHL-12345678",
        estimatedDelivery: "March 20, 2025"
      }
    ],
    savedItems: [
      { 
        id: 1, 
        name: "Premium Espresso Coffee Maker", 
        image: "https://placehold.co/100x100",
        price: "$249.99", 
        originalPrice: "$329.99", 
        discount: "24%",
        seller: "KitchenElite",
        rating: 4.7,
        reviews: 542,
        stock: "In Stock"
      },
      { 
        id: 2, 
        name: "Fitness Tracker with Heart Rate Monitor", 
        image: "https://placehold.co/100x100",
        price: "$89.99", 
        originalPrice: "$119.99", 
        discount: "25%",
        seller: "FitTech",
        rating: 4.5,
        reviews: 876,
        stock: "In Stock"
      },
      { 
        id: 3, 
        name: "Fast Wireless Charging Pad", 
        image: "https://placehold.co/100x100",
        price: "$34.99", 
        originalPrice: "$49.99", 
        discount: "30%",
        seller: "PowerPlus",
        rating: 4.3,
        reviews: 328,
        stock: "Low Stock"
      },
      { 
        id: 4, 
        name: "Ultra HD Streaming Media Player", 
        image: "https://placehold.co/100x100",
        price: "$69.99", 
        originalPrice: "$89.99", 
        discount: "22%",
        seller: "StreamTech",
        rating: 4.8,
        reviews: 1024,
        stock: "In Stock"
      }
    ],
    reviews: [
      { 
        id: 1, 
        product: "Bluetooth Speaker with Waterproof Design", 
        image: "https://placehold.co/80x80",
        rating: 5, 
        date: "April 2, 2025", 
        comment: "Excellent sound quality and battery life! I've used it at the beach several times and it's completely waterproof as advertised. Highly recommended for outdoor activities.",
        likes: 12,
        verified: true
      },
      { 
        id: 2, 
        product: "Modern Plant Stand Set of 3", 
        image: "https://placehold.co/80x80",
        rating: 4, 
        date: "March 20, 2025", 
        comment: "Sturdy and looks great, easy to assemble. The three different heights work perfectly in my living room corner. Would have given 5 stars but one of the stands had a small scratch.",
        likes: 8,
        verified: true
      }
    ],
    recommendations: [
      {
        id: 1,
        name: "Smart Watch with Fitness Tracking",
        image: "https://placehold.co/150x150",
        price: "$179.99",
        originalPrice: "$229.99",
        discount: "22%",
        rating: 4.6,
        reviews: 892
      },
      {
        id: 2,
        name: "Wireless Charging Desk Ornizer",
        image: "https://placehold.co/150x150",
        price: "$59.99",
        originalPrice: "$79.99",
        discount: "25%",
        rating: 4.5,
        reviews: 345
      },
      {
        id: 3,
        name: "Portable Bluetooth Keyboard",
        image: "https://placehold.co/150x150",
        price: "$49.99",
        originalPrice: "$69.99",
        discount: "29%",
        rating: 4.4,
        reviews: 567
      }
    ],
    recentlyViewed: [
      {
        id: 1,
        name: "Ergonomic Office Chair",
        image: "https://placehold.co/100x100",
        price: "$249.99"
      },
      {
        id: 2,
        name: "Laptop Stand",
        image: "https://placehold.co/100x100",
        price: "$39.99"
      },
      {
        id: 3,
        name: "Wireless Mouse",
        image: "https://placehold.co/100x100",
        price: "$24.99"
      }
    ],
    paymentMethods: [
      { id: 1, type: "Visa", last4: "4321", expiry: "05/26", default: true },
      { id: 2, type: "Mastercard", last4: "8765", expiry: "11/27", default: false }
    ],
    addresses: [
      { 
        id: 1, 
        name: "Home", 
        street: "123 Main Street",
        city: "San Francisco",
        state: "CA",
        zip: "94105",
        default: true
      },
      { 
        id: 2, 
        name: "Work", 
        street: "456 Market Street",
        city: "San Francisco",
        state: "CA",
        zip: "94103",
        default: false
      }
    ],
    notifications: [
      {
        id: 1,
        type: "order",
        message: "Your order #78293 has been delivered",
        time: "2 hours ago",
        read: false
      },
      {
        id: 2,
        type: "promotion",
        message: "Flash Sale! 30% off Electronics - Today Only!",
        time: "5 hours ago",
        read: true
      },
      {
        id: 3,
        type: "review",
        message: "Your review was liked by 5 people",
        time: "Yesterday",
        read: true
      }
    ]
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Mobile Navition */}
      <div className="md:hidden mb-6">
        <button 
          onClick={() => setActiveMobileMenu(!activeMobileMenu)}
          className="w-full bg-gray-100 p-3 rounded-lg flex justify-between items-center"
        >
          <span className="font-medium">
            {activeTab === 'dashboard' ? 'Dashboard' : 
             activeTab === 'orders' ? 'Orders' : 'Account Settings'}
          </span>
          <ChevronDown size={20} className={`transition-transform ${activeMobileMenu ? 'rotate-180' : ''}`} />
        </button>
        
        {activeMobileMenu && (
          <div className="bg-white border rounded-lg mt-2 shadow-lg overflow-hidden">
            <button 
              onClick={() => {
                setActiveTab('dashboard');
                setActiveMobileMenu(false);
              }}
              className="w-full py-3 px-4 text-left hover:bg-gray-50 border-b"
            >
              Dashboard
            </button>
            <button 
              onClick={() => {
                setActiveTab('orders');
                setActiveMobileMenu(false);
              }}
              className="w-full py-3 px-4 text-left hover:bg-gray-50 border-b"
            >
              Your Orders
            </button>
            <button 
              onClick={() => {
                setActiveTab('account');
                setActiveMobileMenu(false);
              }}
              className="w-full py-3 px-4 text-left hover:bg-gray-50"
            >
              Account Settings
            </button>
          </div>
        )}
      </div>
      
      {/* Desktop Navition */}
      <div className="hidden md:flex p-4 mb-8">
        <TabButton 
          active={activeTab === 'dashboard'} 
          onClick={() => setActiveTab('dashboard')}
          icon={<User size={16} />}
        >
          Dashboard
        </TabButton>
        <TabButton 
          active={activeTab === 'orders'} 
          onClick={() => setActiveTab('orders')}
          icon={<Package size={16} />}
        >
          Your Orders
        </TabButton>
        <TabButton 
          active={activeTab === 'account'} 
          onClick={() => setActiveTab('account')}
          icon={<Settings size={16} />}
        >
          Account Settings
        </TabButton>
        <TabButton 
          active={false} 
          onClick={() => {}}
          icon={<HelpCircle size={16} />}
        >
          Help Center
        </TabButton>
        <TabButton 
          active={false} 
          onClick={() => {}}
          icon={<LogOut size={16} />}
        >
          Sign Out
        </TabButton>
      </div>
      
      {/* Content Area */}
      {activeTab === 'dashboard' && renderDashboard(customer)}
      {activeTab === 'orders' && renderOrders(customer)}
      {activeTab === 'account' && renderAccount(customer)}
    </div>
  );
};

export default EnhancedCustomerProfile;

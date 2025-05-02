'use client';
import { useState } from 'react';
import { ShoppingCart, Package,  CreditCard, Globe, ShoppingBag, Store, Gift, Tag } from 'lucide-react';

export default function ExpandedEcommerceNav() {
  const [activePlatform, setActivePlatform] = useState('Amazon');
  
  const platforms = [
    {
      name: 'Amazon',
      icon: <ShoppingCart size={18} />,
      color: 'bg-orange-500',
      indicatorColor: 'border-orange-500',
      description: "World's largest online marketplace with over 300 million active users. Amazon offers extensive seller tools, fulfillment services (FBA), and massive customer reach. The platform takes 8-15% commission on sales with additional subscription fees for professional sellers.",
      marketShare: "38%",
      founded: "1994"
    },
    {
      name: 'Alibaba',
      icon: <Globe size={18} />,
      color: 'bg-red-500',
      indicatorColor: 'border-red-500',
      description: "Leading B2B e-commerce platform connecting manufacturers with buyers worldwide. Alibaba specializes in wholesale trade and manufacturing connections. The platform uses a membership model with gold supplier status for verified businesses and offers trade assurance protection.",
      marketShare: "12%",
      founded: "1999"
    },
    {
      name: 'Walmart',
      icon: <Store size={18} />,
      color: 'bg-blue-500',
      indicatorColor: 'border-blue-500',
      description: "Major retail giant with expanding online marketplace. Walmart's online platform leverages its extensive physical retail network with omnichannel fulfillment options. The platform charges 6-15% referral fees and offers two-day delivery services.",
      marketShare: "5.3%",
      founded: "1962"
    },
    {
      name: 'eBay',
      icon: <Tag size={18} />,
      color: 'bg-yellow-500',
      indicatorColor: 'border-yellow-500',
      description: "Pioneer in C2C and auction-style e-commerce. eBay specializes in both new and used goods with auction and fixed-price formats. The platform charges insertion fees and final value fees between 10-12% with store subscription options for high-volume sellers.",
      marketShare: "4.2%",
      founded: "1995"
    },
    {
      name: 'Flipkart',
      icon: <ShoppingBag size={18} />,
      color: 'bg-blue-400',
      indicatorColor: 'border-blue-400',
      description: "India's leading e-commerce marketplace with over 100 million registered users. Flipkart offers comprehensive seller tools, logistics support, and payment solutions. The platform charges 5-20% commission depending on category and provides warehousing options.",
      marketShare: "31.9% (India)",
      founded: "2007"
    },
    {
      name: 'Etsy',
      icon: <Gift size={18} />,
      color: 'bg-green-500',
      indicatorColor: 'border-green-500',
      description: "Marketplace focused on handmade, vintage items and craft supplies. Etsy specializes in unique and creative goods with a strong community focus. The platform charges $0.20 listing fee per item and 6.5% transaction fee with additional fees for payments processing.",
      marketShare: "2.8%",
      founded: "2005"
    },
    {
      name: 'Shopify',
      icon: <CreditCard size={18} />,
      color: 'bg-purple-500',
      indicatorColor: 'border-purple-500',
      description: "Leading e-commerce platform for creating independent online stores. Shopify provides comprehensive tools for store creation, management, and scaling with extensive app ecosystem. Monthly subscription starts at $29 with additional transaction fees for external payment gateways.",
      marketShare: "10.3%",
      founded: "2006"
    },
    {
      name: 'Rakuten',
      icon: <Package size={18} />,
      color: 'bg-red-400',
      indicatorColor: 'border-red-400',
      description: "Major Japanese e-commerce platform with global presence. Rakuten operates on a merchant-focused model with strong loyalty program integration. The platform charges monthly fees plus commission rates between 8-15% and offers unique points-based customer loyalty system.",
      marketShare: "14.1% (Japan)",
      founded: "1997"
    }
  ];

  // Find the active platform object
  const activeItem = platforms.find(p => p.name === activePlatform);

  return (
    <div className="container mx-auto">
      {/* Navigation Bar */}
      <div className="bg-white shadow-md rounded-lg p-2 overflow-x-auto">
        <div className="flex items-center space-x-1 min-w-max">
          {platforms.map((platform) => (
            <button
              key={platform.name}
              onClick={() => setActivePlatform(platform.name)}
              className={`
                relative flex flex-col items-center p-3 rounded-lg transition-all duration-200
                ${activePlatform === platform.name 
                  ? 'bg-gray-50' 
                  : 'hover:bg-gray-100'
                }
              `}
            >
              <div className={`
                p-2 rounded-full mb-1
                ${activePlatform === platform.name ? platform.color + ' text-white' : 'bg-gray-200'}
              `}>
                {platform.icon}
              </div>
              
              <span className={`
                text-sm font-medium whitespace-nowrap
                ${activePlatform === platform.name ? 'text-gray-800' : 'text-gray-500'}
              `}>
                {platform.name}
              </span>
              
              {/* Active indicator */}
              {activePlatform === platform.name && (
                <div className={`absolute bottom-0 left-1/2 w-12 border-b-2 -translate-x-1/2 ${platform.indicatorColor}`}></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full ${activeItem?.color} text-white inline-flex items-center justify-center mr-4`}>
            {activeItem?.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{activePlatform}</h2>
            <div className="flex space-x-4 text-sm text-gray-500 mt-1">
              <span>Founded: {activeItem?.founded}</span>
              <span>Market Share: {activeItem?.marketShare}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-md border border-gray-200 mb-4">
          <h3 className="font-medium text-gray-700 mb-2">Platform Overview</h3>
          <p className="text-gray-600">{activeItem?.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md border border-gray-200">
            <h3 className="font-medium text-gray-700 mb-2">Products</h3>
            <div className="text-sm text-gray-600">
              <div className="flex justify-between py-1">
                <span>Active Listings</span>
                <span className="font-medium">247</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Top Category</span>
                <span className="font-medium">Electronics</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-gray-200">
            <h3 className="font-medium text-gray-700 mb-2">Performance</h3>
            <div className="text-sm text-gray-600">
              <div className="flex justify-between py-1">
                <span>Conversion Rate</span>
                <span className="font-medium">3.2%</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Avg. Order Value</span>
                <span className="font-medium">$78.45</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-gray-200">
            <h3 className="font-medium text-gray-700 mb-2">Integration</h3>
            <div className="text-sm text-gray-600">
              <div className="flex justify-between py-1">
                <span>Status</span>
                <span className="text-green-600 font-medium">Connected</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Last Sync</span>
                <span className="font-medium">2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

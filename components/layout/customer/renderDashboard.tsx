import { Shield, Badge, User, Settings, Package, Bell, Tag, Gift, Truck, Heart, Star, RefreshCw } from "lucide-react";
import { ProfileCard, ProgressBar, Button } from "./compnents";

const renderDashboard = (customer) => (
    <div>
      <div className="flex flex-col md:flex-row p-6 mb-6">
        <div className="flex-1">
          <ProfileCard className="h-full">
            <div className="flex flex-col md:flex-row p-6 items-center md:items-start">
              <div className="relative">
                <img src={customer.avatar} alt={customer.name} className="w-24 h-24 rounded-full" />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full border-2 border-white">
                  <Shield size={16} />
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center p-2 mb-1">
                  <h2 className="text-xl font-bold">{customer.name}</h2>
                  <Badge color="blue">{customer.tier}</Badge>
                </div>
                <p className="text-gray-500 text-sm mb-3">Member since {customer.memberSince}</p>
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{customer.points} points</span>
                    <span className="text-sm text-gray-500">{customer.nextTier.points} points</span>
                  </div>
                  <ProgressBar percentage={(customer.points / customer.nextTier.points) * 100} />
                  <p className="text-xs text-gray-500 mt-1">
                    {customer.nextTier.points - customer.points} more points to {customer.nextTier.name} status
                  </p>
                </div>
                <div className="flex p-2">
                  <Button primary icon={<User size={14} />}>Edit Profile</Button>
                  <Button icon={<Settings size={14} />}>Settings</Button>
                </div>
              </div>
            </div>
          </ProfileCard>
        </div>
        <div className="flex-1">
          <ProfileCard className="h-full">
            <h3 className="font-semibold mb-4 flex items-center">
              <Package size={18} className="mr-2 text-blue-600" />
              Order Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 p-3">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-xl font-bold text-blue-600">{customer.orders.total}</p>
                <p className="text-xs text-gray-600">Total Orders</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-xl font-bold text-amber-600">{customer.orders.pending}</p>
                <p className="text-xs text-gray-600">Processing</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-xl font-bold text-purple-600">{customer.orders.shipped}</p>
                <p className="text-xs text-gray-600">Shipped</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-xl font-bold text-green-600">{customer.orders.delivered}</p>
                <p className="text-xs text-gray-600">Delivered</p>
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full" icon={<Package size={14} />}>View All Orders</Button>
            </div>
          </ProfileCard>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 p-6 mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md p-6 text-white">
          <div className="flex items-center mb-2">
            <Bell size={20} className="mr-2" />
            <h3 className="font-semibold">Notifications</h3>
          </div>
          <p className="text-sm mb-4">You have {customer.notifications.filter(n => !n.read).length} unread notifications</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">View All</Button>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-md p-6 text-white">
          <div className="flex items-center mb-2">
            <Tag size={20} className="mr-2" />
            <h3 className="font-semibold">Current Deals</h3>
          </div>
          <p className="text-sm mb-4">5 items on your wishlist are on sale</p>
          <Button className="bg-white text-purple-600 hover:bg-blue-50">Check Deals</Button>
        </div>
        <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg shadow-md p-6 text-white">
          <div className="flex items-center mb-2">
            <Gift size={20} className="mr-2" />
            <h3 className="font-semibold">Rewards Available</h3>
          </div>
          <p className="text-sm mb-4">You have a $25 reward to redeem</p>
          <Button className="bg-white text-amber-600 hover:bg-blue-50">Claim Now</Button>
        </div>
      </div>

      <ProfileCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <Truck size={18} className="mr-2 text-blue-600" />
            Recent Orders
          </h3>
          <Button className="text-xs">View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Order</th>
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Date</th>
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Status</th>
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Total</th>
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {customer.recentPurchases.map(order => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="py-4">
                    <div className="flex items-center">
                      <img src={order.image} alt={order.name} className="w-10 h-10 rounded-md mr-3" />
                      <div>
                        <p className="font-medium text-sm line-clamp-1">{order.name}</p>
                        <p className="text-xs text-gray-500">{order.seller}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">{order.date}</p>
                  </td>
                  <td className="py-4">
                    <Badge 
                      color={
                        order.status === 'Delivered' ? 'green' : 
                        order.status === 'Shipped' ? 'blue' : 
                        order.status === 'Processing' ? 'amber' : 'blue'
                      }
                    >
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-4">
                    <p className="text-sm font-medium">{order.price}</p>
                  </td>
                  <td className="py-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Track Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProfileCard>
      
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 mt-6">
        <ProfileCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center">
              <Heart size={18} className="mr-2 text-blue-600" />
              Saved Items
            </h3>
            <Button className="text-xs">View All</Button>
          </div>
          <div className="space-y-4">
            {customer.savedItems.slice(0, 3).map(item => (
              <div key={item.id} className="flex border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div className="p-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                    <div className="flex items-center mt-1">
                      <span className="text-blue-600 font-semibold">{item.price}</span>
                      <span className="text-gray-400 text-xs line-through ml-2">{item.originalPrice}</span>
                      <Badge color="red" className="ml-2">{item.discount}</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs ${item.stock === 'In Stock' ? 'text-green-600' : 'text-amber-600'}`}>
                      {item.stock}
                    </span>
                    <Button primary className="text-xs py-1 px-2">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ProfileCard>
        
        <ProfileCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center">
              <Star size={18} className="mr-2 text-blue-600" />
              Your Reviews
            </h3>
            <Button className="text-xs">View All</Button>
          </div>
          <div className="space-y-4">
            {customer.reviews.map(review => (
              <div key={review.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-2">
                  <div className="flex">
                    <img src={review.image} alt={review.product} className="w-12 h-12 rounded-md mr-3" />
                    <div>
                      <h4 className="font-medium text-sm line-clamp-1">{review.product}</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  {review.verified && (
                    <Badge color="green" className="h-fit">Verified Purchase</Badge>
                  )}
                </div>
                <p className="text-sm mt-2 text-gray-700 line-clamp-2">{review.comment}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{review.likes} people found this helpful</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">
                    Edit Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ProfileCard>
      </div>
      
      <ProfileCard className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <Tag size={18} className="mr-2 text-blue-600" />
            Recommended For You
          </h3>
          <Button icon={<RefreshCw size={14} />} className="text-xs">Refresh</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 p-4">
          {customer.recommendations.map(item => (
            <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-36 object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge color="red">{item.discount}</Badge>
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm line-clamp-2 mb-2">{item.name}</h4>
                <div className="flex items-baseline p-2 mb-2">
                  <span className="text-blue-600 font-semibold">{item.price}</span>
                  <span className="text-gray-400 text-xs line-through">{item.originalPrice}</span>
                </div>
                <div className="flex items-center text-xs mb-3">
                  <div className="flex mr-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className={i < Math.floor(item.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-500">({item.reviews})</span>
                </div>
                <Button primary className="w-full text-xs">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </ProfileCard>
    </div>
  );

export default renderDashboard;

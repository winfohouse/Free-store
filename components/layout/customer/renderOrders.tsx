import { Search, Filter, Package, Clock, Truck, CheckCircle, Repeat, Star, Bookmark, Badge } from "lucide-react";
import { ProfileCard, Button, TabButton } from "./compnents";

const renderOrders = (customer) => (
    <div>
      <ProfileCard>
        <div className="flex flex-wrap items-center justify-between p-4 mb-6">
          <h3 className="text-xl font-bold">Your Orders</h3>
          <div className="flex flex-wrap p-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search orders..." 
                className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              />
              <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <Button icon={<Filter size={14} />}>Filter</Button>
            <select className="border rounded-lg px-3 py-2 text-sm bg-white">
              <option>Last 30 days</option>
              <option>Last 6 months</option>
              <option>2025</option>
              <option>2024</option>
              <option>Archived orders</option>
            </select>
          </div>
        </div>
        
        {/* Order status tabs */}
        <div className="flex overflow-x-auto py-2 mb-6 scrollbar-hide">
          <TabButton active={true} icon={<Package size={16} />}>
            All Orders ({customer.orders.total})
          </TabButton>
          <TabButton active={false} icon={<Clock size={16} />}>
            Processing ({customer.orders.pending})
          </TabButton>
          <TabButton active={false} icon={<Truck size={16} />}>
            Shipped ({customer.orders.shipped})
          </TabButton>
          <TabButton active={false} icon={<CheckCircle size={16} />}>
            Delivered ({customer.orders.delivered})
          </TabButton>
          <TabButton active={false} icon={<Repeat size={16} />}>
            Returns ({customer.orders.returned})
          </TabButton>
          <TabButton active={false} icon={<Star size={16} />}>
            To Review
          </TabButton>
        </div>
        
        {/* Order List */}
        <div className="space-y-4">
          {customer.recentPurchases.map(order => (
            <div key={order.id} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 flex flex-wrap justify-between items-center border-b">
                <div className="flex flex-col sm:flex-row sm:items-center p-2 sm:gap-6">
                  <div>
                    <span className="text-xs text-gray-500">ORDER PLACED</span>
                    <p className="text-sm font-medium">{order.date}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">TOTAL</span>
                    <p className="text-sm font-medium">{order.price}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">SHIP TO</span>
                    <p className="text-sm font-medium">{customer.name}</p>
                  </div>
                </div>
                <div className="flex p-2 items-center mt-3 sm:mt-0">
                  <span className="text-xs font-medium">ORDER #{order.id}</span>
                  <Button className="text-xs py-1 px-2">View Order Details</Button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex flex-col md:flex-row p-6">
                  <div className="flex-grow">
                    <div className="flex p-4 items-start">
                      <img src={order.image} alt={order.name} className="w-20 h-20 rounded-md object-cover" />
                      <div>
                        <h4 className="font-medium">{order.name}</h4>
                        <p className="text-sm text-gray-500">Sold by: {order.seller}</p>
                        <p className="text-sm mt-1">{order.price}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      {order.status === "Delivered" ? (
                        <div className="flex flex-wrap p-2">
                          <Button icon={<Repeat size={14} />}>Return Item</Button>
                          <Button icon={<Star size={14} />}>Write a Review</Button>
                          <Button icon={<Bookmark size={14} />}>Buy Ain</Button>
                        </div>
                      ) : (
                        <div className="flex flex-wrap p-2">
                          <Button icon={<Truck size={14} />}>Track Package</Button>
                          {order.status === "Processing" && (
                            <Button>Cancel Order</Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg">
                    
<h5 className="font-medium mb-2">Order Status</h5>
                    <div className="flex items-center mb-3">
                      <Badge 
                        color={
                          order.status === 'Delivered' ? 'green' : 
                          order.status === 'Shipped' ? 'blue' : 
                          order.status === 'Processing' ? 'amber' : 'blue'
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                    
                    {order.status !== "Processing" && (
                      <>
                        <p className="text-xs text-gray-500 mb-1">Tracking Number</p>
                        <p className="text-sm font-medium mb-3">{order.tracking}</p>
                        
                        <p className="text-xs text-gray-500 mb-1">Estimated Delivery</p>
                        <p className="text-sm font-medium">{order.estimatedDelivery}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ProfileCard>
    </div>
  );
  

export default renderOrders;

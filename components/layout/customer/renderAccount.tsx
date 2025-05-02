import { Badge, Bell, CreditCard, DollarSign, MapPin, Shield, User } from "lucide-react";
import { ProfileCard, Button } from "./compnents";
import { Customer } from "@/types/Customer";


const renderAccount = (customer: Customer) => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 p-6">
      <ProfileCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <User size={18} className="mr-2 text-blue-600" />
            Personal Information
          </h3>
          <Button>Edit</Button>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">{customer.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-medium">{customer.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="font-medium">{customer.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">{customer.location}</p>
          </div>
        </div>
      </ProfileCard>

      <ProfileCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <MapPin size={18} className="mr-2 text-blue-600" />
            Addresses
          </h3>
          <Button>Add New</Button>
        </div>
        <div className="space-y-4">
          {customer.addresses.map(address => (
            <div key={address.id} className="border rounded-lg p-4 relative">
              {address.default && (
                <Badge color="blue" className="absolute top-4 right-4">Default</Badge>
              )}
              <p className="font-medium mb-1">{address.name}</p>
              <p className="text-sm text-gray-700">{address.street}</p>
              <p className="text-sm text-gray-700">{address.city}, {address.state} {address.zip}</p>
              <div className="flex p-2 mt-3">
                <Button className="text-xs py-1">Edit</Button>
                {!address.default && (
                  <Button className="text-xs py-1">Set as Default</Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </ProfileCard>

      <ProfileCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <CreditCard size={18} className="mr-2 text-blue-600" />
            Payment Methods
          </h3>
          <Button>Add New</Button>
        </div>
        <div className="space-y-4">
          {customer.paymentMethods.map(payment => (
            <div key={payment.id} className="border rounded-lg p-4 relative">
              {payment.default && (
                <Badge color="blue" className="absolute top-4 right-4">Default</Badge>
              )}
              <div className="flex items-center p-3">
                <div className="bg-gray-100 p-2 rounded-md">
                  {payment.type === "Visa" ?
                    <DollarSign size={20} className="text-blue-600" /> :
                    <CreditCard size={20} className="text-red-600" />
                  }
                </div>
                <div>
                  <p className="font-medium">{payment.type} ending in {payment.last4}</p>
                  <p className="text-sm text-gray-500">Expires {payment.expiry}</p>
                </div>
              </div>
              <div className="flex p-2 mt-3">
                <Button className="text-xs py-1">Edit</Button>
                {!payment.default && (
                  <Button className="text-xs py-1">Set as Default</Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </ProfileCard>

      <ProfileCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <Bell size={18} className="mr-2 text-blue-600" />
            Notification Preferences
          </h3>
          <Button>Update</Button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
            <div>
              <p className="font-medium">Order Updates</p>
              <p className="text-sm text-gray-500">Receive notifications about your orders</p>
            </div>
            <input type="checkbox" className="h-5 w-5 text-blue-600 rounded" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
            <div>
              <p className="font-medium">Promotions & Deals</p>
              <p className="text-sm text-gray-500">Get notified about sales and special offers</p>
            </div>
            <input type="checkbox" className="h-5 w-5 text-blue-600 rounded" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
            <div>
              <p className="font-medium">Price Drops</p>
              <p className="text-sm text-gray-500">Alerts when items in your wishlist drop in price</p>
            </div>
            <input type="checkbox" className="h-5 w-5 text-blue-600 rounded" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
            <div>
              <p className="font-medium">Review Requests</p>
              <p className="text-sm text-gray-500">Reminders to review your purchases</p>
            </div>
            <input type="checkbox" className="h-5 w-5 text-blue-600 rounded" />
          </div>
        </div>
      </ProfileCard>
    </div>

    <ProfileCard className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center">
          <Shield size={18} className="mr-2 text-blue-600" />
          Account Security
        </h3>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">Password</h4>
            <p className="text-sm text-gray-500">Last changed 3 months ago</p>
          </div>
          <Button>Change Password</Button>
        </div>
        <div className="flex justify-between items-center p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">Two-Factor Authentication</h4>
            <p className="text-sm text-gray-500">Add an extra layer of security</p>
          </div>
          <Button>Enable</Button>
        </div>
        <div className="flex justify-between items-center p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">Login History</h4>
            <p className="text-sm text-gray-500">View recent account activity</p>
          </div>
          <Button>View History</Button>
        </div>
      </div>
    </ProfileCard>
  </div>
);

export default renderAccount;

"use client"
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">MarketWorld</h3>
            <p className="text-gray-400 text-sm">Your one-stop marketplace for all your shopping needs. Find products from around the world.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Help Center</li>
              <li>Returns & Refunds</li>
              <li>Shipping Info</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Account</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Your Account</li>
              <li>Order History</li>
              <li>Wishlist</li>
              <li>Seller Dashboard</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MarketWorld. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer

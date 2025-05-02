"use client";
import { categoryLinks, platformsLinks } from "@/demoData/Products2";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

// Country selector interface
interface Country {
  code: string;
  name: string;
  flag: string;
}

const Footer: FC = () => {
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [showCountrySelector, setShowCountrySelector] = useState(false);

  let url = (code: string) => `https://flagcdn.com/${code.toLowerCase()}.svg`;
  const countries: Country[] = [
    { code: "US", name: "United States", flag: url("US") },
    { code: "CA", name: "Canada", flag: url("CA") },
    { code: "UK", name: "United Kingdom", flag: url("UK") },
    { code: "AU", name: "Australia", flag: url("AU") },
    { code: "DE", name: "Germany", flag: url("DE") },
  ];

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Subscription logic would go here
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  const toggleCountrySelector = () => {
    setShowCountrySelector(!showCountrySelector);
  };

  const selectCountry = (code: string) => {
    setSelectedCountry(code);
    setShowCountrySelector(false);
  };

  const selectedCountryData = countries.find(country => country.code === selectedCountry);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top button */}
      <div className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
        <div className="container mx-auto px-4 py-3 text-center">
          <a href="#top" className="text-sm font-medium">Back to top</a>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Sign up for our newsletter</h3>
              <p className="text-gray-400 text-sm">Get the latest deals and more.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
                className="px-4 py-2 rounded-l text-gray-900 w-full md:w-64"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-4 py-2 rounded-r transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer sections */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Shop By Department</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {categoryLinks.map(({ name, slug, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white capitalize transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Shop By Market</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {platformsLinks.map(({ name, slug, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white capitalize transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Customer Service</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/account" className="hover:text-white transition-colors">Your Account</Link></li>
              <li><Link href="/orders" className="hover:text-white transition-colors">Track Orders</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Rates & Policies</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/feedback" className="hover:text-white transition-colors">Feedback</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/categories" className="hover:text-white transition-colors">Today&apos;s Deals</Link></li>
              {/* <li><Link href="/bestsellers" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link href="/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link href="/membership" className="hover:text-white transition-colors">Membership & Rewards</Link></li>
              <li><Link href="/gift-cards" className="hover:text-white transition-colors">Gift Cards</Link></li>
              <li><Link href="/sell" className="hover:text-white transition-colors">Sell on MarketWorld</Link></li>
              <li><Link href="/affiliate" className="hover:text-white transition-colors">Affiliate Program</Link></li> */}
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-bold mb-4 text-lg">About MarketWorld</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-white transition-colors">Press Releases</Link></li>
              <li><Link href="/investors" className="hover:text-white transition-colors">Investor Relations</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition-colors">Corporate Blog</Link></li>
              <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/diversity" className="hover:text-white transition-colors">Diversity & Inclusion</Link></li>
            </ul>
          </div>

          {/* Column 6 */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Download Our App</h3>
            <p className="text-gray-400 text-sm mb-4">Shop anytime, anywhere with our mobile app.</p>
            {/* <div className="flex flex-col space-y-3">
              <Link href="/ios-app" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded flex items-center transition-colors">
                <Image src="/api/placeholder/24/24" width={24} height={24} alt="App Store" className="mr-2" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-medium">App Store</div>
                </div>
              </Link>
              <Link href="/android-app" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded flex items-center transition-colors">
                <Image src="/api/placeholder/24/24" width={24} height={24} alt="Google Play" className="mr-2" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </Link>
            </div> */}
          </div>
        </div>

        {/* Social media links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              <div className="flex gap-2" >
                <Image
                  src="/white-logo.svg"
                  alt="MarketWorld logo"
                  width={40}
                  height={40}
                />
                MarketWorld
              </div>
            </Link>
              <p>Your one-stop marketplace for all your shopping needs. Find products from around the world.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section with country selector and copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <div className="mb-4 md:mb-0 md:mr-8 relative">
                <button
                  onClick={toggleCountrySelector}
                  className="flex items-center text-gray-400 hover:text-white text-sm"
                >
                  {selectedCountryData && (
                    <>
                      <Image
                        src={selectedCountryData.flag}
                        width={20}
                        height={15}
                        alt={selectedCountryData.name}
                        className="mr-2"
                      />
                      <span>{selectedCountryData.name}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ml-1 transition-transform ${showCountrySelector ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>

                {showCountrySelector && (
                  <div className="absolute bottom-full mb-2 bg-gray-800 rounded shadow-lg py-2 w-48 z-10">
                    {countries.map(country => (
                      <button
                        key={country.code}
                        className={`flex items-center px-4 py-2 w-full text-left hover:bg-gray-700 transition-colors ${selectedCountry === country.code ? 'bg-gray-700' : ''
                          }`}
                        onClick={() => selectCountry(country.code)}
                      >
                        <Image
                          src={country.flag}
                          width={20}
                          height={15}
                          alt={country.name}
                          className="mr-2"
                        />
                        <span className="text-sm">{country.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} MarketWorld, Inc. All Rights Reserved.
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
              <Link href="/blogs" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

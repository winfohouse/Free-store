import RenderStars from "@/components/product/RenderStars";
import { formatPrice } from "@/demoData/Products";
import { ProductsProps, Product } from "@/types/Products";

  // Product data
  export const product = {
    name: "Apple iPhone 15 Pro - 256GB - Pacific Blue",
    brand: "Apple",
    rating: 4.7,
    reviewCount: 2453,
    price: 999.99,
    oldPrice: 1099.99,
    discount: "9% off",
    inStock: true,
    prime: true,
    arrival: "Friday, April 18",
    category: "Electronics",
    model: "MQ0H3LL/A",
    releaseDate: "September 22, 2024",
    description: "The iPhone 15 Pro features the A17 Pro chip, the most powerful chip ever in a smartphone. It brings next-level gaming to iPhone and powers industry-first features like Apple Intelligence. With our best camera system ever, it gives you even more creative control. And it's crafted with titanium, the same material used on spacecraft sent to Mars.",
    features: [
      "6.1-inch Super Retina XDR display with ProMotion technology and Always-On",
      "A17 Pro chip with 6-core CPU, 6-core GPU, and 16-core Neural Engine",
      "Pro camera system: 48MP Main, 12MP Ultra Wide, and 12MP Telephoto",
      "Up to 29 hours of video playback",
      "Titanium with textured matte glass back, Ceramic Shield front",
      "Action button — a fast track to your favorite feature",
      "USB-C connector with USB 3 for up to 20x faster transfer speeds",
      "iOS 18 with Apple Intelligence and new ways to customize your Home Screen"
    ],
    variants: [
      { name: "128GB", price: 899.99, color: "Pacific Blue" },
      { name: "256GB", price: 999.99, color: "Pacific Blue" },
      { name: "512GB", price: 1199.99, color: "Pacific Blue" },
      { name: "1TB", price: 1399.99, color: "Pacific Blue" }
    ],
    colors: [
      { name: "Pacific Blue", code: "bg-blue-800" },
      { name: "Silver", code: "bg-gray-200" },
      { name: "Graphite", code: "bg-gray-800" },
      { name: "Gold", code: "bg-yellow-400" }
    ],
    images: [
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500"
    ],
    specifications: [
      { name: "Brand", value: "Apple" },
      { name: "Model Name", value: "iPhone 15 Pro" },
      { name: "Network Technology", value: "GSM / CDMA / HSPA / EVDO / LTE / 5G" },
      { name: "Dimensions", value: "146.7 x 71.5 x 8.3 mm (5.78 x 2.81 x 0.33 in)" },
      { name: "Weight", value: "187 g (6.60 oz)" },
      { name: "Build", value: "Glass front (Ceramic Shield), titanium frame, glass back" },
      { name: "SIM", value: "Nano-SIM and eSIM" },
      { name: "Display Type", value: "Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision" },
      { name: "Display Size", value: "6.1 inches" },
      { name: "Resolution", value: "1179 x 2556 pixels" },
      { name: "Protection", value: "Ceramic Shield glass" },
      { name: "OS", value: "iOS 18" },
      { name: "Chipset", value: "Apple A17 Pro (3 nm)" },
      { name: "CPU", value: "Hexa-core" },
      { name: "GPU", value: "Apple GPU (6-core graphics)" }
    ],
    reviews: [
      {
        author: "Michael S.",
        date: "April 2, 2025",
        rating: 5,
        title: "Best iPhone Yet!",
        content: "I've been using iPhones for years, and this is by far the best one yet. The camera is incredible, especially in low light. The titanium frame makes it feel premium yet lightweight. Battery life is much improved from my previous iPhone 13 Pro. The A17 chip makes everything lightning fast. Highly recommend!",
        helpful: 143
      },
      {
        author: "Sarah T.",
        date: "March 28, 2025",
        rating: 4,
        title: "Great phone, but expensive",
        content: "This is a fantastic device with incredible performance and an amazing camera system. The new iOS 18 features are very useful. However, I'm giving it 4 stars because of the price point. It's very expensive for what is ultimately an incremental upgrade from the iPhone 14 Pro. If you're coming from an older model, it's absolutely worth it though.",
        helpful: 89
      },
      {
        author: "Robert J.",
        date: "March 15, 2025",
        rating: 5,
        title: "The camera is unbelievable",
        content: "I'm an amateur photographer and the camera system on this phone is beyond impressive. The 48MP main sensor captures incredible detail, and the new photographic styles give so much creative control. The action button is super convenient for quick camera access. Very happy with this purchase!",
        helpful: 67
      }
    ],
    frequentlyBoughtTogether: [
      {
        name: "Apple MagSafe Charger",
        price: 39.99,
        image: "/api/placeholder/100/100"
      },
      {
        name: "Apple AirPods Pro (2nd Generation)",
        price: 249.99,
        image: "/api/placeholder/100/100"
      },
      {
        name: "iPhone 15 Pro Case with MagSafe",
        price: 49.99,
        image: "/api/placeholder/100/100"
      }
    ],
    similarProducts: [
      {
        name: "Samsung Galaxy S24 Ultra",
        price: 1199.99,
        rating: 4.6,
        image: "/api/placeholder/150/150"
      },
      {
        name: "Google Pixel 9 Pro",
        price: 899.99,
        rating: 4.5,
        image: "/api/placeholder/150/150"
      },
      {
        name: "iPhone 15",
        price: 799.99,
        rating: 4.7,
        image: "/api/placeholder/150/150"
      },
      {
        name: "iPhone 15 Pro Max",
        price: 1199.99,
        rating: 4.8,
        image: "/api/placeholder/150/150"
      }
    ]
  };

export function SimilarProducts({products}: ProductsProps){
  return(
    <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium mb-4">Similar products you might like</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((item: Product, index:number) => (
              <div key={index} className="border rounded-lg overflow-hidden p-3">
                <div className="h-32 flex items-center justify-center">
                  <img src={item.images[0]} alt={item.title} className="max-h-full" />
                </div>
                <div className="mt-2">
                  <div className="text-sm h-12 overflow-hidden">{item.title}</div>
                  <div className="flex items-center mt-1 mb-1">
                    {RenderStars(item.rating)}
                  </div>
                  <div className="font-medium">{formatPrice(item.price)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>


  ) 
  }

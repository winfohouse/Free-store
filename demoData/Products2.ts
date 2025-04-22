import { Product } from "@/types/Products";

let count= 12345;
export const products: Product[] = [
  {
    id: (count++).toString(),
    title: "Wireless Bluetooth Headphones",
    brand: "AudioMaster",
    rating: 4.5,
    reviewCount: 120,
    price: 79.99,
    originalPrice: 99.99,
    discount: "20% OFF",
    available: true,
    freeShipping: true,
    category: "Electronics",
    model: "AHB-X100",
    releaseDate: "2023-10-15",
    description: "Premium sound quality with noise cancellation technology.",
    features: [
      "Bluetooth 5.0",
      "Noise Cancellation",
      "Up to 20 hours battery life",
      "Comfortable over-ear design"
    ],
    variants: [
      { name: "Black", price: 79.99, color: "#000000" },
      { name: "White", price: 79.99, color: "#FFFFFF" }
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "White", code: "#FFFFFF" }
    ],
    images: [
      "https://placehold.co/500x500?text=Headphones+Front",
      "https://placehold.co/500x500?text=Headphones+Side",
      "https://placehold.co/500x500?text=Headphones+Case"
    ],
    specifications: [
      { name: "Battery", value: "20 hours" },
      { name: "Bluetooth Version", value: "5.0" },
      { name: "Weight", value: "250g" }
    ],
    reviews: [
      {
        author: "John Doe",
        date: "2023-12-01",
        rating: 5,
        title: "Great headphones for the price!",
        content: "The sound quality is amazing, and the noise cancellation works great. Highly recommend!",
        helpful: 35
      },
      {
        author: "Jane Smith",
        date: "2023-11-25",
        rating: 4,
        title: "Good sound but uncomfortable for long use",
        content: "The sound quality is fantastic, but after wearing them for a couple of hours, they get a bit uncomfortable.",
        helpful: 20
      }
    ],
    frequentlyBoughtTogether: [
      { name: "Bluetooth Adapter", price: 15.99, image: "https://placehold.co/500x500?text=Bluetooth+Adapter" },
      { name: "Carrying Case", price: 12.99, image: "https://placehold.co/500x500?text=Carrying+Case" }
    ],
    similarProducts: [
      { name: "Noise Cancelling Headphones", price: 89.99, rating: 4.7, image: "https://placehold.co/500x500?text=Noise+Cancelling+Headphones" },
      { name: "Over-Ear Headphones", price: 65.99, rating: 4.2, image: "https://placehold.co/500x500?text=Over-Ear+Headphones" }
    ],
    platform: "Amazon",
    platformIcon: "https://placehold.co/30x30?text=Amazon",
    tags: ["wireless", "headphones", "bluetooth", "electronics", "audio"],
    stock: 25,
    ctaText: "Buy Now",
    ctaLink: "/buy/12345",
    bestPrice: true,
    offerEndsAt: "2025-04-20T23:59:59Z",
    viewsCount: 1023,
    soldCount: 348,
    wishlistCount: 58,
    sharedCount: 14
  },
  {
    id: (count++).toString(),
    title: "4K Ultra HD Smart TV",
    brand: "Visionary",
    rating: 4.8,
    reviewCount: 80,
    price: 499.99,
    originalPrice: 599.99,
    discount: "17% OFF",
    available: true,
    freeShipping: true,
    category: "Home Electronics",
    model: "VST-4K-50",
    releaseDate: "2024-01-20",
    description: "Enjoy cinematic viewing with 4K Ultra HD resolution.",
    features: [
      "4K Ultra HD Resolution",
      "Smart TV with built-in apps",
      "HDR support",
      "50-inch screen"
    ],
    variants: [
      { name: "Black", price: 499.99, color: "#000000" },
      { name: "Silver", price: 499.99, color: "#C0C0C0" }
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Silver", code: "#C0C0C0" }
    ],
    images: [
      "https://placehold.co/500x500?text=Smart+TV+Front",
      "https://placehold.co/500x500?text=Smart+TV+Side",
      "https://placehold.co/500x500?text=Smart+TV+Screen"
    ],
    specifications: [
      { name: "Resolution", value: "4K Ultra HD" },
      { name: "Screen Size", value: "50 inches" },
      { name: "Weight", value: "12kg" }
    ],
    reviews: [
      {
        author: "Michael Lee",
        date: "2024-02-10",
        rating: 5,
        title: "Amazing TV for the price",
        content: "The picture quality is outstanding, and the smart features are very responsive.",
        helpful: 45
      },
      {
        author: "Sarah W.",
        date: "2024-01-15",
        rating: 4,
        title: "Good but could be brighter",
        content: "The TV works great, but it could be a bit brighter in well-lit rooms.",
        helpful: 20
      }
    ],
    frequentlyBoughtTogether: [
      { name: "TV Wall Mount", price: 29.99, image: "https://placehold.co/500x500?text=TV+Wall+Mount" },
      { name: "Universal Remote", price: 19.99, image: "https://placehold.co/500x500?text=Universal+Remote" }
    ],
    similarProducts: [
      { name: "LED Smart TV", price: 399.99, rating: 4.5, image: "https://placehold.co/500x500?text=LED+Smart+TV" },
      { name: "QLED Smart TV", price: 699.99, rating: 4.9, image: "https://placehold.co/500x500?text=QLED+Smart+TV" }
    ],
    platform: "BestBuy",
    platformIcon: "https://placehold.co/30x30?text=BestBuy",
    tags: ["4K", "Smart TV", "electronics", "home theater"],
    stock: 10,
    ctaText: "Buy Now",
    ctaLink: "/buy/12346",
    bestPrice: true,
    offerEndsAt: "2025-05-01T23:59:59Z",
    viewsCount: 500,
    soldCount: 200,
    wishlistCount: 100,
    sharedCount: 40
  },
  {
    id: (count++).toString(),
    title: "Smartphone Case for iPhone 13",
    brand: "CaseCo",
    rating: 4.2,
    reviewCount: 45,
    price: 19.99,
    originalPrice: 24.99,
    discount: "20% OFF",
    available: true,
    freeShipping: true,
    category: "Accessories",
    model: "CC-IPH13",
    releaseDate: "2023-12-05",
    description: "Stylish and durable protective case for iPhone 13.",
    features: [
      "Shockproof",
      "Slim design",
      "Easy access to all buttons and ports",
      "Available in multiple colors"
    ],
    variants: [
      { name: "Red", price: 19.99, color: "#FF0000" },
      { name: "Blue", price: 19.99, color: "#0000FF" },
      { name: "Black", price: 19.99, color: "#000000" }
    ],
    colors: [
      { name: "Red", code: "#FF0000" },
      { name: "Blue", code: "#0000FF" },
      { name: "Black", code: "#000000" }
    ],
    images: [
      "https://placehold.co/500x500?text=Case+Red",
      "https://placehold.co/500x500?text=Case+Blue",
      "https://placehold.co/500x500?text=Case+Black"
    ],
    specifications: [
      { name: "Material", value: "Silicone" },
      { name: "Compatibility", value: "iPhone 13" },
      { name: "Weight", value: "50g" }
    ],
    reviews: [
      {
        author: "Tom H.",
        date: "2023-12-12",
        rating: 4,
        title: "Nice fit, decent protection",
        content: "The case fits my iPhone 13 perfectly and offers decent protection against drops.",
        helpful: 10
      },
      {
        author: "Emily R.",
        date: "2023-12-10",
        rating: 5,
        title: "Great case for the price",
        content: "I love the slim design, and it provides good protection without adding bulk.",
        helpful: 15
      }
    ],
    frequentlyBoughtTogether: [
      { name: "Screen Protector", price: 8.99, image: "https://placehold.co/500x500?text=Screen+Protector" },
      { name: "Charging Cable", price: 12.99, image: "https://placehold.co/500x500?text=Charging+Cable" }
    ],
    similarProducts: [
      { name: "iPhone 13 Leather Case", price: 29.99, rating: 4.6, image: "https://placehold.co/500x500?text=iPhone+13+Leather+Case" },
      { name: "iPhone 13 Clear Case", price: 17.99, rating: 4.3, image: "https://placehold.co/500x500?text=iPhone+13+Clear+Case" }
    ],
    platform: "eBay",
    platformIcon: "https://placehold.co/30x30?text=eBay",
    tags: ["iphone case", "accessory", "smartphone", "protective"],
    stock: 50,
    ctaText: "Buy Now",
    ctaLink: "/buy/12347",
    bestPrice: false,
    offerEndsAt: "2025-06-10T23:59:59Z",
    viewsCount: 250,
    soldCount: 75,
    wishlistCount: 30,
    sharedCount: 5
  },
  {
    id: (count++).toString(),
    title: "Portable Power Bank 20000mAh",
    brand: "PowerPlus",
    rating: 4.7,
    reviewCount: 200,
    price: 29.99,
    originalPrice: 39.99,
    discount: "25% OFF",
    available: true,
    freeShipping: true,
    category: "Electronics",
    model: "PB-20000",
    releaseDate: "2024-02-15",
    description: "A high-capacity power bank to keep your devices charged on the go.",
    features: [
      "20000mAh capacity",
      "Fast charging technology",
      "LED battery indicator",
      "Portable and compact design"
    ],
    variants: [
      { name: "Black", price: 29.99, color: "#000000" },
      { name: "White", price: 29.99, color: "#FFFFFF" }
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "White", code: "#FFFFFF" }
    ],
    images: [
      "https://placehold.co/500x500?text=Power+Bank+Black",
      "https://placehold.co/500x500?text=Power+Bank+White"
    ],
    specifications: [
      { name: "Capacity", value: "20000mAh" },
      { name: "Input", value: "5V/2A" },
      { name: "Output", value: "5V/2.4A" }
    ],
    reviews: [
      {
        author: "Liam G.",
        date: "2024-02-18",
        rating: 5,
        title: "Perfect for traveling",
        content: "I used this during a trip, and it charged my phone and tablet multiple times. Highly recommend!",
        helpful: 50
      },
      {
        author: "Sophia T.",
        date: "2024-02-10",
        rating: 4,
        title: "Good but bulky",
        content: "Great power bank, but it's a little bulky. Still, it works as advertised.",
        helpful: 25
      }
    ],
    frequentlyBoughtTogether: [
      { name: "USB-C Charging Cable", price: 10.99, image: "https://placehold.co/500x500?text=USB-C+Cable" },
      { name: "Travel Adapter", price: 15.99, image: "https://placehold.co/500x500?text=Travel+Adapter" }
    ],
    similarProducts: [
      { name: "Portable Power Bank 10000mAh", price: 19.99, rating: 4.4, image: "https://placehold.co/500x500?text=Power+Bank+10000mAh" },
      { name: "Wireless Power Bank", price: 39.99, rating: 4.6, image: "https://placehold.co/500x500?text=Wireless+Power+Bank" }
    ],
    platform: "Amazon",
    platformIcon: "https://placehold.co/30x30?text=Amazon",
    tags: ["power bank", "electronics", "portable", "charging"],
    stock: 75,
    ctaText: "Buy Now",
    ctaLink: "/buy/12348",
    bestPrice: true,
    offerEndsAt: "2025-05-15T23:59:59Z",
    viewsCount: 1024,
    soldCount: 500,
    wishlistCount: 150,
    sharedCount: 60
  },
  {
    id: (count++).toString(),
    title: "Wireless Bluetooth Headphones",
    brand: "AudioMaster",
    rating: 4.5,
    reviewCount: 120,
    price: 79.99,
    originalPrice: 99.99,
    discount: "20% OFF",
    available: true,
    freeShipping: true,
    category: "Electronics",
    model: "AHB-X100",
    releaseDate: "2023-10-15",
    description: "Premium sound quality with noise cancellation technology.",
    features: [
      "Bluetooth 5.0",
      "Noise Cancellation",
      "Up to 20 hours battery life",
      "Comfortable over-ear design"
    ],
    variants: [
      { name: "Black", price: 79.99, color: "#000000" },
      { name: "White", price: 79.99, color: "#FFFFFF" }
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "White", code: "#FFFFFF" }
    ],
    images: [
      "https://placehold.co/500x500?text=Headphones+Front",
      "https://placehold.co/500x500?text=Headphones+Side",
      "https://placehold.co/500x500?text=Headphones+Case"
    ],
    specifications: [
      { name: "Battery", value: "20 hours" },
      { name: "Bluetooth Version", value: "5.0" },
      { name: "Weight", value: "250g" }
    ],
    reviews: [
      {
        author: "John Doe",
        date: "2023-12-01",
        rating: 5,
        title: "Great headphones for the price!",
        content: "The sound quality is amazing, and the noise cancellation works great. Highly recommend!",
        helpful: 35
      },
      {
        author: "Jane Smith",
        date: "2023-11-25",
        rating: 4,
        title: "Good sound but uncomfortable for long use",
        content: "The sound quality is fantastic, but after wearing them for a couple of hours, they get a bit uncomfortable.",
        helpful: 20
      }
    ],
    frequentlyBoughtTogether: [
      { name: "Bluetooth Adapter", price: 15.99, image: "https://placehold.co/500x500?text=Bluetooth+Adapter" },
      { name: "Carrying Case", price: 12.99, image: "https://placehold.co/500x500?text=Carrying+Case" }
    ],
    similarProducts: [
      { name: "Noise Cancelling Headphones", price: 89.99, rating: 4.7, image: "https://placehold.co/500x500?text=Noise+Cancelling+Headphones" },
      { name: "Over-Ear Headphones", price: 65.99, rating: 4.2, image: "https://placehold.co/500x500?text=Over-Ear+Headphones" }
    ],
    platform: "Amazon",
    platformIcon: "https://placehold.co/30x30?text=Amazon",
    tags: ["wireless", "headphones", "bluetooth", "electronics", "audio"],
    stock: 25,
    ctaText: "Buy Now",
    ctaLink: "/buy/12345",
    bestPrice: true,
    offerEndsAt: "2025-04-20T23:59:59Z",
    viewsCount: 1023,
    soldCount: 348,
    wishlistCount: 58,
    sharedCount: 14
  },
  {
    id: (count++).toString(),
    title: "4K Ultra HD Smart TV",
    brand: "Visionary",
    rating: 4.8,
    reviewCount: 80,
    price: 499.99,
    originalPrice: 599.99,
    discount: "17% OFF",
    available: true,
    freeShipping: true,
    category: "Home Electronics",
    model: "VST-4K-50",
    releaseDate: "2024-01-20",
    description: "Enjoy cinematic viewing with 4K Ultra HD resolution.",
    features: [
      "4K Ultra HD Resolution",
      "Smart TV with built-in apps",
      "HDR support",
      "50-inch screen"
    ],
    variants: [
      { name: "Black", price: 499.99, color: "#000000" },
      { name: "Silver", price: 499.99, color: "#C0C0C0" }
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Silver", code: "#C0C0C0" }
    ],
    images: [
      "https://placehold.co/500x500?text=Smart+TV+Front",
      "https://placehold.co/500x500?text=Smart+TV+Side",
      "https://placehold.co/500x500?text=Smart+TV+Screen"
    ],
    specifications: [
      { name: "Resolution", value: "4K Ultra HD" },
      { name: "Screen Size", value: "50 inches" },
      { name: "Weight", value: "12kg" }
    ],
    reviews: [
      {
        author: "Michael Lee",
        date: "2024-02-10",
        rating: 5,
        title: "Amazing TV for the price",
        content: "The picture quality is outstanding, and the smart features are very responsive.",
        helpful: 45
      },
      {
        author: "Sarah W.",
        date: "2024-01-15",
        rating: 4,
        title: "Good but could be brighter",
        content: "The TV works great, but it could be a bit brighter in well-lit rooms.",
        helpful: 20
      }
    ],
    frequentlyBoughtTogether: [
      { name: "TV Wall Mount", price: 29.99, image: "https://placehold.co/500x500?text=TV+Wall+Mount" },
      { name: "Universal Remote", price: 19.99, image: "https://placehold.co/500x500?text=Universal+Remote" }
    ],
    similarProducts: [
      { name: "LED Smart TV", price: 399.99, rating: 4.5, image: "https://placehold.co/500x500?text=LED+Smart+TV" },
      { name: "QLED Smart TV", price: 699.99, rating: 4.9, image: "https://placehold.co/500x500?text=QLED+Smart+TV" }
    ],
    platform: "BestBuy",
    platformIcon: "https://placehold.co/30x30?text=BestBuy",
    tags: ["4K", "Smart TV", "electronics", "home theater"],
    stock: 10,
    ctaText: "Buy Now",
    ctaLink: "/buy/12346",
    bestPrice: true,
    offerEndsAt: "2025-05-01T23:59:59Z",
    viewsCount: 500,
    soldCount: 200,
    wishlistCount: 100,
    sharedCount: 40
  },
  {
    id: (count++).toString(),
    title: "Smartphone Case for iPhone 13",
    brand: "CaseCo",
    rating: 4.2,
    reviewCount: 45,
    price: 19.99,
    originalPrice: 24.99,
    discount: "20% OFF",
    available: true,
    freeShipping: true,
    category: "Accessories",
    model: "CC-IPH13",
    releaseDate: "2023-12-05",
    description: "Stylish and durable protective case for iPhone 13.",
    features: [
      "Shockproof",
      "Slim design",
      "Easy access to all buttons and ports",
      "Available in multiple colors"
    ],
    variants: [
      { name: "Red", price: 19.99, color: "#FF0000" },
      { name: "Blue", price: 19.99, color: "#0000FF" },
      { name: "Black", price: 19.99, color: "#000000" }
    ],
    colors: [
      { name: "Red", code: "#FF0000" },
      { name: "Blue", code: "#0000FF" },
      { name: "Black", code: "#000000" }
    ],
    images: [
      "https://placehold.co/500x500?text=Case+Red",
      "https://placehold.co/500x500?text=Case+Blue",
      "https://placehold.co/500x500?text=Case+Black"
    ],
    specifications: [
      { name: "Material", value: "Silicone" },
      { name: "Compatibility", value: "iPhone 13" },
      { name: "Weight", value: "50g" }
    ],
    reviews: [
      {
        author: "Tom H.",
        date: "2023-12-12",
        rating: 4,
        title: "Nice fit, decent protection",
        content: "The case fits my iPhone 13 perfectly and offers decent protection against drops.",
        helpful: 10
      },
      {
        author: "Emily R.",
        date: "2023-12-10",
        rating: 5,
        title: "Great case for the price",
        content: "I love the slim design, and it provides good protection without adding bulk.",
        helpful: 15
      }
    ],
    frequentlyBoughtTogether: [
      { name: "Screen Protector", price: 8.99, image: "https://placehold.co/500x500?text=Screen+Protector" },
      { name: "Charging Cable", price: 12.99, image: "https://placehold.co/500x500?text=Charging+Cable" }
    ],
    similarProducts: [
      { name: "iPhone 13 Leather Case", price: 29.99, rating: 4.6, image: "https://placehold.co/500x500?text=iPhone+13+Leather+Case" },
      { name: "iPhone 13 Clear Case", price: 17.99, rating: 4.3, image: "https://placehold.co/500x500?text=iPhone+13+Clear+Case" }
    ],
    platform: "eBay",
    platformIcon: "https://placehold.co/30x30?text=eBay",
    tags: ["iphone case", "accessory", "smartphone", "protective"],
    stock: 50,
    ctaText: "Buy Now",
    ctaLink: "/buy/12347",
    bestPrice: false,
    offerEndsAt: "2025-06-10T23:59:59Z",
    viewsCount: 250,
    soldCount: 75,
    wishlistCount: 30,
    sharedCount: 5
  },
  {
    id: (count++).toString(),
    title: "Portable Power Bank 20000mAh",
    brand: "PowerPlus",
    rating: 4.7,
    reviewCount: 200,
    price: 29.99,
    originalPrice: 39.99,
    discount: "25% OFF",
    available: true,
    freeShipping: true,
    category: "Electronics",
    model: "PB-20000",
    releaseDate: "2024-02-15",
    description: "A high-capacity power bank to keep your devices charged on the go.",
    features: [
      "20000mAh capacity",
      "Fast charging technology",
      "LED battery indicator",
      "Portable and compact design"
    ],
    variants: [
      { name: "Black", price: 29.99, color: "#000000" },
      { name: "White", price: 29.99, color: "#FFFFFF" }
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "White", code: "#FFFFFF" }
    ],
    images: [
      "https://placehold.co/500x500?text=Power+Bank+Black",
      "https://placehold.co/500x500?text=Power+Bank+White"
    ],
    specifications: [
      { name: "Capacity", value: "20000mAh" },
      { name: "Input", value: "5V/2A" },
      { name: "Output", value: "5V/2.4A" }
    ],
    reviews: [
      {
        author: "Liam G.",
        date: "2024-02-18",
        rating: 5,
        title: "Perfect for traveling",
        content: "I used this during a trip, and it charged my phone and tablet multiple times. Highly recommend!",
        helpful: 50
      },
      {
        author: "Sophia T.",
        date: "2024-02-10",
        rating: 4,
        title: "Good but bulky",
        content: "Great power bank, but it's a little bulky. Still, it works as advertised.",
        helpful: 25
      }
    ],
    frequentlyBoughtTogether: [
      { name: "USB-C Charging Cable", price: 10.99, image: "https://placehold.co/500x500?text=USB-C+Cable" },
      { name: "Travel Adapter", price: 15.99, image: "https://placehold.co/500x500?text=Travel+Adapter" }
    ],
    similarProducts: [
      { name: "Portable Power Bank 10000mAh", price: 19.99, rating: 4.4, image: "https://placehold.co/500x500?text=Power+Bank+10000mAh" },
      { name: "Wireless Power Bank", price: 39.99, rating: 4.6, image: "https://placehold.co/500x500?text=Wireless+Power+Bank" }
    ],
    platform: "Amazon",
    platformIcon: "https://placehold.co/30x30?text=Amazon",
    tags: ["power bank", "electronics", "portable", "charging"],
    stock: 75,
    ctaText: "Buy Now",
    ctaLink: "/buy/12348",
    bestPrice: true,
    offerEndsAt: "2025-05-15T23:59:59Z",
    viewsCount: 1024,
    soldCount: 500,
    wishlistCount: 150,
    sharedCount: 60
  },
  {
    id: (count++).toString(),
    title: "Cordless Stick Vacuum Cleaner",
    brand: "CleanSweep",
    rating: 4.9,
    reviewCount: 180,
    price: 149.99,
    originalPrice: 179.99,
    discount: "17% OFF",
    available: true,
    freeShipping: true,
    category: "Home Appliances",
    model: "CSV-2200",
    releaseDate: "2024-03-10",
    description: "Powerful cordless vacuum cleaner for quick and easy home cleaning.",
    features: [
      "Strong suction power",
      "Lightweight and easy to handle",
      "Rechargeable battery with 45 minutes runtime",
      "Comes with multiple attachments"
    ],
    variants: [
      { name: "Black", price: 149.99, color: "#000000" },
      { name: "Red", price: 149.99, color: "#FF0000" }
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Red", code: "#FF0000" }
    ],
    images: [
      "https://placehold.co/500x500?text=Vacuum+Cleaner+Black",
      "https://placehold.co/500x500?text=Vacuum+Cleaner+Red"
    ],
    specifications: [
      { name: "Suction Power", value: "220W" },
      { name: "Battery Life", value: "45 minutes" },
      { name: "Weight", value: "2.5kg" }
    ],
    reviews: [
      {
        author: "Daniel M.",
        date: "2024-03-12",
        rating: 5,
        title: "Best vacuum cleaner I’ve owned",
        content: "This vacuum is lightweight and cleans my house quickly. The battery life is amazing!",
        helpful: 60
      },
      {
        author: "Rachel B.",
        date: "2024-03-08",
        rating: 4,
        title: "Great performance, but a bit noisy",
        content: "The vacuum works great, but it's a bit loud. Otherwise, it's perfect for quick cleaning.",
        helpful: 30
      }
    ],
    frequentlyBoughtTogether: [
      { name: "Vacuum Cleaner Filter", price: 9.99, image: "https://placehold.co/500x500?text=Vacuum+Filter" },{ name: "Floor Cleaning Kit", price: 19.99, image: "https://placehold.co/500x500?text=Floor+Cleaning+Kit" }
    ],
    similarProducts: [
      { name: "Cordless Handheld Vacuum", price: 129.99, rating: 4.8, image: "https://placehold.co/500x500?text=Handheld+Vacuum" },
      { name: "Robot Vacuum Cleaner", price: 299.99, rating: 4.7, image: "https://placehold.co/500x500?text=Robot+Vacuum" }
    ],
    platform: "Walmart",
    platformIcon: "https://placehold.co/30x30?text=Walmart",
    tags: ["vacuum", "home appliances", "cleaning", "cordless"],
    stock: 40,
    ctaText: "Buy Now",
    ctaLink: "/buy/12349",
    bestPrice: true,
    offerEndsAt: "2025-06-01T23:59:59Z",
    viewsCount: 890,
    soldCount: 420,
    wishlistCount: 200,
    sharedCount: 75
  },
  {
    id: (count++).toString(),
    title: "Bluetooth Smart Scale",
    brand: "FitTrack",
    rating: 4.6,
    reviewCount: 150,
    price: 39.99,
    originalPrice: 49.99,
    discount: "20% OFF",
    available: true,
    freeShipping: true,
    category: "Health & Fitness",
    model: "FTS-500",
    releaseDate: "2024-01-25",
    description: "Track your weight, BMI, and other body metrics with this smart Bluetooth scale.",
    features: [
      "Tracks weight, BMI, body fat, and muscle mass",
      "Syncs with health apps",
      "Modern and sleek design",
      "Supports multiple user profiles"
    ],
    variants: [
      { name: "Black", price: 39.99, color: "#000000" },
      { name: "White", price: 39.99, color: "#FFFFFF" }
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "White", code: "#FFFFFF" }
    ],
    images: [
      "https://placehold.co/500x500?text=Smart+Scale+Black",
      "https://placehold.co/500x500?text=Smart+Scale+White"
    ],
    specifications: [
      { name: "Weight Capacity", value: "180kg" },
      { name: "Bluetooth Version", value: "4.0" },
      { name: "Dimensions", value: "30cm x 30cm x 2cm" }
    ],
    reviews: [
      {
        author: "James R.",
        date: "2024-02-01",
        rating: 5,
        title: "Excellent smart scale",
        content: "This scale is accurate, easy to use, and syncs perfectly with my fitness apps.",
        helpful: 45
      },
      {
        author: "Linda H.",
        date: "2024-01-28",
        rating: 4,
        title: "Good, but app could be better",
        content: "The scale works well, but I think the companion app could use some improvements.",
        helpful: 25
      }
    ],
    frequentlyBoughtTogether: [
      { name: "Fitness Tracker", price: 99.99, image: "https://placehold.co/500x500?text=Fitness+Tracker" },
      { name: "Yoga Mat", price: 19.99, image: "https://placehold.co/500x500?text=Yoga+Mat" }
    ],
    similarProducts: [
      { name: "Digital Body Fat Scale", price: 29.99, rating: 4.3, image: "https://placehold.co/500x500?text=Body+Fat+Scale" },
      { name: "Smart Body Analyzer", price: 59.99, rating: 4.7, image: "https://placehold.co/500x500?text=Body+Fat+Scale" }
    ],
    platform: "Amazon",
    platformIcon: "https://placehold.co/30x30?text=Amazon",
    tags: ["power bank", "electronics", "portable", "charging"],
    stock: 75,
    ctaText: "Buy Now",
    ctaLink: "/buy/12348",
    bestPrice: true,
    offerEndsAt: "2025-05-15T23:59:59Z",
    viewsCount: 1024,
    soldCount: 500,
    wishlistCount: 150,
    sharedCount: 60
  },
  {
    id: (count++).toString(),
    title: "Cordless Stick Vacuum Cleaner",
    brand: "CleanSweep",
    rating: 4.9,
    reviewCount: 180,
    price: 149.99,
    originalPrice: 179.99,
    discount: "17% OFF",
    available: true,
    freeShipping: true,
    category: "Home Appliances",
    model: "CSV-2200",
    releaseDate: "2024-03-10",
    description: "Powerful cordless vacuum cleaner for quick and easy home cleaning.",
    features: [
      "Strong suction power",
      "Lightweight and easy to handle",
      "Rechargeable battery with 45 minutes runtime",
      "Comes with multiple attachments"
    ],
    variants: [
      { name: "Black", price: 149.99, color: "#000000" },
      { name: "Red", price: 149.99, color: "#FF0000" }
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Red", code: "#FF0000" }
    ],
    images: [
      "https://placehold.co/500x500?text=Vacuum+Cleaner+Black",
      "https://placehold.co/500x500?text=Vacuum+Cleaner+Red"
    ],
    specifications: [
      { name: "Suction Power", value: "220W" },
      { name: "Battery Life", value: "45 minutes" },
      { name: "Weight", value: "2.5kg" }
    ],
    reviews: [
      {
        author: "Daniel M.",
        date: "2024-03-12",
        rating: 5,
        title: "Best vacuum cleaner I’ve owned",
        content: "This vacuum is lightweight and cleans my house quickly. The battery life is amazing!",
        helpful: 60
      },
      {
        author: "Rachel B.",
        date: "2024-03-08",
        rating: 4,
        title: "Great performance, but a bit noisy",
        content: "The vacuum works great, but it's a bit loud. Otherwise, it's perfect for quick cleaning.",
        helpful: 30
      }
    ],
    frequentlyBoughtTogether: [
      { name: "Vacuum Cleaner Filter", price: 9.99, image: "https://placehold.co/500x500?text=Vacuum+Filter" },{ name: "Floor Cleaning Kit", price: 19.99, image: "https://placehold.co/500x500?text=Floor+Cleaning+Kit" }
    ],
    similarProducts: [
      { name: "Cordless Handheld Vacuum", price: 129.99, rating: 4.8, image: "https://placehold.co/500x500?text=Handheld+Vacuum" },
      { name: "Robot Vacuum Cleaner", price: 299.99, rating: 4.7, image: "https://placehold.co/500x500?text=Robot+Vacuum" }
    ],
    platform: "Walmart",
    platformIcon: "https://placehold.co/30x30?text=Walmart",
    tags: ["vacuum", "home appliances", "cleaning", "cordless"],
    stock: 40,
    ctaText: "Buy Now",
    ctaLink: "/buy/12349",
    bestPrice: true,
    offerEndsAt: "2025-06-01T23:59:59Z",
    viewsCount: 890,
    soldCount: 420,
    wishlistCount: 200,
    sharedCount: 75
  },
  {
    id: "12350",
    title: "Bluetooth Smart Scale",
    brand: "FitTrack",
    rating: 4.6,
    reviewCount: 150,
    price: 39.99,
    originalPrice: 49.99,
    discount: "20% OFF",
    available: true,
    freeShipping: true,
    category: "Health & Fitness",
    model: "FTS-500",
    releaseDate: "2024-01-25",
    description: "Track your weight, BMI, and other body metrics with this smart Bluetooth scale.",
    features: [
      "Tracks weight, BMI, body fat, and muscle mass",
      "Syncs with health apps",
      "Modern and sleek design",
      "Supports multiple user profiles"
    ],
    variants: [
      { name: "Black", price: 39.99, color: "#000000" },
      { name: "White", price: 39.99, color: "#FFFFFF" }
    ],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "White", code: "#FFFFFF" }
    ],
    images: [
      "https://placehold.co/500x500?text=Smart+Scale+Black",
      "https://placehold.co/500x500?text=Smart+Scale+White"
    ],
    specifications: [
      { name: "Weight Capacity", value: "180kg" },
      { name: "Bluetooth Version", value: "4.0" },
      { name: "Dimensions", value: "30cm x 30cm x 2cm" }
    ],
    reviews: [
      {
        author: "James R.",
        date: "2024-02-01",
        rating: 5,
        title: "Excellent smart scale",
        content: "This scale is accurate, easy to use, and syncs perfectly with my fitness apps.",
        helpful: 45
      },
      {
        author: "Linda H.",
        date: "2024-01-28",
        rating: 4,
        title: "Good, but app could be better",
        content: "The scale works well, but I think the companion app could use some improvements.",
        helpful: 25
      }
    ],
    frequentlyBoughtTogether: [
      { name: "Fitness Tracker", price: 99.99, image: "https://placehold.co/500x500?text=Fitness+Tracker" },
      { name: "Yoga Mat", price: 19.99, image: "https://placehold.co/500x500?text=Yoga+Mat" }
    ],
    similarProducts: [
      { name: "Digital Body Fat Scale", price: 29.99, rating: 4.3, image: "https://placehold.co/500x500?text=Body+Fat+Scale" },
      { name: "Smart Body Analyzer", price: 59.99, rating: 4.7, image: "https://placehold.co/500x500?text=Body+Fat+Scale" }
    ],
    platform: "Amazon",
    platformIcon: "https://placehold.co/30x30?text=Amazon",
    tags: ["power bank", "electronics", "portable", "charging"],
    stock: 75,
    ctaText: "Buy Now",
    ctaLink: "/buy/12348",
    bestPrice: true,
    offerEndsAt: "2025-05-15T23:59:59Z",
    viewsCount: 1024,
    soldCount: 500,
    wishlistCount: 150,
    sharedCount: 60
  }
];


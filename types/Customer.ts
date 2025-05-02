export type Customer = {
  name: string;
  avatar: string;
  email: string;
  phone: string;
  location: string;
  memberSince: string;
  tier: string;
  points: number;
  nextTier: {
    name: string;
    points: number;
  };
  orders: {
    total: number;
    pending: number;
    shipped: number;
    delivered: number;
    returned: number;
  };
  favoriteCategories: string[];
  recentPurchases: {
    id: number;
    name: string;
    image: string;
    date: string;
    status: string;
    price: string;
    seller: string;
    tracking: string;
    estimatedDelivery: string;
  }[];
  savedItems: {
    id: number;
    name: string;
    image: string;
    price: string;
    originalPrice: string;
    discount: string;
    seller: string;
    rating: number;
    reviews: number;
    stock: string;
  }[];
  reviews: {
    id: number;
    product: string;
    image: string;
    rating: number;
    date: string;
    comment: string;
    likes: number;
    verified: boolean;
  }[];
  recommendations: {
    id: number;
    name: string;
    image: string;
    price: string;
    originalPrice: string;
    discount: string;
    rating: number;
    reviews: number;
  }[];
  recentlyViewed: {
    id: number;
    name: string;
    image: string;
    price: string;
  }[];
  paymentMethods: {
    id: number;
    type: string;
    last4: string;
    expiry: string;
    default: boolean;
  }[];
  addresses: {
    id: number;
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    default: boolean;
  }[];
  notifications: {
    id: number;
    type: string;
    message: string;
    time: string;
    read: boolean;
  }[];
};

export type Company = {
  name: string;
  logo: string;
  tagline: string;
  industry: string;
  size: string;
  founded: string;
  website: string;
  email: string;
  phone: string;
  location: string;
  memberSince: string;
  tier: string;
  description: string;
  keyMetrics: {
    projects: number;
    ongoing: number;
    completed: number;
    revenue: string;
    growth: string;
  };
  teamMembers: {
    id: number;
    name: string;
    position: string;
    image: string;
    email: string;
  }[];
  recentProjects: {
    id: number;
    name: string;
    client: string;
    image: string;
    startDate: string;
    endDate: string;
    status: string;
    completion: number;
    budget: string;
    team: number;
  }[];
  services: {
    id: number;
    name: string;
    description: string;
    icon: string;
  }[];
  clients: {
    id: number;
    name: string;
    logo: string;
    industry: string;
    projects: number;
  }[];
  certifications: {
    id: number;
    name: string;
    issuer: string;
    date: string;
    expiry: string;
    icon: string;
  }[];
  testimonials: {
    id: number;
    text: string;
    author: string;
    position: string;
    company: string;
    image: string;
    rating: number;
  }[];
  insights: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
  }[];
  financials: {
    revenueByQuarter: {
      quarter: string;
      amount: number;
    }[];
    projectsByIndustry: {
      industry: string;
      percentage: number;
    }[];
    upcomingPayments: {
      id: number;
      client: string;
      amount: string;
      dueDate: string;
      invoice: string;
    }[];
  };
  documents: {
    id: number;
    name: string;
    type: string;
    size: string;
    uploadedOn: string;
  }[];
};

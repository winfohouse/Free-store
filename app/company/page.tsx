'use client'
import renderDashboard from '@/components/layout/company/renderDashboard';
import renderFinancials from '@/components/layout/company/renderFinancials';
import renderProjects from '@/components/layout/company/renderProjects';
import renderServices from '@/components/layout/company/renderServices';
import { Button, TabButton } from '@/components/layout/customer/compnents';
import { Company } from '@/types/Company';
import {
  Briefcase,
  Building,
  ChevronDown,
  DollarSign,
  Edit,
  HelpCircle,
  Package
} from 'lucide-react';
import { useState } from 'react';

// Company Profile Page
const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const company: Company = {
    name: "TechNova Solutions",
    logo: "https://placehold.co/80x80",
    tagline: "Innovative Technology Solutions for Modern Businesses",
    industry: "Information Technology",
    size: "Medium Enterprise (100-499 employees)",
    founded: "2015",
    website: "www.technovasolutions.com",
    email: "contact@technovasolutions.com",
    phone: "+1 (555) 987-6543",
    location: "San Francisco, CA",
    memberSince: "June 2020",
    tier: "Enterprise Partner",
    description: "TechNova Solutions specializes in creating innovative software solutions for businesses of all sizes. We focus on cloud-based software, AI integrations, and custom web and mobile applications that help companies streamline operations and grow their digital presence.",
    keyMetrics: {
      projects: 124,
      ongoing: 15,
      completed: 109,
      revenue: "$4.2M",
      growth: "27%"
    },
    teamMembers: [
      {
        id: 1,
        name: "Michael Chen",
        position: "CEO & Founder",
        image: "https://placehold.co/80x80",
        email: "michael.chen@technovasolutions.com"
      },
      {
        id: 2,
        name: "Elena Rodriguez",
        position: "CTO",
        image: "https://placehold.co/80x80",
        email: "elena.rodriguez@technovasolutions.com"
      },
      {
        id: 3,
        name: "David Kim",
        position: "Head of Business Development",
        image: "https://placehold.co/80x80",
        email: "david.kim@technovasolutions.com"
      },
      {
        id: 4,
        name: "Sarah Wilson",
        position: "Lead Project Manager",
        image: "https://placehold.co/80x80",
        email: "sarah.wilson@technovasolutions.com"
      }
    ],
    recentProjects: [
      {
        id: 1,
        name: "ERP System Implementation",
        client: "Global Manufacturing Inc.",
        image: "https://placehold.co/100x100",
        startDate: "Jan 2025",
        endDate: "June 2025",
        status: "In Progress",
        completion: 65,
        budget: "$320,000",
        team: 8
      },
      {
        id: 2,
        name: "E-commerce Platform Redesign",
        client: "FashionTrends Retail",
        image: "https://placehold.co/100x100",
        startDate: "Nov 2024",
        endDate: "March 2025",
        status: "In Progress",
        completion: 78,
        budget: "$175,000",
        team: 5
      },
      {
        id: 3,
        name: "Mobile Banking Application",
        client: "SecureBank Financial",
        image: "https://placehold.co/100x100",
        startDate: "Aug 2024",
        endDate: "Feb 2025",
        status: "Completed",
        completion: 100,
        budget: "$290,000",
        team: 7
      }
    ],
    services: [
      {
        id: 1,
        name: "Custom Software Development",
        description: "End-to-end software development tailored to your business needs",
        icon: "code"
      },
      {
        id: 2,
        name: "Cloud Migration & Hosting",
        description: "Secure and scalable cloud infrastructure solutions",
        icon: "cloud"
      },
      {
        id: 3,
        name: "AI & Machine Learning Integration",
        description: "Smart automation and data analysis capabilities",
        icon: "brain"
      },
      {
        id: 4,
        name: "UI/UX Design",
        description: "User-centered design that enhances user experience",
        icon: "layout"
      }
    ],
    clients: [
      {
        id: 1,
        name: "Global Manufacturing Inc.",
        logo: "https://placehold.co/80x80",
        industry: "Manufacturing",
        projects: 3
      },
      {
        id: 2,
        name: "FashionTrends Retail",
        logo: "https://placehold.co/80x80",
        industry: "Retail",
        projects: 1
      },
      {
        id: 3,
        name: "SecureBank Financial",
        logo: "https://placehold.co/80x80",
        industry: "Finance",
        projects: 2
      },
      {
        id: 4,
        name: "HealthPlus Medical Group",
        logo: "https://placehold.co/80x80",
        industry: "Healthcare",
        projects: 4
      },
      {
        id: 5,
        name: "EduSmart Learning",
        logo: "https://placehold.co/80x80",
        industry: "Education",
        projects: 2
      }
    ],
    certifications: [
      {
        id: 1,
        name: "ISO 27001 Certified",
        issuer: "International Organization for Standardization",
        date: "2023",
        expiry: "2026",
        icon: "shield"
      },
      {
        id: 2,
        name: "AWS Advanced Consulting Partner",
        issuer: "Amazon Web Services",
        date: "2022",
        expiry: "2025",
        icon: "cloud"
      },
      {
        id: 3,
        name: "Google Cloud Partner",
        issuer: "Google",
        date: "2021",
        expiry: "2024",
        icon: "cloud"
      }
    ],
    testimonials: [
      {
        id: 1,
        text: "TechNova transformed our outdated systems into a streamlined digital solution that increased our productivity by 40%. Their team was professional, responsive, and delivered exactly what we needed.",
        author: "Jennifer Adams",
        position: "CIO, Global Manufacturing Inc.",
        company: "Global Manufacturing Inc.",
        image: "https://placehold.co/60x60",
        rating: 5
      },
      {
        id: 2,
        text: "The mobile banking app developed by TechNova exceeded our expectations. Our customers love the intuitive interface and enhanced security features. We've seen a 25% increase in mobile transactions since launch.",
        author: "Marcus Johnson",
        position: "Digital Banking Director",
        company: "SecureBank Financial",
        image: "https://placehold.co/60x60",
        rating: 5
      }
    ],
    insights: [
      {
        id: 1,
        title: "The Future of AI in Enterprise Software",
        excerpt: "Exploring how artificial intelligence is transforming business applications and what's next for enterprise software.",
        date: "April 10, 2025",
        readTime: "5 min read",
        image: "https://placehold.co/200x120"
      },
      {
        id: 2,
        title: "Cloud Migration Strategies for Mid-sized Businesses",
        excerpt: "A comprehensive guide to planning and executing a successful cloud migration with minimal disruption.",
        date: "March 28, 2025",
        readTime: "7 min read",
        image: "https://placehold.co/200x120"
      },
      {
        id: 3,
        title: "Cybersecurity Best Practices for 2025",
        excerpt: "Essential security measures every business should implement to protect their digital assets.",
        date: "March 15, 2025",
        readTime: "6 min read",
        image: "https://placehold.co/200x120"
      }
    ],
    financials: {
      revenueByQuarter: [
        { quarter: "Q1 2024", amount: 850000 },
        { quarter: "Q2 2024", amount: 920000 },
        { quarter: "Q3 2024", amount: 1050000 },
        { quarter: "Q4 2024", amount: 1380000 }
      ],
      projectsByIndustry: [
        { industry: "Finance", percentage: 30 },
        { industry: "Healthcare", percentage: 25 },
        { industry: "Retail", percentage: 20 },
        { industry: "Manufacturing", percentage: 15 },
        { industry: "Education", percentage: 10 }
      ],
      upcomingPayments: [
        {
          id: 1,
          client: "Global Manufacturing Inc.",
          amount: "$65,000",
          dueDate: "April 30, 2025",
          invoice: "INV-2025-042"
        },
        {
          id: 2,
          client: "FashionTrends Retail",
          amount: "$48,500",
          dueDate: "May 15, 2025",
          invoice: "INV-2025-047"
        }
      ]
    },
    documents: [
      {
        id: 1,
        name: "Company Profile 2025",
        type: "PDF",
        size: "3.2 MB",
        uploadedOn: "Jan 15, 2025"
      },
      {
        id: 2,
        name: "Service Catalog",
        type: "PDF",
        size: "5.7 MB",
        uploadedOn: "Feb 20, 2025"
      },
      {
        id: 3,
        name: "Case Studies Bundle",
        type: "ZIP",
        size: "12.4 MB",
        uploadedOn: "Mar 5, 2025"
      },
      {
        id: 4,
        name: "Financial Summary 2024",
        type: "Excel",
        size: "1.8 MB",
        uploadedOn: "Mar 30, 2025"
      }
    ]
  };

  

  // Main component render
  return (
    <div className="max-w-screen-xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{company.name}</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Member since {company.memberSince}</span>
            <Button icon={<HelpCircle size={14} />}>Get Help</Button>
            <Button primary icon={<Edit size={14} />}>Edit Profile</Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border"
          >
            <span className="font-medium">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'projects' && 'Projects & Portfolio'}
              {activeTab === 'services' && 'Services & Solutions'}
              {activeTab === 'financials' && 'Financial Overview'}
            </span>
            <ChevronDown size={18} className={`transition-transform ${activeMobileMenu ? 'rotate-180' : ''}`} />
          </button>

          {activeMobileMenu && (
            <div className="bg-white rounded-lg shadow-lg mt-1 border overflow-hidden">
              <button
                onClick={() => { setActiveTab('dashboard'); setActiveMobileMenu(false); }}
                className={`w-full text-left p-3 hover:bg-gray-50 ${activeTab === 'dashboard' ? 'bg-gray-50 font-medium' : ''}`}
              >
                Dashboard
              </button>
              <button
                onClick={() => { setActiveTab('projects'); setActiveMobileMenu(false); }}
                className={`w-full text-left p-3 hover:bg-gray-50 ${activeTab === 'projects' ? 'bg-gray-50 font-medium' : ''}`}
              >
                Projects & Portfolio
              </button>
              <button
                onClick={() => { setActiveTab('services'); setActiveMobileMenu(false); }}
                className={`w-full text-left p-3 hover:bg-gray-50 ${activeTab === 'services' ? 'bg-gray-50 font-medium' : ''}`}
              >
                Services & Solutions
              </button>
              <button
                onClick={() => { setActiveTab('financials'); setActiveMobileMenu(false); }}
                className={`w-full text-left p-3 hover:bg-gray-50 ${activeTab === 'financials' ? 'bg-gray-50 font-medium' : ''}`}
              >
                Financial Overview
              </button>
            </div>
          )}
        </div>

        {/* Desktop tabs */}
        <div className="hidden md:flex space-x-2 border-b">
          <TabButton
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
            icon={<Building size={16} />}
          >
            Dashboard
          </TabButton>
          <TabButton
            active={activeTab === 'projects'}
            onClick={() => setActiveTab('projects')}
            icon={<Briefcase size={16} />}
          >
            Projects & Portfolio
          </TabButton>
          <TabButton
            active={activeTab === 'services'}
            onClick={() => setActiveTab('services')}
            icon={<Package size={16} />}
          >
            Services & Solutions
          </TabButton>
          <TabButton
            active={activeTab === 'financials'}
            onClick={() => setActiveTab('financials')}
            icon={<DollarSign size={16} />}
          >
            Financial Overview
          </TabButton>
        </div>
      </div>

      {activeTab === 'dashboard' && renderDashboard(company)}
      {activeTab === 'projects' && renderProjects(company)}
      {activeTab === 'services' && renderServices(company)}
      {activeTab === 'financials' && renderFinancials(company)}
    </div>
  );
};

export default CompanyProfile;

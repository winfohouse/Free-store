import { Company } from "@/types/Company";
import { Award, Badge, BarChart, Bell, Briefcase, Calendar, Edit, FileText, MessageCircle, RefreshCw, Share2, Shield, Star, TrendingUp, UserPlus, Users } from "lucide-react";
import { Button, ProfileCard, ProgressBar } from "../customer/compnents";

const renderDashboard = (company: Company) => (
    <div>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <ProfileCard className="h-full">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="relative">
                <img src={company.logo} alt={company.name} className="w-24 h-24 rounded-md object-cover" />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full border-2 border-white">
                  <Shield size={16} />
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold">{company.name}</h2>
                  <Badge color="blue">{company.tier}</Badge>
                </div>
                <p className="text-gray-500 text-sm mb-2">{company.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge color="gray">{company.industry}</Badge>
                  <Badge color="gray">{company.size}</Badge>
                  <Badge color="gray">Est. {company.founded}</Badge>
                </div>
                <div className="flex gap-2">
                  <Button primary icon={<Edit size={14} />}>Edit Profile</Button>
                  <Button icon={<Share2 size={14} />}>Share Profile</Button>
                </div>
              </div>
            </div>
          </ProfileCard>
        </div>
        <div className="flex-1">
          <ProfileCard className="h-full">
            <h3 className="font-semibold mb-4 flex items-center">
              <BarChart size={18} className="mr-2 text-blue-600" />
              Business Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-xl font-bold text-blue-600">{company.keyMetrics.projects}</p>
                <p className="text-xs text-gray-600">Total Projects</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-xl font-bold text-amber-600">{company.keyMetrics.ongoing}</p>
                <p className="text-xs text-gray-600">Ongoing</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-xl font-bold text-green-600">{company.keyMetrics.completed}</p>
                <p className="text-xs text-gray-600">Completed</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center md:col-span-2">
                <p className="text-xl font-bold text-purple-600">{company.keyMetrics.revenue}</p>
                <p className="text-xs text-gray-600">Annual Revenue</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-xl font-bold text-green-600">+{company.keyMetrics.growth}</p>
                <p className="text-xs text-gray-600">YOY Growth</p>
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full" icon={<FileText size={14} />}>View Full Report</Button>
            </div>
          </ProfileCard>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md p-6 text-white">
          <div className="flex items-center mb-2">
            <TrendingUp size={20} className="mr-2" />
            <h3 className="font-semibold">Growth Opportunities</h3>
          </div>
          <p className="text-sm mb-4">3 potential partnership opportunities identified</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">View Details</Button>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-md p-6 text-white">
          <div className="flex items-center mb-2">
            <Calendar size={20} className="mr-2" />
            <h3 className="font-semibold">Upcoming Events</h3>
          </div>
          <p className="text-sm mb-4">2 industry conferences this month</p>
          <Button className="bg-white text-purple-600 hover:bg-blue-50">View Calendar</Button>
        </div>
        <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg shadow-md p-6 text-white">
          <div className="flex items-center mb-2">
            <Bell size={20} className="mr-2" />
            <h3 className="font-semibold">Announcements</h3>
          </div>
          <p className="text-sm mb-4">New service launch next week</p>
          <Button className="bg-white text-amber-600 hover:bg-blue-50">Learn More</Button>
        </div>
      </div>

      <ProfileCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <Briefcase size={18} className="mr-2 text-blue-600" />
            Current Projects
          </h3>
          <Button className="text-xs">View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Project</th>
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Client</th>
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Timeline</th>
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Status</th>
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Completion</th>
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Team</th>
              </tr>
            </thead>
            <tbody>
              {company.recentProjects.map(project => (
                <tr key={project.id} className="border-b hover:bg-gray-50">
                  <td className="py-4">
                    <div className="flex items-center">
                      <img src={project.image} alt={project.name} className="w-10 h-10 rounded-md mr-3" />
                      <div>
                        <p className="font-medium text-sm line-clamp-1">{project.name}</p>
                        <p className="text-xs text-gray-500">{project.budget}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">{project.client}</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">{project.startDate} - {project.endDate}</p>
                  </td>
                  <td className="py-4">
                    <Badge
                      color={
                        project.status === 'Completed' ? 'green' :
                          project.status === 'In Progress' ? 'blue' :
                            project.status === 'On Hold' ? 'amber' : 'blue'
                      }
                    >
                      {project.status}
                    </Badge>
                  </td>
                  <td className="py-4 w-32">
                    <div className="flex items-center">
                      <div className="flex-grow mr-2">
                        <ProgressBar
                          percentage={project.completion}
                          color={project.completion === 100 ? 'green' : 'blue'}
                        />
                      </div>
                      <span className="text-xs">{project.completion}%</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <Users size={16} className="text-gray-500 mr-1" />
                      <span className="text-sm">{project.team}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProfileCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ProfileCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center">
              <Users size={18} className="mr-2 text-blue-600" />
              Key Team Members
            </h3>
            <Button className="text-xs" icon={<UserPlus size={14} />}>Add Member</Button>
          </div>
          <div className="space-y-4">
            {company.teamMembers.map(member => (
              <div key={member.id} className="flex items-center border rounded-lg p-3 hover:shadow-md transition-shadow">
                <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full mr-4" />
                <div className="flex-grow">
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.position}</p>
                </div>
                <Button className="text-xs px-2 py-1">View</Button>
              </div>
            ))}
          </div>
        </ProfileCard>

        <ProfileCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center">
              <Award size={18} className="mr-2 text-blue-600" />
              Certifications & Partnerships
            </h3>
            <Button className="text-xs">View All</Button>
          </div>
          <div className="space-y-4">
            {company.certifications.map(cert => (
              <div key={cert.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Shield size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{cert.name}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>Valid until {cert.expiry}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ProfileCard>
      </div>

      <ProfileCard className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <MessageCircle size={18} className="mr-2 text-blue-600" />
            Client Testimonials
          </h3>
          <Button icon={<RefreshCw size={14} />} className="text-xs">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {company.testimonials.map(testimonial => (
            <div key={testimonial.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </ProfileCard>

      <ProfileCard className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <FileText size={18} className="mr-2 text-blue-600" />
            Insights & Resources
          </h3>
          <Button className="text-xs">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {company.insights.map(insight => (
            <div key={insight.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img src={insight.image} alt={insight.title} className="w-full h-36 object-cover" />
              <div className="p-4">
                <h4 className="font-medium mb-2">{insight.title}</h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{insight.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{insight.date}</span>
                  <span>{insight.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ProfileCard>
    </div>
  );

export default renderDashboard;

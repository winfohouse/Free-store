import { Company } from "@/types/Company";
import { Briefcase, Filter, PieChart, Search } from "lucide-react";
import { Button, ProfileCard, ProgressBar } from "../customer/compnents";
import { ProjectsList, ProjectsStates } from "./components";

const renderProjects = (company: Company) => (
  <div>
    <ProfileCard>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold">Projects & Portfolio</h3>
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <Button icon={<Filter size={14} />}>Filter</Button>
          <select className="border rounded-lg px-3 py-2 text-sm bg-white">
            <option>All Time</option>
            <option>Last 6 months</option>
            <option>2025</option>
            <option>2024</option>
            <option>By Industry</option>
          </select>
        </div>
      </div>

      {/* Project status */}
      {ProjectsStates(company)}

      {/* Project list */}
      {ProjectsList(company)}

    </ProfileCard>
    {/* Industry distribution chart */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <ProfileCard>
        <h3 className="font-semibold flex items-center mb-4">
          <PieChart size={18} className="mr-2 text-blue-600" />
          Projects by Industry
        </h3>
        <div className="space-y-4">
          {company.financials.projectsByIndustry.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{item.industry}</span>
                <span className="text-sm text-gray-600">{item.percentage}%</span>
              </div>
              <ProgressBar
                percentage={item.percentage}
                color={index % 2 === 0 ? 'blue' : (index % 3 === 0 ? 'green' : 'amber')}
              />
            </div>
          ))}
        </div>
      </ProfileCard>

      <ProfileCard>
        <h3 className="font-semibold flex items-center mb-4">
          <Briefcase size={18} className="mr-2 text-blue-600" />
          Client Portfolio
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {company.clients.map(client => (
            <div key={client.id} className="flex items-center border rounded-lg p-3 hover:shadow-md transition-shadow">
              <img src={client.logo} alt={client.name} className="w-12 h-12 rounded-md mr-3" />
              <div>
                <h4 className="font-medium text-sm">{client.name}</h4>
                <p className="text-xs text-gray-500">{client.industry}</p>
                <p className="text-xs text-blue-600">{client.projects} projects</p>
              </div>
            </div>
          ))}
        </div>
      </ProfileCard>
    </div>
  </div>
);

export default renderProjects;

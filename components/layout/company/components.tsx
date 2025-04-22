import { Company } from "@/types/Company"
import { AlertCircle, Award, Badge, CheckCircle, ChevronRight, Clock, Download, Edit, List, Users } from "lucide-react"
import { ProgressBar, TabButton } from "../customer/compnents"

export const ProjectsStates = (company: Company)  => {

  {/* Project status tabs */ }
  <div className="flex overflow-x-auto py-2 mb-6 scrollbar-hide">
    <TabButton active={true} icon={<List size={16} />}>
      All Projects ({company.keyMetrics.projects})
    </TabButton>
    <TabButton active={false} icon={<Clock size={16} />}>
      In Progress ({company.keyMetrics.ongoing})
    </TabButton>
    <TabButton active={false} icon={<CheckCircle size={16} />}>
      Completed ({company.keyMetrics.completed})
    </TabButton>
    <TabButton active={false} icon={<Award size={16} />}>
      Featured
    </TabButton>
    <TabButton active={false} icon={<AlertCircle size={16} />}>
      Needs Attention
    </TabButton>
  </div>

  {/* Project stats summary */ }
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <div className="bg-blue-50 p-4 rounded-lg">
      <h4 className="text-sm text-blue-700 mb-2">Project Success Rate</h4>
      <p className="text-2xl font-bold text-blue-700">97%</p>
    </div>
    <div className="bg-green-50 p-4 rounded-lg">
      <h4 className="text-sm text-green-700 mb-2">On-time Delivery</h4>
      <p className="text-2xl font-bold text-green-700">92%</p>
    </div>
    <div className="bg-amber-50 p-4 rounded-lg">
      <h4 className="text-sm text-amber-700 mb-2">Budget Adherence</h4>
      <p className="text-2xl font-bold text-amber-700">95%</p>
    </div>

    <div className="bg-purple-50 p-4 rounded-lg">
      <h4 className="text-sm text-purple-700 mb-2">Client Satisfaction</h4>
      <p className="text-2xl font-bold text-purple-700">4.9/5</p>
    </div>
  </div>
}


export const ProjectsList = (company: Company) => {

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
                <th className="pb-3 text-left font-medium text-gray-600 text-sm">Actions</th>
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
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit size={16} />
                      </button>
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Download size={16} />
                      </button>
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
}

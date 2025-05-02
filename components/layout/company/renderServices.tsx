import { Package, Globe, Mail, Phone, MapPin, FileText, Download } from "lucide-react";
import { ProfileCard, Button } from "../customer/compnents";
import { Company } from "@/types/Company";

  const renderServices = (company: Company) => (
    <div>
      <ProfileCard>
        <h3 className="text-xl font-bold mb-6">Services & Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {company.services.map((service, index) => (
            <div key={service.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full mr-4 ${index % 4 === 0 ? 'bg-blue-100 text-blue-600' :
                  index % 4 === 1 ? 'bg-green-100 text-green-600' :
                    index % 4 === 2 ? 'bg-purple-100 text-purple-600' :
                      'bg-amber-100 text-amber-600'
                  }`}>
                  <Package size={24} />
                </div>
                <h4 className="font-semibold text-lg">{service.name}</h4>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button>Learn More</Button>
            </div>
          ))}
        </div>
      </ProfileCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <ProfileCard className="md:col-span-2">
          <h3 className="font-semibold mb-4">Company Description</h3>
          <p className="text-gray-700 mb-4">{company.description}</p>
          <h4 className="font-medium mb-2">Contact Information</h4>
          <div className="space-y-2 mb-4">
            <div className="flex items-center">
              <Globe size={16} className="text-gray-500 mr-2" />
              <span className="text-sm">{company.website}</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="text-gray-500 mr-2" />
              <span className="text-sm">{company.email}</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="text-gray-500 mr-2" />
              <span className="text-sm">{company.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="text-gray-500 mr-2" />
              <span className="text-sm">{company.location}</span>
            </div>
          </div>
          <Button primary>Contact Us</Button>
        </ProfileCard>

        <ProfileCard>
          <h3 className="font-semibold mb-4">Documents & Resources</h3>
          <div className="space-y-3">
            {company.documents.map(doc => (
              <div key={doc.id} className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <div className="p-2 bg-blue-50 rounded-md mr-3">
                  <FileText size={20} className="text-blue-600" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-sm">{doc.name}</p>
                  <div className="flex text-xs text-gray-500">
                    <span>{doc.type}</span>
                    <span className="mx-1">•</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
                <Button className="text-xs px-2 py-1" icon={<Download size={14} />}>
                  Download
                </Button>
              </div>
            ))}
          </div>
        </ProfileCard>
      </div>
    </div>
  );

export default renderServices;

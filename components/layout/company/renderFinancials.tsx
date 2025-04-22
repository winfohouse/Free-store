import { Company } from "@/types/Company";
import { Badge, Download, TrendingUp } from "lucide-react";
import { Button, ProfileCard } from "../customer/compnents";

  const renderFinancials = (company: Company) => (
    <div>
      <ProfileCard>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-bold">Financial Overview</h3>
          <div className="flex gap-3">
            <select className="border rounded-lg px-3 py-2 text-sm bg-white">
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
            <Button icon={<Download size={14} />}>Export</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm text-gray-600 mb-1">Total Revenue</h4>
            <p className="text-2xl font-bold text-gray-900">{company.keyMetrics.revenue}</p>
            <div className="flex items-center text-green-600 text-sm mt-1">
              <TrendingUp size={14} className="mr-1" />
              <span>{company.keyMetrics.growth} vs last year</span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm text-gray-600 mb-1">Avg. Project Value</h4>
            <p className="text-2xl font-bold text-gray-900">$245K</p>
            <div className="flex items-center text-green-600 text-sm mt-1">
              <TrendingUp size={14} className="mr-1" />
              <span>12% vs last year</span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm text-gray-600 mb-1">Profit Margin</h4>
            <p className="text-2xl font-bold text-gray-900">32%</p>
            <div className="flex items-center text-green-600 text-sm mt-1">
              <TrendingUp size={14} className="mr-1" />
              <span>5% vs last year</span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm text-gray-600 mb-1">Recurring Revenue</h4>
            <p className="text-2xl font-bold text-gray-900">$950K</p>
            <div className="flex items-center text-green-600 text-sm mt-1">
              <TrendingUp size={14} className="mr-1" />
              <span>18% vs last year</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-4">Revenue by Quarter</h4>
          <div className="h-64 bg-gray-50 rounded-lg p-4 flex items-end">
            {company.financials.revenueByQuarter.map((quarter, index) => (
              <div
                key={index}
                className="flex-1 mx-1"
              >
                <div
                  className="bg-blue-600 rounded-t-md hover:bg-blue-700 transition-colors"
                  style={{
                    height: `${(quarter.amount / 1400000) * 100}%`,
                    maxHeight: '90%'
                  }}
                />
                <div className="text-center mt-2">
                  <p className="text-xs font-medium">{quarter.quarter}</p>
                  <p className="text-xs text-gray-500">${(quarter.amount / 1000000).toFixed(1)}M</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4">Upcoming Payments</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left font-medium text-gray-600 text-sm">Client</th>
                  <th className="pb-3 text-left font-medium text-gray-600 text-sm">Invoice</th>
                  <th className="pb-3 text-left font-medium text-gray-600 text-sm">Amount</th>
                  <th className="pb-3 text-left font-medium text-gray-600 text-sm">Due Date</th>
                  <th className="pb-3 text-left font-medium text-gray-600 text-sm">Status</th>
                  <th className="pb-3 text-left font-medium text-gray-600 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {company.financials.upcomingPayments.map(payment => (
                  <tr key={payment.id} className="border-b hover:bg-gray-50">
                    <td className="py-4">
                      <p className="text-sm font-medium">{payment.client}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm">{payment.invoice}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm font-medium">{payment.amount}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm">{payment.dueDate}</p>
                    </td>
                    <td className="py-4">
                      <Badge color="amber">Pending</Badge>
                    </td>
                    <td className="py-4">
                      <Button className="text-xs">Send Reminder</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ProfileCard>
    </div>
  );
export default renderFinancials;

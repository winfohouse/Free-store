
// Reusable components
export const ProfileCard = ({ children , className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 mb-6 ${className}`}>
    {children}
  </div>
);

export const TabButton = ({ active, onClick, children, icon }:{ active: boolean, onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void, children: React.ReactNode, icon?: React.ReactNode}) => (
  <button 
    onClick={onClick}
    className={`flex items-center px-4 py-3 rounded-md transition-all ${
      active 
        ? 'bg-blue-600 text-white' 
        : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    <span className="font-medium text-sm">{children}</span>
  </button>
);

export const Badge = ({ children, color = "blue" }: { children: React.ReactNode, color?: "blue" | "green" | "red" | "amber" | "purple" }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    amber: "bg-amber-100 text-amber-800",
    purple: "bg-purple-100 text-purple-800"
  };
  
  return (
    <span className={`${colorClasses[color]} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
      {children}
    </span>
  );
};

export const Button = ({ children, primary = false, className = "", icon = null }: { children: React.ReactNode, primary?: boolean, className?: string, icon?: React.ReactNode }) => (
  <button
    className={`flex items-center justify-center px-4 py-2 rounded-md font-medium text-sm transition-colors ${
      primary 
        ? 'bg-blue-600 text-white hover:bg-blue-700' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    } ${className}`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {children}
  </button>
);

export const ProgressBar = ({ percentage, color = "blue" }: {percentage: number, color?: "blue" | "green" | "amber" }) => {
  const colorClasses = { 
    blue: "bg-blue-600",
    green: "bg-green-600",
    amber: "bg-amber-500"
  };
  
  return (
    <div className="w-full bg-gray- 200 rounded-full h-2">
      <div 
        className={`${colorClasses[color]} h-2 rounded-full`} 
        style={{ width: `${percentage}%` }} 
      />
    </div>
  );
};



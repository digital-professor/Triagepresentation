import { AlertTriangle, Laptop, Database, Link, TrendingUp } from "lucide-react";

export function InvestmentSlide() {
  const limitations = [
    { icon: Database, title: "Scalability", description: "Excel becomes slow with larger datasets and is not a secure, multi-user database." },
    { icon: AlertTriangle, title: "Data Validation", description: "The current system cannot automatically flag contradictory or incomplete answers." },
    { icon: Laptop, title: "Development Bottleneck", description: "Current hardware limits the speed and complexity of innovative solutions." },
  ];

  const investments = [
    { icon: Laptop, title: "Higher-Specification Laptop", description: "To efficiently handle larger datasets, run complex automations, and develop future data-driven solutions." },
    { icon: Database, title: "Database Integration (SQL/Dataverse)", description: "To move from Excel to a secure, scalable database and implement data validation rules." },
    { icon: Link, title: "System Integration (API Access)", description: "To create live, automated data feeds from our core Student Information System." },
  ];

  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-blue-600 flex-shrink-0" />
        <h1 className="text-slate-900">Scaling the Success: The Business Case for Investment</h1>
      </div>
      
      <p className="text-slate-700 mb-8 leading-relaxed">
        The pilot successfully proved the concept using existing, workaround tools (Excel/VBA). To formalise 
        this as a reliable, scalable business process and replicate this success, we need to address the 
        current technical limitations.
      </p>

      <h2 className="text-slate-900 mb-4">Current Limitations</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {limitations.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4 md:p-6">
              <Icon className="h-6 w-6 md:h-8 md:w-8 text-red-600 mb-3" />
              <h3 className="text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-700">{item.description}</p>
            </div>
          );
        })}
      </div>

      <h2 className="text-slate-900 mb-4">Recommended Investment</h2>
      <div className="space-y-4 mb-8">
        {investments.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4 md:p-6 flex items-start gap-4">
              <Icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-700">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 md:p-8 text-white">
        <h2 className="mb-4 flex items-center gap-3 text-white">
          <TrendingUp className="h-6 w-6 md:h-8 md:w-8" />
          Return on Investment (ROI)
        </h2>
        <p className="text-green-50 leading-relaxed">
          This investment transforms a successful pilot into{" "}
          <span className="font-bold">enterprise-grade infrastructure</span>, allowing us to apply this 
          efficiency model to multiple student cohorts annually and generate even greater returns.
        </p>
      </div>
    </div>
  );
}

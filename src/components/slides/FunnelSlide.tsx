import { Users, FileCheck, Clock, Target } from "lucide-react";

export function FunnelSlide() {
  const metrics = [
    {
      icon: Users,
      value: "~60",
      label: "Students Contacted",
      description: "Initial outreach to the at-risk BFS cohort.",
      color: "blue",
      width: "100%",
    },
    {
      icon: FileCheck,
      value: "41",
      label: "Forms Submitted",
      description: "A ~68% response rate demonstrates strong student engagement with the proactive, digital-first approach.",
      color: "purple",
      width: "85%",
    },
    {
      icon: Clock,
      value: "15.75",
      label: "Hours Saved",
      description: "Successfully filtered out 21 non-viable cases, saving an estimated 15.75 hours of unnecessary advisor time.",
      calculation: "Calculation: 21 cases × 45 mins (30-min call + 15-min notes)",
      color: "green",
      width: "70%",
    },
    {
      icon: Target,
      value: "6",
      label: "Viable CPR Cases",
      description: "Successfully filtered the entire cohort down to a small, manageable group for targeted advisor intervention.",
      color: "orange",
      width: "55%",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <h1 className="text-slate-900 mb-4">The Triage Funnel: Pilot Performance</h1>
      <h2 className="text-slate-600 mb-8">Key metrics demonstrating efficiency and engagement</h2>
      
      <div className="space-y-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const colorClasses = {
            blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
            purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50",
            green: "from-green-500 to-green-600 text-green-600 bg-green-50",
            orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50",
          };
          
          return (
            <div key={index} className="relative">
              <div 
                className={`bg-gradient-to-r ${colorClasses[metric.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[metric.color as keyof typeof colorClasses].split(' ')[1]} rounded-lg p-4 md:p-8 text-white transition-all duration-500`}
                style={{ width: metric.width }}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <Icon className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0" />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2 md:gap-3 mb-2">
                      <span className="font-bold" style={{ fontSize: "2rem", lineHeight: "1.2" }}>{metric.value}</span>
                      <span>{metric.label}</span>
                    </div>
                    <p className="text-white/90 mb-2">{metric.description}</p>
                    {metric.calculation && (
                      <p className="text-white/75 italic" style={{ fontSize: "0.875rem" }}>
                        {metric.calculation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

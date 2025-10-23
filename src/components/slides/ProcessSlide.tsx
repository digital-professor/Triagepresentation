import { Mail, Zap, Search, ListOrdered, Phone, ArrowRight } from "lucide-react";

export function ProcessSlide() {
  const steps = [
    {
      icon: Mail,
      title: "Engage",
      description: "At-risk students are sent a link to the digital triage form.",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Automate",
      description: "Form responses automatically populate the live Excel Data sheet.",
      color: "purple",
    },
    {
      icon: Search,
      title: "Analyse",
      description: "The advisor clicks the 'Refresh' button, running the VBA macro.",
      color: "green",
    },
    {
      icon: ListOrdered,
      title: "Prioritise",
      description: "The tool scores, ranks, and sorts all students on the Triage sheet.",
      color: "orange",
    },
    {
      icon: Phone,
      title: "Action",
      description: "The tool generates clean, sorted Callback Lists for advisors.",
      color: "red",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <h1 className="text-slate-900 mb-4">Mapping the Process: How It Works</h1>
      <h2 className="text-slate-600 mb-8">A 5-step workflow from engagement to action</h2>
      
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const colorClasses = {
            blue: "bg-blue-100 text-blue-600 border-blue-300",
            purple: "bg-purple-100 text-purple-600 border-purple-300",
            green: "bg-green-100 text-green-600 border-green-300",
            orange: "bg-orange-100 text-orange-600 border-orange-300",
            red: "bg-red-100 text-red-600 border-red-300",
          };
          
          return (
            <div key={index} className="flex items-center gap-6">
              <div className={`${colorClasses[step.color as keyof typeof colorClasses]} rounded-full p-4 border-2`}>
                <Icon className="h-8 w-8" />
              </div>
              
              <div className="flex-1 bg-slate-50 rounded-lg p-4 md:p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-slate-900">{index + 1}.</span>
                  <h3 className="text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-700 ml-0 md:ml-8">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="h-6 w-6 text-slate-400 flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

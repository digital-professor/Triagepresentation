import { CheckCircle, TrendingUp, Database, Users } from "lucide-react";

export function RecommendationSlide() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Maximise Efficiency",
      description: "Direct advisor time to high-value cases",
    },
    {
      icon: Database,
      title: "Data-Driven Decisions",
      description: "Enable evidence-based interventions",
    },
    {
      icon: Users,
      title: "Improve Retention",
      description: "Create a clear pathway to support at-risk students",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-green-600 flex-shrink-0" />
        <h1 className="text-slate-900">Primary Recommendation: Formalise and Scale</h1>
      </div>
      
      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 md:p-12 text-white mb-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6">
          <div className="bg-white/20 rounded-full p-4 md:p-6">
            <CheckCircle className="h-12 w-12 md:h-16 md:w-16" />
          </div>
          <div className="flex-1">
            <div className="font-bold mb-2" style={{ fontSize: "1.5rem" }}>RECOMMENDED FOR ADOPTION</div>
            <div className="text-green-100">As Standard Operating Procedure</div>
          </div>
        </div>
        
        <p className="text-green-50 leading-relaxed">
          Based on the pilot's exceptional accuracy, measurable ROI in saved time, and critical strategic 
          insights, this proactive triage model should be adopted as our{" "}
          <span className="font-bold">standard operating procedure</span> for managing at-risk student cohorts.
        </p>
      </div>

      <h2 className="text-slate-900 mb-6">Key Benefits</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-green-100 rounded-full p-4 inline-flex mb-4">
                <Icon className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
              <h3 className="text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

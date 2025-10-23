import { Lightbulb, Users, CheckCircle2, FileEdit } from "lucide-react";

export function InsightsSlide() {
  const insights = [
    {
      icon: Users,
      number: "1",
      title: "CPR is a Micro-Segment Solution",
      description: "The pilot proved CPR is only viable for a very small fraction of the BFS cohort (6 of 41). This stops us from investing heavily in an unscalable strategy.",
      color: "blue",
    },
    {
      icon: CheckCircle2,
      number: "2",
      title: "The Triage Model is a Definitive Success",
      description: "The model's ability to correctly filter out 21 non-viable cases is a major efficiency win. It validates the tool as a reliable method for focusing advisor resources.",
      color: "green",
    },
    {
      icon: FileEdit,
      number: "3",
      title: "Form Design is Critical",
      description: "The 2 outliers caused by incorrect answers highlight the need to refine future forms with clearer questions and validation to improve data quality.",
      color: "purple",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-yellow-600 flex-shrink-0" />
        <h1 className="text-slate-900">Strategic Insights: What We Learned</h1>
      </div>
      
      <h2 className="text-slate-600 mb-8">Three key learnings from the pilot that inform future strategy</h2>

      <div className="space-y-6">
        {insights.map((insight) => {
          const Icon = insight.icon;
          const colorClasses = {
            blue: "from-blue-500 to-blue-600 bg-blue-50 border-blue-200",
            green: "from-green-500 to-green-600 bg-green-50 border-green-200",
            purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-200",
          };
          
          return (
            <div 
              key={insight.number}
              className={`${colorClasses[insight.color as keyof typeof colorClasses].split(' ')[1]} border-2 ${colorClasses[insight.color as keyof typeof colorClasses].split(' ')[2]} rounded-xl p-6`}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className={`bg-gradient-to-br ${colorClasses[insight.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[insight.color as keyof typeof colorClasses].split(' ')[1].replace('bg-', 'to-')} rounded-full p-3 md:p-4 text-white flex-shrink-0`}>
                  <Icon className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-bold text-slate-900">Insight {insight.number}:</span>
                    <h2 className="text-slate-900">{insight.title}</h2>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

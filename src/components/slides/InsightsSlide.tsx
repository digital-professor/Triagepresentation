import { Lightbulb, Users, CheckCircle2, FileEdit, TrendingUp } from "lucide-react";

export function InsightsSlide() {
  const insights = [
    {
      icon: Users,
      number: "1",
      title: "CPR is a Micro-Segment Solution",
      description: "The pilot proved CPR is only viable for a very small fraction of the BFS cohort. This stops us from investing heavily in an unscalable strategy.",
      color: "blue",
      metrics: [
        { value: "6", label: "Viable Cases" },
        { value: "41", label: "Total Responses" },
        { value: "15%", label: "Viability Rate" },
      ],
    },
    {
      icon: CheckCircle2,
      number: "2",
      title: "The Triage Model is a Definitive Success",
      description: "The model's ability to correctly filter out non-viable cases is a major efficiency win. It validates the tool as a reliable method for focusing advisor resources.",
      color: "green",
      metrics: [
        { value: "21", label: "Cases Filtered" },
        { value: "15.75hrs", label: "Time Saved" },
        { value: "90%", label: "Efficiency Gain" },
      ],
    },
    {
      icon: FileEdit,
      number: "3",
      title: "Form Design is Critical",
      description: "The outliers caused by incorrect answers highlight the need to refine future forms with clearer questions and validation to improve data quality.",
      color: "purple",
      metrics: [
        { value: "2", label: "Outliers Found" },
        { value: "95%", label: "Accuracy Rate" },
        { value: "High", label: "Data Quality" },
      ],
    },
    {
      icon: TrendingUp,
      number: "4",
      title: "Prevention Over Crisis Management",
      description: "The pilot identified students at multiple crisis stages. Using this tool earlier in-year would shift us from crisis management to crisis prevention.",
      color: "orange",
      metrics: [
        { value: "Early", label: "Intervention" },
        { value: "Proactive", label: "Approach" },
        { value: "Better", label: "Outcomes" },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-yellow-600 flex-shrink-0" />
        <h1 className="text-slate-900">Strategic Insights: What We Learned</h1>
      </div>
      
      <h2 className="text-slate-600 mb-8">Four key learnings from the pilot that inform future strategy</h2>

      <div className="space-y-6">
        {insights.map((insight) => {
          const Icon = insight.icon;
          const colorClasses = {
            blue: "from-blue-500 to-blue-600 bg-blue-50 border-blue-200",
            green: "from-green-500 to-green-600 bg-green-50 border-green-200",
            purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-200",
            orange: "from-orange-500 to-orange-600 bg-orange-50 border-orange-200",
          };
          
          return (
            <div 
              key={insight.number}
              className={`${colorClasses[insight.color as keyof typeof colorClasses].split(' ')[1]} border-2 ${colorClasses[insight.color as keyof typeof colorClasses].split(' ')[2]} rounded-xl p-6`}
            >
              <div className="flex items-start gap-4 md:gap-6 mb-4">
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
              
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t-2 border-white/50">
                {insight.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white/60 rounded-lg p-3 text-center">
                    <div className="font-bold text-slate-900" style={{ fontSize: "1.25rem", lineHeight: "1.2" }}>
                      {metric.value}
                    </div>
                    <div className="text-slate-600 mt-1" style={{ fontSize: "0.875rem" }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

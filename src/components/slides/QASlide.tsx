import { MessageCircleQuestion, CheckCircle2 } from "lucide-react";

export function QASlide() {
  const stats = [
    { label: "Response Rate", value: "~68% (41/60)" },
    { label: "Advisor Hours Saved", value: "15.75" },
    { label: "Viable CPR Cases Found", value: "6 students" },
    { label: "Potential Revenue at Risk", value: "~£48,000" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-8">
        <MessageCircleQuestion className="h-10 w-10 md:h-12 md:w-12 text-blue-600 flex-shrink-0" />
        <h1 className="text-slate-900">Q&A / Next Steps</h1>
      </div>
      
      <h2 className="text-slate-900 mb-8">Questions & Discussion</h2>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-10 mb-8 border-2 border-blue-200">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle2 className="h-8 w-8 md:h-10 md:w-10 text-blue-600 flex-shrink-0" />
          <h3 className="text-slate-900">Pilot Summary</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 md:p-6 border border-blue-200">
              <div className="font-bold text-blue-600 mb-2" style={{ fontSize: "1.5rem" }}>{stat.value}</div>
              <div className="text-slate-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
          <div className="bg-white rounded-full px-6 md:px-12 py-4 md:py-6">
            <p className="text-slate-900">
              Thank you for your time and consideration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

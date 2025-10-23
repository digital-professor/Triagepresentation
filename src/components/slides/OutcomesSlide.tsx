import { PoundSterling, TrendingUp, Target } from "lucide-react";

export function OutcomesSlide() {
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-green-600 flex-shrink-0" />
        <h1 className="text-slate-900">Pilot Outcomes: Protecting Revenue & Enabling Retention</h1>
      </div>
      
      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 md:p-12 text-white mb-8 text-center shadow-2xl">
        <PoundSterling className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 opacity-90" />
        <div className="font-bold mb-4" style={{ fontSize: "3rem", lineHeight: "1" }}>~£48,000</div>
        <h2 className="mb-2 text-white">Potential Revenue at Risk</h2>
        <p className="text-green-100 max-w-2xl mx-auto">
          Outstanding fees for the 6 identified CPR cases that could be retained if their claims succeed
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
          <h2 className="text-slate-900 mb-4">The Key Difference</h2>
          <p className="text-slate-700 leading-relaxed">
            We already support CPR cases through standard appointments. This tool doesn't create new 
            outcomes—it <span className="font-semibold">identifies the right students faster</span> and{" "}
            <span className="font-semibold">prevents wasted time on unviable cases</span>.
          </p>
        </div>
        
        <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <Target className="h-8 w-8 text-purple-600 flex-shrink-0" />
            <h2 className="text-slate-900">Strategic Value</h2>
          </div>
          <p className="text-slate-700 leading-relaxed">
            By filtering 41 responses down to 6 high-priority cases, we directed our most valuable 
            resource—<span className="font-semibold">senior advisor time</span>—exactly where it could 
            protect institutional revenue.
          </p>
        </div>
      </div>
    </div>
  );
}

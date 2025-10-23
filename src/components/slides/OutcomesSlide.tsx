import { PoundSterling, TrendingUp, Target } from "lucide-react";

export function OutcomesSlide() {
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-green-600 flex-shrink-0" />
        <h1 className="text-slate-900">Pilot Outcomes: The Transformation</h1>
      </div>

      {/* Before/After Comparison */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Traditional Approach - Red */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <h2 className="text-red-900 mb-6 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-600"></div>
            Traditional Reactive Approach
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <div className="text-red-900 mb-1" style={{ fontSize: "1.5rem", lineHeight: "1.2" }}>45 hours</div>
              <p className="text-red-700">Required to meet with all 60 students</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <div className="text-red-900 mb-1" style={{ fontSize: "1.5rem", lineHeight: "1.2" }}>Unknown</div>
              <p className="text-red-700">Efficiency - no filtering mechanism</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <div className="text-red-900 mb-1" style={{ fontSize: "1.5rem", lineHeight: "1.2" }}>Low</div>
              <p className="text-red-700">Engagement - students must book appointments</p>
            </div>
          </div>
        </div>

        {/* Proactive Model - Green */}
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <h2 className="text-green-900 mb-6 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-600"></div>
            Proactive Triage Model
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-green-900 mb-1" style={{ fontSize: "1.5rem", lineHeight: "1.2" }}>4.5 hours</div>
              <p className="text-green-700">Only 6 high-priority cases need appointments</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-green-900 mb-1" style={{ fontSize: "1.5rem", lineHeight: "1.2" }}>90%</div>
              <p className="text-green-700">Efficiency gain through automated filtering</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-green-900 mb-1" style={{ fontSize: "1.5rem", lineHeight: "1.2" }}>68%</div>
              <p className="text-green-700">Response rate - proactive digital engagement</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Revenue Impact */}
      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 md:p-12 text-white text-center shadow-2xl">
        <PoundSterling className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 opacity-90" />
        <div className="font-bold mb-4" style={{ fontSize: "3rem", lineHeight: "1" }}>~£48,000</div>
        <h2 className="mb-2 text-white">Potential Revenue at Risk</h2>
        <p className="text-green-100 max-w-2xl mx-auto">
          Outstanding fees for the 6 identified CPR cases that could be retained if their claims succeed
        </p>
      </div>
    </div>
  );
}

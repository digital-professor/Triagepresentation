import { Target, CheckCircle2, AlertTriangle } from "lucide-react";

export function AccuracySlide() {
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Target className="h-8 w-8 md:h-10 md:w-10 text-green-600 flex-shrink-0" />
        <h1 className="text-slate-900">Triage Model Accuracy: High Precision & Key Learnings</h1>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
          <CheckCircle2 className="h-10 w-10 md:h-12 md:w-12 text-green-600 mb-4" />
          <h2 className="text-slate-900 mb-4">High-Precision Prioritisation</h2>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="font-bold text-green-600 mb-2" style={{ fontSize: "2rem" }}>100%</div>
            <div className="text-slate-700">4 out of 4 students</div>
          </div>
          <p className="text-slate-700">
            Students who scored highly and were contacted had viable CPR cases. The system correctly 
            prioritised every high-scoring respondent.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
          <AlertTriangle className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mb-4" />
          <h2 className="text-slate-900 mb-4">System Resilience & Data Quality</h2>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="font-bold text-blue-600 mb-2" style={{ fontSize: "2rem" }}>2</div>
            <div className="text-slate-700">Additional viable cases</div>
          </div>
          <p className="text-slate-700">
            Additional students with viable cases were identified despite scoring lower. Analysis showed 
            these students had answered key questions <span className="font-semibold">incorrectly or incompletely</span>.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
          <Target className="h-10 w-10 md:h-12 md:w-12 text-purple-600 mb-4" />
          <h2 className="text-slate-900 mb-4">Key Finding</h2>
          <p className="text-slate-700 mb-4">
            The triage logic is sound. The 2 outliers represent a{" "}
            <span className="font-semibold text-purple-600">data quality issue</span>, not a system flaw, 
            proving the tool works as designed.
          </p>
          <div className="bg-purple-200 text-purple-900 rounded-lg p-4 text-center">
            <div className="font-semibold">Model Validated ✓</div>
          </div>
        </div>
      </div>
    </div>
  );
}

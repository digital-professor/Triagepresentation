import { Sparkles, FileText, Zap, Table2, Shield } from "lucide-react";

export function SolutionSlide() {
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-green-600 flex-shrink-0" />
        <h1 className="text-slate-900">The Solution: An Automated Triage Tool</h1>
      </div>
      
      <p className="text-slate-700 mb-8 leading-relaxed">
        To solve this, I developed an automated triage tool, leveraging modern technologies to shift 
        our approach from reactive to proactive. As part of my role in finding innovative solutions 
        to institutional challenges, I used AI as a co-development partner to rapidly build and refine 
        the automation.
      </p>

      <h2 className="text-slate-900 mb-6">Technology Stack</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
          <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-slate-900 mb-2">MS Forms</h3>
          <p className="text-slate-600">Digital triage form for student data collection</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
          <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-slate-900 mb-2">Power Automate</h3>
          <p className="text-slate-600">Automated data flow from Forms to Excel</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
          <Table2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-slate-900 mb-2">Excel + VBA</h3>
          <p className="text-slate-600">Dynamic scoring engine with AI-assisted code</p>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <Shield className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-slate-900 mb-3">Privacy & Compliance</h3>
            <p className="text-slate-700">
              <span className="font-semibold">No student data was processed by generative AI.</span> The 
              AI was only used to generate the scoring code template, ensuring full compliance with data 
              protection requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

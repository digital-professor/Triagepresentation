import { AlertCircle, UserX, Clock } from "lucide-react";

export function ChallengeSlide() {
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="h-8 w-8 md:h-10 md:w-10 text-red-600 flex-shrink-0" />
        <h1 className="text-slate-900">The Challenge: The BFS Cohort</h1>
      </div>
      
      <p className="text-slate-700 mb-8 leading-relaxed">
        A significant cohort of students with outstanding fees (BFS) are unable to re-enrol each year. 
        Our traditional support model has been <span className="font-semibold text-red-600">reactive</span>, 
        relying on students booking time-intensive, one-on-one appointments.
      </p>

      <div className="mb-8 flex justify-center">
        <div className="bg-red-50 rounded-lg p-6 inline-flex items-center gap-4">
          <UserX className="h-16 w-16 md:h-20 md:w-20 text-red-600" />
          <div className="h-12 md:h-16 w-px bg-red-300" />
          <Clock className="h-16 w-16 md:h-20 md:w-20 text-red-600" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
          <h3 className="text-slate-900 mb-3">Problem 1</h3>
          <p className="text-slate-700">
            Creates a <span className="font-semibold">bottleneck</span> for senior advisor time.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
          <h3 className="text-slate-900 mb-3">Problem 2</h3>
          <p className="text-slate-700">
            Risks losing at-risk students who <span className="font-semibold">disengage</span> before seeking help.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
        <h3 className="text-slate-900 mb-3">The Goal</h3>
        <p className="text-slate-700">
          To develop a <span className="font-semibold">proactive, scalable system</span> to identify 
          and support these students more efficiently.
        </p>
      </div>
    </div>
  );
}

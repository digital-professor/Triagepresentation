import { GraduationCap } from "lucide-react";

export function TitleSlide() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 md:p-16 text-white shadow-2xl min-h-[500px] flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-8">
        <GraduationCap className="h-12 w-12 md:h-16 md:w-16" />
      </div>
      
      <h1 className="mb-6 text-white leading-tight font-bold text-[36px] text-center text-balance">
        Proactive Triage Pilot: Supporting Students Through Outstanding Fees to Re-enrollment
      </h1>
      
      <h2 className="mb-12 text-blue-100">
        Analysing the BFS Cohort to Create a Pathway for Student Success
      </h2>
      
      <div className="space-y-2 text-blue-100">
        <p><span className="font-medium text-white">Presented by:</span> [Your Name]</p>
        <p><span className="font-medium text-white">Role:</span> Senior Student Advisor</p>
        <p><span className="font-medium text-white">Date:</span> 17 October 2025</p>
      </div>
    </div>
  );
}

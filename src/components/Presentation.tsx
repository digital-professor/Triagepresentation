import React, { useState } from 'react';
import {
  GraduationCap,
  AlertCircle,
  UserX,
  Clock,
  Sparkles,
  FileText,
  Zap,
  Table2,
  Shield,
  Rocket, // For SolutionSlide
  Mail,
  Search,
  ListOrdered,
  Phone,
  ArrowRight,
  Users,
  FileCheck,
  Target,
  CheckCircle2,
  AlertTriangle,
  PoundSterling,
  TrendingUp,
  Lightbulb,
  FileEdit, // Kept for Insight icon, though content changed
  CheckCircle,
  Database,
  Laptop,
  Link,
  MessageCircleQuestion,
  TrendingDown, // For ImprovedOutcomesSlide
  DollarSign, // For InvestmentSlide
  UserCheck, // For InvestmentSlide
  UserSearch, // For new AccuracySlide
  ChevronLeft, // For Navigator
  ChevronRight, // For Navigator
  Filter, // For Funnel Slide
  Workflow, // For Process Slide
  Smartphone // NEW icon for UX App
} from "lucide-react";

// --- Slide 1: TitleSlide ---
function TitleSlide() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 md:p-16 text-white shadow-2xl min-h-[500px] flex flex-col justify-center items-center">
      <div className="flex items-center gap-4 mb-8">
        <GraduationCap className="h-12 w-12 md:h-16 md:w-16" />
      </div>
      <h1 className="mb-6 text-white leading-tight font-bold text-3xl md:text-4xl text-center text-balance max-w-3xl">
        Proactive Triage Pilot: From Reactive Bottleneck to Student Retention Pathway
      </h1>
      <h2 className="mb-12 text-blue-100 text-center text-balance max-w-2xl">
        Analysing the BFS Cohort to Create a Pathway for Student Success
      </h2>
      <div className="space-y-2 text-blue-100 text-center md:text-left">
        <p><span className="font-semibold text-white">Presented by:</span> Mr. X</p>
        <p><span className="font-semibold text-white">Role:</span> Senior Student Advisor</p>
        <p><span className="font-semibold text-white">Date:</span> 23 October 2025</p>
      </div>
    </div>
  );
}

// --- Slide 2: ExecutiveSummarySlide ---
function ExecutiveSummarySlide() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 md:p-12 shadow-2xl text-white">
      <div className="flex items-center gap-3 mb-6">
        <Target className="h-10 w-10 text-emerald-400 flex-shrink-0" />
        <h1 className="text-white font-bold text-3xl">Executive Summary</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
          <h2 className="text-emerald-400 mb-4 text-lg">The Problem</h2>
          <p className="text-slate-200 leading-relaxed">
            ~60 students with outstanding fees were at risk of non-re-enrollment. Traditional reactive support created a 45-hour bottleneck.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
          <h2 className="text-blue-400 mb-4 text-lg">The Solution</h2>
          <p className="text-slate-200 leading-relaxed">
            A 3-day rapid development of an automated triage tool (MS Forms + Power Automate + Excel VBA) to proactively identify and prioritize students.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur rounded-xl p-8 border border-white/30 mb-6">
        <h2 className="text-white mb-6 text-xl">Pilot Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">~63%</div>
            <div className="text-slate-300 text-sm">Response Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">~82%</div>
            <div className="text-slate-300 text-sm">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">20.25</div>
            <div className="text-slate-300 text-sm">Hours Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">£48k</div>
            <div className="text-slate-300 text-sm">Revenue at Risk</div>
          </div>
        </div>
      </div>
      <div className="bg-emerald-500/20 rounded-lg p-4 border border-emerald-400/30">
        <p className="text-emerald-100 text-center font-semibold">
          ✓ Recommendation: Adopt as standard operating procedure and invest in scalable infrastructure
        </p>
      </div>
    </div>
  );
}

// --- Slide 3: ImprovedChallengeSlide ---
function ImprovedChallengeSlide() {
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="h-10 w-10 text-red-600 flex-shrink-0" />
        <h1 className="text-slate-900 font-bold text-3xl">The Challenge: The BFS Cohort</h1>
      </div>
      <div className="bg-red-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">~60</div>
            <div className="text-slate-700 text-sm">Students with outstanding fees (BFS) annually</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">45min</div>
            <div className="text-slate-700 text-sm">Per appointment (30min call + 15min notes)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">45hrs</div>
            <div className="text-slate-700 text-sm">Total time if all 60 book appointments</div>
          </div>
        </div>
      </div>
      <p className="text-slate-700 mb-8 leading-relaxed text-lg">
        Each year, a significant cohort of students cannot re-enroll due to outstanding fees. Our traditional support model has been <span className="font-semibold text-red-600">reactive</span>, relying on students to book time-intensive, one-on-one appointments.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-600 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-3">
            <Clock className="h-8 w-8 text-red-600 flex-shrink-0" />
            <h3 className="text-slate-900">Problem 1: Resource Bottleneck</h3>
          </div>
          <p className="text-slate-700">
            Creates a <span className="font-semibold">bottleneck</span> for senior advisor time, with many students requiring appointments for issues that may not be viable for CPR.
          </p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-600 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-3">
            <UserX className="h-8 w-8 text-red-600 flex-shrink-0" />
            <h3 className="text-slate-900">Problem 2: Student Disengagement</h3>
          </div>
          <p className="text-slate-700">
            Risks losing at-risk students who <span className="font-semibold">disengage</span> before seeking help, resulting in lost revenue and retention failures.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-white mb-3 text-xl font-bold">Our Goal</h3>
        <p className="text-blue-50 leading-relaxed">
          Develop a <span className="font-semibold">proactive, scalable system</span> to identify viable CPR cases early, direct advisor time efficiently, and prevent revenue loss from student disengagement.
        </p>
      </div>
    </div>
  );
}

// --- Slide 4: SolutionSlide ---
function SolutionSlide() {
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-green-600 flex-shrink-0" />
        <h1 className="text-slate-900 font-bold text-3xl">The Solution: An Automated Triage Tool</h1>
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
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-slate-900 mb-3">Privacy & Compliance</h3>
              <p className="text-slate-700">
                <span className="font-semibold">No student data was processed by generative AI.</span> The
                AI was only used to generate the scoring code template, ensuring full compliance.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <Rocket className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-slate-900 mb-3">Rapid Deployment</h3>
              <p className="text-slate-700">
                <span className="font-semibold">3-Day Development.</span> The entire functional
                pilot (Form, Automation, and Triage Tool) was built and deployed in 3 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Slide 5: ProcessSlide ---
function ProcessSlide() {
  const steps = [
    { icon: Mail, title: "Engage", description: "At-risk students are sent a link to the digital triage form.", color: "blue" },
    { icon: Zap, title: "Automate", description: "Form responses automatically populate the live Excel Data sheet.", color: "purple" },
    { icon: Search, title: "Analyse", description: "The advisor clicks the 'Refresh' button, running the VBA macro.", color: "green" },
    { icon: ListOrdered, title: "Prioritise", description: "The tool scores, ranks, and sorts all students on the Triage sheet.", color: "orange" },
    { icon: Phone, title: "Action", description: "The tool generates clean, sorted Callback Lists for advisors.", color: "red" },
  ];
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
       <div className="flex items-center gap-3 mb-4">
        <Workflow className="h-8 w-8 md:h-10 md:w-10 text-blue-600 flex-shrink-0" />
        <h1 className="text-slate-900 font-bold text-3xl">Mapping the Process: How It Works</h1>
       </div>
      <h2 className="text-slate-600 mb-8">A 5-step workflow from engagement to action</h2>
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const colorClasses = {
            blue: "bg-blue-100 text-blue-600 border-blue-300",
            purple: "bg-purple-100 text-purple-600 border-purple-300",
            green: "bg-green-100 text-green-600 border-green-300",
            orange: "bg-orange-100 text-orange-600 border-orange-300",
            red: "bg-red-100 text-red-600 border-red-300",
          };
          return (
            <div key={index} className="flex items-center gap-6">
              <div className={`${colorClasses[step.color as keyof typeof colorClasses]} rounded-full p-4 border-2`}>
                <Icon className="h-8 w-8" />
              </div>
              <div className="flex-1 bg-slate-50 rounded-lg p-4 md:p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-slate-900">{index + 1}.</span>
                  <h3 className="text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-700 ml-0 md:ml-8">{step.description}</p>
              </div>
              {index < steps.length - 1 && (<ArrowRight className="h-6 w-6 text-slate-400 flex-shrink-0" />)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Slide 6: ImprovedFunnelSlide ---
function ImprovedFunnelSlide() {
  const stages = [
    { value: 60, label: "Students Contacted", icon: Users, color: "blue", pct: 100 },
    { value: 38, label: "Forms Submitted (~63% response, excl. duplicates)", icon: FileCheck, color: "purple", pct: 63 },
    { value: 11, label: "High-Priority Cases Identified", icon: Target, color: "green", pct: 29 },
    { value: 6, label: "New Viable CPR Cases", icon: CheckCircle2, color: "emerald", pct: 16 },
  ];
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <Filter className="h-8 w-8 md:h-10 md:w-10 text-purple-600 flex-shrink-0" />
        <h1 className="text-slate-900 font-bold text-3xl">The Triage Funnel: Pilot Performance</h1>
      </div>
      <h2 className="text-slate-600 mb-8">Efficient filtering from 60 students to 6 new viable cases</h2>
      <div className="flex flex-col items-center gap-4 mb-8">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const widthPct = stage.pct;
          const colorMap: { [key: string]: { bg: string; text: string; light: string } } = {
            blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-100' },
            purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-100' },
            green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-100' },
            emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', light: 'bg-emerald-100' },
          };
          const colors = colorMap[stage.color];
          return (
            <div key={idx} className="w-full flex flex-col items-center">
              <div className={`${colors.bg} text-white rounded-lg p-6 transition-all duration-500 shadow-lg`} style={{ width: `${widthPct}%`, minWidth: '300px' }}>
                <div className="flex items-center gap-4">
                  <Icon className="h-10 w-10 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-3xl font-bold mb-1">{stage.value}</div>
                    <div className="text-sm opacity-90">{stage.label}</div>
                  </div>
                </div>
              </div>
              {idx < stages.length - 1 && (<div className="h-6 w-1 bg-slate-300 my-2" />)}
            </div>
          );
        })}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="h-8 w-8 text-green-600" />
            <h3 className="text-slate-900 font-bold">20.25 Hours Saved</h3>
          </div>
          <p className="text-slate-700 mb-2">Filtered out 27 low-priority cases</p>
          <p className="text-sm text-slate-600 italic">Calculation: 27 × 45min per appointment</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="h-8 w-8 text-purple-600" />
            <h3 className="text-slate-900 font-bold">~82% Efficiency Gain</h3>
          </div>
          <p className="text-slate-700">Reduced 45hr potential workload to an 8.25hr focused workload</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <PoundSterling className="h-8 w-8 text-blue-600" />
            <h3 className="text-slate-900 font-bold">£48k Protected</h3>
          </div>
          <p className="text-slate-700">Outstanding fees for 6 new viable CPR cases now receiving targeted support</p>
        </div>
      </div>
    </div>
  );
}

// --- Slide 7: ImprovedOutcomesSlide ---
function ImprovedOutcomesSlide() {
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="h-10 w-10 text-green-600 flex-shrink-0" />
        <h1 className="text-slate-900 font-bold text-3xl">Pilot Outcomes: Measurable Impact</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
          <h2 className="text-slate-900 mb-4 flex items-center gap-2"><TrendingDown className="h-6 w-6 text-red-600" />Traditional Reactive Approach</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4"><div className="text-slate-600 text-sm mb-1">Potential Workload</div><div className="text-2xl font-bold text-red-600">45 hours</div><div className="text-sm text-slate-600">If all 60 students booked appointments</div></div>
            <div className="bg-white rounded-lg p-4"><div className="text-slate-600 text-sm mb-1">Efficiency</div><div className="text-2xl font-bold text-red-600">Unknown</div><div className="text-sm text-slate-600">No way to pre-filter viable cases</div></div>
            <div className="bg-white rounded-lg p-4"><div className="text-slate-600 text-sm mb-1">Student Engagement</div><div className="text-2xl font-bold text-red-600">Low</div><div className="text-sm text-slate-600">Relies on students to self-identify and book</div></div>
          </div>
        </div>
        <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
          <h2 className="text-slate-900 mb-4 flex items-center gap-2"><TrendingUp className="h-6 w-6 text-green-600" />Proactive Triage Model</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4"><div className="text-slate-600 text-sm mb-1">Actual Workload</div><div className="text-2xl font-bold text-green-600">8.25 hours</div><div className="text-sm text-slate-600">Only 11 high-priority cases needed review</div></div>
            <div className="bg-white rounded-lg p-4"><div className="text-slate-600 text-sm mb-1">Efficiency</div><div className="text-2xl font-bold text-green-600">~82%</div><div className="text-sm text-slate-600">Pre-filtered 27 non-priority cases</div></div>
            <div className="bg-white rounded-lg p-4"><div className="text-slate-600 text-sm mb-1">Student Engagement</div><div className="text-2xl font-bold text-green-600">~63%</div><div className="text-sm text-slate-600">38/60 responded (excl. duplicates)</div></div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 text-white text-center shadow-2xl">
        <PoundSterling className="h-16 w-16 mx-auto mb-4 opacity-90" /><div className="text-5xl font-bold mb-3">£48,000</div><h2 className="text-2xl mb-3 text-white">Revenue at Risk - Now Protected</h2><p className="text-green-100 max-w-2xl mx-auto leading-relaxed">Outstanding fees for 6 identified CPR cases now receiving targeted advisor support. Without this triage, these students may have disengaged entirely.</p>
      </div>
    </div>
  );
}

// --- Slide 8: AccuracySlide ---
function AccuracySlide() {
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Target className="h-8 w-8 md:h-10 md:w-10 text-green-600 flex-shrink-0" />
        <h1 className="text-slate-900 font-bold text-3xl">Triage Model Accuracy: Validation & Discovery</h1>
      </div>
      <p className="text-slate-700 mb-8 leading-relaxed text-lg">
        The pilot data provides a powerful validation of the triage model's logic. From 38 unique responses, the tool correctly identified 11 high-priority students.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
          <CheckCircle2 className="h-10 w-10 md:h-12 md:w-12 text-green-600 mb-4" /><h2 className="text-slate-900 mb-4">Validation: 100% Accuracy</h2><div className="bg-white rounded-lg p-4 mb-4"><div className="font-bold text-green-600 mb-2" style={{ fontSize: "2rem" }}>3 out of 3</div><div className="text-slate-700">Known High-Priority Cases</div></div><p className="text-slate-700">The tool flagged 3 students who were <span className="font-semibold">already being supported</span> via appointments as 'High Priority', proving the logic is 100% aligned with expert advisor assessment.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
          <UserSearch className="h-10 w-10 md:h-12 md:w-12 text-blue-600 mb-4" /><h2 className="text-slate-900 mb-4">Discovery: New Viable Cases</h2><div className="bg-white rounded-lg p-4 mb-4"><div className="font-bold text-blue-600 mb-2" style={{ fontSize: "2rem" }}>6 out of 8</div><div className="text-slate-700">New High-Priority Targets</div></div><p className="text-slate-700">From the 8 <span className="font-semibold">newly identified</span> high-priority students, 6 were confirmed as viable CPR cases (from 6/8 calls answered).</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
          <Target className="h-10 w-10 md:h-12 md:w-12 text-purple-600 mb-4" /><h2 className="text-slate-900 mb-4">Key Finding</h2><p className="text-slate-700 mb-4">The triage logic is <span className="font-semibold text-purple-600">sound and validated</span>. It correctly filters low-priority cases AND accurately identifies high-priority students, both known and unknown.</p><div className="bg-purple-200 text-purple-900 rounded-lg p-4 text-center"><div className="font-semibold">Model Validated ✓</div></div>
        </div>
      </div>
    </div>
  );
}

// --- Slide 9: InsightsSlide ---
function InsightsSlide() {
  const insights = [
    { icon: CheckCircle2, number: "1", title: "The Triage Model is a Definitive Success", description: "The model's ability to correctly filter out non-viable cases is a major efficiency win. It validates the tool as a reliable method for focusing advisor resources.", color: "green", metrics: [{ value: "27", label: "Cases Filtered" }, { value: "20.25hrs", label: "Time Saved" }, { value: "~82%", label: "Efficiency Gain" }] },
    { icon: Target, number: "2", title: "Model Accuracy is Validated", description: "The tool perfectly aligned with expert advisor assessment by independently identifying 3 high-priority students already known to our service.", color: "purple", metrics: [{ value: "3/3", label: "Known Cases" }, { value: "100%", label: "Validation" }, { value: "Advisor-Aligned", label: "Logic" }] },
    { icon: TrendingUp, number: "3", title: "Prevention Over Crisis Management", description: "The pilot identified students at multiple crisis stages. Using this tool earlier in-year would shift us from crisis management to crisis prevention.", color: "orange", metrics: [{ value: "In-Year", label: "New Timing" }, { value: "Preventative", label: "New Model" }, { value: "Higher Retention", label: "Goal" }] },
  ];
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6"><Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-yellow-600 flex-shrink-0" /><h1 className="text-slate-900 font-bold text-3xl">Strategic Insights: What We Learned</h1></div>
      <h2 className="text-slate-600 mb-8">Three key learnings from the pilot that inform future strategy</h2>
      <div className="space-y-6 mb-8">
        {insights.map((insight) => {
          const Icon = insight.icon;
          const colorClasses: { [key: string]: string } = { green: "from-green-500 to-green-600 bg-green-50 border-green-200", purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-200", orange: "from-orange-500 to-orange-600 bg-orange-50 border-orange-200" };
          return (
            <div key={insight.number} className={`${colorClasses[insight.color].split(' ')[1]} border-2 ${colorClasses[insight.color].split(' ')[2]} rounded-xl p-6`}>
              <div className="flex items-start gap-4 md:gap-6 mb-4">
                <div className={`bg-gradient-to-br ${colorClasses[insight.color].split(' ')[0]} ${colorClasses[insight.color].split(' ')[1].replace('bg-', 'to-')} rounded-full p-3 md:p-4 text-white flex-shrink-0`}><Icon className="h-6 w-6 md:h-8 md:w-8" /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3"><span className="font-bold text-slate-900">Insight {insight.number}:</span><h2 className="text-slate-900">{insight.title}</h2></div><p className="text-slate-700 leading-relaxed">{insight.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-4 border-t-2 border-white/50">
                {insight.metrics.map((metric, idx) => (<div key={idx} className="bg-white/60 rounded-lg p-3 text-center"><div className="font-bold text-slate-900" style={{ fontSize: "1.25rem", lineHeight: "1.2" }}>{metric.value}</div><div className="text-slate-600 mt-1" style={{ fontSize: "0.875rem" }}>{metric.label}</div></div>))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
        <div className="flex items-start gap-4 md:gap-6">
          <TrendingUp className="h-10 w-10 text-green-600 flex-shrink-0" /><div className="flex-1"><h2 className="text-slate-900 mb-3">Strategic Projection & Staffing Efficiency</h2><p className="text-slate-700 leading-relaxed">By applying this model to other annual cohorts, we project annual savings of over <span className="font-semibold">63 advisor hours</span>.</p><p className="text-slate-700 leading-relaxed mt-2">Crucially, this system allows <span className="font-semibold">1 advisor to manage the work of 4-5</span>, shifting the team from reactive support to proactive, high-impact intervention.</p></div>
        </div>
      </div>
    </div>
  );
}

// --- Slide 10: RecommendationSlide ---
function RecommendationSlide() {
  const benefits = [ { icon: TrendingUp, title: "Maximise Efficiency", description: "Direct advisor time to high-value cases" }, { icon: Database, title: "Data-Driven Decisions", description: "Enable evidence-based interventions" }, { icon: Users, title: "Improve Retention", description: "Create a clear pathway to support at-risk students" } ];
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6"><CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-green-600 flex-shrink-0" /><h1 className="text-slate-900 font-bold text-3xl">Primary Recommendation: Formalise and Scale</h1></div>
      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 md:p-12 text-white mb-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6">
          <div className="bg-white/20 rounded-full p-4 md:p-6"><CheckCircle className="h-12 w-12 md:h-16 md:w-16" /></div><div className="flex-1"><div className="font-bold mb-2" style={{ fontSize: "1.5rem" }}>RECOMMENDED FOR ADOPTION</div><div className="text-green-100">As Standard Operating Procedure</div></div>
        </div>
        <p className="text-green-50 leading-relaxed">Based on the pilot's exceptional accuracy, measurable ROI in saved time, and critical strategic insights, this proactive triage model should be adopted as our <span className="font-semibold">standard operating procedure</span> for managing at-risk student cohorts.</p>
      </div>
      <h2 className="text-slate-900 mb-6">Key Benefits</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => { const Icon = benefit.icon; return (<div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"><div className="bg-green-100 rounded-full p-4 inline-flex mb-4"><Icon className="h-8 w-8 md:h-10 md:w-10 text-green-600" /></div><h3 className="text-slate-900 mb-3">{benefit.title}</h3><p className="text-slate-600">{benefit.description}</p></div>); })}
      </div>
    </div>
  );
}

// --- Slide 11: InvestmentSlide ---
function InvestmentSlide() {
  const futureApplications = [ { icon: UserCheck, title: "Early Intervention Model", description: "Apply proactively during the academic year (e.g., by January) to identify students without confirmed funding." }, { icon: Users, title: "Support for Other At-Risk Cohorts", description: "Adapt this model for any large student cohort needing differentiated support." } ];
  const futureAutomations = [ { icon: Mail, title: "Automated Referrals", description: "Automatically email non-viable cases with self-service info or refer them to the Fees team." }, { icon: Database, title: "Database Integration (SQL/Dataverse)", description: "Move from Excel to a secure, scalable database for robust data validation." }, { icon: Link, title: "System Integration (API Access)", description: "Create live, automated data feeds from our core Student Information System." }, { icon: Smartphone, title: "Advisor UX App", description: "Develop a user-friendly app interface for advisors instead of relying on Excel." } ];
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-6"><TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-blue-600 flex-shrink-0" /><h1 className="text-slate-900 font-bold text-3xl">Scaling the Success: Future Applications & ROI</h1></div>
      <p className="text-slate-700 mb-8 leading-relaxed">The pilot proved the concept using existing tools as a workaround. To formalise this as a reliable, scalable process, we must invest in the right infrastructure and expand its application.</p>
      <h2 className="text-slate-900 mb-4">The Business Case for Investment</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4"><DollarSign className="h-8 w-8 text-green-600" /><h3 className="text-slate-900">Investment in Innovation & Efficiency</h3></div><p className="text-slate-700">A <span className="font-semibold">£1,162.25 investment</span> in a higher-spec laptop is required to build and run these data-heavy automations efficiently, enabling continued innovation.</p><p className="text-slate-700 mt-2">This investment supports the development of tools that significantly enhance advisor efficiency and provide a positive ROI.</p>
        </div>
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4"><Users className="h-8 w-8 text-blue-600" /><h3 className="text-slate-900">Staffing & Innovation ROI</h3></div><p className="text-slate-700">This model enables <span className="font-semibold">1 advisor to do the work of 4-5</span>, freeing the team for high-value work.</p><p className="text-slate-700 mt-2">This pilot forms a key part of the developing <span className="font-semibold">Student Advisor Toolkit</span>, showcasing AI-driven innovation empowering our team.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-slate-900 mb-4">Future Applications (Scaling Out)</h2><div className="space-y-4">{futureApplications.map((item, index) => { const Icon = item.icon; return (<div key={index} className="bg-slate-50 border-l-4 border-slate-400 rounded-lg p-4 flex items-start gap-4"><Icon className="h-6 w-6 text-slate-600 flex-shrink-0 mt-1" /><div><h3 className="text-slate-900">{item.title}</h3><p className="text-slate-700 text-sm">{item.description}</p></div></div>); })}</div>
        </div>
        <div>
          <h2 className="text-slate-900 mb-4">Future Automation (Scaling Up)</h2><div className="space-y-4">{futureAutomations.map((item, index) => { const Icon = item.icon; return (<div key={index} className="bg-slate-50 border-l-4 border-slate-400 rounded-lg p-4 flex items-start gap-4"><Icon className="h-6 w-6 text-slate-600 flex-shrink-0 mt-1" /><div><h3 className="text-slate-900">{item.title}</h3><p className="text-slate-700 text-sm">{item.description}</p></div></div>); })}</div>
        </div>
      </div>
    </div>
  );
}

// --- Slide 12: QASlide ---
function QASlide() {
  const stats = [ { label: "Response Rate", value: "~63% (38/60)" }, { label: "Efficiency Gain", value: "~82%" }, { label: "Advisor Hours Saved", value: "20.25" }, { label: "Potential Revenue at Risk", value: "~£48,000" } ];
  return (
    <div className="bg-white rounded-xl p-6 md:p-12 shadow-xl">
      <div className="flex items-center gap-3 mb-8"><MessageCircleQuestion className="h-10 w-10 md:h-12 md:w-12 text-blue-600 flex-shrink-0" /><h1 className="text-slate-900 font-bold text-3xl">Q&A / Next Steps</h1></div>
      <h2 className="text-slate-900 mb-8">Questions & Discussion</h2>
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-10 mb-8 border-2 border-blue-200">
        <div className="flex items-center gap-3 mb-6"><CheckCircle2 className="h-8 w-8 md:h-10 md:w-10 text-blue-600 flex-shrink-0" /><h3 className="text-slate-900">Pilot Summary</h3></div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {stats.map((stat, index) => (<div key={index} className="bg-white rounded-lg p-4 md:p-6 border border-blue-200"><div className="font-bold text-blue-600 mb-2" style={{ fontSize: "1.5rem" }}>{stat.value}</div><div className="text-slate-700">{stat.label}</div></div>))}
        </div>
      </div>
      <div className="text-center">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1"><div className="bg-white rounded-full px-6 md:px-12 py-4 md:py-6"><p className="text-slate-900">Thank you for your time and consideration</p></div></div>
      </div>
    </div>
  );
}

// --- Main App Component (Slide Navigator - Layout Updated) ---
export default function Presentation() {
  const slides = [
    { name: "Title", component: TitleSlide },
    { name: "Executive Summary", component: ExecutiveSummarySlide },
    { name: "The Challenge", component: ImprovedChallengeSlide },
    { name: "The Solution", component: SolutionSlide },
    { name: "The Process", component: ProcessSlide },
    { name: "The Funnel", component: ImprovedFunnelSlide },
    { name: "The Outcomes", component: ImprovedOutcomesSlide },
    { name: "Model Accuracy", component: AccuracySlide },
    { name: "Strategic Insights", component: InsightsSlide },
    { name: "Recommendation", component: RecommendationSlide },
    { name: "Investment & ROI", component: InvestmentSlide },
    { name: "Q&A", component: QASlide },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  if (!slides || slides.length === 0 || currentSlide < 0 || currentSlide >= slides.length) { console.error("Invalid slides configuration or currentSlide index out of bounds."); return <div>Error loading presentation slides.</div>; }
  const CurrentSlideComponent = slides[currentSlide].component;
  if (!CurrentSlideComponent || typeof CurrentSlideComponent !== 'function') { console.error(`Slide component for index ${currentSlide} is invalid.`); return <div>Error loading slide component.</div>; }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6"><CurrentSlideComponent /></div>
        <div className="flex items-center justify-between gap-4 mt-8">
          <button onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))} disabled={currentSlide === 0} className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"><ChevronLeft className="h-5 w-5" />Previous</button>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 mb-2">{slides.map((_, idx) => (<button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-blue-600 w-8' : 'bg-slate-300 hover:bg-slate-400'}`} aria-label={`Go to slide ${idx + 1}`} />))}</div>
            <div className="text-slate-600 text-sm">Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].name}</div>
          </div>
          <button onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))} disabled={currentSlide === slides.length - 1} className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all">Next<ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
    </div>
  );
}


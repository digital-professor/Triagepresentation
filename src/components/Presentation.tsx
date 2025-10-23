import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { TitleSlide } from "./slides/TitleSlide";
import { ChallengeSlide } from "./slides/ChallengeSlide";
import { SolutionSlide } from "./slides/SolutionSlide";
import { ProcessSlide } from "./slides/ProcessSlide";
import { FunnelSlide } from "./slides/FunnelSlide";
import { AccuracySlide } from "./slides/AccuracySlide";
import { OutcomesSlide } from "./slides/OutcomesSlide";
import { InsightsSlide } from "./slides/InsightsSlide";
import { RecommendationSlide } from "./slides/RecommendationSlide";
import { InvestmentSlide } from "./slides/InvestmentSlide";
import { QASlide } from "./slides/QASlide";

const slides = [
  TitleSlide,
  ChallengeSlide,
  SolutionSlide,
  ProcessSlide,
  FunnelSlide,
  AccuracySlide,
  OutcomesSlide,
  InsightsSlide,
  RecommendationSlide,
  InvestmentSlide,
  QASlide,
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="size-full bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 overflow-auto p-4 md:p-8">
        <div className="w-full max-w-6xl mx-auto shadow-2xl rounded-xl border border-slate-200/50 bg-white">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-white border-t border-slate-200 px-8 py-4 flex items-center justify-between">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="outline"
          size="sm"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          variant="outline"
          size="sm"
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

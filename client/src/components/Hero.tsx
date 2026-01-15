import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section
 * Design: Tech Minimal + Premium Modern
 * - Large headline with gradient accent
 * - Compelling subheading about AI-driven project management
 * - Hero background image with overlay
 * - CTA buttons for engagement
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-white to-secondary/30">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6 md:mb-8">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">
              AI-Powered Project Management
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            프로젝트 관리의
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-chart-3">
              미래를 만나다
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            PMBOK 단계별 AI 에이전트를 통해 SI 프로젝트 관리를 자동화하고 지능화하세요.
            복잡한 프로젝트 관리를 간단하고 효율적으로 변환하는 파이고시프트의 혁신적인 솔루션입니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              상담 신청하기
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground/5 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("pmbok");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              솔루션 살펴보기
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">500+</p>
              <p className="text-sm text-muted-foreground">프로젝트 성공 사례</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">40%</p>
              <p className="text-sm text-muted-foreground">평균 시간 단축</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">98%</p>
              <p className="text-sm text-muted-foreground">고객 만족도</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-chart-3/5 rounded-full blur-3xl" />
    </section>
  );
}

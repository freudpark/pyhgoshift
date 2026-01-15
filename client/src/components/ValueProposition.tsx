import { Zap, Brain, TrendingUp } from "lucide-react";

/**
 * Value Proposition Section
 * Design: Tech Minimal + Premium Modern
 * - Three core values with icons
 * - Clean card layout with hover effects
 * - Emphasizes automation, intelligence, and efficiency
 */
export default function ValueProposition() {
  const values = [
    {
      icon: Zap,
      title: "자동화",
      description:
        "반복적인 프로젝트 관리 작업을 AI 에이전트가 자동으로 처리하여 팀의 생산성을 극대화합니다.",
      color: "from-accent to-accent/50",
    },
    {
      icon: Brain,
      title: "지능화",
      description:
        "머신러닝 기반의 예측 분석으로 프로젝트 리스크를 사전에 파악하고 최적의 의사결정을 지원합니다.",
      color: "from-chart-3 to-chart-3/50",
    },
    {
      icon: TrendingUp,
      title: "효율화",
      description:
        "데이터 기반의 인사이트로 프로젝트 성과를 극대화하고 ROI를 향상시킵니다.",
      color: "from-chart-4 to-chart-4/50",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white" id="solutions">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            파이고시프트의 핵심 가치
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI 에이전트 기술을 통해 프로젝트 관리의 모든 단계를 혁신합니다
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white border border-border rounded-xl hover:shadow-xl transition-all duration-300 hover:border-accent/50"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${value.color} mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">자세히 알아보기</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

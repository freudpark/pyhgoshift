import { CheckCircle2 } from "lucide-react";

/**
 * PMBOK AI Agent Section
 * Design: Tech Minimal + Premium Modern
 * - Displays PMBOK phases with AI integration
 * - Features illustration and detailed descriptions
 * - Shows AI capabilities at each stage
 */
export default function PMBOKSection() {
  const phases = [
    {
      phase: "기획 (Initiation)",
      description: "프로젝트 목표 정의 및 이해관계자 분석",
      aiCapabilities: [
        "자동 요구사항 분석",
        "리스크 사전 식별",
        "자원 최적화 계획",
      ],
      color: "from-accent",
    },
    {
      phase: "계획 (Planning)",
      description: "상세 프로젝트 계획 수립 및 일정 수립",
      aiCapabilities: [
        "지능형 일정 최적화",
        "비용 예측 분석",
        "의존성 자동 분석",
      ],
      color: "from-chart-2",
    },
    {
      phase: "실행 (Execution)",
      description: "프로젝트 작업 실행 및 품질 관리",
      aiCapabilities: [
        "자동 진행 상황 추적",
        "품질 이상 감지",
        "팀 협업 최적화",
      ],
      color: "from-chart-3",
    },
    {
      phase: "모니터링 (Monitoring & Controlling)",
      description: "진행 상황 모니터링 및 변경 관리",
      aiCapabilities: [
        "실시간 성과 분석",
        "편차 자동 감지",
        "예측 기반 조정",
      ],
      color: "from-chart-4",
    },
    {
      phase: "종료 (Closing)",
      description: "프로젝트 종료 및 교훈 정리",
      aiCapabilities: [
        "자동 문서화",
        "성과 분석 리포팅",
        "지식 베이스 축적",
      ],
      color: "from-chart-5",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-secondary/20" id="pmbok">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">
              PMBOK 5단계 AI 통합
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            PMBOK 단계별 AI 에이전트 도입
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            프로젝트 관리의 각 단계에서 AI 에이전트가 최적의 의사결정을 지원합니다
          </p>
        </div>

        {/* PMBOK Illustration */}
        <div className="mb-16 md:mb-20 flex justify-center">
          <img
            src="/images/pmbok-illustration.png"
            alt="PMBOK AI Integration"
            className="w-full max-w-2xl h-auto"
          />
        </div>

        {/* Phases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 bg-white border border-border rounded-xl hover:shadow-xl transition-all duration-300 hover:border-accent/50 overflow-hidden"
            >
              {/* Gradient Top Border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.color} to-transparent`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Phase Number */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-accent font-bold text-sm mb-4">
                  {index + 1}
                </div>

                {/* Phase Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {phase.phase}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {phase.description}
                </p>

                {/* AI Capabilities */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    AI 에이전트 역할
                  </p>
                  {phase.aiCapabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${phase.color} to-transparent opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 p-8 md:p-12 bg-gradient-to-r from-foreground/5 to-accent/5 border border-border rounded-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            PMBOK 기반 AI 에이전트 도입으로
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            프로젝트 관리의 모든 단계에서 자동화, 지능화, 효율화를 경험하세요
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
            상담 신청하기
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

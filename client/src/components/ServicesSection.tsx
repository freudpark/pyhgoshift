import { Briefcase, Wrench, HeadsetIcon } from "lucide-react";

/**
 * Services Section
 * Design: Tech Minimal + Premium Modern
 * - Three main service categories
 * - Consulting strategy, customized execution, technical support
 * - Interactive cards with detailed descriptions
 */
export default function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: "컨설팅 전략",
      description:
        "귀사의 프로젝트 관리 현황을 분석하고 AI 에이전트 도입을 위한 맞춤형 전략을 수립합니다.",
      features: [
        "현황 분석 및 진단",
        "AI 도입 로드맵 수립",
        "변화 관리 전략",
        "팀 교육 프로그램",
      ],
      color: "from-accent",
    },
    {
      icon: Wrench,
      title: "맞춤형 수행",
      description:
        "전략에 따라 AI 에이전트를 구현하고 기존 시스템과 통합하여 운영합니다.",
      features: [
        "시스템 구축 및 통합",
        "데이터 마이그레이션",
        "프로세스 최적화",
        "성능 모니터링",
      ],
      color: "from-chart-3",
    },
    {
      icon: HeadsetIcon,
      title: "기술 지원",
      description:
        "24/7 기술 지원팀이 시스템 운영 중 발생하는 모든 문제를 해결합니다.",
      features: [
        "24/7 기술 지원",
        "정기 유지보수",
        "성능 최적화",
        "지속적 개선",
      ],
      color: "from-chart-4",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">
              파이고시프트 서비스
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            완벽한 AI 에이전트 도입 서비스
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            전략 수립부터 구현, 운영까지 모든 단계에서 전문가의 지원을 받으세요
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col h-full p-8 bg-gradient-to-br from-white to-secondary/5 border border-border rounded-2xl hover:shadow-2xl transition-all duration-300 hover:border-accent/50 overflow-hidden"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} to-transparent mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>자세히 알아보기</span>
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

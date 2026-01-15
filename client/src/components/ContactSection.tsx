import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

/**
 * Contact Section
 * Design: Tech Minimal + Premium Modern
 * - Contact form for consultation requests
 * - Company contact information
 * - Professional layout with clear CTAs
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "이메일",
      value: "contact@pygoshift.com",
      href: "mailto:contact@pygoshift.com",
    },
    {
      icon: Phone,
      label: "전화",
      value: "+82-2-XXXX-XXXX",
      href: "tel:+82-2-XXXX-XXXX",
    },
    {
      icon: MapPin,
      label: "주소",
      value: "서울시 강남구 테헤란로 123",
      href: "#",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-secondary/10 to-white" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            지금 바로 상담을 신청하세요
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            파이고시프트의 전문가 팀이 귀사의 프로젝트 관리 혁신을 위해 준비되어 있습니다
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              상담 신청 양식
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="홍길동"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Company Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  회사명
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="회사명"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  문의 내용 *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="프로젝트 관리 현황과 AI 에이전트 도입에 대한 궁금한 점을 알려주세요."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {submitted ? "신청이 완료되었습니다!" : "상담 신청하기"}
              </Button>

              {submitted && (
                <div className="p-4 bg-chart-3/10 border border-chart-3/30 rounded-lg text-chart-3 text-sm font-medium">
                  ✓ 상담 신청이 완료되었습니다. 곧 연락드리겠습니다.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              연락처 정보
            </h3>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-start gap-4 p-6 bg-white border border-border rounded-xl hover:shadow-lg hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="p-8 bg-gradient-to-br from-accent/5 to-chart-3/5 border border-border rounded-xl">
              <h4 className="font-bold text-foreground mb-4">
                상담 시간
              </h4>
              <p className="text-muted-foreground mb-2">
                <strong>평일:</strong> 09:00 - 18:00
              </p>
              <p className="text-muted-foreground">
                <strong>점심시간:</strong> 12:00 - 13:00
              </p>
              <p className="text-muted-foreground mt-4 text-sm">
                주말 및 공휴일은 상담이 불가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

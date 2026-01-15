/**
 * Footer Component
 * Design: Tech Minimal + Premium Modern
 * - Company information and quick links
 * - Social media links
 * - Copyright information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "홈", href: "#" },
    { label: "솔루션", href: "#solutions" },
    { label: "PMBOK AI", href: "#pmbok" },
    { label: "서비스", href: "#services" },
  ];

  const legalLinks = [
    { label: "개인정보처리방침", href: "#" },
    { label: "이용약관", href: "#" },
    { label: "쿠키 정책", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">PyhgoShift</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              PMBOK 단계별 AI 에이전트를 통해 프로젝트 관리를 혁신합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  컨설팅 전략
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  맞춤형 수행
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  기술 지원
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">
                <a
                  href="mailto:contact@pygoshift.com"
                  className="hover:text-white transition-colors"
                >
                  contact@pygoshift.com
                </a>
              </li>
              <li className="text-white/70">
                <a
                  href="tel:+82-2-XXXX-XXXX"
                  className="hover:text-white transition-colors"
                >
                  +82-2-XXXX-XXXX
                </a>
              </li>
              <li className="text-white/70">
                서울시 강남구 테헤란로 123
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-white/60 text-sm">
              © {currentYear} PyhgoShift. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

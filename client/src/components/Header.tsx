import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header Component
 * Design: Tech Minimal + Premium Modern
 * - Clean navigation with PyhgoShift logo
 * - Responsive mobile menu
 * - CTA button for consultation
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "솔루션", href: "#solutions" },
    { label: "PMBOK AI", href: "#pmbok" },
    { label: "서비스", href: "#services" },
    { label: "회사소개", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/pyhgoshift-logo.png"
            alt="PyhgoShift Logo"
            className="h-10 md:h-12 w-auto"
          />
          <span className="font-bold text-lg md:text-xl text-foreground hidden sm:inline">
            PyhgoShift
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            상담 신청
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold mt-2"
              onClick={() => {
                setIsMenuOpen(false);
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              상담 신청
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

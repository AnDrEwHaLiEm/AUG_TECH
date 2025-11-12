'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

// Safety Zone specific navigation links
const SAFETY_ZONE_NAV_LINKS = [
  { href: '/', label: 'الرئيسية' },
  { href: '#about-safetyzone', label: 'عن سيفتي زون' },
  { href: '#safety-zone-section-3', label: 'خدماتنا' },
  { href: '#safety-zone-section-4', label: 'المميزات' },
  { href: '#safety-zone-section-5', label: 'كيف تعمل' },
//   { href: '#safety-zone-section-6', label: 'تواصل معنا' },
];

export default function SafetyZoneHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's the home link, navigate to home page
    if (href === '/') {
      return; // Let the default Link behavior handle it
    }

    // For section links (starting with #)
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="header-container fixed top-0 left-0 right-0 z-50"
      style={{ width: '100%' }}
    >
      <div className="mx-auto header-inner">
        <nav className="flex items-center justify-between h-full w-full">
          {/* Logo - Desktop & Tablet (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link 
              href="/" 
              className="flex items-center"
              style={{ cursor: 'pointer' }}
            >
              <Image
                src="/images/headerLogo.png"
                alt="Aug Tech Logo"
                width={184}
                height={86}
                className="header-logo object-contain max-w-[140px] xl:max-w-[184px] h-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile & Tablet Header - Logo + Menu Button */}
          <div className="mobile-header lg:hidden flex items-center justify-between w-full h-full">
            {/* Logo على اليمين */}
            <Link 
              href="/" 
              className="mobile-header-logo flex items-center z-10"
              style={{ cursor: 'pointer' }}
            >
              <Image
                src="/images/headerLogo.png"
                alt="Aug Tech Logo"
                width={120}
                height={56}
                style={{ maxWidth: 'clamp(80px, 20vw, 120px)', height: 'auto' }}
                className="object-contain"
                priority
              />
            </Link>
            
            {/* Mobile Menu Button على الشمال */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button p-2 rounded-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#4E4E4E' }} />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#4E4E4E' }} />
              )}
            </button>
          </div>

          {/* Center: Navigation Links - Large screens only (1024px+) */}
          <div
            className="hidden lg:flex items-center flex-1 justify-center overflow-x-auto"
            style={{
              gap: 'clamp(12px, 2vw, 34px)',
              height: '100%',
              maxWidth: '100%'
            }}
          >
            {SAFETY_ZONE_NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative flex items-center shrink-0"
                style={{ gap: 'clamp(4px, 0.5vw, 6px)' }}
              >
                {link.href === '/' ? (
                  <Link
                    href={link.href}
                    className="whitespace-nowrap"
                    style={{
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: '600',
                      fontSize: 'clamp(16px, 1.6vw, 28px)',
                      lineHeight: 'clamp(26px, 3vw, 50px)',
                      color: '#4E4E4E',
                      textAlign: 'center',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="whitespace-nowrap"
                    style={{
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: '600',
                      fontSize: 'clamp(16px, 1.6vw, 28px)',
                      lineHeight: 'clamp(26px, 3vw, 50px)',
                      color: '#4E4E4E',
                      textAlign: 'center',
                      textDecoration: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Book Appointment Button - Large screens only */}
          <a
            href="https://calendar.app.google/ECx7ACuQPa1jLTSe7"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center shrink-0"
            style={{
              minWidth: 'clamp(140px, 12vw, 200px)',
              height: 'clamp(50px, 5.5vw, 72px)',
              padding: 'clamp(4px, 0.5vw, 6px) clamp(12px, 1.5vw, 24px)',
              background: '#C7A64E',
              borderRadius: 'clamp(8px, 1vw, 12px)',
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '600',
              fontSize: 'clamp(15px, 1.5vw, 24px)',
              lineHeight: 'clamp(26px, 3vw, 50px)',
              color: '#FFFFFF',
              textDecoration: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#B89640';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C7A64E';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            احجز موعد معنا
          </a>
        </nav>
      </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-0 right-0 w-full border-t shadow-lg"
            style={{ 
              borderColor: '#E5E7EB', 
              background: '#FFFFFF',
              maxHeight: 'calc(100vh - 70px)',
              overflowY: 'auto',
              zIndex: 40
            }}
          >
            <div className="flex flex-col py-4 px-4 sm:px-6">
              {SAFETY_ZONE_NAV_LINKS.map((link, index) => (
                link.href === '/' ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 px-4 rounded-lg hover:bg-gray-50 transition-all border-b border-gray-100 last:border-b-0"
                    style={{
                      color: '#4E4E4E',
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: '600',
                      fontSize: 'clamp(18px, 4.5vw, 22px)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      animationDelay: `${index * 0.05}s`,
                      animation: 'slideInFromRight 0.3s ease-out forwards'
                    }}
                  >
                    <span>{link.label}</span>
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between py-4 px-4 rounded-lg hover:bg-gray-50 transition-all border-b border-gray-100 last:border-b-0"
                    style={{
                      color: '#4E4E4E',
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: '600',
                      fontSize: 'clamp(18px, 4.5vw, 22px)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      animationDelay: `${index * 0.05}s`,
                      animation: 'slideInFromRight 0.3s ease-out forwards'
                    }}
                  >
                    <span>{link.label}</span>
                  </a>
                )
              ))}

              {/* Mobile Book Appointment Button */}
              <a
                href="https://calendar.app.google/ECx7ACuQPa1jLTSe7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 py-3 px-6 text-center rounded-lg"
                style={{
                  background: '#C7A64E',
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  animation: 'slideInFromRight 0.3s ease-out forwards',
                  animationDelay: `${SAFETY_ZONE_NAV_LINKS.length * 0.05}s`
                }}
              >
                احجز موعد معنا
              </a>
            </div>
          </div>
        )}
    </header>
  );
}

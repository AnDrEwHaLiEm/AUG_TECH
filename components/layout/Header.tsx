'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
          {/* Logo - Far Left (appears far right in RTL) */}
          <div className="hidden md:flex items-center gap-2">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center"
              style={{ cursor: 'pointer' }}
            >
              <Image
                src="/images/logo.png"
                alt="Aug Tech Logo"
                width={184}
                height={86}
                className="header-logo object-contain"
                priority
              />
            </a>
          </div>

          {/* Mobile Header - Centered Logo with Menu Button */}
          <div className="mobile-header md:hidden flex items-center justify-center w-full relative">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="mobile-header-logo flex items-center"
              style={{ cursor: 'pointer' }}
            >
              <Image
                src="/images/logo.png"
                alt="Aug Tech Logo"
                width={120}
                height={56}
                className="object-contain"
                priority
              />
            </a>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button p-2 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
              style={{ position: 'absolute', right: '16px' }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: '#4E4E4E' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: '#4E4E4E' }} />
              )}
            </button>
          </div>

          {/* Center: Navigation Links */}
          <div
            className="hidden md:flex items-center"
            style={{
              gap: '34px',
              height: '80px'
            }}
          >
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative flex items-center"
                style={{ gap: '6px' }}
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.hasDropdown && (
                  <div style={{ width: '28px', height: '28px' }}>
                    <ChevronDown className="w-full h-full" style={{ color: '#4E4E4E' }} />
                  </div>
                )}
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: '600',
                    fontSize: '32px',
                    lineHeight: '60px',
                    color: '#4E4E4E',
                    textAlign: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {link.label}
                </a>
                {link.hasDropdown && openDropdown === link.href && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                    {/* Dropdown content can be added here */}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Book Appointment Button - Far Right (appears far left in RTL) */}
          <a
            href="https://calendar.app.google/ECx7ACuQPa1jLTSe7"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center"
            style={{
              minWidth: '200px',
              height: '72px',
              padding: '6px 24px',
              background: '#C7A64E',
              borderRadius: '12px',
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '600',
              fontSize: '28px',
              lineHeight: '60px',
              color: '#FFFFFF',
              textDecoration: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            احجز موعد معنا
          </a>
        </nav>
      </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: '#E5E7EB', background: '#F5F5F5' }}>
            <div className="flex flex-col space-y-4 px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center space-x-1 space-x-reverse py-2"
                  style={{
                    color: '#4E4E4E',
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: '500',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </a>
              ))}
              <a
                href="https://calendar.app.google/ECx7ACuQPa1jLTSe7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  background: '#C7A64E',
                  borderRadius: '12px',
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '600',
                  fontSize: '20px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  display: 'block',
                  textAlign: 'center'
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

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'من نحن', href: '#about' },
    { label: 'مشاريعنا', href: '#projects' },
    { label: 'خدماتنا', href: '#services' }
  ];

  return (
    <footer className="footer-section" style={{
      background: '#1E1E1E',
      borderTop: '12px solid #C7A64E',
      width: '100%'
    }}>
      <div className="footer-container" style={{
        height: 'auto',
        minHeight: '403px',
        padding: '40px 51px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div className="footer-content" style={{
          width: '100%',
          maxWidth: '1300px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '40px'
        }}>
          {/* Left Section - Logo */}
          <div className="footer-logo" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: "center",
          }}>
            <Link href="#home">
              <Image
                src="/images/awjFooterLogo.png"
                alt="Aug Tech Logo"
                width={250}
                height={119}
                // className="object-contain"
              />
            </Link>
          </div>

          {/* Center Section - Social & App Download */}
          <div className="footer-section" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
          }}>
            {/* Social Section */}
            {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              <h3 style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '700',
                fontSize: '20px',
                lineHeight: 'normal',
                color: '#FFFFFF',
                textAlign: 'center',
                margin: 0
              }}>
                تابعنا
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href="#" aria-label="LinkedIn" >
                  <RxLinkedinLogo color='white' size={28} />
                </a>

                <a href="#" aria-label="Twitter" >
                  <BsTwitter color='white' size={28} />
                </a>
                <a href="#" aria-label="FaceBook" >
                  <IoLogoFacebook color='white' size={28} />
                </a>
                <a href="#" aria-label="Instagram" >
                  <AiFillInstagram  color='white' size={30} />
                </a>
              </div>
            </div> */}

            {/* App Download Section */}
           
          </div>

          {/* Right Section - Quick Links */}
          <div className="footer-section" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            <h3 style={{
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: 'normal',
              color: '#FFFFFF',
              margin: 0,
            }}>
              الروابط السريعة
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C7A64E'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Line & Copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', width: '100%' }}>
          <div style={{ height: '1px', width: '100%', maxWidth: '1319px', background: '#FFFFFF', opacity: 0.2 }} />
          <p style={{
            fontFamily: 'Cairo, sans-serif',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: 'normal',
            color: '#FFFFFF',
            textAlign: 'center',
            margin: 0
          }}>
            © شركة أوج تك. جميع الحقوق محفوظة 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

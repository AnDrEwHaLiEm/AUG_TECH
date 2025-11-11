'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';
import { IoLogoFacebook } from "react-icons/io5";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { AiFillInstagram } from 'react-icons/ai';

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
                src="/images/logo.png"
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
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
                {/* Social Icons */}
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
            </div>

            {/* App Download Section */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <p style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '28px',
                color: '#C7A64E',
                margin: 0,
                textAlign: 'center'
              }}>
                تحميل تطبيق سيفتي زون
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a
                  href="#"
                  style={{
                    background: '#C7A64E',
                    border: '1px solid #F6E468',
                    minWidth: '120px',
                    height: '48px',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    display: 'flex',
                    gap:"5px",
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <FaApple color='white' size={20} />
                  <span style={{
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    whiteSpace: 'nowrap'
                  }}>
                    متجر ابل
                  </span>
                </a>
                <a
                  href="#"
                  style={{
                    background: '#C7A64E',
                    border: '1px solid #F6E468',
                    minWidth: '120px',
                    height: '48px',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    display: 'flex',
                    gap:"5px",
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <FaGooglePlay  color='white' size={20}/>
                  <span style={{
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    whiteSpace: 'nowrap'
                  }}>
                    متجر جوجل
                  </span>
                </a>
              </div>
            </div>
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

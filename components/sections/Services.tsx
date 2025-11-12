'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 'software',
    title: 'تطوير البرمجيات',
    description: 'تصميم وبناء حلول برمجية فريدة تتناسب مع احتياجات عملك الخاصة.',
    icon: '/images/mdi_code.png'
  },
  {
    id: 'mobile',
    title: 'تطبيقات الجوال',
    description: 'إنشاء تطبيقات iOS و Android وسهلة الاستخدام تصل إلى جمهورك أينما كان.',
    icon: '/images/mobile.png'
  },
  {
    id: 'web',
    title: 'تصميم و تطوير المواقع',
    description: 'بناء بوابات إلكترونية احترافية تمثل واجهة عملك الرقمية.',
    icon: '/images/web.svg'
  },
  {
    id: 'consulting',
    title: 'الاستشارات التقنية',
    description: 'نقدم خبراتنا لمساعدتك في التخطيط لمشاريعك التقنية واتخاذ القرارات الصائبة',
    icon: '/images/consult.png'
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="services-section" style={{ width: '100%', background: '#FFFFFF' }}>
      <ScrollReveal>
        <div className="services-container" style={{ 
          maxWidth: '1440px', 
          margin: '0 auto', 
          padding: 'clamp(20px, 4vw, 64px) clamp(16px, 4vw, 64px)' 
        }}>
          <div style={{ 
            maxWidth: '1312px', 
            margin: '0 auto', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'clamp(30px, 5vw, 50px)', 
            alignItems: 'center' 
          }}>
          {/* Section Header */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '14px', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '100%',
            maxWidth: '228px'
          }}>
            <h2 style={{
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(32px, 6vw, 44px)',
              lineHeight: 'normal',
              color: '#4E4E4E',
              textAlign: 'center',
              margin: 0,
              padding: '2px 0'
            }}>
              ماذا نقدم؟
            </h2>
            <div style={{ 
              height: '6px', 
              width: 'clamp(180px, 40vw, 228px)', 
              position: 'relative' 
            }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: '#C7A64E',
                borderRadius: '3px'
              }} />
            </div>
          </div>

          {/* Service Cards - Responsive Grid */}
          <div className="services-grid" style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(16px, 3vw, 20px)',
            width: '100%',
            maxWidth: '100%',
            justifyItems: 'center',
            alignItems: 'stretch'
          }}>
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={service.id}
                  className="service-card"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -10 : 0
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }}
                  style={{
                    background: '#F5F5F5',
                    width: '100%',
                    maxWidth: '100%',
                    height: '100%',
                    minHeight: 'clamp(280px, 35vw, 320px)',
                    borderRadius: 'clamp(8px, 2vw, 12px)',
                    padding: 'clamp(16px, 2.5vw, 20px)',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(14px, 2vw, 18px)',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                {/* Icon Circle */}
                <div style={{
                  background: '#F1EEE5',
                  width: 'clamp(70px, 10vw, 82px)',
                  height: 'clamp(70px, 10vw, 82px)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {service.id === 'web' ? (
                    <svg width="29" height="36" viewBox="0 0 29 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_0_1" style={{ maskType: 'luminance' } as React.CSSProperties} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="36">
                        <path d="M1 22.6666H27.6667V32.6666C27.6667 33.1087 27.4911 33.5326 27.1785 33.8451C26.866 34.1577 26.442 34.3333 26 34.3333H2.66667C2.22464 34.3333 1.80072 34.1577 1.48816 33.8451C1.1756 33.5326 1 33.1087 1 32.6666V22.6666Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M27.6667 22.6667V2.66667C27.6667 2.22464 27.4911 1.80072 27.1785 1.48816C26.866 1.17559 26.442 1 26 1H2.66667C2.22464 1 1.80072 1.17559 1.48816 1.48816C1.1756 1.80072 1 2.22464 1 2.66667V22.6667" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M12.6667 28.5H16" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                      </mask>
                      <g mask="url(#mask0_0_1)">
                        <path d="M-5.66667 -2.33337H34.3333V37.6666H-5.66667V-2.33337Z" fill="#C7A64E"/>
                      </g>
                    </svg>
                  ) : (
                    <div style={{ position: 'relative', width: '42.85px', height: '42.85px' }}>
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ 
                  width: '100%', 
                  textAlign: 'center', 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: 'clamp(8px, 1.5vw, 12px)',
                  flex: 1
                }}>
                  <h3 style={{
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: '600',
                    fontSize: 'clamp(20px, 3vw, 24px)',
                    lineHeight: '1.2',
                    color: '#000000',
                    margin: '0',
                    height: 'clamp(50px, 7vw, 60px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 4px'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: '400',
                    fontSize: 'clamp(15px, 2.2vw, 18px)',
                    lineHeight: '1.5',
                    color: '#4E4E4E',
                    margin: 0,
                    textAlign: 'center',
                    width: '100%',
                    padding: '0 clamp(4px, 1vw, 8px)',
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

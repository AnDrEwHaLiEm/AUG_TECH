'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="about-section" style={{ width: '100%', background: '#FFFFFF', padding: '15px 0' }}>
      <ScrollReveal>
        <div className="about-container" style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ maxWidth: '1317px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', justifyContent: 'center' }}>
          {/* Section Header with Underline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-end', justifyContent: 'center', width: '221px' }}>
            <div style={{ padding: '2px 0' }}>
              <p style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '700',
                fontSize: '44px',
                lineHeight: 'normal',
                color: '#4E4E4E',
                textAlign: 'center',
                margin: 0
              }}>
                عن أوج تك
              </p>
            </div>
            <div style={{ height: '6px', width: '220px', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: '#C7A64E'
              }} />
            </div>
          </div>

          {/* Content Area: Image on Left, Text Cards on Right */}
          <div className="about-content" style={{ display: 'flex', gap: '50px', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Image - Left Side (first in code for RTL to appear on left) */}
            <div className="about-image-wrapper" style={{ height: '496px', width: '100%', maxWidth: '589px', minWidth: '400px', borderRadius: '8px', position: 'relative', flexShrink: 0 }}>
              <Image
                src="/images/team.jpg"
                alt="About Aug Tech Team"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: '50% 50%',
                  borderRadius: '8px'
                }}
                priority
              />
            </div>

            {/* Text Cards - Right Side (second in code for RTL to appear on right) */}
            <div className="about-text" style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end', justifyContent: 'center', flex: 1, minWidth: '300px' }}>
              {/* الرسالة */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', lineHeight: 'normal' }}>
                <p style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: 'normal',
                  color: '#C7A64E',
                  textAlign: 'right',
                  margin: 0,
                  width: '100%'
                }}>
                  الرسالة
                </p>
                <p style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '500',
                  fontSize: '28px',
                  lineHeight: 'normal',
                  color: '#4E4E4E',
                  textAlign: 'right',
                  margin: 0,
                  width: '100%',
                  whiteSpace: 'pre-wrap'
                }}>
                  في أوج تك، نحول الأفكار إلى حلول برمجية عملية تجمع بين الخبرة والابتكار. نقدم تطوير تطبيقات وأنظمة مخصصة، مع تحليل دقيق لاحتياجات العمل لضمان أداء سلس وفعّال وتمكين عملائنا من تحقيق الريادة.
                </p>
              </div>

              {/* الرؤية */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', lineHeight: 'normal' }}>
                <p style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: 'normal',
                  color: '#C7A64E',
                  textAlign: 'right',
                  margin: 0,
                  width: '100%'
                }}>
                  الرؤية
                </p>
                <p style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '500',
                  fontSize: '28px',
                  lineHeight: 'normal',
                  color: '#4E4E4E',
                  textAlign: 'right',
                  margin: 0,
                  width: '100%',
                  whiteSpace: 'pre-wrap'
                }}>
                  أن نصبح الشريك التقى الأكثر موثوقية فى المنطقة بدمج خبرتنا العميقة مع شغفنا بأبتكار حلول برمجية و تقنيات لنقدم قيمة حقيقية تدوم .
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

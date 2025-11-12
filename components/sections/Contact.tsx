'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';

export default function Contact() {
  const contactInfo = [
    {
      id: 'email',
      title: 'البريد الإلكتروني',
      value: 'info@awjtech.com',
      img: "/images/mail-outline.png"
    },
    {
      id: 'phone',
      title: 'الهاتف',
      value: '920051099',
      img: "/images/outline-phone.png"
    },
    {
      id: 'booking',
      title: 'احجز موعد معنا',
      value: 'اضغط هنا للحجز',
      link: 'https://calendar.app.google/ECx7ACuQPa1jLTSe7',
      img: "/images/fontisto_date.png"
    },
    {
      id: 'location',
      title: 'الموقع',
      value: 'السعودية - الخبر - أبراج الراشد',
      img: "/images/tdesign_location.png"
    }

  ];

  return (
    <section id="contact" className="contact-section" style={{ width: '100%', background: '#F5F5F5', padding: 'clamp(10px, 2vw, 20px) 0' }}>
      <ScrollReveal>
        <div className="contact-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 64px)' }}>
          <div style={{ maxWidth: '1308px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(30px, 6vw, 50px)', alignItems: 'center' }}>
            {/* Section Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 24px)', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(28px, 5vw, 44px)',
                  lineHeight: 'normal',
                  color: '#4E4E4E',
                  textAlign: 'center',
                  margin: 0,
                  padding: '2px 0'
                }}>
                  تواصل معنا
                </h2>
                <div style={{ height: '6px', width: 'clamp(140px, 25vw, 200px)', position: 'relative' }}>
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
              <p style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '400',
                fontSize: 'clamp(16px, 2.5vw, 22px)',
                lineHeight: 'clamp(26px, 4vw, 36px)',
                color: '#4E4E4E',
                textAlign: 'center',
                margin: 0,
                maxWidth: '900px',
                padding: '0 16px'
              }}>
                هل لديك فكرة مشروع؟ هل تبحث عن شريك تقني موثوق؟ فريقنا جاهز للاستماع إليك ومساعدتك في تحقيق أهدافك.
              </p>
            </div>

            {/* Contact Info Cards - 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1308px]">
              {contactInfo.map((info, index) => {
                const CardWrapper = info.link ? 'a' : 'div';
                const cardProps = info.link
                  ? { href: info.link, target: '_blank', rel: 'noopener noreferrer', style: { textDecoration: 'none' } }
                  : {};

                return (
                  <ScrollReveal key={info.id} delay={index * 0.15}>
                    <CardWrapper {...cardProps}>
                      <div
                        className="contact-card"
                        style={{
                          background: '#FFFFFF',
                          width: '100%',
                          minHeight: 'clamp(160px, 20vw, 170px)',
                          height: 'auto',
                          borderRadius: 'clamp(8px, 1.5vw, 12px)',
                          padding: 'clamp(16px, 3vw, 24px)',
                          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 'clamp(12px, 2vw, 16px)',
                          cursor: info.link ? 'pointer' : 'default',
                        }}
                      >
                        <div style={{
                          background: '#F1EEE5',
                          width: 'clamp(50px, 8vw, 60px)',
                          height: 'clamp(50px, 8vw, 60px)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          position: 'relative'
                        }}>
                          <Image
                            src={info.img}
                            alt={info.title}
                            width={30}
                            height={30}
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                        <div style={{
                          textAlign: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                          width: '100%',
                          overflow: 'hidden'
                        }}>
                          <p style={{
                            fontFamily: 'Cairo, sans-serif',
                            fontWeight: '600',
                            fontSize: 'clamp(16px, 2.5vw, 20px)',
                            lineHeight: 'clamp(24px, 3.5vw, 28px)',
                            color: '#4E4E4E',
                            margin: 0,
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word'
                          }}>
                            {info.title}
                          </p>
                          <p style={{
                            fontFamily: 'Cairo, sans-serif',
                            fontWeight: '400',
                            fontSize: 'clamp(14px, 2vw, 16px)',
                            lineHeight: 'clamp(20px, 3vw, 24px)',
                            color: info.link ? '#C7A64E' : '#878686',
                            margin: 0,
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            hyphens: 'auto'
                          }}>
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </CardWrapper>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

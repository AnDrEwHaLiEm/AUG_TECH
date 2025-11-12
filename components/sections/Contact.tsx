'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Contact() {
  const contactInfo = [
    {
      id: 'email',
      title: 'البريد الإلكتروني',
      value: 'info@awjtech.com'
    },
    {
      id: 'phone',
      title: 'الهاتف',
      value: '920051099'
    },
    {
      id: 'location',
      title: 'الموقع',
      value: 'السعودية - الخبر - أبراج الراشد'
    },
    {
      id: 'booking',
      title: 'احجز موعد معنا',
      value: 'اضغط هنا للحجز',
      link: 'https://calendar.app.google/ECx7ACuQPa1jLTSe7'
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
                        flexShrink: 0
                      }}>
                        {info.id === 'phone' && (
                          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.6667 35C28.1667 35 24.7431 34.1458 21.3958 32.4375C18.0486 30.7292 15.0347 28.4653 12.3542 25.6458C9.67361 22.8264 7.48611 19.7986 5.79167 16.5625C4.09722 13.3264 3.25 9.97222 3.25 6.5C3.25 5.86111 3.47917 5.32639 3.9375 4.89583C4.39583 4.46528 4.94444 4.25 5.58333 4.25H11.9167C12.4167 4.25 12.8542 4.42361 13.2292 4.77083C13.6042 5.11806 13.8333 5.52778 13.9167 6L14.9167 11.25C14.9722 11.6944 14.9653 12.0972 14.8958 12.4583C14.8264 12.8194 14.6667 13.1389 14.4167 13.4167L10.3333 17.5833C11.5833 19.6667 13.0486 21.5833 14.7292 23.3333C16.4097 25.0833 18.3611 26.6944 20.5833 28.1667L24.5833 24.1667C24.8611 23.8889 25.2014 23.6667 25.6042 23.5C26.0069 23.3333 26.4167 23.2778 26.8333 23.3333L31.9167 24.4167C32.3611 24.5278 32.7431 24.7639 33.0625 25.125C33.3819 25.4861 33.5556 25.9167 33.5833 26.4167V32.5833C33.5833 33.2222 33.3681 33.7708 32.9375 34.2292C32.5069 34.6875 31.9722 34.9167 31.3333 34.9167L31.6667 35Z" fill="#C7A64E" />
                          </svg>
                        )}
                        {info.id === 'email' && (
                          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66667 33.3333C5.75 33.3333 4.96528 33.0069 4.3125 32.3542C3.65972 31.7014 3.33333 30.9167 3.33333 30V10C3.33333 9.08333 3.65972 8.29861 4.3125 7.64583C4.96528 6.99306 5.75 6.66667 6.66667 6.66667H33.3333C34.25 6.66667 35.0347 6.99306 35.6875 7.64583C36.3403 8.29861 36.6667 9.08333 36.6667 10V30C36.6667 30.9167 36.3403 31.7014 35.6875 32.3542C35.0347 33.0069 34.25 33.3333 33.3333 33.3333H6.66667ZM20 21.6667L6.66667 12.5V30H33.3333V12.5L20 21.6667ZM20 18.3333L33.3333 10H6.66667L20 18.3333ZM6.66667 12.5V10V30V12.5Z" fill="#C7A64E" />
                          </svg>
                        )}
                        {info.id === 'location' && (
                          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 20C20.9167 20 21.7014 19.6736 22.3542 19.0208C23.0069 18.3681 23.3333 17.5833 23.3333 16.6667C23.3333 15.75 23.0069 14.9653 22.3542 14.3125C21.7014 13.6597 20.9167 13.3333 20 13.3333C19.0833 13.3333 18.2986 13.6597 17.6458 14.3125C16.9931 14.9653 16.6667 15.75 16.6667 16.6667C16.6667 17.5833 16.9931 18.3681 17.6458 19.0208C18.2986 19.6736 19.0833 20 20 20ZM20 35C15.5556 31.1111 12.1528 27.5347 9.79167 24.2708C7.43056 21.0069 6.25 18.0556 6.25 15.4167C6.25 11.5278 7.54861 8.40278 10.1458 6.04167C12.7431 3.68056 15.7778 2.5 19.25 2.5H20.75C24.2222 2.5 27.2569 3.68056 29.8542 6.04167C32.4514 8.40278 33.75 11.5278 33.75 15.4167C33.75 18.0556 32.5694 21.0069 30.2083 24.2708C27.8472 27.5347 24.4444 31.1111 20 35Z" fill="#C7A64E" />
                          </svg>
                        )}
                        {info.id === 'booking' && (
                          <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 20H16.6667V23.3333H13.3333V20ZM33.3333 8.33333V33.3333C33.3333 34.25 32.9583 35.0347 32.2083 35.6875C31.4583 36.3403 30.6667 36.6667 29.8333 36.6667H10.1667C9.25 36.6667 8.45833 36.3403 7.79167 35.6875C7.125 35.0347 6.79167 34.25 6.79167 33.3333L6.83333 8.33333C6.83333 7.41667 7.16667 6.63194 7.83333 5.97917C8.5 5.32639 9.29167 5 10.2083 5H11.6667V1.66667H15V5H25V1.66667H28.3333V5H29.8333C30.75 5 31.5417 5.32639 32.2083 5.97917C32.875 6.63194 33.2917 7.41667 33.3333 8.33333ZM10.1667 11.6667H29.8333V8.33333H10.1667V11.6667ZM29.8333 33.3333V15H10.1667V33.3333H29.8333ZM23.3333 23.3333V20H26.6667V23.3333H23.3333ZM18.3333 23.3333V20H21.6667V23.3333H18.3333Z" fill="#C7A64E" />
                          </svg>
                        )}
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

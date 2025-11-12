'use client';

import { motion } from "framer-motion";
import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function SafetyZoneSection6() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const steps = [
    {
      title: "التسجيل وإضافة الأصول",
      description: "تسجيل معلومات الحساب والمنشأة، وإضافة الفروع وتحديد كميات أنظمة الحريق الموجودة (طفايات، كواشف، إلخ) لمرة واحدة."
    },
    {
      title: "رفع الطلب",
      description: "اختيار الخدمة المطلوبة (رخصة فورية، عقد صيانة، أو خدمة طفايات الحريق)، وتحديد الفرع."
    },
    {
      title: "التعاقد والدفع",
      description: "استلام ومناقشة عروض الأسعار، اختيار العرض الأنسب، والدفع إلكترونيًا."
    },
    {
      title: "المتابعة والإنجاز",
      description: "يتبع الطلب بالكامل في قسم “أعمال قيد التنفيذ”، إعداد تقرير الزيارة، وترحيل العقود المنتهية إلى “جدول الصيانة” حسب مواعيد العقود الجديدة آليًا."
    }
  ];

  return (
    <>
      <style jsx>{`
        /* على الموبايل والتابلت وiPad: الكاردات تحت بعض بدون تعرج */
        @media (max-width: 1024px) {
          .cards-container-section6 {
            margin-left: 0 !important;
            margin-right: 0 !important;
            order: 2 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .image-container-section6 {
            order: 1 !important;
            margin-top: 30px;
            margin-bottom: 20px;
            width: 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
            justify-content: center !important;
          }
          .card-section6 {
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .image-circle-section6 {
            left: 50% !important;
            right: auto !important;
            transform: translateX(-50%) translateY(-50%) !important;
            top: 50% !important;
          }
          .image-content-section6 {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
        
        /* على اللابتوب فقط: negative margin للتداخل */
        @media (min-width: 1025px) {
          .cards-container-section6 {
            margin-left: clamp(-100px, -10vw, -110px) !important;
          }
        }
      `}</style>
      <section id="safety-zone-section-6" style={{
        width: '100%',
        background: '#FFFFFF',
        padding: 'clamp(10px, 2vw, 20px) clamp(16px, 5vw, 80px)',
        fontFamily: 'Cairo, sans-serif',
        direction: 'rtl',
        position: 'relative'
      }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        width: '100%'
      }}>

        {/* العنوان في المنتصف */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(30px, 5vw, 50px)'
        }}>
          <ScrollReveal>
            <h2 style={{
              fontWeight: 700,
              fontSize: 'clamp(22px, 4vw, 36px)',
              color: '#4E4E4E',
              marginBottom: '12px',
              padding: '0 10px'
            }}>
              آلية العمل <span style={{ color: '#C7A64E' }}>(العميل)</span> – خطواتك معنا
            </h2>
            <div style={{
              height: '4px',
              width: 'clamp(180px, 60vw, 400px)',
              maxWidth: '90%',
              background: 'linear-gradient(90deg, #F6E468 0%, #90853D 100%)',
              borderRadius: '2px',
              margin: '0 auto'
            }} />
          </ScrollReveal>
        </div>

        {/* المحتوى: الكاردات على اليمين والصورة على اليسار */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'clamp(30px, 3vw, 0px)',
          position: 'relative'
        }}>

          {/* الكاردات على اليمين */}
          <div className="cards-container-section6" style={{
            flex: '1 1 clamp(280px, 100%, 650px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(16px, 2vw, 20px)',
            zIndex: 2,
            position: 'relative',
            order: 1
          }}>
            {steps.map((step, index) => (
              <ScrollReveal key={index}>
                <motion.div
                  className="card-section6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                    style={{
                      background: '#F5F5F5',
                      borderRight: '6px solid #C7A64E',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                      borderRadius: 'clamp(12px, 1.5vw, 16px)',
                      padding: 'clamp(16px, 2vw, 20px) clamp(18px, 2.5vw, 24px)',
                      textAlign: 'right',
                      // تعرج على اللابتوب فقط
                      marginLeft: isDesktop ? ((index === 0 || index === 3) ? '0' : 'clamp(40px, 8vw, 120px)') : '0',
                      marginRight: isDesktop ? ((index === 1 || index === 2) ? '0' : 'clamp(40px, 8vw, 120px)') : '0',
                    }}
                >
                  <h3 style={{
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    color: '#4E4E4E',
                    marginBottom: 'clamp(6px, 1vw, 8px)'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 1.8vw, 15px)',
                    color: '#4E4E4E',
                    margin: 0,
                    lineHeight: '1.8'
                  }}>
                    {step.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* الصورة مع الدائرة الصفراء على اليسار */}
          <div className="image-container-section6" style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            minWidth: 'clamp(300px, 90vw, 500px)',
            minHeight: 'clamp(350px, 50vw, 550px)',
            order: 2
          }}>
            <div className="image-circle-section6" style={{
              position: 'absolute',
              width: 'clamp(350px, 90vw, 550px)',
              height: 'clamp(350px, 90vw, 550px)',
              background: '#F1EEE5',
              borderRadius: '50%',
              zIndex: 1,
              left: 'clamp(0px, 3vw, 40px)',
              top: '50%',
              transform: 'translateY(-50%)'
            }} />
            <div className="image-content-section6" style={{ 
              position: 'relative', 
              zIndex: 2, 
              marginLeft: 'clamp(0px, 3vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'clamp(15px, 2.5vw, 20px)',
              padding: 'clamp(30px, 4vw, 40px)',
              maxWidth: '85%'
            }}>
              <Image
                src="/images/section6.png"
                alt="customer steps illustration"
                width={150}
                height={150}
                style={{ 
                  objectFit: 'contain',
                  width: 'clamp(100px, 15vw, 220px)',
                  height: 'auto',
                  marginTop: 'clamp(15px, 3vw, 25px)',
                  marginBottom: 'clamp(15px, 3vw, 25px)'
                }}
              />
               <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(12px, 2vw, 16px)',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}>
              <p style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '500',
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                lineHeight: 'clamp(22px, 3vw, 28px)',
                color: '#C7A64E',
                margin: 0,
                textAlign: 'center'
              }}>
                تحميل تطبيق سيفتي زون
              </p>
              <div style={{ 
                display: 'flex', 
                gap: 'clamp(8px, 1.5vw, 12px)', 
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <a
                  href="#"
                  style={{
                    background: '#C7A64E',
                    border: '1px solid #F6E468',
                    minWidth: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(40px, 7vw, 48px)',
                    borderRadius: 'clamp(6px, 1vw, 8px)',
                    padding: 'clamp(8px, 1.5vw, 10px) clamp(12px, 2vw, 16px)',
                    display: 'flex',
                    gap: 'clamp(4px, 0.8vw, 5px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer',
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
                  <FaApple color='white' size={isDesktop ? 20 : 16} />
                  <span style={{
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: '500',
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    lineHeight: 'clamp(18px, 3vw, 24px)',
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
                    minWidth: 'clamp(100px, 20vw, 120px)',
                    height: 'clamp(40px, 7vw, 48px)',
                    borderRadius: 'clamp(6px, 1vw, 8px)',
                    padding: 'clamp(8px, 1.5vw, 10px) clamp(12px, 2vw, 16px)',
                    display: 'flex',
                    gap: 'clamp(4px, 0.8vw, 5px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer',
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
                  <FaGooglePlay color='white' size={isDesktop ? 20 : 16}/>
                  <span style={{
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: '500',
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    lineHeight: 'clamp(18px, 3vw, 24px)',
                    color: '#FFFFFF',
                    whiteSpace: 'nowrap'
                  }}>
                    متجر جوجل
                  </span>
                </a>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}

'use client';

import { motion } from "framer-motion";
import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SafetyZoneSection7() {
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
      description: "تسجيل معلومات الحساب والمنشأة،   أجور التركيب لأنظمة الحريق الموجودة لمرة واحدة"
    },
    {
      title: "اعتماد التسجيل",
      description: "يتم مرجعة الطلب من قبل إدارة التطبيق والاعتماد"
    },
    {
      title: "التعاقد والدفع",
     description:"استلام ومناقشة عروض الأسعار، وإصدار العقد للعميل"
    },
    {
      title: "المتابعة والإنجاز",
      description: "يتبع الطلب بالكامل في قسم “أعمال قيد التنفيذ”، استلام تقرير الزيارة/التركيب، وترحيل العقود المنجزة إلى “جدول الصيانة” لتحديد مواعيد الزيارات القادمة آليًا."
    }
  ];

  return (
    <>
      <style jsx>{`
        /* على الموبايل والتابلت وiPad: الكاردات تحت بعض بدون تعرج */
        @media (max-width: 1024px) {
          .cards-container-section7 {
            margin-right: 0 !important;
            margin-left: 0 !important;
            order: 2 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .image-container-section7 {
            order: 1 !important;
            margin-top: 30px;
            margin-bottom: 20px;
            width: 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
            justify-content: center !important;
          }
          .card-section7 {
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .image-circle-section7 {
            left: 50% !important;
            right: auto !important;
            transform: translateX(-50%) !important;
          }
          .image-content-section7 {
            margin-right: 0 !important;
            margin-left: 0 !important;
          }
        }
        
        /* على اللابتوب فقط: negative margin للتداخل */
        @media (min-width: 1025px) {
          .cards-container-section7 {
            margin-right: clamp(-100px, -10vw, -110px) !important;
          }
        }
      `}</style>
      <section style={{
        width: '100%',
        maxWidth: '100vw',
        background: '#FFFFFF',
        padding: 'clamp(60px, 8vw, 100px) clamp(16px, 5vw, 80px)',
        fontFamily: 'Cairo, sans-serif',
        direction: 'rtl',
        position: 'relative',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box'
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
                آلية العمل <span style={{ color: '#C7A64E' }}>(مزود الخدمة)</span> – خطواتك معنا
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

          {/* المحتوى: الصورة على اليمين والكاردات على اليسار */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(30px, 3vw, 0px)',
            position: 'relative'
          }}>

            {/* الصورة مع الدائرة على اليمين */}
            <div className="image-container-section7" style={{
              flex: '0 0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              minWidth: 'clamp(200px, 35vw, 500px)',
              order: 1
            }}>
              <div className="image-circle-section7" style={{
                position: 'absolute',
                width: 'clamp(250px, 40vw, 550px)',
                height: 'clamp(250px, 40vw, 550px)',
                background: '#F1EEE5',
                borderRadius: '50%',
                zIndex: 1,
                right: 'clamp(0px, 3vw, 40px)'
              }} />
              <div className="image-content-section7" style={{
                position: 'relative',
                zIndex: 2,
                marginRight: 'clamp(0px, 3vw, 40px)'
              }}>
                <Image
                  src="/images/section7.png"
                  alt="customer steps illustration"
                  width={350}
                  height={350}
                  style={{
                    objectFit: 'contain',
                    width: 'clamp(180px, 28vw, 350px)',
                    height: 'auto'
                  }}
                />
              </div>
            </div>

            {/* الكاردات على الشمال */}
            <div className="cards-container-section7" style={{
              flex: '1 1 clamp(280px, 100%, 650px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(16px, 2vw, 20px)',
              zIndex: 2,
              position: 'relative',
              order: 2
            }}>
              {steps.map((step, index) => (
                <ScrollReveal key={index}>
                  <motion.div
                    className="card-section7"
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
                      marginRight: isDesktop ? ((index === 0 || index === 3) ? '0' : 'clamp(40px, 8vw, 120px)') : '0',
                      marginLeft: isDesktop ? ((index === 1 || index === 2) ? '0' : 'clamp(40px, 8vw, 120px)') : '0',
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

          </div>
        </div>
      </section>
    </>
  );
}

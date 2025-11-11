'use client';

import { motion } from "framer-motion";
import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';

export default function SafetyZoneSection6() {
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
        @media (max-width: 1070px) {
          .cards-container-section6 {
            margin-left: 0 !important;
            order: 1 !important;
          }
          .image-container-section6 {
            order: 2 !important;
            margin-top: 30px;
            width: 100% !important;
            min-width: 100% !important;
            justify-content: center !important;
          }
          .card-section6 {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .image-circle-section6 {
            left: 50% !important;
            transform: translateX(-50%);
          }
          .image-content-section6 {
            margin-left: 0 !important;
          }
        }
      `}</style>
      <section style={{
        width: '100%',
        background: '#FFFFFF',
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)',
        fontFamily: 'Cairo, sans-serif',
        direction: 'rtl'
      }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto'
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
            marginLeft: 'clamp(-100px, -10vw, -110px)',
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
                    marginLeft: (index === 0 || index === 3) ? '0' : 'clamp(40px, 8vw, 120px)',
                    marginRight: (index === 1 || index === 2) ? '0' : 'clamp(40px, 8vw, 120px)',

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
            minWidth: 'clamp(200px, 35vw, 500px)',
            order: 2
          }}>
            <div className="image-circle-section6" style={{
              position: 'absolute',
              width: 'clamp(250px, 40vw, 550px)',
              height: 'clamp(250px, 40vw, 550px)',
              background: '#F1EEE5',
              borderRadius: '50%',
              zIndex: 1,
              left: 'clamp(0px, 3vw, 40px)'
            }} />
            <div className="image-content-section6" style={{ 
              position: 'relative', 
              zIndex: 2, 
              marginLeft: 'clamp(0px, 3vw, 40px)' 
            }}>
              <Image
                src="/images/section6.png"
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

        </div>
      </div>
    </section>
    </>
  );
}

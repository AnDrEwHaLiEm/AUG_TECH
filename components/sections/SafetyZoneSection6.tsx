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
          marginBottom: '50px'
        }}>
          <ScrollReveal>
            <h2 style={{
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 36px)',
              color: '#4E4E4E',
              marginBottom: '12px'
            }}>
              آلية العمل <span style={{ color: '#C7A64E' }}>(العميل)</span> – خطواتك معنا
            </h2>
            <div style={{
              height: '4px',
              width: '400px',
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
          gap: '0',
          position: 'relative'
        }}>

          {/* الكاردات على اليمين */}
          <div style={{
            flex: '1 1 650px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 2,
            position: 'relative',
            marginLeft: '-80px'
          }}>
            {steps.map((step, index) => (
              <ScrollReveal key={index}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{
                    background: '#F5F5F5',
                    borderRight: '6px solid #C7A64E',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    textAlign: 'right',
                    marginLeft: (index === 0 || index === 3) ? '0' : 'clamp(40px, 8vw, 120px)',
                    marginRight: (index === 1 || index === 2) ? '0' : 'clamp(40px, 8vw, 120px)',

                  }}
                >
                  <h3 style={{
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#4E4E4E',
                    marginBottom: '8px'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontWeight: 400,
                    fontSize: '15px',
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
          <div style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            minWidth: '500px'
          }}>
            <div style={{
              position: 'absolute',
              width: '550px',
              height: '550px',
              background: '#F1EEE5',
              borderRadius: '50%',
              zIndex: 1,
              left: '40px'
            }} />
            <div style={{ position: 'relative', zIndex: 2, marginLeft: '40px' }}>
              <Image
                src="/images/section6.png"
                alt="customer steps illustration"
                width={350}
                height={350}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

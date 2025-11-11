'use client';

import { motion } from "framer-motion";
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function SafetyZoneSection5() {
  const cards = [
    {
      title: "لوحة التحكم المركزية والإقليمية",
      description:
        "الإدارة اللامركزية: يمكن لمدير المنطقة أو الفرع متابعة الأعمال الموكلة إليه، بينما تستطيع الإدارة العليا متابعة إجمالية لجميع المناطق والفروع وأداء المدراء.",
    },
    {
      title: "التصنيف وتحديد الصلاحيات",
      description:
        "إضافة وتصنيف جميع الفروع إقليميًا حسب المناطق الجغرافية، وتعيين صلاحيات محددة للمناطق/الفروع مع صلاحيات مخصصة للإدارة العليا.",
    },
    {
      title: "التحكم والرقابة متعددة المستويات",
      description:
        "تمكّن الإدارة من متابعة الفروع التي تحتاج لصيانة عاجلة، والأعمال قيد التنفيذ، ومعلومات كل فرع تفصيليًا (عقد الصيانة، الزيارات الدورية المنجزة).",
    },
    {
      title: "نظام إشارات المرور البصري (للمجمعات)",
      description:
        "أخضر (مطابق)، أصفر (تنبيه استباقي)، أحمر (خطر قائم/عقد منتهي) لتمكين الإشراف الفوري على الممتثل والمستثنى.",
    },
    {
      title: "التنبيهات الاستباقية للعمليات",
      description:
        "إشعارات فورية حول قرب موعد صيانة في فرع معين، أو تأخر مزود الخدمة لاتخاذ الإجراءات التصحيحية اللازمة على مستوى الإدارة الإقليمية والعليا.",
    },
  ];

  return (
    <div style={{ width: '100%', background: '#FFFFFF' }}>
      {/* Header Section - Outside the background image */}
      <div style={{
        width: '100%',
        padding: 'clamp(50px, 8vw, 80px) 0 clamp(30px, 5vw, 50px) 0',
        background: '#FFFFFF'
      }}>
        <ScrollReveal>
          <div style={{
            maxWidth: '1312px',
            margin: '0 auto',
            padding: '0 clamp(16px, 4vw, 64px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <h2 style={{
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(28px, 5vw, 44px)',
              lineHeight: 'normal',
              color: '#4E4E4E',
              textAlign: 'center',
              margin: 0
            }}>
              مزايا الإدارة والتحكم في الفروع الإقليمية
            </h2>
           
            <p style={{
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '400',
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              lineHeight: 'clamp(26px, 4vw, 32px)',
              color: '#4E4E4E',
              textAlign: 'center',
              margin: 0,
              marginTop: '10px',
              maxWidth: '900px'
            }}>
              (لمدراء المجمعات التجارية/العملاء الكبار)
            </p>
             <div style={{
              height: '6px',
              width: 'clamp(200px, 40vw, 550px)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, #F6E468 0%, #90853D 100%)',
                borderRadius: '3px'
              }} />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Background Image Section with Cards */}
      <section 
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '80vh',
          padding: 'clamp(50px, 8vw, 80px) 0',
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden'
        }}
      >
      {/* Overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1312px',
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 64px)'
      }}>
        <ScrollReveal>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(30px, 5vw, 50px)',
            alignItems: 'center'
          }}>
            {/* Cards Container */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(20px, 3vw, 32px)',
              width: '100%',
              maxWidth: '1200px',
              marginTop: 'clamp(20px, 4vw, 40px)'
            }}>
              {cards.map((card, index) => (
                <ScrollReveal key={index} direction="up">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 'clamp(12px, 2vw, 16px)',
                      padding: 'clamp(24px, 4vw, 32px)',
                      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(12px, 2vw, 16px)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      minHeight: '200px',
                      height: '100%'
                    }}
                  >
                    <h3 style={{
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: '700',
                      fontSize: 'clamp(18px, 2.5vw, 22px)',
                      lineHeight: '1.4',
                      color: '#C7A64E',
                      margin: 0,
                      textAlign: 'center'
                    }}>
                      {card.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: '400',
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      lineHeight: 'clamp(22px, 3.5vw, 26px)',
                      color: '#4E4E4E',
                      margin: 0,
                      textAlign: 'center'
                    }}>
                      {card.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
    </div>
  );
}

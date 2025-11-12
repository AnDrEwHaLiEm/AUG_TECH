'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';

export default function SafetyZoneSection3() {
    const services = [
        {
            id: 1,
            title: 'طفايات الحريق',
            titleEn: '(Fire Extinguishers)',
            description: 'خدمات شاملة لتوريد، تركيب، وفحص وصيانة طفايات الحريق اليدوية، وضمان مطابقتها لجميع معايير السلامة والأمان.',
            image: '/images/Extinguisher.png',
            direction: 'right' as const
        },
        {
            id: 2,
            title: 'الرخصة الفورية',
            titleEn: '(Fire License)',
            description: 'مسار عمل مخصص للمنشآت ذات المساحات الصغيرة (أقل من 120 م²)، لإجراء متطلبات السلامة والحصول على الرخصة بسرعة وكفاءة.',
            image: '/images/License.png',
            direction: 'left' as const
        },
        {
            id: 3,
            title: 'عقود صيانة أنظمة الإنذار والإطفاء',
            titleEn: '(Maintenance Contracts)',
            description: 'نقدم عقود صيانة سنوية لأنظمة الإنذار والإطفاء للمنشآت التي تزيد مساحتها عن 120 متر، بما في ذلك زيارات دورية لضمان استمرارية عمل الأنظمة.',
            image: '/images/Maintenance.png',
            direction: 'right' as const
        },
        {
            id: 4,
            title: 'خدمات التركيب الجديدة',
            titleEn: '(طور التطوير)',
            description: 'توريد وتركيب أنظمة إنذار وإطفاء جديدة، مع ضمان أربع زيارات صيانة مجانية لمدة سنة بعد التركيب الجديد.',
            image: '/images/fixing.png',
            direction: 'left' as const
        }
    ];

    return (
        <section id="safety-zone-section-3" className="safety-zone-section-3" style={{ 
          width: '100%', 
          maxWidth: '100vw',
          background: '#F5F5F5', 
          padding: 'clamp(10px, 2vw, 20px) 0',
          boxSizing: 'border-box'
        }}>
            <ScrollReveal>
                <div style={{ 
                  maxWidth: '1312px', 
                  margin: '0 auto', 
                  padding: '0 clamp(10px, 2vw, 20px)',
                  width: '100%',
                  boxSizing: 'border-box'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 2vw, 20px)', alignItems: 'center' }}>
                        {/* Section Header */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <h2 style={{
                                fontFamily: 'Cairo, sans-serif',
                                fontWeight: '700',
                                fontSize: 'clamp(28px, 5vw, 44px)',
                                lineHeight: 'normal',
                                color: '#4E4E4E',
                                textAlign: 'center',
                                margin: 0
                            }}>
                                خدماتنا الأساسية
                            </h2>
                            
                            <div style={{ height: '6px', width: 'clamp(160px, 30vw, 220px)', position: 'relative' }}>
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

                        {/* Subtitle */}
                        <p style={{
                            fontFamily: 'Cairo, sans-serif',
                            fontWeight: '400',
                            fontSize: 'clamp(16px, 2.5vw, 20px)',
                            lineHeight: 'clamp(26px, 4vw, 32px)',
                            color: '#4E4E4E',
                            textAlign: 'center',
                            margin: 0,
                            maxWidth: '900px'
                        }}>
                            نركز على الحلول الحيوية لضمان الامتثال القانوني والجاهزية التشغيلية لمنشآتك.
                        </p>

                        {/* Service Cards */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'clamp(20px, 3vw, 32px)',
                            width: '100%',
                            maxWidth: '1100px',
                            background: '#F5F5F5',
                            padding: 'clamp(16px, 3vw, 50px)',
                            borderRadius: 'clamp(12px, 2vw, 24px)'
                        }}>
                            {services.map((service, index) => (
                                <ScrollReveal key={service.id} direction={service.direction}>
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        transition={{ duration: 0.3 }}
                                        className="service-card-responsive"
                                        style={{
                                            background: '#FFFFFF',
                                            borderRadius: 'clamp(12px, 2vw, 16px)',
                                            padding: 'clamp(16px, 2.5vw, 32px)',
                                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                                            borderRight: '6px solid #C7A64E',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 'clamp(12px, 2.5vw, 24px)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            flexDirection: 'row-reverse',
                                            marginLeft: (index === 1 || index === 3) ? '0' : 'clamp(0px, 8vw, 120px)',
                                            marginRight: (index === 0 || index === 2) ? '0' : 'clamp(0px, 8vw, 120px)',
                                        }}
                                    >
                                        {/* Text content */}
                                        <div style={{
                                            flex: 1,
                                            textAlign: 'right',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 'clamp(6px, 1.5vw, 12px)'
                                        }}>
                                            <h3 style={{
                                                fontFamily: 'Cairo, sans-serif',
                                                fontWeight: '700',
                                                fontSize: 'clamp(16px, 3vw, 24px)',
                                                lineHeight: 'clamp(24px, 4vw, 32px)',
                                                color: '#4E4E4E',
                                                margin: 0
                                            }}>
                                                {service.title} <span style={{ fontWeight: '600', fontSize: 'clamp(14px, 2.5vw, 20px)' }}>{service.titleEn}</span>
                                            </h3>
                                            <p style={{
                                                fontFamily: 'Cairo, sans-serif',
                                                fontWeight: '400',
                                                fontSize: 'clamp(13px, 2vw, 18px)',
                                                lineHeight: 'clamp(20px, 3.2vw, 28px)',
                                                color: '#666666',
                                                margin: 0
                                            }}>
                                                {service.description}
                                            </p>
                                        </div>
                                        {/* Icon on the right */}
                                        <div
                                            style={{
                                                flexShrink: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 'clamp(50px, 10vw, 70px)',
                                                height: 'clamp(50px, 10vw, 70px)',
                                                background: '#F9F7F0',
                                                borderRadius: '50%',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </div>

                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}

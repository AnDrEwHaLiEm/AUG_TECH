'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="projects-section" style={{ width: '100%', background: '#F5F5F5' }}>
      <ScrollReveal>
        <div className="projects-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '56px 64px' }}>
          <div style={{ maxWidth: '1312px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'center' }}>
          {/* Section Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-end', justifyContent: 'center', width: '264px' }}>
            <h2 style={{
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '700',
              fontSize: '44px',
              lineHeight: 'normal',
              color: '#4E4E4E',
              textAlign: 'center',
              margin: 0,
              padding: '2px 0'
            }}>
              أبرز مشاريعنا
            </h2>
            <div style={{ height: '6px', width: '264px', position: 'relative' }}>
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

          {/* Project Cards */}
          <div className="projects-grid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '32px' }}>
            {/* Safety Zone Card - LEFT */}
            <motion.div 
              className="project-card"
              whileHover={{ 
                scale: 1.03,
                y: -8,
                boxShadow: '0px 15px 40px rgba(199, 166, 78, 0.3), inset 0px 8px 30px rgba(0, 0, 0, 0.25)',
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              style={{
                background: '#FFFFFF',
                width: '100%',
                maxWidth: '640px',
                height: 'auto',
                minHeight: '426px',
                borderRadius: '12px',
                padding: '20px 16px',
                boxShadow: 'inset 0px 8px 30px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {/* Card Header with Logo */}
              <div className="project-card-header" style={{
                background: '#F5F5F5',
                height: '203px',
                width: '100%',
                borderRadius: '12px 12px 0 0',
                padding: '4px 162px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ position: 'relative', width: '88px', height: '136px' }}>
                  <Image
                    src="/images/safety-zone-logo.png"
                    alt="Safety Zone"
                    fill
                    className="object-contain"
                  />
                </div>
                <p style={{
                  fontFamily: 'Almarai, Cairo, sans-serif',
                  fontWeight: '700',
                  fontSize: '28px',
                  lineHeight: 'normal',
                  color: '#263238',
                  margin: 0
                }}>
                  <span style={{ color: '#EF2825' }}>S</span>afety <span style={{ color: '#A10E1E' }}>Z</span>one
                </p>
              </div>

              {/* Card Content */}
              <div className="project-card-content" style={{ textAlign: 'center', width: '100%', maxWidth: '557px', display: 'flex', flexDirection: 'column', gap: '14px', padding: '0 16px' }}>
                <p className="project-title" style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '700',
                  fontSize: '30px',
                  lineHeight: 'normal',
                  color: '#C7A64E',
                  margin: 0
                }}>
                  سيفتي زون
                </p>
                <p className="project-description" style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: '#4E4E4E',
                  margin: 0,
                  whiteSpace: 'pre-wrap'
                }}>
                  منصة إلكترونية رائدة تعمل على تسهيل الربط بين الشركات المعتمدة من قبل الدفاع المدني والمنشآت التجارية التي تحتاج إلى خدمات السلامة والأمان. يهدف التطبيق إلى رفع مستوى الكفاءة والشفافية في هذا القطاع الحيوي.
                </p>
              </div>
            </motion.div>

            {/* Mohami Pro Card - RIGHT */}
            <motion.div 
              className="project-card"
              whileHover={{ 
                scale: 1.03,
                y: -8,
                boxShadow: '0px 15px 40px rgba(199, 166, 78, 0.3), inset 0px 8px 30px rgba(0, 0, 0, 0.25)',
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              style={{
                background: '#FFFFFF',
                width: '100%',
                maxWidth: '640px',
                height: 'auto',
                minHeight: '426px',
                borderRadius: '12px',
                padding: '20px 16px',
                boxShadow: 'inset 0px 8px 30px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {/* Card Header with Logo */}
              <div className="project-card-header" style={{
                background: '#F5F5F5',
                height: '203px',
                width: '100%',
                borderRadius: '12px 12px 0 0',
                padding: '4px 162px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ position: 'relative', width: '150px', height: '139px' }}>
                  <Image
                    src="/images/mohami-pro-logo.png"
                    alt="Mohami Pro"
                    fill
                    className="object-contain"
                  />
                </div>
                <p style={{
                  fontFamily: 'Almarai, sans-serif',
                  fontWeight: '700',
                  fontSize: '28px',
                  lineHeight: 'normal',
                  background: 'linear-gradient(to right, #4E4E4E, #90853d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  margin: 0
                }}>
                  Mohami Pro
                </p>
              </div>

              {/* Card Content */}
              <div className="project-card-content" style={{ textAlign: 'center', width: '100%', maxWidth: '557px', display: 'flex', flexDirection: 'column', gap: '14px', padding: '0 16px' }}>
                <p className="project-title" style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '700',
                  fontSize: '30px',
                  lineHeight: 'normal',
                  color: '#C7A64E',
                  margin: 0
                }}>
                  محامي برو
                </p>
                <p className="project-description" style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: '#4E4E4E',
                  margin: 0,
                  whiteSpace: 'pre-wrap'
                }}>
                  (تحت التطوير) برنامج مبتكر يهدف إلى خدمة القطاع القانوني، حيث سيوفر أدوات وحلول تقنية متقدمة للمحامين والشركات القانونية لإدارة أعمالهم بكفاءة وفعالية. <span style={{ fontFamily: 'Almarai, sans-serif', fontWeight: '700', color: '#90853d' }}>ترقبوا الإطلاق قريباً!</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

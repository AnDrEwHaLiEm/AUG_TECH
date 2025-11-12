'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import Image from 'next/image';

export default function SafetyZoneSection1() {
    return (
        <section
            id="home"
            className="hero-section relative flex items-center justify-center overflow-hidden"
            style={{
                height: '635px',
                marginTop: '130px',
                width: '100%',
                padding: '16px 20px',
                boxSizing: 'border-box'
            }}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/heroSafty.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: 'rgba(64, 64, 64, 0.5)' }}
                />
            </div>

            {/* Content */}
            <ScrollReveal>
                <div className="hero-content relative z-10 text-center" style={{ maxWidth: '1314px', width: '100%', padding: '0 20px' }}>
                    {/* Title & Subtitle */}
                    <div
                        className="hero-title"
                        style={{
                            fontFamily: 'Cairo, sans-serif',
                            fontWeight: '700',
                            fontSize: 'clamp(32px, 8vw, 70px)',
                            lineHeight: 'clamp(45px, 10vw, 100px)',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            marginBottom: '24px'
                        }}
                    >
                        <p style={{ margin: 0 }}> سيفتي زون</p>
                        {/* <p style={{ margin: 0 }}>نبني المستقبل الرقمي بتقنيات مبتكرة</p> */}
                    </div>

                    {/* Description */}
                    <p
                        className="hero-description"
                        style={{
                            fontFamily: 'Cairo, sans-serif',
                            fontWeight: '600',
                            fontSize: 'clamp(18px, 4vw, 38px)',
                            lineHeight: 'normal',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            margin: 0
                        }}
                    >
                     شريكك الموثوق لأمن وسلامة منشأتك
                    </p>
                </div>
            </ScrollReveal>
        </section>
    );
}

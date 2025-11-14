import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/constants';
// import ThemeProvider from '@/components/providers/ThemeProvider';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.nameEn}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.nameEn }],
  creator: SITE_CONFIG.nameEn,
  publisher: SITE_CONFIG.nameEn,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.nameEn}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.nameEn}`,
    description: SITE_CONFIG.description,
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="theme-color" content="#c9a961" />
        {/* Mobile viewport fixes */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        {/* iOS Safari fixes */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Prevent auto-zoom on input focus (iOS) */}
        <meta name="format-detection" content="telephone=no" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://augtech.com/#organization',
                  name: 'Aug Tech | أوج تك',
                  alternateName: 'أوج تك',
                  url: 'https://augtech.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://augtech.com/images/logo.png',
                    width: 1200,
                    height: 630,
                  },
                  description: 'نبني المستقبل الرقمي بتقنيات متقدمة - نقدم الحلول الإبداعية التي تحاكي رغباتكم وتلبي احتياجاتكم على أعلى معيار دولي من الجودة الابتكار الذي يهدف إلى رفع كفاءة الاعمال ويزيد معدلات النمو',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+966 50 123 4567',
                    email: 'info@augtech.com',
                    contactType: 'Customer Service',
                    areaServed: 'SA',
                    availableLanguage: ['Arabic', 'English'],
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Riyadh',
                    addressCountry: 'SA',
                  },
                  sameAs: [
                    'https://facebook.com',
                    'https://twitter.com',
                    'https://linkedin.com',
                    'https://instagram.com',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://augtech.com/#website',
                  url: 'https://augtech.com',
                  name: 'Aug Tech | أوج تك',
                  inLanguage: 'ar',
                  publisher: {
                    '@id': 'https://augtech.com/#organization',
                  },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://augtech.com/?s={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: 'Cairo, sans-serif' }} suppressHydrationWarning>
        {/* <ThemeProvider> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

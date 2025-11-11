import { Service, Feature, ContactInfo, SocialLinks, NavLink } from '@/types';

export const SITE_CONFIG = {
  name: 'أوج تك',
  nameEn: 'Aug Tech',
  description: 'نبني المستقبل الرقمي بتقنيات متقدمة - نقدم الحلول الإبداعية التي تحاكي رغباتكم وتلبي احتياجاتكم على أعلى معيار دولي من الجودة الابتكار الذي يهدف إلى رفع كفاءة الاعمال ويزيد معدلات النمو',
  url: 'https://augtech.com',
  keywords: ['أوج تك', 'استشارات قانونية', 'تقنية', 'حلول رقمية', 'الاستشارات القانونية'],
};

export const SERVICES: Service[] = [
  {
    id: 'legal',
    title: 'استشارات قانونية',
    description: 'نقدم استشارات قانونية متخصصة في جميع المجالات التجارية والعقارية والجنائية مع فريق من المحامين ذوي الخبرة',
    icon: '/images/legal-icon.png',
  },
  {
    id: 'safety',
    title: 'استشارات الأمن',
    description: 'خدمات استشارية متكاملة في مجال الأمن والسلامة للشركات والمؤسسات لضمان بيئة عمل آمنة',
    icon: '/images/safety-icon.png',
  },
];

export const FEATURES: Feature[] = [
  {
    id: 'transparency',
    title: 'الشفافية التامة',
    description: 'نلتزم بالشفافية الكاملة في جميع تعاملاتنا مع عملائنا',
    icon: 'Eye',
  },
  {
    id: 'experience',
    title: 'الخبرة والاحتراف',
    description: 'فريق عمل محترف بخبرة تزيد عن 15 عاماً في المجال',
    icon: 'Award',
  },
  {
    id: 'solutions',
    title: 'حلول مبتكرة',
    description: 'نقدم حلولاً إبداعية ومبتكرة تناسب احتياجات عملائنا',
    icon: 'Lightbulb',
  },
  {
    id: 'support',
    title: 'دعم مستمر',
    description: 'نوفر دعماً فنياً مستمراً على مدار الساعة',
    icon: 'HeadphonesIcon',
  },
];

export const CONTACT_INFO: ContactInfo = {
  phone: '+966 50 123 4567',
  email: 'info@augtech.com',
  address: 'الرياض، المملكة العربية السعودية',
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  { href: '#projects', label: 'مشاريعنا' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#contact', label: 'تواصل معنا' },
];

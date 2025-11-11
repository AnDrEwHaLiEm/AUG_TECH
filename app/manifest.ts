import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.nameEn,
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#c9a961',
    icons: [
      {
        src: '/images/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}

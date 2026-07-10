import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rasdent Multi-Speciality Dental Clinic',
    short_name: 'Rasdent Clinic',
    description: 'Rasdent Multi-Speciality Dental Clinic in Kuttiady offers advanced, complete smile solutions, cosmetic dentistry, orthodontics, and implants. A Reason to Smile.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00A79E',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

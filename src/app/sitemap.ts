import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: 'https://www.rasdent.in',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.rasdent.in/treatments',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: 'https://www.rasdent.in/kids-dentistry',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}

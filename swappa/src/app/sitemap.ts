import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  
  return [
    {
      url:             'https://www.swappa.chat',
      lastModified:    now,
      changeFrequency: 'daily',    // bumped from weekly — homepage changes more often
      priority:        1,
    },
    {
      url:             'https://www.swappa.chat/faq',
      lastModified:    now,
      changeFrequency: 'weekly',
      priority:        0.8,
    },
  ]
}
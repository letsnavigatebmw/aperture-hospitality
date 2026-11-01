import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: site.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/insights`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.url}/spirits`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
  ]
}

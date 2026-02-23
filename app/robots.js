export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://fabrikasimetallicnusantara.com/sitemap.xml',
  }
}
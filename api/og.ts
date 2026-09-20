import type { VercelRequest, VercelResponse } from '@vercel/node';

interface PageMeta {
  title: string;
  description: string;
  url: string;
}

const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Surgepay — Send Money on WhatsApp, Instantly',
    description:
      'Send money from the US to India in seconds using WhatsApp. Instant transfers, no fees, Google rates.',
    url: 'https://www.surgepay.money/',
  },
  '/terms': {
    title: 'Terms and Conditions — Surgepay',
    description:
      'Read the terms and conditions governing the use of Surgepay\'s cross-border money transfer services via WhatsApp.',
    url: 'https://www.surgepay.money/terms',
  },
  '/privacy': {
    title: 'Privacy Policy — Surgepay',
    description:
      'Learn how Surgepay collects, uses, and protects your personal information when using our WhatsApp-based money transfer service.',
    url: 'https://www.surgepay.money/privacy',
  },
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Extract the original path from the query parameter or referer
  const path = (req.query.path as string) || '/';
  const meta = PAGE_META[path] || PAGE_META['/'];

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${meta.url}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:site_name" content="Surgepay" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:url" content="${meta.url}" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />

  <link rel="canonical" href="${meta.url}" />

  <!-- WebSite structured data for Google site name -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Surgepay",
    "alternateName": ["SurgePay", "Surge Pay"],
    "url": "https://www.surgepay.money/"
  }
  </script>
</head>
<body>
  <p>Redirecting…</p>
  <script>window.location.replace("${meta.url}");</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  res.status(200).send(html);
}

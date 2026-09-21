import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Serve a self-contained 404 page. No readFileSync — avoids ENOENT crashes
  // in Vercel's Lambda filesystem where dist/ is not bundled with the function.
  const requestedPath = req.url || '/';
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 — Page Not Found | Surgepay</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
  <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0a0a0a; color: #e5e5e5;
      display: flex; align-items: center; justify-content: center;
      min-height: 100vh; text-align: center; padding: 2rem;
    }
    .container { max-width: 480px; }
    h1 { font-size: 6rem; font-weight: 800; color: #25D366; line-height: 1; }
    p { margin-top: 1rem; font-size: 1.125rem; color: #a3a3a3; }
    a {
      display: inline-block; margin-top: 2rem; padding: 0.75rem 2rem;
      background: #25D366; color: #0a0a0a; border-radius: 9999px;
      text-decoration: none; font-weight: 600; transition: opacity 0.2s;
    }
    a:hover { opacity: 0.85; }
  </style>
</head>
<body>
  <div class="container">
    <h1>404</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">Back to Surgepay</a>
  </div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache');
  res.status(404).send(html);
}

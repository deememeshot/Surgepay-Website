import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await fetch(
      'https://query2.finance.yahoo.com/v8/finance/chart/USDINR=X?range=1d&interval=1d',
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`Yahoo Finance API responded with status: ${response.status}`);
    }

    const data = await response.json();
    const rate = data.chart.result[0].meta.regularMarketPrice;

    if (!rate) {
      throw new Error('Rate not found in Yahoo Finance response');
    }

    // Cache the response for 1 hour to prevent hitting rate limits
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.status(200).json({ rate });
  } catch (error: any) {
    console.error('Error fetching exchange rate:', error);
    // Fallback rate if Yahoo API fails
    res.status(500).json({ error: error.message, rate: 83.20 });
  }
}

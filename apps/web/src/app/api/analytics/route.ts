import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { readFile } from 'node:fs/promises';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type AnalyticsCredentials = { client_email: string; private_key: string };

async function getCredentials(): Promise<AnalyticsCredentials> {
  if (process.env.GA_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GA_SERVICE_ACCOUNT_JSON) as AnalyticsCredentials;
  }
  const path = process.env.GA_SERVICE_ACCOUNT_JSON_PATH;
  if (!path) throw new Error('Thiếu GA_SERVICE_ACCOUNT_JSON hoặc GA_SERVICE_ACCOUNT_JSON_PATH');
  return JSON.parse(await readFile(path, 'utf8')) as AnalyticsCredentials;
}

export async function GET() {
  try {
    const credentials = await getCredentials();
    const client = new BetaAnalyticsDataClient({ credentials });
    const property = `properties/${process.env.GA_PROPERTY_ID ?? '506576506'}`;
    const [summary] = await client.runReport({
      property,
      dateRanges: [{ startDate: '730daysAgo', endDate: 'today' }],
      metrics: [{ name: 'totalUsers' }, { name: 'screenPageViews' }],
    });
    const [quizPages] = await client.runReport({
      property,
      dateRanges: [{ startDate: '730daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }, { name: 'pageTitle' }],
      metrics: [{ name: 'screenPageViews' }],
    });
    const [countries] = await client.runReport({
      property,
      dateRanges: [{ startDate: '730daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'country' }],
      metrics: [{ name: 'activeUsers' }],
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
      limit: 250,
    });

    const summaryValues = summary.rows?.[0]?.metricValues ?? [];
    const users = Number(summaryValues[0]?.value ?? 0);
    const visits = Number(summaryValues[1]?.value ?? 0);
    let tests = 0;
    for (const row of quizPages.rows ?? []) {
      const pagePath = row.dimensionValues?.[0]?.value ?? '';
      const pageTitle = row.dimensionValues?.[1]?.value ?? '';
      const isQuestionBank = /340|390/.test(pageTitle) || /340|390/.test(pagePath);
      const isTest = /test|thi.?th/i.test(pageTitle) || /test|thi.?th/i.test(pagePath);
      if (isQuestionBank || isTest) tests += Number(row.metricValues?.[0]?.value ?? 0);
    }

    return NextResponse.json({
      users, visits, tests, range: '730 ngày qua', source: 'Google Analytics 4',
      countries: (countries.rows ?? []).map((row) => ({
        country: row.dimensionValues?.[0]?.value ?? 'Không xác định',
        activeUsers: Number(row.metricValues?.[0]?.value ?? 0),
      })),
      countriesRange: '730 ngày qua',
    });
  } catch (error) {
    console.error('GA4 Data API error', error);
    return NextResponse.json({ error: 'Không đọc được dữ liệu Google Analytics 4' }, { status: 503 });
  }
}

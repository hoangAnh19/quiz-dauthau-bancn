'use client';

import { useEffect, useState } from 'react';
import { CountryMap } from './country-map';

type Stats = { users: number; visits: number; tests: number; range: string; countries: { country: string; activeUsers: number }[]; countriesRange: string };

const format = (value: number) => new Intl.NumberFormat('vi-VN').format(value);

export function SystemStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/analytics')
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then(setStats)
      .catch(() => setError(true));
  }, []);

  const value = (key: keyof Pick<Stats, 'visits' | 'tests' | 'users'>) =>
    stats ? format(stats[key]) : error ? '—' : '…';

  return <section className="systemStats" aria-labelledby="system-stats-title">
    <h2 id="system-stats-title">Thống kê Toàn hệ thống</h2>
    <div className="systemStatsGrid">
      <article className="systemStatCard"><strong>{value('users')}</strong><span>Người dùng</span></article>
      <article className="systemStatCard"><strong>{value('visits')}</strong><span>Lượt truy cập</span></article>
      <article className="systemStatCard"><strong>{value('tests')}</strong><span>Lượt bài đã làm</span></article>
    </div>
    <p className="systemStatsNote">{stats?.range ?? (error ? 'Chưa kết nối được Google Analytics 4' : 'Đang tải dữ liệu Google Analytics 4…')}</p>
    {stats && <CountryMap countries={stats.countries} range={stats.countriesRange} />}
  </section>;
}

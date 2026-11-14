'use client';

import { useEffect, useRef } from 'react';

type Country = { country: string; activeUsers: number };

declare global {
  interface Window { google?: { charts: { load: (version: string, options: object) => void; setOnLoadCallback: (callback: () => void) => void; }; visualization: { arrayToDataTable: (rows: string[][] | (string | number)[][]) => unknown; GeoChart: new (element: HTMLElement) => { draw: (data: unknown, options: object) => void }; }; }; }
}

export function CountryMap({ countries, range }: { countries: Country[]; range: string }) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const draw = () => {
      if (!mapRef.current || !window.google) return;
      const data = window.google.visualization.arrayToDataTable([
        ['Country', 'Active users'],
        ...countries.map((item) => [item.country, item.activeUsers]),
      ]);
      new window.google.visualization.GeoChart(mapRef.current).draw(data, {
        colorAxis: { colors: ['#dcecf8', '#2f80ed'] },
        backgroundColor: 'transparent', datalessRegionColor: '#eef1f2',
        legend: 'none', tooltip: { text: 'value' }, keepAspectRatio: true,
      });
    };
    if (window.google?.visualization) { draw(); return; }
    const existing = document.querySelector('script[data-google-charts]');
    const script = existing ?? document.createElement('script');
    script.setAttribute('data-google-charts', 'true');
    script.setAttribute('src', 'https://www.gstatic.com/charts/loader.js');
    if (!existing) { script.addEventListener('load', () => { window.google?.charts.load('current', { packages: ['geochart'] }); window.google?.charts.setOnLoadCallback(draw); }); document.head.appendChild(script); }
    else { window.google?.charts.setOnLoadCallback(draw); }
  }, [countries]);

  return <section className="countryMapCard"><div className="countryMapHeader"><div><h2>Số người dùng đang hoạt động</h2><p>by Quốc gia · {range}</p></div><span className="mapStatus">✓ GA4</span></div><div className="countryMapLayout"><div ref={mapRef} className="countryMap" aria-label="Bản đồ người dùng theo quốc gia" /><div className="countryList"><div className="countryListHead"><span>QUỐC GIA</span><span>SỐ NGƯỜI DÙNG</span></div>{countries.slice(0, 10).map((item) => <div className="countryRow" key={item.country}><span>{item.country}</span><strong>{new Intl.NumberFormat('vi-VN').format(item.activeUsers)}</strong></div>)}</div></div></section>;
}

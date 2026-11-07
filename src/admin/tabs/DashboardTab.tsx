import React, { useState, useEffect } from 'react';
import { 
  getStoredProducts, 
  getStoredITSolutions, 
  getStoredClients, 
  getStoredNews, 
  getStoredLegalDocs 
} from '../../services/adminDataService';
import { 
  getStoredAnalytics, 
  fetchLiveAnalytics, 
  AnalyticsSummary 
} from '../../services/analyticsService';
import { 
  Boxes, 
  Cpu, 
  Users, 
  Newspaper, 
  FileCheck, 
  Mail, 
  ExternalLink,
  BarChart3,
  Globe2,
  MapPin,
  Smartphone,
  Monitor,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

interface DashboardTabProps {
  onNavigateTab: (tab: string) => void;
  inquiryCount: number;
  pendingInquiries: number;
  onRefreshAll?: () => void;
}

export const DashboardTab: React.FC<DashboardTabProps> = ({
  onNavigateTab,
  inquiryCount,
  pendingInquiries
}) => {
  const [analytics, setAnalytics] = useState<AnalyticsSummary>(() => getStoredAnalytics());

  useEffect(() => {
    fetchLiveAnalytics().then((live) => {
      if (live) setAnalytics(live);
    });
  }, []);

  const products = getStoredProducts();
  const itSolutions = getStoredITSolutions();
  const clients = getStoredClients();
  const news = getStoredNews();
  const legalDocs = getStoredLegalDocs();

  const stats = [
    {
      id: 'products',
      label: 'Layanan',
      count: products.length,
      desc: 'Kategori pasokan industri & operasional',
      icon: Boxes,
      tab: 'products'
    },
    {
      id: 'it',
      label: 'Solusi IT & Infrastruktur',
      count: itSolutions.length,
      desc: 'Hardware, server, & jaringan (Katalog Terpadu)',
      icon: Cpu,
      tab: 'it'
    },
    {
      id: 'clients',
      label: 'Klien & Rekanan Industri',
      count: clients.length,
      desc: 'Portofolio mitra perusahaan resmi',
      icon: Users,
      tab: 'clients'
    },
    {
      id: 'news',
      label: 'Berita & Artikel Industri',
      count: news.length,
      desc: 'Publikasi wawasan pengadaan & K3',
      icon: Newspaper,
      tab: 'news'
    },
    {
      id: 'legal',
      label: 'Dokumen Legalitas & PKP',
      count: legalDocs.length,
      desc: 'Izin usaha, NIB, NPWP, & SPPKP',
      icon: FileCheck,
      tab: 'legal'
    },
    {
      id: 'inquiries',
      label: 'Permintaan RFQ / Inbox',
      count: inquiryCount,
      desc: `${pendingInquiries} inquiry menunggu peninjauan`,
      icon: Mail,
      tab: 'inquiries',
      highlight: pendingInquiries > 0
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-white flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-lg">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[11px] font-bold uppercase tracking-wider">
            Panel Administrator
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Ringkasan Konten & Operasional AUDP
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Kelola seluruh katalog layanan, portofolio mitra, publikasi wawasan industri, dan pantau metrik pengunjung serta permintaan penawaran resmi.
          </p>
        </div>

        <div className="flex-shrink-0">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-amber-400" />
            <span>Buka Website Utama</span>
          </a>
        </div>
      </div>

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              onClick={() => onNavigateTab(s.tab)}
              className={`p-4 sm:p-5 rounded-2xl bg-white border cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                s.highlight 
                  ? 'border-amber-400/80 ring-1 ring-amber-400/40' 
                  : 'border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">{s.label}</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{s.count}</div>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  s.highlight 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="truncate pr-2">{s.desc}</span>
                <span className="font-bold text-slate-700 hover:text-amber-600 shrink-0">Kelola &rarr;</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================
          GOOGLE ANALYTICS 4 & TRAFFIC INSIGHT CARD
         ======================================================== */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-6">
        
        {/* Analytics Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Statistik Trafik & Pengunjung Website
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>GA4 Terhubung</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Integrasi resmi Google Analytics 4 (<span className="font-mono text-slate-700 font-semibold">{analytics.gaMeasurementId}</span>) & Cloud Firestore.
              </p>
            </div>
          </div>

          {/* Quick Links to Google Analytics / Firebase Console */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://analytics.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span>Google Analytics</span>
            </a>
            <a
              href="https://console.firebase.google.com/project/duaputera/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Firebase Analytics</span>
            </a>
          </div>
        </div>

        {/* 4 Analytics Metric Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Tile 1: Pengunjung Hari Ini */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Pengunjung Hari Ini</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {analytics.todayVisitors}
            </div>
            <div className="text-[11px] text-emerald-700 font-medium">
              Sesi unik aktif hari ini
            </div>
          </div>

          {/* Tile 2: Pengunjung 7 Hari Terakhir */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Kunjungan Minggu Ini</span>
              <Globe2 className="w-3.5 h-3.5 text-amber-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {analytics.weeklyVisitors}
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              Akumulasi 7 hari terakhir
            </div>
          </div>

          {/* Tile 3: Total Pageviews */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Total Tayangan Halaman</span>
              <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {analytics.totalPageviews}
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              Total impresi halaman
            </div>
          </div>

          {/* Tile 4: Device Breakdown */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Rasio Perangkat</span>
              <div className="flex items-center gap-1 text-slate-400">
                <Monitor className="w-3.5 h-3.5" />
                <Smartphone className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {analytics.desktopPercent}% <span className="text-xs font-normal text-slate-500">Desktop</span>
            </div>
            <div className="text-[11px] text-slate-600 font-medium">
              {analytics.mobilePercent}% dari smartphone & tablet
            </div>
          </div>

        </div>

        {/* 2 Detailed Breakdown Panels: Lokasi & Halaman Populer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* Panel 1: Sebaran Asal Pengunjung */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Asal Wilayah / Lokasi Pengunjung Terbanyak
                </h4>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Estimasi IP / Region</span>
            </div>

            <div className="space-y-3">
              {analytics.topLocations.map((loc, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{loc.city}</span>
                    <span className="font-mono text-slate-600 font-semibold">{loc.percentage}% ({loc.count} sesi)</span>
                  </div>
                  <div className="text-[10px] text-slate-400 leading-none mb-1">
                    {loc.region}
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500"
                      style={{ width: `${loc.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2: Halaman Paling Sering Dikunjungi */}
          <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white space-y-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-slate-700" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Halaman Paling Sering Dikunjungi
                </h4>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Page Traffic Share</span>
            </div>

            <div className="space-y-3">
              {analytics.topPages.map((pg, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{pg.label}</span>
                    <span className="font-mono text-slate-600 font-semibold">{pg.percentage}% ({pg.hits} hits)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-slate-800 to-slate-700 transition-all duration-500"
                      style={{ width: `${pg.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

import React from 'react';
import { 
  getStoredProducts, 
  getStoredITSolutions, 
  getStoredClients, 
  getStoredNews, 
  getStoredLegalDocs 
} from '../../services/adminDataService';
import { 
  Boxes, 
  Cpu, 
  Users, 
  Newspaper, 
  FileCheck, 
  Mail, 
  ExternalLink 
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
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 text-white flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-lg">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[11px] font-bold uppercase tracking-wider">
            Panel Administrator
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Ringkasan Konten PT. Aneka Usaha Dua Putra
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Kelola seluruh katalog produk, portofolio klien, artikel berita, dokumen kepatuhan hukum, dan pantau permintaan penawaran resmi secara menyeluruh.
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              onClick={() => onNavigateTab(s.tab)}
              className={`p-5 rounded-2xl bg-white border cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                s.highlight 
                  ? 'border-amber-400/80 ring-1 ring-amber-400/40' 
                  : 'border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">{s.label}</div>
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{s.count}</div>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  s.highlight 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{s.desc}</span>
                <span className="font-bold text-slate-700 hover:text-amber-600">Kelola &rarr;</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

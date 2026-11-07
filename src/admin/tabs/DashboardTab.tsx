import React, { useState } from 'react';
import { 
  getStoredProducts, 
  getStoredITSolutions, 
  getStoredClients, 
  getStoredNews, 
  getStoredLegalDocs, 
  seedAllDataToFirestore, 
  syncFromFirestore, 
  resetToDefaultData 
} from '../../services/adminDataService';
import { 
  Boxes, 
  Cpu, 
  Users, 
  Newspaper, 
  FileCheck, 
  Mail, 
  UploadCloud, 
  DownloadCloud, 
  RotateCcw, 
  ExternalLink, 
  CheckCircle, 
  AlertTriangle,
  Loader2
} from 'lucide-react';

interface DashboardTabProps {
  onNavigateTab: (tab: string) => void;
  inquiryCount: number;
  pendingInquiries: number;
  onRefreshAll: () => void;
}

export const DashboardTab: React.FC<DashboardTabProps> = ({
  onNavigateTab,
  inquiryCount,
  pendingInquiries,
  onRefreshAll
}) => {
  const [actionLoading, setActionLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const products = getStoredProducts();
  const itSolutions = getStoredITSolutions();
  const clients = getStoredClients();
  const news = getStoredNews();
  const legalDocs = getStoredLegalDocs();

  const handleSeed = async () => {
    if (!window.confirm('Ekspor semua data default ke Cloud Firestore? Tindakan ini akan memperbarui data di cloud.')) return;
    setActionLoading(true);
    setFeedback(null);
    const res = await seedAllDataToFirestore();
    setActionLoading(false);
    if (res.success) {
      setFeedback({ type: 'success', message: res.message });
      onRefreshAll();
    } else {
      setFeedback({ type: 'error', message: res.message });
    }
  };

  const handleSync = async () => {
    setActionLoading(true);
    setFeedback(null);
    const ok = await syncFromFirestore();
    setActionLoading(false);
    if (ok) {
      setFeedback({ type: 'success', message: 'Berhasil menyinkronkan data terbaru dari Cloud Firestore.' });
      onRefreshAll();
    } else {
      setFeedback({ type: 'error', message: 'Gagal mengambil data dari cloud atau data kosong.' });
    }
  };

  const handleReset = () => {
    if (!window.confirm('PERINGATAN: Seluruh penyesuaian lokal akan direset kembali ke data bawaan awal. Lanjutkan?')) return;
    resetToDefaultData();
    onRefreshAll();
    setFeedback({ type: 'success', message: 'Data lokal berhasil dikembalikan ke standar awal.' });
  };

  const stats = [
    {
      id: 'products',
      label: 'Katalog Produk & Solusi',
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
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-bold tracking-wider uppercase mb-2">
            Panel Administrator
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Ringkasan Konten PT. Aneka Usaha Dua Putra
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
            Kelola seluruh katalog produk, portofolio klien, artikel berita, dokumen kepatuhan hukum, dan pantau permintaan penawaran resmi secara menyeluruh.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
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

      {/* Feedback Banner */}
      {feedback && (
        <div className={`p-4 rounded-xl border text-xs flex items-center gap-3 ${
          feedback.type === 'success' 
            ? 'bg-emerald-950/80 border-emerald-800 text-emerald-200' 
            : 'bg-red-950/80 border-red-800 text-red-200'
        }`}>
          {feedback.type === 'success' ? (
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
          )}
          <span className="font-medium">{feedback.message}</span>
        </div>
      )}

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

      {/* Cloud & Data Synchronization Center */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 mb-1">
          Pusat Sinkronisasi Data & Cloud Firestore
        </h3>
        <p className="text-xs text-slate-500 mb-5 leading-relaxed">
          Gunakan tombol di bawah untuk menyinkronkan data lokal dengan Cloud Firestore atau mengembalikan konfigurasi data ke nilai awal.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleSeed}
            disabled={actionLoading}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all disabled:opacity-60 cursor-pointer"
          >
            {actionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4 text-amber-400" />}
            <span>Ekspor / Seed Semua Data ke Firestore</span>
          </button>

          <button
            onClick={handleSync}
            disabled={actionLoading}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-all disabled:opacity-60 cursor-pointer"
          >
            <DownloadCloud className="w-4 h-4 text-slate-600" />
            <span>Tarik Data Terbaru dari Cloud</span>
          </button>

          <button
            onClick={handleReset}
            disabled={actionLoading}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-red-50 text-red-600 text-xs font-bold border border-red-200 transition-all disabled:opacity-60 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset ke Standar Awal</span>
          </button>
        </div>
      </div>

    </div>
  );
};

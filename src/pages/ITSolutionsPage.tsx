import React from 'react';
import { Language } from '../types';
import { itSolutionsList } from '../data/companyData';
import { Monitor, Network, ShieldAlert, Server, FileCode, Tv, FileCheck, Layers, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface ITSolutionsPageProps {
  language: Language;
  onOpenQuotationForCategory: (cat: string) => void;
}

export const ITSolutionsPage: React.FC<ITSolutionsPageProps> = ({
  language,
  onOpenQuotationForCategory
}) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Monitor': return <Monitor className="w-5 h-5 text-amber-500" />;
      case 'Network': return <Network className="w-5 h-5 text-amber-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-500" />;
      case 'Server': return <Server className="w-5 h-5 text-amber-500" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-amber-500" />;
      case 'Tv': return <Tv className="w-5 h-5 text-amber-500" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-amber-500" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-500" />;
      default: return <Monitor className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 rounded-2xl p-6 sm:p-10 md:p-12 text-white shadow-xl border border-navy-800 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/20 border border-amber-400/40 text-[11px] font-bold text-gold-400 tracking-wider uppercase">
              {language === 'id' ? 'SOLUSI IT & PENGADAAN PERANGKAT' : 'IT SOLUTIONS & EQUIPMENT PROCUREMENT'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              IT Solutions & Equipment
            </h1>
            <p className="text-gold-300 font-semibold text-base sm:text-lg">
              {language === 'id' 
                ? 'Solusi teknologi untuk mendukung kebutuhan operasional dan digital perusahaan.' 
                : 'Technology solutions supporting enterprise digital and operational infrastructure.'}
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              {language === 'id'
                ? 'Melalui kapabilitas pengadaan satu atap, PT. Aneka Usaha Dua Putra membantu perusahaan menyederhanakan sourcing perangkat komputasi, jaringan, dan lisensi resmi sesuai spesifikasi dan anggaran Anda.'
                : 'Through one-stop procurement capabilities, PT. Aneka Usaha Dua Putra streamlines sourcing of computing hardware, networking gear, and genuine licensing matching your corporate specs.'}
            </p>
          </div>
        </div>

        {/* Clear Positioning Notice as requested by User Prompt */}
        <div className="p-4 sm:p-5 rounded-xl bg-blue-50/80 border border-blue-200 text-slate-800 flex items-start gap-3 text-xs leading-relaxed">
          <AlertCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-extrabold text-navy-950 block mb-0.5">
              {language === 'id' ? 'Fokus Layanan: IT Product Procurement & Sourcing' : 'Service Positioning: IT Product Procurement & Hardware Sourcing'}
            </span>
            <p className="text-slate-600">
              {language === 'id'
                ? 'Layanan Solusi IT PT. Aneka Usaha Dua Putra berfokus pada Pengadaan Perangkat Keras (Hardware), Perangkat Jaringan, dan Lisensi Resmi (IT Procurement & Sourcing). Kami membantu memfasilitasi kebutuhan pengadaan sesuai BOQ perusahaan dari distributor resmi terpercaya.'
                : 'PT. Aneka Usaha Dua Putra IT solutions strictly focus on Hardware Procurement, Networking Infrastructure Supply, and Verified Software Licensing, helping corporate procurement teams match vendor specifications seamlessly.'}
            </p>
          </div>
        </div>

        {/* 8 IT Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {itSolutionsList.map((item) => (
            <div 
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-black text-slate-400">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-navy-950 mb-0.5">
                  {item.title[language]}
                </h3>
                <h4 className="text-[11px] font-semibold text-gold-600 mb-2">
                  {item.subtitle[language]}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  {item.description[language]}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    {language === 'id' ? 'Daftar Perangkat:' : 'Included Equipment:'}
                  </span>
                  {item.equipmentList.map((eq, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuotationForCategory(`IT: ${item.title[language]}`)}
                  className="w-full py-2 px-3 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <span>{language === 'id' ? 'Minta Penawaran' : 'Request Quotation'}</span>
                  <ArrowRight className="w-3 h-3 text-gold-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom IT Consultation Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-navy-950 to-navy-900 text-white border border-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
              {language === 'id' ? 'PENGADAAN IT SPESIFIKASI KHUSUS' : 'CUSTOM IT HARDWARE PROCUREMENT'}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {language === 'id' 
                ? 'Punya Kebutuhan Spesifikasi IT Tertentu untuk Kantor atau Pabrik?' 
                : 'Have Custom IT Hardware Specifications for Your Plant or Office?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'id'
                ? 'Kirimkan Bill of Quantity (BOQ) atau daftar spesifikasi teknis yang dibutuhkan perusahaan Anda. Tim kami siap mencarikan opsi unit terbaik dari principal resmi dengan harga bersaing.'
                : 'Send your BOQ or technical requirements. Our sourcing specialists will identify the best hardware options from authorized principals at competitive rates.'}
            </p>
          </div>

          <button
            onClick={() => onOpenQuotationForCategory('IT Solutions & Equipment')}
            className="px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-extrabold text-xs shadow-lg transition-all whitespace-nowrap"
          >
            {language === 'id' ? 'Konsultasi Kebutuhan IT' : 'Consult IT Procurement'}
          </button>
        </div>

      </div>
    </div>
  );
};

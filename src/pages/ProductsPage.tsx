import React from 'react';
import { Language } from '../types';
import { productsList, companyInfo } from '../data/companyData';
import { CheckCircle, ArrowRight, Layers } from 'lucide-react';

interface ProductsPageProps {
  language: Language;
  onOpenQuotationForCategory: (category: string) => void;
  onNavigatePage: (page: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  language,
  onOpenQuotationForCategory,
  onNavigatePage
}) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 rounded-2xl p-6 sm:p-10 md:p-12 text-white shadow-xl border border-navy-800 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-800 border border-gold-500/40 text-[11px] font-bold text-gold-400 tracking-wider uppercase">
              {language === 'id' ? 'PRODUK & LAYANAN' : 'PRODUCTS & SERVICES'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'id' ? 'Katalog Pengadaan & Pasokan Perusahaan' : 'Corporate Procurement & Supply Portfolio'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              {language === 'id'
                ? 'Menyediakan cakupan komprehensif mulai dari kebutuhan suku cadang industri, perlengkapan K3, operasional umum, hingga solusi IT terpadu.'
                : 'Providing a comprehensive scope ranging from industrial components and safety gear to daily corporate supplies and integrated IT hardware.'}
            </p>
          </div>
        </div>

        {/* 8 Product Scopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productsList.map((prod) => {
            const isIT = prod.id === 'it-solutions-equipment';
            return (
              <div 
                key={prod.id}
                className={`rounded-2xl overflow-hidden bg-white border transition-all flex flex-col justify-between ${
                  isIT ? 'border-2 border-amber-400 ring-2 ring-amber-400/20 shadow-md' : 'border-slate-200/80 shadow-xs hover:border-blue-300'
                }`}
              >
                <div>
                  {/* Image header */}
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={prod.image} 
                      alt={prod.title[language]} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-navy-900/90 text-gold-400 px-2.5 py-1 rounded-md text-xs font-bold border border-gold-500/30">
                      Scope {prod.number}
                    </div>

                    {prod.badge && (
                      <div className="absolute top-3 right-3 bg-gold-500 text-navy-950 px-2 py-0.5 rounded text-[11px] font-black shadow">
                        {prod.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-lg sm:text-xl font-extrabold flex items-center gap-2">
                        {prod.title[language]}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {prod.fullDesc[language]}
                    </p>

                    <div>
                      <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        {language === 'id' ? 'Spesifikasi & Cakupan Pasokan:' : 'Standard Supply Items:'}
                      </h5>
                      <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-2 text-xs">
                        {prod.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 p-1.5 rounded bg-slate-50 text-slate-700">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-4">
                  {isIT ? (
                    <button
                      onClick={() => onNavigatePage('it-solutions')}
                      className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1 justify-center sm:justify-start"
                    >
                      <span>{language === 'id' ? 'Buka Halaman Solusi IT' : 'Open IT Solutions Page'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="text-xs font-semibold text-slate-400 text-center sm:text-left">
                      {companyInfo.name}
                    </span>
                  )}

                  <button
                    onClick={() => onOpenQuotationForCategory(prod.title[language])}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-xs hover:shadow transition-all"
                  >
                    <span>{language === 'id' ? 'Minta Penawaran' : 'Request Quotation'}</span>
                    <ArrowRight className="w-3 h-3 text-gold-400" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Procurement Box from Compro Scope */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
              <Layers className="w-4 h-4" />
              <span>CUSTOM PROCUREMENT</span>
            </div>
            <h3 className="text-xl font-extrabold text-navy-950">
              {language === 'id' ? 'Membutuhkan Produk atau Spesifikasi Tertentu?' : 'Need a Specific Product or Unique Specification?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'id'
                ? 'Sampaikan kebutuhan Anda kepada kami. Tim kami akan membantu mencari, memverifikasi ketersediaan, dan menyediakan solusi pengadaan yang tepat sesuai anggaran dan jadwal operasional Anda.'
                : 'Tell us your specific requirement. Our dedicated team will assist in sourcing, verifying availability, and providing tailor-fit procurement solutions aligned with your budget and timetable.'}
            </p>
          </div>

          <button
            onClick={() => onOpenQuotationForCategory('Custom Procurement')}
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-extrabold text-xs shadow transition-all whitespace-nowrap"
          >
            {language === 'id' ? 'Konsultasikan Kebutuhan' : 'Consult Your Need'}
          </button>
        </div>

      </div>
    </div>
  );
};

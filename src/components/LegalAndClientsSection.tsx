import React from 'react';
import { Language, LegalDocument } from '../types';
import { legalDocsList, clientsList } from '../data/companyData';
import { ArrowRight, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface LegalAndClientsProps {
  language: Language;
  onNavigatePage: (page: string) => void;
  onSelectDocument: (doc: LegalDocument) => void;
}

export const LegalAndClientsSection: React.FC<LegalAndClientsProps> = ({
  language,
  onNavigatePage,
  onSelectDocument
}) => {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Grid matching Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          
          {/* =========================================
              LEFT COLUMN: LEGALITAS PERUSAHAAN (4 CARDS)
             ========================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-50 border border-amber-200 text-[11px] font-bold text-amber-800 tracking-wider uppercase">
                  {language === 'id' ? 'LEGALITAS PERUSAHAAN' : 'COMPANY LEGALITY'}
                </div>
                <button
                  onClick={() => onNavigatePage('legalitas')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                >
                  <span>{language === 'id' ? 'Semua Dokumen' : 'All Documents'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 tracking-tight">
                {language === 'id' ? 'Legalitas Usaha & Pajak' : 'Corporate Legality & Compliance'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                {language === 'id'
                  ? 'Terdaftar resmi dengan izin NIB OSS dan status Pengusaha Kena Pajak (PKP).'
                  : 'Fully licensed with valid OSS NIB licensing and verified Taxable Enterprise status (PKP).'}
              </p>
            </div>

            {/* 4 Document Cards in 4 columns matching Mockup */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {legalDocsList.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => onSelectDocument(doc)}
                  className="group relative flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all cursor-pointer"
                >
                  {/* Document Thumbnail Preview */}
                  <div className="w-full h-24 sm:h-28 bg-slate-100 overflow-hidden relative flex items-center justify-center p-2 border-b border-slate-100">
                    <img 
                      src={doc.previewImage} 
                      alt={doc.title[language]} 
                      className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 flex items-center justify-center transition-colors">
                      <div className="opacity-0 group-hover:opacity-100 bg-white/90 text-navy-950 p-1.5 rounded-full shadow transition-opacity">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Document Title */}
                  <div className="p-2 sm:p-2.5 text-center flex-1 flex flex-col justify-center bg-slate-50/50">
                    <h5 className="text-[11px] font-bold text-navy-950 group-hover:text-blue-700 transition-colors leading-tight line-clamp-2">
                      {doc.title[language]}
                    </h5>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                {language === 'id' 
                  ? 'Faktur Pajak resmi, PKP terverifikasi, dan izin usaha OSS NIB lengkap.'
                  : 'Official tax invoices, verified VAT taxable status (PKP), and valid OSS NIB licensing.'}
              </span>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: CUSTOMER PORTFOLIO (5 CARDS)
             ========================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-[11px] font-bold text-blue-800 tracking-wider uppercase">
                  {language === 'id' ? 'CUSTOMER PORTFOLIO' : 'CUSTOMER PORTFOLIO'}
                </div>
                <button
                  onClick={() => onNavigatePage('klien')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                >
                  <span>{language === 'id' ? 'Semua Klien' : 'All Clients'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 tracking-tight">
                {language === 'id' ? 'Portfolio Klien' : 'Customer Portfolio'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                {language === 'id'
                  ? 'Dipercaya melayani kebutuhan pengadaan mitra perbankan dan industri manufaktur:'
                  : 'Trusted partner for leading banking institutions and manufacturing plants:'}
              </p>
            </div>

            {/* 5 Client Cards matching Mockup: responsive reflow for 5 items */}
            <div className="grid grid-cols-2 min-[480px]:grid-cols-3 sm:grid-cols-5 gap-2.5">
              {clientsList.map((client) => (
                <div 
                  key={client.id}
                  className="p-2 sm:p-2.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col items-center justify-between text-center min-h-[95px] last:col-span-2 min-[480px]:last:col-span-1"
                >
                  <div className="w-full h-10 flex items-center justify-center mb-1">
                    <img 
                      src={client.logoUrl} 
                      alt={client.name} 
                      className="max-h-8 max-w-[85px] object-contain"
                    />
                  </div>
                  <span className="text-[9px] font-bold text-slate-700 leading-tight line-clamp-2">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
              <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>
                {language === 'id'
                  ? 'Melayani sektor manufaktur otomotif, presisi industri, hingga perbankan nasional.'
                  : 'Serving precision manufacturing, automotive leaders, and major national banks.'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Language } from '../types';
import { clientsList } from '../data/companyData';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface ClientsPageProps {
  language: Language;
  onOpenQuotation: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({
  language,
  onOpenQuotation
}) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 rounded-2xl p-6 sm:p-10 md:p-12 text-white shadow-xl border border-navy-800">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-800 border border-gold-500/40 text-[11px] font-bold text-gold-400 tracking-wider uppercase">
              {language === 'id' ? 'PORTFOLIO KLIEN' : 'CUSTOMER PORTFOLIO'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'id' ? 'Dipercaya oleh Berbagai Perusahaan Terkemuka' : 'Trusted by Leading Corporate Partners'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {language === 'id'
                ? 'Saat ini PT. Aneka Usaha Dua Putra telah dipercaya untuk melayani kebutuhan beberapa perusahaan di sektor perbankan, manufaktur presisi, dan industri otomotif.'
                : 'PT. Aneka Usaha Dua Putra is privileged to support key procurement requirements across state banking institutions, precision engineering, and automotive plants.'}
            </p>
          </div>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientsList.map((client) => (
            <div 
              key={client.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-16 w-full flex items-center justify-start mb-4">
                  <img 
                    src={client.logoUrl} 
                    alt={client.name} 
                    className="max-h-12 max-w-[160px] object-contain"
                  />
                </div>
                
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {client.sector[language]}
                </span>

                <h3 className="text-sm font-extrabold text-navy-950 mt-2 mb-1 leading-snug">
                  {client.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'id' ? 'Mitra Pengadaan Terverifikasi' : 'Verified Procurement Partner'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Statement */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-extrabold text-navy-950">
              {language === 'id' ? 'Bergabung Menjadi Mitra Pengadaan Kami' : 'Partner with Us for Your Procurement Needs'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'id'
                ? 'Kami siap mendukung kelancaran pengadaan di perusahaan Anda dengan standar pelayanan profesional, respons cepat, dan harga yang kompetitif.'
                : 'Ready to streamline your enterprise sourcing with verified quality, prompt delivery, and dedicated customer service.'}
            </p>
          </div>

          <button
            onClick={onOpenQuotation}
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-extrabold text-xs shadow transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>{language === 'id' ? 'Mulai Kerja Sama' : 'Initiate Partnership'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

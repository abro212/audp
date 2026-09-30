import React from 'react';
import { Language } from '../types';
import { companyInfo } from '../data/companyData';
import { MessageSquare, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

interface ReadyToPartnerCTAProps {
  language: Language;
  onOpenQuotation: () => void;
}

export const ReadyToPartnerCTA: React.FC<ReadyToPartnerCTAProps> = ({
  language,
  onOpenQuotation
}) => {
  return (
    <section className="py-14 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 text-white relative overflow-hidden border-b border-navy-800">
      
      {/* Background ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Commitment Banner */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-800 border border-gold-500/40 text-[11px] font-bold text-gold-400 tracking-wider uppercase mb-3">
            {language === 'id' ? 'KOMITMEN KAMI' : 'OUR COMMITMENT'}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
            "{language === 'id' 
              ? 'Mitra pengadaan responsif, fleksibel, dan dapat diandalkan secara berkelanjutan.' 
              : 'Your responsive, flexible, and dependable corporate procurement partner.'}"
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-gold-400" /> Integrity
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-gold-400" /> Professionalism
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-gold-400" /> Responsiveness
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-gold-400" /> Flexibility
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-gold-400" /> Customer Satisfaction
            </span>
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-navy-900/90 border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {language === 'id' ? 'Siap Bermitra untuk Pengadaan Anda?' : 'Ready to Partner for Your Procurement?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'id'
                ? 'Sampaikan kebutuhan barang atau BOQ perusahaan Anda. Tim kami siap memberikan penawaran harga resmi terbaik.'
                : 'Share your bill of materials or procurement inquiry. Our team will promptly deliver a formal, competitive quote.'}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-gold-400 font-semibold pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Fast Response Guaranteed
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Legalitas & PKP Lengkap
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenQuotation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-gold-500/20 transition-all whitespace-nowrap"
            >
              <span>{language === 'id' ? 'Request Quotation' : 'Request Quotation'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {companyInfo.phone}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

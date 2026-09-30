import React from 'react';
import { Language } from '../types';
import { procurementSteps } from '../data/companyData';
import { Send, Search, CheckSquare, FileText, ShoppingCart, Truck } from 'lucide-react';

interface ProcurementProcessProps {
  language: Language;
  onOpenQuotation: () => void;
}

export const ProcurementProcess: React.FC<ProcurementProcessProps> = ({
  language,
  onOpenQuotation
}) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Send className="w-5 h-5 text-blue-600" />;
      case 1: return <Search className="w-5 h-5 text-blue-600" />;
      case 2: return <CheckSquare className="w-5 h-5 text-blue-600" />;
      case 3: return <FileText className="w-5 h-5 text-gold-600" />;
      case 4: return <ShoppingCart className="w-5 h-5 text-blue-600" />;
      case 5: return <Truck className="w-5 h-5 text-emerald-600" />;
      default: return <Send className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-[11px] font-bold text-blue-800 tracking-wider uppercase mb-2">
            {language === 'id' ? 'ALUR PENGADAAN' : 'WORKFLOW PROCESS'}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            {language === 'id' ? 'Alur Pemesanan & Pengadaan' : 'Procurement Workflow'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            {language === 'id'
              ? 'Tahapan pengadaan terstruktur dari pengajuan spesifikasi hingga barang diterima di lokasi Anda.'
              : 'Structured procurement stages from technical specification review to secure on-site delivery.'}
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {procurementSteps.map((step, idx) => (
            <div 
              key={step.step}
              className="relative p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white shadow-2xs border border-slate-200 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-xs font-black text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                    {step.step}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-navy-950 mb-1.5">
                  {step.title[language]}
                </h4>
                
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {step.desc[language]}
                </p>
              </div>

              {idx < 5 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-300 text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-navy-900 to-navy-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h5 className="text-sm font-bold text-white">
              {language === 'id' ? 'Membutuhkan penawaran harga untuk spesifikasi tertentu?' : 'Need a quotation for specific items?'}
            </h5>
            <p className="text-xs text-slate-300">
              {language === 'id' ? 'Kirimkan daftar barang atau BOQ perusahaan Anda kepada kami.' : 'Send your BOQ or bill of materials to our team.'}
            </p>
          </div>
          <button
            onClick={onOpenQuotation}
            className="px-5 py-2 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-extrabold text-xs shadow transition-all whitespace-nowrap"
          >
            {language === 'id' ? 'Request Penawaran' : 'Request Quotation'}
          </button>
        </div>

      </div>
    </section>
  );
};

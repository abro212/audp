import React from 'react';
import { Language } from '../types';
import { whyChooseUsList, valuePropsList } from '../data/companyData';
import { Zap, Sliders, Grid, HeartHandshake, CheckCircle, Users } from 'lucide-react';

interface WhyUsPageProps {
  language: Language;
  onOpenQuotation: () => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({
  language,
  onOpenQuotation
}) => {
  const renderWhyIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-blue-600" />;
      case 'Grid': return <Grid className="w-5 h-5 text-blue-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-blue-600" />;
      case 'CheckCircle': return <CheckCircle className="w-5 h-5 text-emerald-600" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-600" />;
      default: return <CheckCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 rounded-2xl p-6 sm:p-10 md:p-12 text-white shadow-xl border border-navy-800">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-800 border border-gold-500/40 text-[11px] font-bold text-gold-400 tracking-wider uppercase">
              {language === 'id' ? 'KEUNGGULAN KAMI' : 'WHY CHOOSE US'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'id' ? 'Mengapa Memilih PT. Aneka Usaha Dua Putra?' : 'Why Choose PT. Aneka Usaha Dua Putra?'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {language === 'id'
                ? 'Kami hadir sebagai mitra pengadaan yang adaptif, siap mendampingi kebutuhan perusahaan Anda dengan kecepatan, transparansi, dan komitmen jangka panjang.'
                : 'Your agile procurement partner committed to supporting your business continuity with speed, transparency, and sustainable collaboration.'}
            </p>
          </div>
        </div>

        {/* 6 Why Choose Us Points from Compro Page 11 */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-navy-950">
              {language === 'id' ? '6 Pilar Keunggulan Pelayanan' : '6 Core Service Pillars'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {language === 'id' ? 'Karakteristik layanan yang kami terapkan dalam setiap interaksi bisnis.' : 'Key service benchmarks embedded in our daily operational delivery.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsList.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                    {renderWhyIcon(item.iconName)}
                  </div>
                  <h3 className="text-base font-extrabold text-navy-950 mb-2">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition from Compro Page 9 */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-50 border border-amber-200 text-[11px] font-bold text-amber-800 tracking-wider uppercase">
              {language === 'id' ? 'NILAI LEBIH BISNIS' : 'VALUE PROPOSITION'}
            </div>
            <h2 className="text-2xl font-extrabold text-navy-950">
              {language === 'id' ? 'Nilai Lebih untuk Bisnis Anda' : 'Value Delivered to Your Business'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePropsList.map((val) => (
              <div key={val.number} className="p-6 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black text-gold-500 mb-2">
                    {val.number}
                  </div>
                  <h3 className="text-base font-extrabold text-navy-950 mb-2">
                    {val.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {val.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-8 rounded-2xl bg-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-navy-800">
          <div>
            <h4 className="text-xl font-extrabold text-white">
              {language === 'id' ? 'Mulai Rasakan Keunggulan Layanan Kami' : 'Experience Our Service Excellence'}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              {language === 'id' ? 'Kirimkan inquiry atau RFQ untuk membuktikan kecepatan respon dan fleksibilitas kami.' : 'Submit an inquiry or RFQ to experience our responsiveness firsthand.'}
            </p>
          </div>
          <button
            onClick={onOpenQuotation}
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-extrabold text-xs shadow"
          >
            {language === 'id' ? 'Request Quotation' : 'Request Quotation'}
          </button>
        </div>

      </div>
    </div>
  );
};

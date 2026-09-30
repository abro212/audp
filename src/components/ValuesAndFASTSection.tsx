import React from 'react';
import { Language } from '../types';
import { valuePropsList, coreValuesList } from '../data/companyData';
import { Zap, ShieldCheck, Award, Handshake, Clock, MessageSquare, Boxes } from 'lucide-react';

interface ValuesAndFASTProps {
  language: Language;
}

export const ValuesAndFASTSection: React.FC<ValuesAndFASTProps> = ({ language }) => {
  const renderFASTIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-500" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-amber-500" />;
      default: return <Zap className="w-5 h-5 text-amber-500" />;
    }
  };

  const renderValPropIcon = (name: string) => {
    switch (name) {
      case 'Clock': return <Clock className="w-5 h-5 text-blue-600" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-blue-600" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-blue-600" />;
      default: return <Clock className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-12 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Side by side layout matching Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          
          {/* =========================================
              LEFT COLUMN: VALUE PROPOSITION (01, 02, 03)
             ========================================= */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-100/60 border border-amber-200 text-[11px] font-bold text-amber-800 tracking-wider uppercase mb-1.5">
                {language === 'id' ? 'VALUE PROPOSITION' : 'VALUE PROPOSITION'}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 tracking-tight">
                {language === 'id' ? 'Keunggulan Layanan' : 'Service Advantages'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'id' 
                  ? 'Tiga keunggulan utama dalam menjaga efisiensi dan kelancaran pengadaan perusahaan Anda.' 
                  : 'Three key operational advantages ensuring procurement efficiency for your enterprise.'}
              </p>
            </div>

            {/* 3 Value Cards in a grid or stack */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {valuePropsList.map((val) => (
                <div 
                  key={val.number}
                  className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        {renderValPropIcon(val.iconName)}
                      </div>
                      <span className="text-lg font-black text-slate-400">
                        {val.number}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-navy-950 mb-1.5">
                      {val.title[language]}
                    </h4>
                    
                    <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                      {val.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: CORE VALUES (F.A.S.T.)
             ========================================= */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-[11px] font-bold text-blue-800 tracking-wider uppercase mb-1.5">
                {language === 'id' ? 'CORE VALUES' : 'CORE VALUES'}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 tracking-tight">
                {language === 'id' ? 'Nilai Kerja F.A.S.T.' : 'F.A.S.T. Core Values'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'id'
                  ? 'Prinsip pelayanan yang kami terapkan pada setiap transaksi pengadaan.'
                  : 'Operational principles applied across every corporate order.'}
              </p>
            </div>

            {/* 4 Cards (F, A, S, T) matching Mockup */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {coreValuesList.map((cv) => (
                <div 
                  key={cv.letter}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center mb-2.5">
                      {renderFASTIcon(cv.iconName)}
                    </div>
                    
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-base font-black text-gold-600">
                        {cv.letter}
                      </span>
                      <h4 className="text-[11px] font-extrabold text-navy-950 uppercase tracking-tight">
                        {cv.title[language].replace(`${cv.letter} `, '')}
                      </h4>
                    </div>

                    <p className="text-[10px] text-slate-500 leading-relaxed font-normal">
                      {cv.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

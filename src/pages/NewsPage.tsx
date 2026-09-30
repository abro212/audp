import React, { useState } from 'react';
import { Language, NewsItem } from '../types';
import { newsList } from '../data/companyData';
import { Calendar, Tag, ArrowRight, X } from 'lucide-react';

interface NewsPageProps {
  language: Language;
}

export const NewsPage: React.FC<NewsPageProps> = ({ language }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 rounded-2xl p-6 sm:p-10 md:p-12 text-white shadow-xl border border-navy-800">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-800 border border-gold-500/40 text-[11px] font-bold text-gold-400 tracking-wider uppercase">
              {language === 'id' ? 'BERITA & ARTIKEL' : 'NEWS & INSIGHTS'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'id' ? 'Kabar Perusahaan & Wawasan Pengadaan' : 'Corporate News & Procurement Insights'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {language === 'id'
                ? 'Ikuti perkembangan terbaru mengenai operasional PT. Aneka Usaha Dua Putra serta wawasan praktis pengelolaan supply chain industri.'
                : 'Stay informed with the latest updates from PT. Aneka Usaha Dua Putra and practical insights into industrial procurement.'}
            </p>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsList.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-44 w-full bg-slate-100 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title[language]} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-navy-900/90 text-gold-400 px-2.5 py-0.5 rounded text-[11px] font-bold flex items-center gap-1 border border-gold-500/30">
                    <Tag className="w-3 h-3" />
                    <span>{item.category[language]}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-navy-950 leading-snug line-clamp-2">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.summary[language]}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                <button
                  onClick={() => setSelectedNews(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors pt-2"
                >
                  <span>{language === 'id' ? 'Baca Selengkapnya' : 'Read Full Article'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedNews && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fadeIn">
              <div className="relative h-48 bg-slate-900">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title[language]} 
                  className="w-full h-full object-cover opacity-80"
                />
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-navy-950/80 text-white hover:bg-navy-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {selectedNews.category[language]}
                  </span>
                  <span>{selectedNews.date}</span>
                </div>

                <h3 className="text-xl font-extrabold text-navy-950">
                  {selectedNews.title[language]}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {selectedNews.content[language]}
                </p>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs"
                  >
                    {language === 'id' ? 'Tutup' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

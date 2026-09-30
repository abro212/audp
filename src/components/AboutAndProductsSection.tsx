import React from 'react';
import { Language, ProductItem } from '../types';
import { productsList, aboutContent } from '../data/companyData';
import { Target, Compass, ArrowRight, Settings, Briefcase, Zap, Shield, Sparkles, Package, Wrench, Cpu, CheckCircle } from 'lucide-react';

interface AboutAndProductsProps {
  language: Language;
  onNavigatePage: (page: string) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const AboutAndProductsSection: React.FC<AboutAndProductsProps> = ({
  language,
  onNavigatePage,
  onSelectProduct
}) => {
  // Map icon name to Lucide Icon component
  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case 'Settings': return <Settings className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Shield': return <Shield className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Package': return <Package className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      default: return <Settings className={className} />;
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column grid matching the Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          
          {/* =========================================
              LEFT COLUMN: TENTANG KAMI + VISI & MISI
             ========================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Top About block */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-50 border border-amber-200/80 text-[11px] font-bold text-amber-800 tracking-wider uppercase">
                {language === 'id' ? 'TENTANG KAMI' : 'ABOUT US'}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight leading-snug">
                {language === 'id' 
                  ? 'Mitra Pengadaan Cepat dan Terpercaya' 
                  : 'Fast and Dependable Procurement Partner'}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {aboutContent.story[language]}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {aboutContent.approach[language]}
              </p>

              <div>
                <button
                  onClick={() => onNavigatePage('about')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-xs hover:shadow transition-all group"
                >
                  <span>{language === 'id' ? 'Profil Perusahaan' : 'Company Profile'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Visi & Misi Cards matching Mockup */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              
              {/* Visi Card */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-100/80 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-navy-950 mb-1">
                    {language === 'id' ? 'Visi' : 'Vision'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    "{aboutContent.vision[language]}"
                  </p>
                </div>
              </div>

              {/* Misi Card */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-amber-100/80 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-navy-950 mb-1.5">
                    {language === 'id' ? 'Misi' : 'Mission'}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {aboutContent.mission[language].map((m, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: PRODUK & LAYANAN (2x4 GRID)
             ========================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Header of Products */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-2">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-blue-800 tracking-wider uppercase mb-1.5">
                  {language === 'id' ? 'PRODUK & LAYANAN' : 'PRODUCTS & SERVICES'}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 tracking-tight">
                  {language === 'id' 
                    ? 'Katalog Produk & Solusi Pasokan' 
                    : 'Product Catalog & Supply Solutions'}
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xl">
                  {language === 'id'
                    ? 'Pasokan perlengkapan industri, operasional kantor, hingga perangkat teknologi informasi.'
                    : 'Supplying industrial goods, corporate consumables, and enterprise IT equipment.'}
                </p>
              </div>

              <button
                onClick={() => onNavigatePage('products')}
                className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors whitespace-nowrap"
              >
                <span>{language === 'id' ? 'Semua Produk' : 'All Products'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 8 Product Cards Grid matching Mockup */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
              {productsList.map((prod) => {
                const isIT = prod.id === 'it-solutions-equipment';
                return (
                  <div
                    key={prod.id}
                    onClick={() => {
                      if (isIT) {
                        onNavigatePage('it-solutions');
                      } else {
                        onSelectProduct(prod);
                      }
                    }}
                    className={`group relative flex flex-col min-w-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                      isIT 
                        ? 'border-2 border-amber-400 bg-amber-50/20 shadow-sm hover:shadow-md ring-2 ring-amber-400/20' 
                        : 'border border-slate-200 bg-white hover:border-slate-300 shadow-2xs hover:shadow-sm'
                    }`}
                  >
                    {/* Badge NEW for IT Solutions as in Mockup */}
                    {prod.badge && (
                      <div className="absolute top-2 right-2 z-10 px-1.5 py-0.5 rounded bg-gold-500 text-navy-950 text-[9px] font-extrabold shadow-xs">
                        {prod.badge}
                      </div>
                    )}

                    {/* Thumbnail Image */}
                    <div className="w-full h-24 sm:h-28 overflow-hidden bg-slate-100 relative">
                      <img 
                        src={prod.image} 
                        alt={prod.title[language]} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-2.5 sm:p-3 flex flex-col flex-1 justify-between bg-white min-w-0">
                      <div>
                        <div className="flex items-center gap-1.5 text-blue-700 mb-1">
                          {renderIcon(prod.iconName, "w-3.5 h-3.5")}
                          <h4 className="text-[11px] sm:text-xs font-bold text-navy-950 group-hover:text-gold-600 transition-colors line-clamp-1 leading-snug">
                            {prod.title[language]}
                          </h4>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                          {prod.shortDesc[language]}
                        </p>
                      </div>

                      <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-slate-400 group-hover:text-navy-900">
                        <span>{language === 'id' ? 'Detail' : 'Details'}</span>
                        <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

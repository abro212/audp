import React from 'react';
import { Language } from '../types';
import { companyInfo } from '../data/companyData';
import { ArrowRight, FileText, Zap, Boxes, ShieldCheck, Handshake } from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenQuotation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenQuotation
}) => {
  return (
    <div className="flex flex-col">
      {/* Dark Navy Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 text-white overflow-hidden border-b border-navy-800">
        
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Main Hero Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Small Brand Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800/80 border border-slate-700/60 text-xs font-semibold tracking-wider text-slate-300">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                <span>{companyInfo.name}</span>
              </div>

              {/* Giant Title matching Mockup */}
              <div className="space-y-2">
                <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-gold-400 leading-tight">
                  {companyInfo.tagline}
                </h1>
                <p className="text-lg sm:text-2xl font-bold text-white tracking-normal leading-snug">
                  {companyInfo.headlineHero}
                </p>
              </div>

              {/* Supporting Copy */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
                {language === 'id' 
                  ? "Pengadaan perlengkapan industri, operasional kantor, hingga perangkat IT perusahaan secara cepat, tepat, dan fleksibel."
                  : "Procurement of industrial supplies, office essentials, and corporate IT equipment with speed, precision, and flexibility."}
              </p>

              {/* Action Buttons: full width on phone, row on sm+ */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {/* Primary CTA */}
                <button
                  onClick={onOpenQuotation}
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-navy-950 font-extrabold text-sm shadow-lg shadow-gold-500/20 transition-all text-center group"
                >
                  <span>{language === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary CTA */}
                <a
                  href={companyInfo.comproPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-navy-800/80 hover:bg-navy-700/90 active:bg-navy-800 text-slate-200 hover:text-white border border-slate-600/60 font-semibold text-sm transition-all text-center"
                >
                  <FileText className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>{language === 'id' ? 'Lihat Profil Perusahaan' : 'View Company Profile'}</span>
                </a>
              </div>

              {/* Small trust badges */}
              <div className="pt-2 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs text-slate-400 border-t border-navy-800/80">
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-gold-400 font-bold">✓</span> Established 2023
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-gold-400 font-bold">✓</span> General Trading
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-gold-400 font-bold">✓</span> One-Stop Procurement
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-gold-400 font-bold">✓</span> Fast Response
                </span>
              </div>
            </div>

            {/* Right Column: Visual Composite & Badge matching Mockup */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group">
                
                {/* Composite Image from Mockup */}
                <img 
                  src="/assets/hero_composite.png" 
                  alt="PT. Aneka Usaha Dua Putra Procurement and Modern Operations" 
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 min-h-[260px] sm:min-h-[340px]"
                />

                {/* Subtle gradient vignette over image edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/20 pointer-events-none" />

                {/* Dark Glass Card: "Sejak 2023" scaled for mobile viewports */}
                <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 max-w-[210px] min-[400px]:max-w-[240px] sm:max-w-[280px] p-3 sm:p-5 rounded-xl bg-navy-900/90 backdrop-blur-md border border-slate-600/70 shadow-2xl">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-semibold mb-0.5">
                    {language === 'id' ? 'Sejak' : 'Since'}
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-gold-400 mb-1 sm:mb-2">
                    2023
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                    {language === 'id'
                      ? "Terus berkembang menjadi mitra pengadaan terpercaya di Indonesia dengan solusi menyeluruh untuk kebutuhan operasional perusahaan."
                      : "Steadily growing as Indonesia's trusted procurement partner providing end-to-end solutions for operational excellence."}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hero Bottom Bar: 4 feature pills completely outside the dark section on solid clean white */}
      <div className="bg-white border-b border-slate-200 py-3 sm:py-4 shadow-2xs relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-navy-800">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-navy-950 leading-tight">
                  {language === 'id' ? 'Pelayanan Cepat & Responsif' : 'Fast & Responsive Service'}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-navy-800">
                <Boxes className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-navy-950 leading-tight">
                  {language === 'id' ? 'One Stop Procurement Solution' : 'One Stop Procurement Solution'}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-navy-800">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-navy-950 leading-tight">
                  {language === 'id' ? 'Produk Berkualitas Sesuai Kebutuhan' : 'Certified Quality Matched to Specs'}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-navy-800">
                <Handshake className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-navy-950 leading-tight">
                  {language === 'id' ? 'Mitra Bisnis Jangka Panjang' : 'Long-Term Business Partnership'}
                </h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

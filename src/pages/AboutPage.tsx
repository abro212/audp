import React from 'react';
import { Language } from '../types';
import { companyInfo, aboutContent, coreValuesList } from '../data/companyData';
import { Target, Compass, Zap, ShieldCheck, Award, Handshake, CheckCircle2, User, Building2 } from 'lucide-react';

interface AboutPageProps {
  language: Language;
  onOpenQuotation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  language,
  onOpenQuotation
}) => {
  const renderFASTIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-500" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-amber-500" />;
      default: return <Zap className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="bg-gradient-to-r from-navy-950 to-navy-900 rounded-2xl p-6 sm:p-10 md:p-12 text-white shadow-xl relative overflow-hidden border border-navy-800">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-800 border border-gold-500/40 text-[11px] font-bold text-gold-400 tracking-wider uppercase">
              {language === 'id' ? 'TENTANG KAMI' : 'ABOUT US'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              PT. ANEKA USAHA DUA PUTRA
            </h1>
            <p className="text-gold-400 font-semibold text-base sm:text-lg">
              {companyInfo.tagline} • {companyInfo.headlineHero}
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-2">
              {language === 'id'
                ? 'Didirikan pada tahun 2023 dengan komitmen menjadi mitra terpercaya dalam memenuhi kebutuhan pengadaan industri, perkantoran, dan solusi teknologi di Indonesia.'
                : 'Founded in 2023 with a firm commitment to be the trusted partner in fulfilling industrial, office, and technology procurement needs throughout Indonesia.'}
            </p>
          </div>
        </div>

        {/* Story & Solution Provider Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5">
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-navy-950">
                {language === 'id' ? 'Sekilas Perusahaan' : 'Company Overview'}
              </h2>
              <div className="h-1 w-16 bg-gold-500 rounded-full" />
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {aboutContent.story[language]}
            </p>

            <div className="p-4 rounded-xl bg-blue-50/60 border-l-4 border-blue-600 space-y-1.5">
              <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                {language === 'id' ? 'Bukan Sekadar Supplier, Kami Adalah Solution Provider' : 'Not Just a Supplier, But a Dedicated Solution Provider'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {aboutContent.approach[language]}
              </p>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {aboutContent.commitmentNote[language]}
            </p>

            {/* Signatory from Compro Page 2 */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-extrabold text-navy-950">
                  {companyInfo.director}
                </h5>
                <p className="text-xs text-slate-500">
                  {companyInfo.name}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Corporate Facts from Compro */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-navy-900 text-white p-6 rounded-2xl border border-navy-800 shadow-md space-y-4">
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-gold-400" />
                <span>{language === 'id' ? 'Informasi Perusahaan' : 'Corporate Identity'}</span>
              </h3>
              
              <div className="space-y-3 text-xs divide-y divide-navy-800/80">
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-400">{language === 'id' ? 'Nama Resmi' : 'Legal Name'}:</span>
                  <span className="font-bold text-white text-right">{companyInfo.name}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-400">{language === 'id' ? 'Tahun Pendirian' : 'Established'}:</span>
                  <span className="font-bold text-gold-400">2023</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-400">{language === 'id' ? 'Bidang Usaha' : 'Core Business'}:</span>
                  <span className="font-bold text-white text-right">General Trading & Procurement</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-400">{language === 'id' ? 'Status Pajak' : 'Tax Status'}:</span>
                  <span className="font-bold text-white">PKP Terdaftar</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-400">{language === 'id' ? 'Wilayah Operasional' : 'Headquarters'}:</span>
                  <span className="font-bold text-white text-right">Cikarang Selatan, Kab. Bekasi</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Tagline Resmi
              </span>
              <h4 className="text-lg font-extrabold text-navy-950">
                "{companyInfo.tagline}"
              </h4>
              <p className="text-xs text-slate-500">
                "{companyInfo.motto}"
              </p>
            </div>
          </div>

        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-950">
                {language === 'id' ? 'Visi Perusahaan' : 'Our Vision'}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                "{aboutContent.vision[language]}"
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-950">
                {language === 'id' ? 'Misi Perusahaan' : 'Our Mission'}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {aboutContent.mission[language].map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* F.A.S.T Core Values */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-navy-950">
              {language === 'id' ? 'F.A.S.T. – Nilai-Nilai Utama' : 'F.A.S.T. – Core Values'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {language === 'id'
                ? 'Nilai-nilai luhur yang menjadi landasan operasional dan komitmen kami kepada setiap klien.'
                : 'The core values guiding our operational execution and client partnerships.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValuesList.map((cv) => (
              <div key={cv.letter} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-3">
                    {renderFASTIcon(cv.iconName)}
                  </div>
                  <div className="text-2xl font-black text-gold-600 mb-1">
                    {cv.letter}
                  </div>
                  <h4 className="text-sm font-extrabold text-navy-950 mb-2">
                    {cv.title[language]}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {cv.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-2xl bg-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-navy-800">
          <div>
            <h4 className="text-xl font-extrabold text-white">
              {language === 'id' ? 'Siap Berkolaborasi Bersama Kami?' : 'Ready to Collaborate with Us?'}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              {language === 'id' ? 'Konsultasikan kebutuhan pengadaan atau pasokan bisnis Anda sekarang.' : 'Discuss your corporate procurement or supply needs today.'}
            </p>
          </div>
          <button
            onClick={onOpenQuotation}
            className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-extrabold text-xs shadow"
          >
            {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
          </button>
        </div>

      </div>
    </div>
  );
};

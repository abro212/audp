import React from 'react';
import { Language, LegalDocument } from '../types';
import { legalDocsList } from '../data/companyData';
import { Eye, Download, FileCheck2 } from 'lucide-react';

interface LegalPageProps {
  language: Language;
  onSelectDocument: (doc: LegalDocument) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  language,
  onSelectDocument
}) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 rounded-2xl p-6 sm:p-10 md:p-12 text-white shadow-xl border border-navy-800">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-800 border border-gold-500/40 text-[11px] font-bold text-gold-400 tracking-wider uppercase">
              {language === 'id' ? 'LEGALITAS PERUSAHAAN' : 'COMPANY LEGALITY'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'id' ? 'Terdaftar Resmi dan Memenuhi Persyaratan' : 'Fully Licensed & Compliant Entity'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {language === 'id'
                ? 'PT. Aneka Usaha Dua Putra telah terdaftar secara resmi pada instansi pemerintah terkait dan memenuhi seluruh ketentuan perizinan usaha dan perpajakan di Indonesia.'
                : 'PT. Aneka Usaha Dua Putra is legally established and fully registered with relevant Indonesian regulatory, investment, and tax authorities.'}
            </p>
          </div>
        </div>

        {/* 4 Legal Documents Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {legalDocsList.map((doc) => (
            <div 
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Preview image */}
              <div 
                onClick={() => onSelectDocument(doc)}
                className="w-full h-56 bg-slate-100 p-4 flex items-center justify-center cursor-pointer relative overflow-hidden border-b border-slate-100"
              >
                <img 
                  src={doc.previewImage} 
                  alt={doc.title[language]} 
                  className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 bg-white text-navy-950 px-3 py-1.5 rounded-full text-xs font-bold shadow flex items-center gap-1.5 transition-opacity">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{language === 'id' ? 'Lihat Dokumen' : 'View Document'}</span>
                  </div>
                </div>
              </div>

              {/* Document details */}
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {doc.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-navy-950 mt-1.5 leading-snug">
                    {doc.title[language]}
                  </h3>
                  <p className="text-xs text-blue-700 font-bold mt-0.5">
                    {doc.docNumber}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal mt-2">
                    {doc.desc[language]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectDocument(doc)}
                    className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{language === 'id' ? 'Buka Dokumen' : 'Open Document'}</span>
                  </button>

                  <a
                    href={doc.fullImage}
                    download
                    className="p-1.5 rounded-md text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors"
                    title="Download File"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Legal Compliance Guarantee */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
            <FileCheck2 className="w-8 h-8" />
          </div>
          <div className="space-y-1 flex-1">
            <h4 className="text-base font-extrabold text-navy-950">
              {language === 'id' ? 'Jaminan Transaksi B2B & Faktur Pajak Resmi' : 'Corporate Tax Compliance & Official Invoicing'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'id'
                ? 'Sebagai Pengusaha Kena Pajak (PKP) resmi, PT. Aneka Usaha Dua Putra senantiasa menerbitkan e-Faktur Pajak standar untuk setiap transaksi pengadaan perusahaan, memberikan kenyamanan dan kepatuhan akuntansi maksimal bagi tim purchasing Anda.'
                : 'As an officially confirmed Taxable Enterprise (PKP), PT. Aneka Usaha Dua Putra provides valid e-Faktur Pajak for all corporate transactions, guaranteeing accounting rigor and tax compliance.'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

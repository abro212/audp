import React from 'react';
import { Language, LegalDocument } from '../types';
import { X, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  document: LegalDocument | null;
  onClose: () => void;
  language: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  document,
  onClose,
  language
}) => {
  if (!document) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-6 animate-fadeIn">
        
        {/* Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-navy-900 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-navy-950 border border-gold-500/40 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-extrabold text-white truncate">
                {document.title[language]}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 truncate">
                {document.category} • {document.docNumber}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <a
              href={document.fullImage}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              title="Unduh Dokumen"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Viewer Body */}
        <div className="p-4 sm:p-6 bg-slate-100 flex flex-col items-center justify-center max-h-[72vh] overflow-y-auto">
          <div className="bg-white p-2 rounded-lg shadow-md max-w-full">
            <img 
              src={document.fullImage} 
              alt={document.title[language]} 
              className="max-h-[60vh] object-contain rounded border border-slate-200"
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-6 py-3 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{document.desc[language]}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs"
          >
            {language === 'id' ? 'Tutup' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};

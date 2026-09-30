import React from 'react';
import { Language, ProductItem } from '../types';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  language: Language;
  onOpenQuotationForProduct: (category: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  language,
  onOpenQuotationForProduct
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 animate-fadeIn">
        
        {/* Modal Image Header */}
        <div className="relative h-44 sm:h-56 w-full bg-slate-900 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title[language]} 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-navy-950/80 text-white hover:bg-navy-900 active:bg-black transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
            <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest bg-navy-900/80 px-2 py-0.5 rounded border border-gold-500/30">
              Scope {product.number}
            </span>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white mt-1">
              {product.title[language]}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 space-y-4">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {language === 'id' ? 'Deskripsi Layanan' : 'Scope Description'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {product.fullDesc[language]}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {language === 'id' ? 'Kategori Item / Produk yang Dilayani' : 'Supplied Items / Product Lines'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200/60 text-xs font-medium text-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row: Stacked on mobile for thumb accessibility */}
          <div className="pt-4 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs text-center"
            >
              {language === 'id' ? 'Tutup' : 'Close'}
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenQuotationForProduct(product.title[language]);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-extrabold text-xs shadow-md transition-all text-center"
            >
              <span>{language === 'id' ? 'Request Quotation Produk Ini' : 'Request Quotation for This'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

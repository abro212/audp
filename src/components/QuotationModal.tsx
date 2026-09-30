import React, { useState } from 'react';
import { Language } from '../types';
import { companyInfo } from '../data/companyData';
import { X, Send, CheckCircle2, MessageSquare, Phone, Loader2 } from 'lucide-react';
import { submitInquiryToFirebase } from '../lib/firebase';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialCategory?: string;
}

export const QuotationModal: React.FC<QuotationModalProps> = ({
  isOpen,
  onClose,
  language,
  initialCategory = 'Procurement Solution'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    department: 'Purchasing / Procurement',
    category: initialCategory,
    productName: '',
    specification: '',
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const categories = [
    'Procurement Solution (General)',
    'Industrial Supply',
    'Office & General Supply',
    'Electrical & Mechanical Supply',
    'Safety Equipment (K3)',
    'Cleaning Equipment & Hygiene',
    'Packaging & Consumables',
    'Material & Perlengkapan Operasional',
    'IT Hardware (PC, Laptop, Printer)',
    'Network & Connectivity',
    'IT Security (CCTV, Access Control)',
    'Server & Storage Solutions',
    'Software & Licensing',
    'IT Office Equipment',
    'Custom Procurement / IT Solution',
    'Other / Kebutuhan Khusus'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitInquiryToFirebase({
      source: 'quotation_modal',
      name: formData.name,
      company: formData.company,
      email: formData.email,
      whatsapp: formData.whatsapp,
      category: formData.category,
      department: formData.department,
      productName: formData.productName,
      specification: formData.specification,
      quantity: formData.quantity,
      message: formData.message
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*REQUEST QUOTATION - PT. ANEKA USAHA DUA PUTRA*%0A%0A` +
      `*Nama:* ${formData.name || '-'}%0A` +
      `*Perusahaan:* ${formData.company || '-'}%0A` +
      `*Departemen:* ${formData.department || '-'}%0A` +
      `*WhatsApp:* ${formData.whatsapp || '-'}%0A` +
      `*Email:* ${formData.email || '-'}%0A` +
      `*Kategori:* ${formData.category}%0A` +
      `*Produk/Kebutuhan:* ${formData.productName || '-'}%0A` +
      `*Spesifikasi:* ${formData.specification || '-'}%0A` +
      `*Jumlah/Quantity:* ${formData.quantity || '-'}%0A` +
      `*Pesan Tambahan:* ${formData.message || '-'}`;

    const url = `https://wa.me/6281318212184?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 animate-fadeIn">
        
        {/* Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-navy-900 to-navy-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="h-8 sm:h-9 flex items-center justify-center flex-shrink-0">
              <img src="/assets/logo_emblem.png" alt="Logo" className="h-7 sm:h-8 w-auto object-contain" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-extrabold text-white truncate">
                {language === 'id' ? 'Formulir Request Quotation' : 'Request for Quotation Form'}
              </h3>
              <p className="text-[10px] sm:text-xs text-gold-400 font-medium truncate">
                PT. ANEKA USAHA DUA PUTRA • Fast Response
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors flex-shrink-0"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-[78vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-navy-950">
                {language === 'id' ? 'Permintaan Penawaran Terkirim!' : 'Quotation Request Sent!'}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {language === 'id'
                  ? 'Terima kasih telah menghubungi PT. Aneka Usaha Dua Putra. Tim kami akan segera meninjau spesifikasi dan menghubungi Anda.'
                  : 'Thank you for reaching out to PT. Aneka Usaha Dua Putra. Our procurement team will review your specifications and get back to you promptly.'}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'id' ? 'Lanjutkan Chat via WhatsApp' : 'Continue on WhatsApp'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs"
                >
                  {language === 'id' ? 'Tutup' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'id' ? 'Nama Lengkap *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Budi Santoso"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'id' ? 'Nama Perusahaan *' : 'Company Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="PT. Industri Sejahtera"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'id' ? 'Email Kantor *' : 'Work Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@perusahaan.co.id"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'id' ? 'Nomor WhatsApp *' : 'WhatsApp Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="08123456789"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'id' ? 'Departemen' : 'Department'}
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                  >
                    <option value="Purchasing / Procurement">Purchasing / Procurement</option>
                    <option value="Facility Management / GA">Facility Management / GA</option>
                    <option value="IT / Technology">IT / Technology</option>
                    <option value="Maintenance / Engineering">Maintenance / Engineering</option>
                    <option value="HSE / Safety">HSE / Safety</option>
                    <option value="Operasional / Produksi">Operasional / Produksi</option>
                    <option value="Management / Director">Management / Director</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'id' ? 'Kategori Kebutuhan' : 'Requirement Category'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'id' ? 'Nama Produk / Deskripsi Item *' : 'Product Name / Item Title *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    placeholder={language === 'id' ? 'Contoh: Helm Safety K3, Kabel NYY, PC Desktop' : 'e.g. Safety Helmet, Industrial Cable, PC Workstations'}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'id' ? 'Spesifikasi & Standar Teknis' : 'Specifications & Standards'}
                  </label>
                  <input
                    type="text"
                    value={formData.specification}
                    onChange={(e) => setFormData({ ...formData, specification: e.target.value })}
                    placeholder={language === 'id' ? 'Brand tertentu, grade, sertifikasi SNI...' : 'Specific brand, dimensions, grade...'}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'id' ? 'Perkiraan Jumlah / Volume *' : 'Estimated Quantity / Volume *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="100 pcs / 10 roll / 5 unit"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'id' ? 'Catatan / Alamat Pengiriman / Timeline Kebutuhan' : 'Additional Notes / Delivery Location / Deadline'}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={language === 'id' ? 'Sampaikan kebutuhan waktu pengiriman atau spesifikasi khusus lainnya...' : 'Any target delivery timeline or specific requirements...'}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{language === 'id' ? 'Kirim Langsung via WhatsApp' : 'Send Directly via WhatsApp'}</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-600 disabled:opacity-75 text-navy-950 font-extrabold text-xs shadow-md transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>{language === 'id' ? 'Menyimpan...' : 'Saving...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === 'id' ? 'Submit Quotation' : 'Submit Quotation'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-500">
          PT. Aneka Usaha Dua Putra • Telp: {companyInfo.phone} • Email: {companyInfo.email}
        </div>

      </div>
    </div>
  );
};

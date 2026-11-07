import React, { useState } from 'react';
import { Language } from '../types';
import { companyInfo } from '../data/companyData';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Phone, 
  Loader2, 
  User, 
  Building2, 
  Mail, 
  Users, 
  Package, 
  Tag, 
  Box, 
  FileText, 
  Layers, 
  ClipboardList, 
  MapPin, 
  Calendar, 
  PenLine, 
  Zap, 
  ShieldCheck, 
  ChevronDown,
  MessageCircle 
} from 'lucide-react';
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
  initialCategory = 'Procurement Solution (General)'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    department: '',
    category: initialCategory,
    productName: '',
    specification: '',
    quantity: '',
    deliveryAddress: '',
    deliveryTimeline: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const categories = [
    'Procurement Solution (General)',
    'Industrial Supply',
    'Office & General Supply',
    'Electrical & Mechanical',
    'Main Distribution Panel (MDP / SDP)',
    'HVAC & Layanan AC (Air Conditioning)',
    'Safety Equipment (K3)',
    'Cleaning Equipment & Sanitation',
    'Packaging & Consumables',
    'Material Operasional & Maintenance',
    'IT Solutions & Equipment',
    'Custom Procurement / Specialized Inquiry'
  ];

  const departments = [
    'Purchasing / Procurement',
    'Facility Management / General Affairs (GA)',
    'Engineering & Maintenance',
    'Production & Operations',
    'IT & Digital Infrastructure',
    'Health, Safety & Environment (HSE)',
    'Management & Directors',
    'Other / Lainnya'
  ];

  const deliveryTimelines = [
    'Urgent / Segera (1 - 3 Hari)',
    'Standar (1 - 2 Minggu)',
    'Jadwal Rutin / Bulanan',
    'Fleksibel / Sesuai Jadwal Proyek'
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
      deliveryAddress: formData.deliveryAddress,
      deliveryTimeline: formData.deliveryTimeline,
      message: formData.message
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = async () => {
    // Record inquiry to Firebase so it immediately appears in the Admin RFQ Inbox
    submitInquiryToFirebase({
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
      deliveryAddress: formData.deliveryAddress,
      deliveryTimeline: formData.deliveryTimeline,
      message: formData.message
    });

    const text = `*REQUEST FOR QUOTATION - PT. ANEKA USAHA DUA PUTRA*%0A%0A` +
      `*1. INFORMASI KONTAK*%0A` +
      `• Nama: ${formData.name || '-'}%0A` +
      `• Perusahaan: ${formData.company || '-'}%0A` +
      `• Email: ${formData.email || '-'}%0A` +
      `• WhatsApp: ${formData.whatsapp || '-'}%0A` +
      `• Departemen: ${formData.department || '-'}%0A%0A` +
      `*2. KEBUTUHAN PRODUK*%0A` +
      `• Kategori: ${formData.category || '-'}%0A` +
      `• Produk / Item: ${formData.productName || '-'}%0A` +
      `• Spesifikasi Teknis: ${formData.specification || '-'}%0A` +
      `• Jumlah / Volume: ${formData.quantity || '-'}%0A%0A` +
      `*3. INFORMASI TAMBAHAN*%0A` +
      `• Alamat Pengiriman: ${formData.deliveryAddress || '-'}%0A` +
      `• Timeline Kebutuhan: ${formData.deliveryTimeline || '-'}%0A` +
      `• Catatan Khusus: ${formData.message || '-'}`;

    const url = `https://wa.me/6281318212184?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-3 sm:my-6 animate-fadeIn">
        
        {/* =========================================
            MODAL HEADER (Dark Navy Matching Mockup)
           ========================================= */}
        <div className="relative bg-gradient-to-r from-[#091B36] via-[#0E2852] to-[#0A1F3F] text-white px-5 py-3.5 sm:px-7 sm:py-4.5 flex items-center justify-between border-b border-navy-800 overflow-hidden">
          {/* Subtle Ambient Light Streaks */}
          <div className="absolute -bottom-10 -right-10 w-44 h-28 bg-gradient-to-tl from-amber-500/30 via-sky-500/20 to-transparent blur-xl pointer-events-none transform -rotate-12" />

          {/* Left: Brand Identity */}
          <div className="flex items-center min-w-0 z-10">
            <div className="h-8 sm:h-9 flex items-center justify-center flex-shrink-0 mr-2.5 sm:mr-3">
              <img src="/assets/logo_emblem.png" alt="PT. AUDP Emblem" className="h-7 sm:h-8.5 w-auto object-contain" />
            </div>
            <div className="flex flex-col whitespace-nowrap min-w-0">
              <span className="font-extrabold text-white text-xs sm:text-[13px] tracking-tight leading-snug">
                PT. ANEKA USAHA DUA PUTRA
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-gold-400 tracking-wider leading-none">
                Your Trusted Partner
              </span>
            </div>

            {/* Vertical Divider Line */}
            <div className="h-8 w-px bg-white/20 mx-3 sm:mx-5 hidden md:block flex-shrink-0" />

            {/* Header Title */}
            <div className="hidden md:block min-w-0">
              <h2 className="text-base sm:text-lg font-black text-white tracking-tight leading-tight">
                Request for Quotation
              </h2>
              <p className="text-[11px] text-slate-300 font-normal leading-tight">
                Tell us what you need, and our team will get back to you.
              </p>
            </div>
          </div>

          {/* Right: Fast Response Badge & Close Button */}
          <div className="flex items-center gap-2 sm:gap-3 z-10 flex-shrink-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0F2D5A] border border-gold-500/70 text-[10px] sm:text-[11px] font-extrabold text-gold-400 tracking-wider shadow-xs uppercase">
              <Zap className="w-3.5 h-3.5 text-gold-400 fill-gold-400 flex-shrink-0" />
              <span>FAST RESPONSE</span>
            </div>

            <button
              onClick={onClose}
              className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Header Subtitle fallback */}
        <div className="md:hidden px-5 py-2 bg-navy-950 border-b border-navy-800 text-slate-300 text-[11px]">
          Request for Quotation • Tell us what you need, and our team will get back to you.
        </div>

        {/* =========================================
            MODAL CONTENT (3 Stepped Panels)
           ========================================= */}
        <div className="p-4 sm:p-7 max-h-[75vh] overflow-y-auto bg-white">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-300 text-navy-950 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-navy-950">
                {language === 'id' ? 'Permintaan Penawaran Terkirim!' : 'Quotation Request Sent!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                {language === 'id'
                  ? 'Terima kasih telah menghubungi PT. Aneka Usaha Dua Putra. Tim kami akan segera meninjau spesifikasi teknis dan mengirimkan penawaran resmi kepada Anda.'
                  : 'Thank you for contacting PT. Aneka Usaha Dua Putra. Our procurement engineering team will review your specifications and get back to you promptly.'}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="px-6 py-3 rounded-xl border-2 border-emerald-500 bg-white hover:bg-emerald-50 text-emerald-600 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'id' ? 'Lanjutkan Chat via WhatsApp' : 'Continue on WhatsApp'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs sm:text-sm"
                >
                  {language === 'id' ? 'Tutup Formulir' : 'Close Form'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* =========================================
                  SECTION 01: CONTACT INFORMATION
                 ========================================= */}
              <div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/90 border border-slate-200/90 mb-3.5">
                  <User className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="px-2 py-0.5 rounded-md bg-navy-950 text-white font-black text-[11px] leading-tight">
                    01
                  </span>
                  <span className="font-extrabold text-navy-950 text-xs sm:text-sm">
                    Contact Information
                  </span>
                  <span className="text-slate-300 mx-1">|</span>
                  <span className="text-slate-500 text-[11px] sm:text-xs">
                    Let us know how to reach you.
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Budi Santoso"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. PT. Industri Sejahtera"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Business Email & WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. procurement@perusahaan.co.id"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder="e.g. 08123456789"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Department */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Department
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Users className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full text-xs sm:text-sm pl-10 pr-8 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all text-slate-800 shadow-2xs appearance-none"
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================================
                  SECTION 02: PRODUCT REQUIREMENTS
                 ========================================= */}
              <div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/90 border border-slate-200/90 mb-3.5">
                  <Package className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="px-2 py-0.5 rounded-md bg-navy-950 text-white font-black text-[11px] leading-tight">
                    02
                  </span>
                  <span className="font-extrabold text-navy-950 text-xs sm:text-sm">
                    Product Requirements
                  </span>
                  <span className="text-slate-300 mx-1">|</span>
                  <span className="text-slate-500 text-[11px] sm:text-xs">
                    Tell us what products or services you need.
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Row 1: Requirement Category & Product / Item Description */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Requirement Category
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Tag className="w-4 h-4" />
                        </div>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full text-xs sm:text-sm pl-10 pr-8 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all text-slate-800 shadow-2xs appearance-none"
                        >
                          <option value="">Select Category</option>
                          {categories.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Product / Item Description <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Box className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.productName}
                          onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                          placeholder="e.g. Helm Safety K3, Kabel NYY, PC Desktop, dll"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Technical Specifications & Estimated Quantity / Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Technical Specifications
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <FileText className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={formData.specification}
                          onChange={(e) => setFormData({ ...formData, specification: e.target.value })}
                          placeholder="e.g. Brand tertentu, grade, sertifikasi SNI, ukuran, material, dll"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Estimated Quantity / Volume <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Layers className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          placeholder="e.g. 100 pcs / 10 roll / 5 unit"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-2xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================================
                  SECTION 03: ADDITIONAL INFORMATION
                 ========================================= */}
              <div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/90 border border-slate-200/90 mb-3.5">
                  <ClipboardList className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="px-2 py-0.5 rounded-md bg-navy-950 text-white font-black text-[11px] leading-tight">
                    03
                  </span>
                  <span className="font-extrabold text-navy-950 text-xs sm:text-sm">
                    Additional Information
                  </span>
                  <span className="text-slate-300 mx-1">|</span>
                  <span className="text-slate-500 text-[11px] sm:text-xs">
                    Provide delivery details and any special requirements.
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Row 1: Delivery Address & Required Delivery Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Delivery Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={formData.deliveryAddress}
                          onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                          placeholder="e.g. Kawasan Industri Cikarang, Bekasi"
                          className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Required Delivery Timeline
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <select
                          value={formData.deliveryTimeline}
                          onChange={(e) => setFormData({ ...formData, deliveryTimeline: e.target.value })}
                          className="w-full text-xs sm:text-sm pl-10 pr-8 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all text-slate-800 shadow-2xs appearance-none"
                        >
                          <option value="">Select Timeline</option>
                          {deliveryTimelines.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Special Requirements / Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Special Requirements / Notes
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 flex items-center pointer-events-none text-slate-400">
                        <PenLine className="w-4 h-4" />
                      </div>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Sampaikan kebutuhan khusus, jadwal pengiriman, atau informasi tambahan lainnya..."
                        className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 focus:border-navy-950 focus:ring-2 focus:ring-navy-950/10 outline-none transition-all placeholder:text-slate-400 text-slate-800 shadow-2xs resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================================
                  ACTION BUTTONS (Send via WhatsApp & Submit Quotation)
                 ========================================= */}
              <div className="pt-3 pb-1 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full sm:w-auto min-w-[210px] px-7 py-3 rounded-xl border-2 border-emerald-500 bg-white hover:bg-emerald-50 active:bg-emerald-100 text-emerald-600 font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-2.5 transition-all shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[210px] px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 active:from-amber-700 text-navy-950 font-black text-xs sm:text-sm inline-flex items-center justify-center gap-2.5 transition-all shadow-md shadow-amber-500/25 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-navy-950" />
                      <span>Sending Quotation...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-navy-950 fill-navy-950" />
                      <span>Submit Quotation</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

        {/* =========================================
            MODAL BOTTOM BAR (FOOTER STRIP)
           ========================================= */}
        <div className="px-5 py-3 sm:px-7 sm:py-3.5 bg-slate-100/90 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-y-2 text-[11px] sm:text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
            <span className="font-semibold text-slate-700">PT. Aneka Usaha Dua Putra</span>
          </div>

          <div className="hidden lg:block text-slate-300">|</div>

          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
            <span>{companyInfo.phone}</span>
          </div>

          <div className="hidden lg:block text-slate-300">|</div>

          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
            <span>{companyInfo.email}</span>
          </div>

          <div className="hidden lg:block text-slate-300">|</div>

          <div className="flex items-center gap-1.5 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-slate-500 flex-shrink-0" />
            <span>Your information is handled confidentially.</span>
          </div>
        </div>

      </div>
    </div>
  );
};

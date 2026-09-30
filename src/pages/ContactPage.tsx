import React, { useState } from 'react';
import { Language } from '../types';
import { companyInfo } from '../data/companyData';
import { Phone, Mail, MapPin, Send, MessageSquare, Download, CheckCircle2, Clock, Loader2 } from 'lucide-react';
import { submitInquiryToFirebase } from '../lib/firebase';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    department: 'Purchasing / Procurement',
    category: 'Procurement Solution',
    productName: '',
    specification: '',
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Procurement Solution (General)',
    'Industrial Supply',
    'Office & General Supply',
    'Electrical & Mechanical Supply',
    'Safety Equipment (K3)',
    'Cleaning Equipment',
    'Packaging & Consumables',
    'Material & Operational Supply',
    'IT Hardware',
    'Network & Connectivity',
    'IT Security',
    'Server & Storage',
    'Software & License',
    'Other / Custom Sourcing'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitInquiryToFirebase({
      source: 'contact_page',
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
    const text = `*INQUIRY - PT. ANEKA USAHA DUA PUTRA*%0A%0A` +
      `*Nama:* ${formData.name || '-'}%0A` +
      `*Perusahaan:* ${formData.company || '-'}%0A` +
      `*WhatsApp:* ${formData.whatsapp || '-'}%0A` +
      `*Email:* ${formData.email || '-'}%0A` +
      `*Kategori:* ${formData.category}%0A` +
      `*Item/Produk:* ${formData.productName || '-'}%0A` +
      `*Spesifikasi:* ${formData.specification || '-'}%0A` +
      `*Jumlah:* ${formData.quantity || '-'}%0A` +
      `*Pesan:* ${formData.message || '-'}`;

    const url = `https://wa.me/6281318212184?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 rounded-2xl p-6 sm:p-10 md:p-12 text-white shadow-xl border border-navy-800">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-800 border border-gold-500/40 text-[11px] font-bold text-gold-400 tracking-wider uppercase">
              {language === 'id' ? 'KONTAK PERUSAHAAN' : 'CONTACT US'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'id' ? 'Hubungi PT. Aneka Usaha Dua Putra' : 'Contact PT. Aneka Usaha Dua Putra'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {language === 'id'
                ? 'Tim pengadaan kami siap menjawab inquiry, permintaan harga (RFQ), maupun kebutuhan peninjauan spesifikasi pengadaan perusahaan Anda.'
                : 'Our procurement team is ready to respond to your RFQs, inquiries, and technical sourcing requests promptly.'}
            </p>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Cards & Official Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
              <h3 className="text-lg font-extrabold text-navy-950">
                {language === 'id' ? 'Saluran Komunikasi Resmi' : 'Official Communication Channels'}
              </h3>

              <div className="space-y-4">
                <a 
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-blue-50/60 hover:border-blue-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">
                      {language === 'id' ? 'Telepon / WhatsApp' : 'Phone / WhatsApp'}
                    </span>
                    <span className="text-sm font-bold text-navy-950">
                      {companyInfo.phone}
                    </span>
                  </div>
                </a>

                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-blue-50/60 hover:border-blue-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">
                      {language === 'id' ? 'Email Resmi' : 'Official Email'}
                    </span>
                    <span className="text-sm font-bold text-navy-950 break-all">
                      {companyInfo.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">
                      {language === 'id' ? 'Alamat Kantor' : 'Office Address'}
                    </span>
                    <span className="text-xs font-medium text-slate-700 leading-relaxed block mt-0.5">
                      {companyInfo.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Download Compro PDF CTA */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={companyInfo.comproPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4 text-gold-400" />
                  <span>{language === 'id' ? 'Download Company Profile PDF' : 'Download Company Profile PDF'}</span>
                </a>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 flex items-center gap-3.5">
              <Clock className="w-6 h-6 text-gold-600 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-extrabold block text-navy-950">Fast Response Guarantee</span>
                <span className="text-slate-600">
                  {language === 'id'
                    ? 'Inquiry dan RFQ diproses secara sigap demi kelancaran operasional Anda.'
                    : 'Inquiries and RFQs processed swiftly to safeguard operational continuity.'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Full B2B RFQ Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="mb-6">
              <h3 className="text-xl font-extrabold text-navy-950">
                {language === 'id' ? 'Kirimkan Permintaan Penawaran (RFQ)' : 'Submit Request for Quotation (RFQ)'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'id' 
                  ? 'Isi formulir di bawah ini dengan detail kebutuhan produk atau pengadaan perusahaan Anda.' 
                  : 'Complete the form below with your corporate product or supply specifications.'}
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-extrabold text-navy-950">
                  {language === 'id' ? 'Permintaan Terkirim!' : 'Inquiry Submitted!'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {language === 'id'
                    ? 'Terima kasih telah menghubungi PT. Aneka Usaha Dua Putra. Tim kami akan segera menindaklanjuti permintaan Anda.'
                    : 'Thank you for contacting PT. Aneka Usaha Dua Putra. Our procurement team will follow up promptly.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg bg-navy-900 text-white font-bold text-xs"
                >
                  {language === 'id' ? 'Kirim Inquiry Baru' : 'Submit Another Inquiry'}
                </button>
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
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
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
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
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
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
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
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'id' ? 'Departemen' : 'Department'}
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
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
                      {language === 'id' ? 'Jenis Kebutuhan' : 'Category'}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'id' ? 'Produk / Solusi *' : 'Product / Solution *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      placeholder={language === 'id' ? 'Contoh: Sepatu Safety K3, Switch Cisco, ATK' : 'e.g. Safety Shoes, Cisco Switch, Office Paper'}
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'id' ? 'Spesifikasi Teknis' : 'Technical Specifications'}
                    </label>
                    <input
                      type="text"
                      value={formData.specification}
                      onChange={(e) => setFormData({ ...formData, specification: e.target.value })}
                      placeholder="Brand, ukuran, sertifikasi, part number..."
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {language === 'id' ? 'Jumlah / Volume *' : 'Quantity / Volume *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="50 unit / 20 box / 5 roll"
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'id' ? 'Pesan / Catatan Tambahan' : 'Message / Additional Notes'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'id' ? 'Sampaikan detail spesifikasi atau jadwal pengiriman yang diharapkan...' : 'Provide details regarding deadlines or requirements...'}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-800"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{language === 'id' ? 'Chat WhatsApp Langsung' : 'Direct WhatsApp'}</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-600 disabled:opacity-75 text-navy-950 font-extrabold text-xs shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>{language === 'id' ? 'Menyimpan...' : 'Saving...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{language === 'id' ? 'Request Quotation' : 'Request Quotation'}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

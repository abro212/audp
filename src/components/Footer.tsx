import React from 'react';
import { Language } from '../types';
import { companyInfo } from '../data/companyData';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  language: Language;
  onNavigatePage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigatePage
}) => {
  const menuLinks = [
    { id: 'home', label: { id: 'Beranda', en: 'Home' } },
    { id: 'about', label: { id: 'Tentang Kami', en: 'About Us' } },
    { id: 'products', label: { id: 'Produk & Layanan', en: 'Products & Services' } },
    { id: 'it-solutions', label: { id: 'Solusi IT', en: 'IT Solutions' } },
    { id: 'klien', label: { id: 'Klien', en: 'Clients' } },
    { id: 'berita', label: { id: 'Berita', en: 'News' } },
    { id: 'kontak', label: { id: 'Kontak', en: 'Contact' } },
  ];

  const serviceLinks = [
    { id: 'products', label: 'Industrial Supply' },
    { id: 'products', label: 'Office & General Supply' },
    { id: 'products', label: 'Electrical & Mechanical Supply' },
    { id: 'products', label: 'Safety Equipment (K3)' },
    { id: 'products', label: 'Cleaning Equipment' },
    { id: 'products', label: 'Packaging & Consumables' },
    { id: 'products', label: 'Material & Perlengkapan Operasional' },
    { id: 'it-solutions', label: 'IT Solutions & Equipment' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 pt-12 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns matching Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 flex items-center justify-center">
                <img 
                  src="/assets/logo_emblem.png" 
                  alt="AUDP Logo" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm sm:text-base tracking-tight leading-tight">
                  {companyInfo.name}
                </h4>
                <p className="text-xs font-semibold text-gold-400">
                  {companyInfo.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {companyInfo.headlineHero}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'id'
                ? 'Mitra pengadaan terpercaya untuk kebutuhan industri, perkantoran, dan solusi IT di Indonesia.'
                : 'Your trusted corporate procurement partner for industrial, office, and IT equipment in Indonesia.'}
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-navy-900 border border-navy-800 text-[11px] font-semibold text-gold-400">
                Established 2023 • General Trading Supplier
              </span>
            </div>
          </div>

          {/* Quick Menu (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-extrabold text-white tracking-wider uppercase border-b border-navy-800 pb-2">
              {language === 'id' ? 'Menu' : 'Menu'}
            </h5>
            <ul className="space-y-1.5 text-xs">
              {menuLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigatePage(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-gold-400 transition-colors text-left"
                  >
                    {item.label[language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Scope (Col 7-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-extrabold text-white tracking-wider uppercase border-b border-navy-800 pb-2">
              {language === 'id' ? 'Layanan' : 'Services'}
            </h5>
            <ul className="space-y-1.5 text-xs">
              {serviceLinks.map((svc, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigatePage(svc.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-gold-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/60" />
                    <span>{svc.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address (Col 9-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-extrabold text-white tracking-wider uppercase border-b border-navy-800 pb-2">
              {language === 'id' ? 'Kontak Kami' : 'Contact Us'}
            </h5>
            
            <div className="space-y-2.5 text-xs">
              <a 
                href={`tel:${companyInfo.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span>{companyInfo.phone}</span>
              </a>

              <a 
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-2.5 hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="break-all">{companyInfo.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold text-slate-400 mb-2">
                {language === 'id' ? 'Ikuti Kami' : 'Follow Us'}
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-gold-400 active:bg-navy-800 hover:border-gold-500/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-gold-400 active:bg-navy-800 hover:border-gold-500/50 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-gold-400 active:bg-navy-800 hover:border-gold-500/50 transition-colors"
                  aria-label="Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright matching Mockup */}
        <div className="pt-6 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© 2024 PT. Aneka Usaha Dua Putra. All rights reserved.</p>
          <p className="text-[11px]">
            {companyInfo.motto}
          </p>
        </div>

      </div>
    </footer>
  );
};

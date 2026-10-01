import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { companyInfo } from '../data/companyData';
import { Menu, X, ChevronDown, ChevronRight, Globe, Search, ArrowRight, Cpu, Layers } from 'lucide-react';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenQuotation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  activePage,
  setActivePage,
  onOpenQuotation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const query = searchQuery.toLowerCase();
    if (query.includes('it') || query.includes('komputer') || query.includes('server') || query.includes('laptop') || query.includes('jaringan')) {
      setActivePage('it-solutions');
    } else if (query.includes('legal') || query.includes('npwp') || query.includes('nib') || query.includes('pajak')) {
      setActivePage('about');
    } else if (query.includes('klien') || query.includes('client') || query.includes('mandiri') || query.includes('bri')) {
      setActivePage('klien');
    } else if (query.includes('tentang') || query.includes('visi') || query.includes('misi') || query.includes('profil')) {
      setActivePage('about');
    } else if (query.includes('keunggulan') || query.includes('why') || query.includes('pilar')) {
      setActivePage('keunggulan');
    } else if (query.includes('kontak') || query.includes('hubungi') || query.includes('alamat') || query.includes('telepon')) {
      setActivePage('kontak');
    } else {
      setActivePage('products');
    }
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Logo Brand: show full company name without truncation */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <div className="relative h-8 sm:h-10 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img 
                src="/assets/logo_emblem.png" 
                alt="PT. AUDP Logo Emblem" 
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col flex-shrink-0 whitespace-nowrap">
              <span className="font-extrabold text-navy-950 text-xs sm:text-sm md:text-[15px] tracking-tight leading-snug whitespace-nowrap group-hover:text-navy-700 transition-colors">
                PT. ANEKA USAHA DUA PUTRA
              </span>
              <span className="text-[9px] min-[380px]:text-[10px] sm:text-[11px] font-semibold text-gold-600 tracking-wider leading-none whitespace-nowrap">
                {companyInfo.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links: 7 balanced items matching Mockup */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 flex-shrink">
            
            {/* Beranda */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-2.5 xl:px-3 py-2 rounded-md text-xs font-semibold tracking-wide whitespace-nowrap transition-colors relative ${
                activePage === 'home' 
                  ? 'text-navy-950 font-bold' 
                  : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
              }`}
            >
              {language === 'id' ? 'Beranda' : 'Home'}
              {activePage === 'home' && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold-500 rounded-full" />
              )}
            </button>

            {/* Tentang Kami */}
            <button
              onClick={() => handleNavClick('about')}
              className={`px-2.5 xl:px-3 py-2 rounded-md text-xs font-semibold tracking-wide whitespace-nowrap transition-colors relative ${
                activePage === 'about' 
                  ? 'text-navy-950 font-bold' 
                  : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
              }`}
            >
              {language === 'id' ? 'Tentang Kami' : 'About Us'}
              {activePage === 'about' && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold-500 rounded-full" />
              )}
            </button>

            {/* Produk & Layanan (with Dropdown) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                className={`px-2.5 xl:px-3 py-2 rounded-md text-xs font-semibold tracking-wide whitespace-nowrap transition-colors inline-flex items-center gap-1 relative ${
                  activePage === 'products' || activePage === 'it-solutions'
                    ? 'text-navy-950 font-bold' 
                    : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                <span>{language === 'id' ? 'Produk & Layanan' : 'Products & Services'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsDropdownOpen ? 'rotate-180 text-gold-600' : 'text-slate-400'}`} />
                {(activePage === 'products' || activePage === 'it-solutions') && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold-500 rounded-full" />
                )}
              </button>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div 
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-fadeIn"
                >
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-navy-950 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span>{language === 'id' ? 'Semua Produk & Layanan' : 'All Products & Services'}</span>
                    <ArrowRight className="w-3 h-3 text-gold-500" />
                  </button>
                  <div className="border-t border-slate-100 my-1" />
                  <button
                    onClick={() => handleNavClick('it-solutions')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-amber-700 hover:bg-amber-50/60 flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-amber-600" />
                      <span>Solusi IT & Equipment</span>
                    </span>
                    <span className="text-[9px] bg-gold-500 text-navy-950 font-black px-1.5 py-0.2 rounded">NEW</span>
                  </button>
                  <div className="border-t border-slate-100 my-1" />
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-1.5 text-xs text-slate-600 hover:text-navy-950 hover:bg-slate-50"
                  >
                    Industrial & Factory Supply
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-1.5 text-xs text-slate-600 hover:text-navy-950 hover:bg-slate-50"
                  >
                    Office & General Supply
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-1.5 text-xs text-slate-600 hover:text-navy-950 hover:bg-slate-50"
                  >
                    Electrical & Mechanical
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-1.5 text-xs text-slate-600 hover:text-navy-950 hover:bg-slate-50"
                  >
                    Safety Equipment (K3)
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-1.5 text-xs text-slate-600 hover:text-navy-950 hover:bg-slate-50 flex items-center justify-between"
                  >
                    <span>Custom Procurement</span>
                    <Layers className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* Keunggulan */}
            <button
              onClick={() => handleNavClick('keunggulan')}
              className={`px-2.5 xl:px-3 py-2 rounded-md text-xs font-semibold tracking-wide whitespace-nowrap transition-colors relative ${
                activePage === 'keunggulan' 
                  ? 'text-navy-950 font-bold' 
                  : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
              }`}
            >
              {language === 'id' ? 'Keunggulan' : 'Why Us'}
              {activePage === 'keunggulan' && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold-500 rounded-full" />
              )}
            </button>


            {/* Klien */}
            <button
              onClick={() => handleNavClick('klien')}
              className={`px-2.5 xl:px-3 py-2 rounded-md text-xs font-semibold tracking-wide whitespace-nowrap transition-colors relative ${
                activePage === 'klien' 
                  ? 'text-navy-950 font-bold' 
                  : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
              }`}
            >
              {language === 'id' ? 'Klien' : 'Clients'}
              {activePage === 'klien' && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold-500 rounded-full" />
              )}
            </button>

            {/* Berita */}
            <button
              onClick={() => handleNavClick('berita')}
              className={`px-2.5 xl:px-3 py-2 rounded-md text-xs font-semibold tracking-wide whitespace-nowrap transition-colors relative ${
                activePage === 'berita' 
                  ? 'text-navy-950 font-bold' 
                  : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
              }`}
            >
              {language === 'id' ? 'Berita' : 'News'}
              {activePage === 'berita' && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold-500 rounded-full" />
              )}
            </button>

            {/* Kontak */}
            <button
              onClick={() => handleNavClick('kontak')}
              className={`px-2.5 xl:px-3 py-2 rounded-md text-xs font-semibold tracking-wide whitespace-nowrap transition-colors relative ${
                activePage === 'kontak' 
                  ? 'text-navy-950 font-bold' 
                  : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
              }`}
            >
              {language === 'id' ? 'Kontak' : 'Contact'}
              {activePage === 'kontak' && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold-500 rounded-full" />
              )}
            </button>
          </nav>

          {/* Header Action Elements: strictly whitespace-nowrap and flex-shrink-0 */}
          <div className="hidden lg:flex items-center space-x-2.5 xl:space-x-3.5 flex-shrink-0">
            
            {/* CTA Button "Hubungi Kami ->": strictly single-line nowrap */}
            <button
              onClick={onOpenQuotation}
              className="whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-xs shadow-xs hover:shadow transition-all group flex-shrink-0"
            >
              <span className="whitespace-nowrap leading-none">{language === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
            </button>

            {/* Language Switcher */}
            <div className="flex items-center text-xs font-bold text-slate-700 border-l border-slate-300 pl-2.5 xl:pl-3 flex-shrink-0 whitespace-nowrap">
              <Globe className="w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" />
              <button
                onClick={() => setLanguage('id')}
                className={`transition-colors ${language === 'id' ? 'text-navy-950 font-extrabold underline decoration-gold-500 underline-offset-4' : 'text-slate-400 hover:text-slate-700'}`}
              >
                ID
              </button>
              <span className="mx-1 text-slate-300">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'text-navy-950 font-extrabold underline decoration-gold-500 underline-offset-4' : 'text-slate-400 hover:text-slate-700'}`}
              >
                EN
              </button>
            </div>

            {/* Search Button */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-navy-950 hover:bg-slate-100 transition-colors flex-shrink-0"
              title="Cari Layanan atau Informasi"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu, Search, and Language */}
          <div className="flex lg:hidden items-center space-x-1 sm:space-x-1.5 flex-shrink-0">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-slate-600 hover:text-navy-950 hover:bg-slate-100 transition-colors"
              aria-label="Cari"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className="px-2.5 py-1.5 min-h-[38px] text-xs font-extrabold rounded-lg bg-slate-100 hover:bg-slate-200 text-navy-950 transition-colors"
              aria-label="Ganti Bahasa"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-700 hover:text-navy-950 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Search bar dropdown */}
      {searchOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 shadow-md animate-fadeIn">
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400 ml-2" />
            <input 
              type="text"
              placeholder={language === 'id' ? "Cari kebutuhan: K3, IT, ATK, Listrik, Legalitas..." : "Search needs: Safety, IT, Office, Electrical, Legal..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs sm:text-sm py-1.5 px-2 focus:outline-none text-slate-800"
              autoFocus
            />
            <button 
              type="submit" 
              className="px-3 py-1 bg-navy-900 text-white rounded text-xs font-semibold hover:bg-navy-800"
            >
              {language === 'id' ? 'Cari' : 'Search'}
            </button>
            <button 
              type="button" 
              onClick={() => setSearchOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[calc(100dvh-4.5rem)] overflow-y-auto animate-fadeIn">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center justify-between w-full px-4 min-h-[44px] rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'home' ? 'bg-navy-900 text-white' : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
              }`}
            >
              <span>{language === 'id' ? 'Beranda' : 'Home'}</span>
              <ChevronRight className={`w-4 h-4 ${activePage === 'home' ? 'text-gold-400' : 'text-slate-400'}`} />
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`flex items-center justify-between w-full px-4 min-h-[44px] rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'about' ? 'bg-navy-900 text-white' : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
              }`}
            >
              <span>{language === 'id' ? 'Tentang Kami' : 'About Us'}</span>
              <ChevronRight className={`w-4 h-4 ${activePage === 'about' ? 'text-gold-400' : 'text-slate-400'}`} />
            </button>

            <button
              onClick={() => handleNavClick('products')}
              className={`flex items-center justify-between w-full px-4 min-h-[44px] rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'products' ? 'bg-navy-900 text-white' : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
              }`}
            >
              <span>{language === 'id' ? 'Produk & Layanan' : 'Products & Services'}</span>
              <ChevronRight className={`w-4 h-4 ${activePage === 'products' ? 'text-gold-400' : 'text-slate-400'}`} />
            </button>

            <button
              onClick={() => handleNavClick('it-solutions')}
              className={`flex items-center justify-between w-full px-4 min-h-[44px] rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'it-solutions' ? 'bg-navy-900 text-white' : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>Solusi IT</span>
                <span className="text-[9px] bg-gold-500 text-navy-950 font-black px-1.5 py-0.5 rounded">NEW</span>
              </span>
              <ChevronRight className={`w-4 h-4 ${activePage === 'it-solutions' ? 'text-gold-400' : 'text-slate-400'}`} />
            </button>

            <button
              onClick={() => handleNavClick('keunggulan')}
              className={`flex items-center justify-between w-full px-4 min-h-[44px] rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'keunggulan' ? 'bg-navy-900 text-white' : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
              }`}
            >
              <span>{language === 'id' ? 'Keunggulan' : 'Why Us'}</span>
              <ChevronRight className={`w-4 h-4 ${activePage === 'keunggulan' ? 'text-gold-400' : 'text-slate-400'}`} />
            </button>


            <button
              onClick={() => handleNavClick('klien')}
              className={`flex items-center justify-between w-full px-4 min-h-[44px] rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'klien' ? 'bg-navy-900 text-white' : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
              }`}
            >
              <span>{language === 'id' ? 'Klien' : 'Clients'}</span>
              <ChevronRight className={`w-4 h-4 ${activePage === 'klien' ? 'text-gold-400' : 'text-slate-400'}`} />
            </button>

            <button
              onClick={() => handleNavClick('berita')}
              className={`flex items-center justify-between w-full px-4 min-h-[44px] rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'berita' ? 'bg-navy-900 text-white' : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
              }`}
            >
              <span>{language === 'id' ? 'Berita' : 'News'}</span>
              <ChevronRight className={`w-4 h-4 ${activePage === 'berita' ? 'text-gold-400' : 'text-slate-400'}`} />
            </button>

            <button
              onClick={() => handleNavClick('kontak')}
              className={`flex items-center justify-between w-full px-4 min-h-[44px] rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'kontak' ? 'bg-navy-900 text-white' : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
              }`}
            >
              <span>{language === 'id' ? 'Kontak' : 'Contact'}</span>
              <ChevronRight className={`w-4 h-4 ${activePage === 'kontak' ? 'text-gold-400' : 'text-slate-400'}`} />
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuotation();
              }}
              className="w-full min-h-[44px] px-4 rounded-lg bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-navy-950 font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <span>{language === 'id' ? 'Request Quotation / Hubungi Kami' : 'Request Quotation / Contact'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors"
            >
              <span>WhatsApp: {companyInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

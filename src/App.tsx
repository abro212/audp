import React, { useState, useEffect } from 'react';
import { Language, ProductItem, LegalDocument } from './types';
import { companyInfo } from './data/companyData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuotationModal } from './components/QuotationModal';
import { LegalModal } from './components/LegalModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ITSolutionsPage } from './pages/ITSolutionsPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ClientsPage } from './pages/ClientsPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { MessageSquare } from 'lucide-react';

const PAGE_SEO: Record<string, { title: { id: string; en: string }; desc: { id: string; en: string } }> = {
  home: {
    title: {
      id: 'PT. Aneka Usaha Dua Putra | Solusi Pengadaan Barang, Fabrikasi & IT Terpercaya',
      en: 'PT. Aneka Usaha Dua Putra | Trusted Industrial Supply, Fabrication & IT Solutions',
    },
    desc: {
      id: 'PT. Aneka Usaha Dua Putra (AUDP) - Mitra terpercaya penyedia barang, jasa teknik mekanikal elektrikal, fabrikasi, dan solusi IT industri di Cikarang, Bekasi.',
      en: 'PT. Aneka Usaha Dua Putra (AUDP) - Trusted industrial supply, mechanical electrical engineering, fabrication, and IT solutions partner in Cikarang, Bekasi.',
    },
  },
  about: {
    title: {
      id: 'Tentang Kami & Profil Perusahaan | PT. Aneka Usaha Dua Putra',
      en: 'About Us & Company Profile | PT. Aneka Usaha Dua Putra',
    },
    desc: {
      id: 'Profil lengkap, visi, misi, dan nilai integritas PT. Aneka Usaha Dua Putra sebagai mitra strategis pengadaan dan teknik industri terkemuka.',
      en: 'Comprehensive profile, vision, mission, and core values of PT. Aneka Usaha Dua Putra as an esteemed industrial procurement and engineering partner.',
    },
  },
  products: {
    title: {
      id: 'Katalog Produk & Pasokan Industri | PT. Aneka Usaha Dua Putra',
      en: 'Product Catalog & Industrial Supply | PT. Aneka Usaha Dua Putra',
    },
    desc: {
      id: 'Jelajahi katalog produk suku cadang mesin, material industri, tools, alat keselamatan K3, dan instrumentasi pabrik berstandar tinggi.',
      en: 'Explore our catalog of machine spare parts, industrial raw materials, tools, safety PPE, and instrumentation.',
    },
  },
  'it-solutions': {
    title: {
      id: 'Solusi IT & Transformasi Digital Pabrik | PT. Aneka Usaha Dua Putra',
      en: 'IT Solutions & Industrial Digital Transformation | PT. Aneka Usaha Dua Putra',
    },
    desc: {
      id: 'Layanan software custom industri, IoT sensor monitoring, infrastruktur jaringan pabrik, dan sistem ERP/WMS terintegrasi.',
      en: 'Custom industrial software, IoT sensor monitoring, factory network infrastructure, and integrated ERP/WMS systems.',
    },
  },
  keunggulan: {
    title: {
      id: 'Keunggulan & Kualitas Layanan | PT. Aneka Usaha Dua Putra',
      en: 'Our Competitive Advantages | PT. Aneka Usaha Dua Putra',
    },
    desc: {
      id: 'Alasan memilih AUDP: kecepatan respon, jaminan garansi mutu, harga kompetitif, dan kepatuhan standar industri manufaktur.',
      en: 'Why choose AUDP: fast response, quality assurance guarantee, competitive pricing, and strict compliance with manufacturing standards.',
    },
  },
  klien: {
    title: {
      id: 'Mitra & Portofolio Klien Industri | PT. Aneka Usaha Dua Putra',
      en: 'Industrial Client Portfolio & Partners | PT. Aneka Usaha Dua Putra',
    },
    desc: {
      id: 'Daftar klien dan kemitraan terpercaya PT. Aneka Usaha Dua Putra di kawasan industri GIIC, MM2100, Jababeka, EJIP, dan Suryacipta.',
      en: 'List of esteemed clients and trusted partnerships of PT. Aneka Usaha Dua Putra across major industrial estates.',
    },
  },
  berita: {
    title: {
      id: 'Berita & Wawasan Industri Terkini | PT. Aneka Usaha Dua Putra',
      en: 'Latest Industrial News & Industry Insights | PT. Aneka Usaha Dua Putra',
    },
    desc: {
      id: 'Artikel edukasi, tren manufaktur cerdas, panduan efisiensi supply chain, dan berita terkini dari PT. Aneka Usaha Dua Putra.',
      en: 'Educational articles, smart manufacturing trends, supply chain efficiency guides, and latest corporate updates.',
    },
  },
  kontak: {
    title: {
      id: 'Hubungi Kami & Permintaan Penawaran | PT. Aneka Usaha Dua Putra',
      en: 'Contact Us & Request a Quote | PT. Aneka Usaha Dua Putra',
    },
    desc: {
      id: 'Hubungi tim sales engineering kami di Cikarang Selatan, Bekasi. Dapatkan penawaran harga terbaik dan konsultasi teknis cepat.',
      en: 'Contact our sales engineering team in Cikarang Selatan, Bekasi. Request a quotation and fast technical consultation.',
    },
  },
};

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('id');
  const [activePage, setActivePage] = useState<string>('home');
  
  // Dynamic SEO meta handling on page or language change
  useEffect(() => {
    const pageMeta = PAGE_SEO[activePage] || PAGE_SEO['home'];
    const title = pageMeta.title[language] || pageMeta.title['id'];
    const desc = pageMeta.desc[language] || pageMeta.desc['id'];

    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', desc);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', desc);
    }
  }, [activePage, language]);

  // Modals state
  const [quotationModalOpen, setQuotationModalOpen] = useState(false);
  const [quotationCategory, setQuotationCategory] = useState<string>('Procurement Solution');
  const [selectedLegalDoc, setSelectedLegalDoc] = useState<LegalDocument | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const handleOpenQuotation = (category = 'Procurement Solution') => {
    setQuotationCategory(category);
    setQuotationModalOpen(true);
  };

  const handleNavigatePage = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-gold-500 selection:text-navy-950 font-sans">
      
      {/* Sticky Header Navbar */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        activePage={activePage}
        setActivePage={handleNavigatePage}
        onOpenQuotation={() => handleOpenQuotation('General Procurement')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            language={language}
            onNavigatePage={handleNavigatePage}
            onOpenQuotation={() => handleOpenQuotation('General Procurement')}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onSelectDocument={(doc) => setSelectedLegalDoc(doc)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            language={language}
            onOpenQuotation={() => handleOpenQuotation('Company Inquiry')}
          />
        )}

        {activePage === 'products' && (
          <ProductsPage
            language={language}
            onOpenQuotationForCategory={(cat) => handleOpenQuotation(cat)}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {activePage === 'it-solutions' && (
          <ITSolutionsPage
            language={language}
            onOpenQuotationForCategory={(cat) => handleOpenQuotation(cat)}
          />
        )}

        {activePage === 'keunggulan' && (
          <WhyUsPage
            language={language}
            onOpenQuotation={() => handleOpenQuotation('Partnership Inquiry')}
          />
        )}

        {activePage === 'klien' && (
          <ClientsPage
            language={language}
            onOpenQuotation={() => handleOpenQuotation('Corporate Client Sourcing')}
          />
        )}

        {activePage === 'berita' && (
          <NewsPage
            language={language}
          />
        )}

        {activePage === 'kontak' && (
          <ContactPage
            language={language}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onNavigatePage={handleNavigatePage}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={companyInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 min-h-[48px] min-w-[48px] flex items-center justify-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all group"
        title="Chat WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white text-emerald-600 group-hover:animate-bounce" />
        <span className="hidden sm:inline">WhatsApp Fast Response</span>
      </a>

      {/* Global Modals */}
      <QuotationModal
        isOpen={quotationModalOpen}
        onClose={() => setQuotationModalOpen(false)}
        language={language}
        initialCategory={quotationCategory}
      />

      <LegalModal
        document={selectedLegalDoc}
        onClose={() => setSelectedLegalDoc(null)}
        language={language}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        language={language}
        onOpenQuotationForProduct={(cat) => handleOpenQuotation(cat)}
      />

    </div>
  );
};
export default App;

import React, { useState } from 'react';
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
import { LegalPage } from './pages/LegalPage';
import { ClientsPage } from './pages/ClientsPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { MessageSquare } from 'lucide-react';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('id');
  const [activePage, setActivePage] = useState<string>('home');
  
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

        {activePage === 'legalitas' && (
          <LegalPage
            language={language}
            onSelectDocument={(doc) => setSelectedLegalDoc(doc)}
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

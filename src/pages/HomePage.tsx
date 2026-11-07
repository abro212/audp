import React from 'react';
import { Language, ProductItem, LegalDocument } from '../types';
import { Hero } from '../components/Hero';
import { AboutAndProductsSection } from '../components/AboutAndProductsSection';
import { ValuesAndFASTSection } from '../components/ValuesAndFASTSection';
import { CustomerPortfolioSection } from '../components/CustomerPortfolioSection';
import { ProcurementProcess } from '../components/ProcurementProcess';
import { ReadyToPartnerCTA } from '../components/ReadyToPartnerCTA';

interface HomePageProps {
  language: Language;
  onNavigatePage: (page: string) => void;
  onOpenQuotation: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectDocument?: (doc: LegalDocument) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  language,
  onNavigatePage,
  onOpenQuotation,
  onSelectProduct
}) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section matching Mockup */}
      <Hero 
        language={language}
        onOpenQuotation={onOpenQuotation}
      />

      {/* Row 1: Tentang Kami + Visi & Misi side-by-side with Produk & Layanan 2x4 Grid */}
      <AboutAndProductsSection
        language={language}
        onNavigatePage={onNavigatePage}
        onSelectProduct={onSelectProduct}
      />

      {/* Row 2: Value Proposition (01,02,03) side-by-side with Core Values F.A.S.T */}
      <ValuesAndFASTSection
        language={language}
      />

      {/* Row 3: Customer Portfolio - Modern Corporate Client Showcase */}
      <CustomerPortfolioSection
        language={language}
        onNavigatePage={onNavigatePage}
      />

      {/* Row 4: 6-Step Sourcing & Procurement Workflow */}
      <ProcurementProcess
        language={language}
        onOpenQuotation={onOpenQuotation}
      />

      {/* Row 5: Company Commitment & Ready to Partner Final CTA */}
      <ReadyToPartnerCTA
        language={language}
        onOpenQuotation={onOpenQuotation}
      />
    </div>
  );
};

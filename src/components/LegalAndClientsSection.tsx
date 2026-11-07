import React from 'react';
import { Language, LegalDocument } from '../types';
import { CustomerPortfolioSection } from './CustomerPortfolioSection';

interface LegalAndClientsProps {
  language: Language;
  onNavigatePage: (page: string) => void;
  onSelectDocument?: (doc: LegalDocument) => void;
}

export const LegalAndClientsSection: React.FC<LegalAndClientsProps> = ({
  language,
  onNavigatePage
}) => {
  return (
    <CustomerPortfolioSection
      language={language}
      onNavigatePage={onNavigatePage}
    />
  );
};

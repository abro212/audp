export type Language = 'id' | 'en';

export interface NavItem {
  id: string;
  label: {
    id: string;
    en: string;
  };
  path: string;
  hasDropdown?: boolean;
}

export interface ProductItem {
  id: string;
  number: string;
  title: {
    id: string;
    en: string;
  };
  shortDesc: {
    id: string;
    en: string;
  };
  fullDesc: {
    id: string;
    en: string;
  };
  items: string[];
  image: string;
  iconName: string;
  badge?: string;
  isFeatured?: boolean;
}

export interface ITSolutionItem {
  id: string;
  number: string;
  title: {
    id: string;
    en: string;
  };
  subtitle: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  equipmentList: string[];
  iconName: string;
}

export interface CoreValueItem {
  letter: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  iconName: string;
}

export interface ValuePropItem {
  number: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  iconName: string;
}

export interface LegalDocument {
  id: string;
  title: {
    id: string;
    en: string;
  };
  docNumber: string;
  desc: {
    id: string;
    en: string;
  };
  previewImage: string;
  fullImage: string;
  category: string;
}

export interface ClientItem {
  id: string;
  name: string;
  sector: {
    id: string;
    en: string;
  };
  logoUrl: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: {
    id: string;
    en: string;
  };
  category: {
    id: string;
    en: string;
  };
  summary: {
    id: string;
    en: string;
  };
  content: {
    id: string;
    en: string;
  };
  image: string;
}

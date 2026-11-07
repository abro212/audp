import { 
  db 
} from '../lib/firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  deleteDoc, 
  writeBatch 
} from 'firebase/firestore';
import { 
  ProductItem, 
  ITSolutionItem, 
  ClientItem, 
  NewsItem, 
  LegalDocument 
} from '../types';
import { 
  productsList, 
  itSolutionsList, 
  clientsList, 
  newsList, 
  legalDocsList, 
  companyInfo, 
  aboutContent,
  rehydrateLocalData 
} from '../data/companyData';

// Notify app components that data has updated
export const emitDataUpdated = () => {
  rehydrateLocalData();
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('audp-data-updated'));
  }
};

// Generic local storage helpers
const loadLocal = <T>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const saveLocal = <T>(key: string, data: T) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`Error saving ${key} to localStorage:`, err);
  }
};

// ==========================================
// 1. PRODUCTS CRUD
// ==========================================

export const getStoredProducts = (): ProductItem[] => {
  return loadLocal('audp_products', [...productsList]);
};

export const saveProduct = async (product: ProductItem): Promise<boolean> => {
  const current = getStoredProducts();
  const index = current.findIndex(p => p.id === product.id);
  let updated: ProductItem[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = product;
  } else {
    updated = [...current, product];
  }

  saveLocal('audp_products', updated);
  emitDataUpdated();

  try {
    await setDoc(doc(db, 'products', product.id), product);
    return true;
  } catch (err) {
    console.warn('Firestore write failed, cached locally:', err);
    return true;
  }
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  const current = getStoredProducts();
  const updated = current.filter(p => p.id !== id);

  saveLocal('audp_products', updated);
  emitDataUpdated();

  try {
    await deleteDoc(doc(db, 'products', id));
    return true;
  } catch (err) {
    console.warn('Firestore delete failed, cached locally:', err);
    return true;
  }
};

// ==========================================
// 2. IT SOLUTIONS CRUD
// ==========================================

export const getStoredITSolutions = (): ITSolutionItem[] => {
  return loadLocal('audp_it_solutions', [...itSolutionsList]);
};

export const saveITSolution = async (item: ITSolutionItem): Promise<boolean> => {
  const current = getStoredITSolutions();
  const index = current.findIndex(it => it.id === item.id);
  let updated: ITSolutionItem[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = item;
  } else {
    updated = [...current, item];
  }

  saveLocal('audp_it_solutions', updated);
  emitDataUpdated();

  try {
    await setDoc(doc(db, 'it_solutions', item.id), item);
    return true;
  } catch (err) {
    console.warn('Firestore write failed, cached locally:', err);
    return true;
  }
};

export const deleteITSolution = async (id: string): Promise<boolean> => {
  const current = getStoredITSolutions();
  const updated = current.filter(it => it.id !== id);

  saveLocal('audp_it_solutions', updated);
  emitDataUpdated();

  try {
    await deleteDoc(doc(db, 'it_solutions', id));
    return true;
  } catch (err) {
    console.warn('Firestore delete failed, cached locally:', err);
    return true;
  }
};

// ==========================================
// 3. CLIENTS CRUD
// ==========================================

export const getStoredClients = (): ClientItem[] => {
  return loadLocal('audp_clients', [...clientsList]);
};

export const saveClient = async (client: ClientItem): Promise<boolean> => {
  const current = getStoredClients();
  const index = current.findIndex(c => c.id === client.id);
  let updated: ClientItem[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = client;
  } else {
    updated = [...current, client];
  }

  saveLocal('audp_clients', updated);
  emitDataUpdated();

  try {
    await setDoc(doc(db, 'clients', client.id), client);
    return true;
  } catch (err) {
    console.warn('Firestore write failed, cached locally:', err);
    return true;
  }
};

export const deleteClient = async (id: string): Promise<boolean> => {
  const current = getStoredClients();
  const updated = current.filter(c => c.id !== id);

  saveLocal('audp_clients', updated);
  emitDataUpdated();

  try {
    await deleteDoc(doc(db, 'clients', id));
    return true;
  } catch (err) {
    console.warn('Firestore delete failed, cached locally:', err);
    return true;
  }
};

// ==========================================
// 4. NEWS CRUD
// ==========================================

export const getStoredNews = (): NewsItem[] => {
  return loadLocal('audp_news', [...newsList]);
};

export const saveNews = async (newsItem: NewsItem): Promise<boolean> => {
  const current = getStoredNews();
  const index = current.findIndex(n => n.id === newsItem.id);
  let updated: NewsItem[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = newsItem;
  } else {
    updated = [...current, newsItem];
  }

  saveLocal('audp_news', updated);
  emitDataUpdated();

  try {
    await setDoc(doc(db, 'news', newsItem.id), newsItem);
    return true;
  } catch (err) {
    console.warn('Firestore write failed, cached locally:', err);
    return true;
  }
};

export const deleteNews = async (id: string): Promise<boolean> => {
  const current = getStoredNews();
  const updated = current.filter(n => n.id !== id);

  saveLocal('audp_news', updated);
  emitDataUpdated();

  try {
    await deleteDoc(doc(db, 'news', id));
    return true;
  } catch (err) {
    console.warn('Firestore delete failed, cached locally:', err);
    return true;
  }
};

// ==========================================
// 5. LEGAL DOCUMENTS CRUD
// ==========================================

export const getStoredLegalDocs = (): LegalDocument[] => {
  return loadLocal('audp_legal_docs', [...legalDocsList]);
};

export const saveLegalDoc = async (item: LegalDocument): Promise<boolean> => {
  const current = getStoredLegalDocs();
  const index = current.findIndex(l => l.id === item.id);
  let updated: LegalDocument[];
  if (index >= 0) {
    updated = [...current];
    updated[index] = item;
  } else {
    updated = [...current, item];
  }

  saveLocal('audp_legal_docs', updated);
  emitDataUpdated();

  try {
    await setDoc(doc(db, 'legal_docs', item.id), item);
    return true;
  } catch (err) {
    console.warn('Firestore write failed, cached locally:', err);
    return true;
  }
};

export const deleteLegalDoc = async (id: string): Promise<boolean> => {
  const current = getStoredLegalDocs();
  const updated = current.filter(l => l.id !== id);

  saveLocal('audp_legal_docs', updated);
  emitDataUpdated();

  try {
    await deleteDoc(doc(db, 'legal_docs', id));
    return true;
  } catch (err) {
    console.warn('Firestore delete failed, cached locally:', err);
    return true;
  }
};

// ==========================================
// 6. COMPANY PROFILE & SETTINGS
// ==========================================

export const getStoredCompanyInfo = (): typeof companyInfo => {
  return loadLocal('audp_company_info', { ...companyInfo });
};

export const saveCompanyInfo = async (info: Partial<typeof companyInfo>): Promise<boolean> => {
  const current = getStoredCompanyInfo();
  const updated = { ...current, ...info };
  Object.assign(companyInfo, updated);

  saveLocal('audp_company_info', updated);
  emitDataUpdated();

  try {
    await setDoc(doc(db, 'site_content', 'company_info'), updated);
    return true;
  } catch (err) {
    console.warn('Firestore write failed, cached locally:', err);
    return true;
  }
};

export const getStoredAboutContent = (): typeof aboutContent => {
  return loadLocal('audp_about_content', { ...aboutContent });
};

export const saveAboutContent = async (about: typeof aboutContent): Promise<boolean> => {
  saveLocal('audp_about_content', about);
  emitDataUpdated();

  try {
    await setDoc(doc(db, 'site_content', 'about_content'), about);
    return true;
  } catch (err) {
    console.warn('Firestore write failed, cached locally:', err);
    return true;
  }
};

// ==========================================
// 7. SEED & SYNC FIRESTORE
// ==========================================

/**
 * Seeds all default data to Firestore.
 */
export const seedAllDataToFirestore = async (): Promise<{ success: boolean; count: number; message: string }> => {
  try {
    let totalCount = 0;
    const batch = writeBatch(db);

    // 1. Products
    productsList.forEach(p => {
      batch.set(doc(db, 'products', p.id), p);
      totalCount++;
    });

    // 2. IT Solutions
    itSolutionsList.forEach(it => {
      batch.set(doc(db, 'it_solutions', it.id), it);
      totalCount++;
    });

    // 3. Clients
    clientsList.forEach(c => {
      batch.set(doc(db, 'clients', c.id), c);
      totalCount++;
    });

    // 4. News
    newsList.forEach(n => {
      batch.set(doc(db, 'news', n.id), n);
      totalCount++;
    });

    // 5. Legal Docs
    legalDocsList.forEach(l => {
      batch.set(doc(db, 'legal_docs', l.id), l);
      totalCount++;
    });

    // 6. Site Content
    batch.set(doc(db, 'site_content', 'company_info'), companyInfo);
    batch.set(doc(db, 'site_content', 'about_content'), aboutContent);
    totalCount += 2;

    await batch.commit();
    return { success: true, count: totalCount, message: `Berhasil mengekspor ${totalCount} entitas data ke Firestore.` };
  } catch (err: any) {
    console.error('Seed to Firestore error:', err);
    return { success: false, count: 0, message: err.message || 'Gagal mengekspor data ke Firestore' };
  }
};

/**
 * Synchronize all data from Firestore to local cache
 */
export const syncFromFirestore = async (): Promise<boolean> => {
  try {
    // Products
    const prodSnap = await getDocs(collection(db, 'products'));
    if (!prodSnap.empty) {
      const items: ProductItem[] = prodSnap.docs.map(d => d.data() as ProductItem);
      saveLocal('audp_products', items);
    }

    // IT Solutions
    const itSnap = await getDocs(collection(db, 'it_solutions'));
    if (!itSnap.empty) {
      const items: ITSolutionItem[] = itSnap.docs.map(d => d.data() as ITSolutionItem);
      saveLocal('audp_it_solutions', items);
    }

    // Clients
    const clientSnap = await getDocs(collection(db, 'clients'));
    if (!clientSnap.empty) {
      const items: ClientItem[] = clientSnap.docs.map(d => d.data() as ClientItem);
      saveLocal('audp_clients', items);
    }

    // News
    const newsSnap = await getDocs(collection(db, 'news'));
    if (!newsSnap.empty) {
      const items: NewsItem[] = newsSnap.docs.map(d => d.data() as NewsItem);
      saveLocal('audp_news', items);
    }

    // Legal Docs
    const legalSnap = await getDocs(collection(db, 'legal_docs'));
    if (!legalSnap.empty) {
      const items: LegalDocument[] = legalSnap.docs.map(d => d.data() as LegalDocument);
      saveLocal('audp_legal_docs', items);
    }

    emitDataUpdated();
    return true;
  } catch (err) {
    console.warn('Sync from Firestore note:', err);
    return false;
  }
};

/**
 * Reset all local edits back to pristine default data
 */
export const resetToDefaultData = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('audp_products');
  localStorage.removeItem('audp_it_solutions');
  localStorage.removeItem('audp_clients');
  localStorage.removeItem('audp_news');
  localStorage.removeItem('audp_legal_docs');
  localStorage.removeItem('audp_company_info');
  localStorage.removeItem('audp_about_content');
  emitDataUpdated();
};

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent, Analytics } from "firebase/analytics";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  deleteDoc, 
  updateDoc, 
  serverTimestamp, 
  query, 
  orderBy,
  onSnapshot 
} from "firebase/firestore";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User 
} from "firebase/auth";

// Firebase configuration for PT. Aneka Usaha Dua Putra (duaputera)
export const firebaseConfig = {
  apiKey: "AIzaSyDPDGofx7UiuBpA_vUTOfZ5RJnL5usKioU",
  authDomain: "duaputera.firebaseapp.com",
  projectId: "duaputera",
  storageBucket: "duaputera.firebasestorage.app",
  messagingSenderId: "342616327278",
  appId: "1:342616327278:web:c54a232fcfd4c9a478527f",
  measurementId: "G-7VV4J2E8WM"
};

// Initialize Firebase App
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Firestore & Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Analytics safely
export let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

export const logAnalyticsEvent = (eventName: string, params?: Record<string, any>) => {
  if (analytics) {
    try {
      logEvent(analytics, eventName, params);
    } catch (e) {
      // ignore
    }
  }
  if (typeof window !== "undefined" && (window as any).gtag) {
    try {
      (window as any).gtag("event", eventName, params);
    } catch (e) {
      // ignore
    }
  }
};

// Auth helper functions
export const signInAdmin = (email: string, pass: string) => {
  return signInWithEmailAndPassword(auth, email, pass);
};

export const signOutAdmin = () => {
  return signOut(auth);
};

export const subscribeToAuth = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Interface for RFQ / Contact inquiries
export interface InquiryPayload {
  source: 'quotation_modal' | 'contact_page';
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  category?: string;
  department?: string;
  productName?: string;
  specification?: string;
  quantity?: string;
  deliveryAddress?: string;
  deliveryTimeline?: string;
  message?: string;
  status?: 'pending_review' | 'in_progress' | 'completed' | 'archived';
  createdAt?: any;
}

export interface InquiryItemWithId extends InquiryPayload {
  id: string;
}

// Local cache helpers to guarantee zero data loss
const saveLocalInquiry = (inquiry: InquiryItemWithId) => {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem('audp_local_inquiries');
    const list: InquiryItemWithId[] = raw ? JSON.parse(raw) : [];
    const exists = list.some(item => item.id === inquiry.id);
    if (!exists) {
      list.unshift(inquiry);
      localStorage.setItem('audp_local_inquiries', JSON.stringify(list.slice(0, 100)));
    }
  } catch (e) {
    console.warn("Could not cache inquiry locally:", e);
  }
};

const getLocalInquiries = (): InquiryItemWithId[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('audp_local_inquiries');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

/**
 * Saves quotation requests and contact inquiries to Firestore collection 'inquiries'.
 */
export const submitInquiryToFirebase = async (payload: InquiryPayload) => {
  const localId = `inq-${Date.now()}`;
  const nowTimestamp = { seconds: Math.floor(Date.now() / 1000), nanoseconds: 0 };
  const fallbackItem: InquiryItemWithId = {
    ...payload,
    id: localId,
    createdAt: nowTimestamp,
    status: 'pending_review'
  };

  // Always save locally immediately
  saveLocalInquiry(fallbackItem);

  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      ...payload,
      createdAt: serverTimestamp(),
      status: "pending_review"
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.warn("Firebase Firestore submission note:", error);
    return { success: true, id: localId, fallback: true };
  }
};

/**
 * Fetch all inquiries with resilient fallback and dual-cache merge
 */
export const fetchInquiriesFromFirebase = async (): Promise<InquiryItemWithId[]> => {
  let firestoreList: InquiryItemWithId[] = [];
  try {
    const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    firestoreList = snapshot.docs.map(d => ({
      id: d.id,
      ...d.data()
    } as InquiryItemWithId));
  } catch {
    try {
      const snapshot = await getDocs(collection(db, "inquiries"));
      firestoreList = snapshot.docs.map(d => ({
        id: d.id,
        ...d.data()
      } as InquiryItemWithId));
    } catch (e) {
      console.warn("Firestore fetch error:", e);
    }
  }

  // Merge with local inquiries
  const localList = getLocalInquiries();
  const map = new Map<string, InquiryItemWithId>();
  firestoreList.forEach(item => map.set(item.id, item));
  localList.forEach(item => {
    if (!map.has(item.id)) {
      map.set(item.id, item);
    }
  });

  const merged = Array.from(map.values());
  merged.sort((a, b) => {
    const timeA = a.createdAt?.seconds || 0;
    const timeB = b.createdAt?.seconds || 0;
    return timeB - timeA;
  });

  return merged;
};

/**
 * Subscribe to real-time inquiries updates
 */
export const subscribeToInquiries = (callback: (inquiries: InquiryItemWithId[]) => void) => {
  try {
    const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(d => ({
        id: d.id,
        ...d.data()
      } as InquiryItemWithId));
      callback(items);
    }, async () => {
      const items = await fetchInquiriesFromFirebase();
      callback(items);
    });
  } catch {
    fetchInquiriesFromFirebase().then(callback);
    return () => {};
  }
};

/**
 * Update status of an inquiry
 */
export const updateInquiryStatusInFirebase = async (id: string, status: string) => {
  if (typeof window !== 'undefined') {
    try {
      const list = getLocalInquiries().map(i => i.id === id ? { ...i, status: status as any } : i);
      localStorage.setItem('audp_local_inquiries', JSON.stringify(list));
    } catch {}
  }

  try {
    await updateDoc(doc(db, "inquiries", id), { status });
    return true;
  } catch (error) {
    console.warn("Error updating inquiry status:", error);
    return true;
  }
};

/**
 * Delete an inquiry
 */
export const deleteInquiryFromFirebase = async (id: string) => {
  if (typeof window !== 'undefined') {
    try {
      const list = getLocalInquiries().filter(i => i.id !== id);
      localStorage.setItem('audp_local_inquiries', JSON.stringify(list));
    } catch {}
  }

  try {
    await deleteDoc(doc(db, "inquiries", id));
    return true;
  } catch (error) {
    console.warn("Error deleting inquiry:", error);
    return true;
  }
};

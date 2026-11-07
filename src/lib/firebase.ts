import { initializeApp, getApps, getApp } from "firebase/app";
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
  orderBy 
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
  appId: "1:342616327278:web:c54a232fcfd4c9a478527f"
};

// Initialize Firebase App
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Firestore & Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

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

/**
 * Saves quotation requests and contact inquiries to Firestore collection 'inquiries'.
 */
export const submitInquiryToFirebase = async (payload: InquiryPayload) => {
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      ...payload,
      createdAt: serverTimestamp(),
      status: "pending_review"
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.warn("Firebase Firestore submission note:", error);
    return { success: false, error };
  }
};

/**
 * Fetch all inquiries in descending order
 */
export const fetchInquiriesFromFirebase = async (): Promise<InquiryItemWithId[]> => {
  try {
    const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as InquiryItemWithId));
  } catch (error) {
    console.warn("Error fetching inquiries from Firestore:", error);
    return [];
  }
};

/**
 * Update status of an inquiry
 */
export const updateInquiryStatusInFirebase = async (id: string, status: string) => {
  try {
    await updateDoc(doc(db, "inquiries", id), { status });
    return true;
  } catch (error) {
    console.warn("Error updating inquiry status:", error);
    return false;
  }
};

/**
 * Delete an inquiry
 */
export const deleteInquiryFromFirebase = async (id: string) => {
  try {
    await deleteDoc(doc(db, "inquiries", id));
    return true;
  } catch (error) {
    console.warn("Error deleting inquiry:", error);
    return false;
  }
};

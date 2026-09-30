import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

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

// Initialize Cloud Firestore
export const db = getFirestore(app);

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
  message?: string;
}

/**
 * Saves quotation requests and contact inquiries to Firestore collection 'inquiries'.
 * Gracefully handles offline or network limitations.
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
    // Non-blocking error handling to ensure user flow is never disrupted
    return { success: false, error };
  }
};

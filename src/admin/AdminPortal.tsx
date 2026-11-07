import React, { useState, useEffect } from 'react';
import { subscribeToAuth, signOutAdmin, fetchInquiriesFromFirebase } from '../lib/firebase';
import { User } from 'firebase/auth';
import { companyInfo } from '../data/companyData';
import { AdminLogin } from './AdminLogin';
import { DashboardTab } from './tabs/DashboardTab';
import { ProductsTab } from './tabs/ProductsTab';
import { ClientsTab } from './tabs/ClientsTab';
import { NewsTab } from './tabs/NewsTab';
import { LegalDocsTab } from './tabs/LegalDocsTab';
import { CompanyProfileTab } from './tabs/CompanyProfileTab';
import { InquiriesTab } from './tabs/InquiriesTab';
import { 
  LayoutDashboard, 
  Boxes, 
  Users, 
  Newspaper, 
  FileCheck, 
  Building, 
  Mail, 
  LogOut, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight 
} from 'lucide-react';

interface AdminPortalProps {
  onExit: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ onExit }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryCount, setInquiryCount] = useState(0);
  const [pendingInquiries, setPendingInquiries] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  // Subscribe to Firebase Auth
  useEffect(() => {
    const unsubscribe = subscribeToAuth((currentUser) => {
      setUser(currentUser);
      setAuthChecking(false);
    });
    return () => unsubscribe();
  }, []);

  // Fetch count of inquiries
  const loadInquiryCounts = async () => {
    const list = await fetchInquiriesFromFirebase();
    setInquiryCount(list.length);
    setPendingInquiries(list.filter(i => (i.status || 'pending_review') === 'pending_review').length);
  };

  useEffect(() => {
    if (user) {
      loadInquiryCounts();
    }
  }, [user, refreshKey]);

  const handleLogout = async () => {
    await signOutAdmin();
    setUser(null);
  };

  const navMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', label: 'Katalog Produk & Solusi Pasokan', icon: Boxes },
    { id: 'clients', label: 'Klien & Portofolio', icon: Users },
    { id: 'news', label: 'Berita & Artikel', icon: Newspaper },
    { id: 'legal', label: 'Legalitas & Dokumen', icon: FileCheck },
    { id: 'company', label: 'Profil Perusahaan & Kontak', icon: Building },
    { 
      id: 'inquiries', 
      label: 'Inbox Permintaan RFQ', 
      icon: Mail, 
      badge: pendingInquiries > 0 ? String(pendingInquiries) : undefined 
    },
  ];

  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400 font-sans text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span>Memeriksa sesi login...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <AdminLogin 
        onSuccess={() => {}} 
        onExit={onExit} 
      />
    );
  }

  const activeNav = navMenuItems.find(m => m.id === activeTab) || navMenuItems[0];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row text-slate-800 font-sans antialiased">
      
      {/* ========================================================
          SIDEBAR NAVIGATION (Desktop & Drawer Mobile)
         ======================================================== */}
      
      {/* Mobile Top Header */}
      <header className="md:hidden bg-slate-900 border-b border-slate-800 text-white p-4 flex items-center justify-between z-30">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center p-1 overflow-hidden">
            <img src={companyInfo.logoUrl || "/assets/logo_emblem.png"} alt="AUDP Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">AUDP ADMIN</div>
            <div className="text-xs font-bold text-white">{activeNav.label}</div>
          </div>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Sidebar Desktop */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 text-slate-300 flex flex-col justify-between
        transition-transform duration-200 ease-in-out md:translate-x-0 md:sticky md:top-0 md:h-screen shrink-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        
        {/* Top Branding & Navigation Links */}
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
          {/* Top Branding */}
          <div className="p-5 border-b border-slate-800 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center p-1.5 flex-shrink-0 overflow-hidden">
              <img src={companyInfo.logoUrl || "/assets/logo_emblem.png"} alt="AUDP Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                AUDP
              </div>
              <h1 className="text-sm font-bold text-white tracking-tight">
                Control Center
              </h1>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {navMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                      isActive ? 'bg-slate-950 text-white' : 'bg-amber-400 text-slate-950'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom User & Logout - ALWAYS VISIBLE AT BOTTOM */}
        <div className="p-4 border-t border-slate-800 space-y-2.5 shrink-0 bg-slate-900">
          <div className="px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px]">
            <div className="text-slate-500 text-[10px]">Login sebagai:</div>
            <div className="font-mono text-slate-300 font-bold truncate">
              {user.email}
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-950/50 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Keluar (Logout)</span>
          </button>
        </div>

      </aside>

      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-30 md:hidden"
        />
      )}

      {/* ========================================================
          MAIN CONTENT AREA
         ======================================================== */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header Bar Desktop */}
        <div className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Admin</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-900">{activeNav.label}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              <span>Lihat Website</span>
            </button>
          </div>
        </div>

        {/* Content Body Container */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && (
            <DashboardTab
              onNavigateTab={(tab) => setActiveTab(tab)}
              inquiryCount={inquiryCount}
              pendingInquiries={pendingInquiries}
              onRefreshAll={() => setRefreshKey(k => k + 1)}
            />
          )}

          {activeTab === 'products' && (
            <ProductsTab />
          )}

          {activeTab === 'it' && (
            <ProductsTab initialSection="it-solutions" />
          )}

          {activeTab === 'clients' && (
            <ClientsTab />
          )}

          {activeTab === 'news' && (
            <NewsTab />
          )}

          {activeTab === 'legal' && (
            <LegalDocsTab />
          )}

          {activeTab === 'company' && (
            <CompanyProfileTab />
          )}

          {activeTab === 'inquiries' && (
            <InquiriesTab />
          )}
        </div>

      </main>

    </div>
  );
};

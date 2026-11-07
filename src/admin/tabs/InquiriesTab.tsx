import React, { useState, useEffect } from 'react';
import { 
  fetchInquiriesFromFirebase, 
  subscribeToInquiries,
  updateInquiryStatusInFirebase, 
  deleteInquiryFromFirebase, 
  InquiryItemWithId 
} from '../../lib/firebase';
import { 
  MessageSquare, 
  Trash2, 
  Building, 
  User, 
  Search, 
  RefreshCw,
  Loader2
} from 'lucide-react';

export const InquiriesTab: React.FC = () => {
  const [inquiries, setInquiries] = useState<InquiryItemWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending_review' | 'in_progress' | 'completed'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const loadData = async () => {
    setLoading(true);
    const data = await fetchInquiriesFromFirebase();
    setInquiries(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeToInquiries((data) => {
      setInquiries(data);
      setLoading(false);
    });
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    await updateInquiryStatusInFirebase(id, newStatus);
    setInquiries(inquiries.map(item => item.id === id ? { ...item, status: newStatus as any } : item));
  };

  const handleDelete = async (id: string, company: string) => {
    if (!window.confirm(`Hapus permintaan penawaran dari "${company}"?`)) return;
    await deleteInquiryFromFirebase(id);
    setInquiries(inquiries.filter(item => item.id !== id));
  };

  const filteredInquiries = inquiries.filter(item => {
    if (statusFilter !== 'all' && (item.status || 'pending_review') !== statusFilter) {
      return false;
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      const matchName = item.name?.toLowerCase().includes(q);
      const matchComp = item.company?.toLowerCase().includes(q);
      const matchCat = item.category?.toLowerCase().includes(q);
      const matchProd = item.productName?.toLowerCase().includes(q);
      return matchName || matchComp || matchCat || matchProd;
    }
    return true;
  });

  const getCleanWaNumber = (phone: string) => {
    let clean = (phone || '').replace(/[^0-9]/g, '');
    if (clean.startsWith('0')) {
      clean = '62' + clean.slice(1);
    }
    return clean;
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Inbox Permintaan Penawaran Resmi (RFQ)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Daftar pengajuan kebutuhan pengadaan dan formulir kontak yang dikirim oleh pelanggan.
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-56">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari perusahaan / barang..."
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-amber-500"
            />
          </div>

          <button
            onClick={loadData}
            disabled={loading}
            className="min-h-[38px] min-w-[38px] flex items-center justify-center p-2 rounded-xl border border-slate-200 hover:bg-slate-100 active:bg-slate-200 text-slate-600 transition-colors cursor-pointer shrink-0"
            title="Muat Ulang Data"
            aria-label="Muat Ulang Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          { id: 'all', label: 'Semua Status', count: inquiries.length },
          { id: 'pending_review', label: 'Menunggu Review', count: inquiries.filter(i => (i.status || 'pending_review') === 'pending_review').length },
          { id: 'in_progress', label: 'Sedang Diproses', count: inquiries.filter(i => i.status === 'in_progress').length },
          { id: 'completed', label: 'Selesai / Quoted', count: inquiries.filter(i => i.status === 'completed').length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setStatusFilter(tab.id as any)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              statusFilter === tab.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span>{tab.label}</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
              statusFilter === tab.id ? 'bg-amber-400 text-slate-950 font-black' : 'bg-slate-100 text-slate-600'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="py-12 flex flex-col items-center justify-center text-slate-500">
          <Loader2 className="w-8 h-8 animate-spin text-amber-500 mb-2" />
          <span className="text-xs">Memuat data permintaan penawaran dari Cloud Firestore...</span>
        </div>
      )}

      {/* Inquiries Cards */}
      {!loading && (
        <div className="space-y-4">
          {filteredInquiries.map((inq) => {
            const cleanWa = getCleanWaNumber(inq.whatsapp);
            const status = inq.status || 'pending_review';
            const waGreeting = encodeURIComponent(
              `Halo Bpk/Ibu ${inq.name || ''} dari ${inq.company || ''}, terima kasih telah menghubungi PT. Aneka Usaha Dua Putra mengenai permintaan penawaran ${inq.productName || inq.category || ''}. Kami ingin mengonfirmasi detail kebutuhan pengadaan Anda.`
            );
            const waLink = `https://wa.me/${cleanWa}?text=${waGreeting}`;

            return (
              <div 
                key={inq.id} 
                className={`p-5 sm:p-6 rounded-2xl bg-white border transition-all ${
                  status === 'pending_review' 
                    ? 'border-amber-400 ring-1 ring-amber-400/40 shadow-xs' 
                    : 'border-slate-200 shadow-2xs'
                }`}
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 flex-shrink-0">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {inq.company || 'Perusahaan Tidak Disebutkan'}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5 text-xs text-slate-500">
                        <span className="flex items-center gap-1 font-semibold text-slate-700">
                          <User className="w-3.5 h-3.5 text-slate-400" /> {inq.name}
                        </span>
                        {inq.department && (
                          <span className="text-slate-400">({inq.department})</span>
                        )}
                        <span className="text-slate-300">•</span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {inq.createdAt?.seconds 
                            ? new Date(inq.createdAt.seconds * 1000).toLocaleString('id-ID')
                            : 'Waktu tidak tersedia'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Selector & WhatsApp Button */}
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto self-start sm:self-center mt-2 sm:mt-0">
                    <select
                      value={status}
                      onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                      className={`text-xs font-bold py-2 px-3 rounded-xl border focus:outline-hidden cursor-pointer min-h-[38px] ${
                        status === 'pending_review'
                          ? 'bg-amber-50 text-amber-800 border-amber-300'
                          : status === 'in_progress'
                          ? 'bg-blue-50 text-blue-800 border-blue-300'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      }`}
                    >
                      <option value="pending_review">Menunggu Review</option>
                      <option value="in_progress">Sedang Diproses</option>
                      <option value="completed">Selesai / Quoted</option>
                    </select>

                    {inq.whatsapp && (
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-colors min-h-[38px]"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat WA</span>
                      </a>
                    )}

                    <button
                      onClick={() => handleDelete(inq.id, inq.company || inq.name)}
                      className="min-h-[38px] min-w-[38px] flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors ml-auto sm:ml-0 cursor-pointer"
                      title="Hapus Permintaan"
                      aria-label="Hapus Permintaan"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Details Body */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  
                  {/* Left: Contact Info */}
                  <div className="space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">
                      Kontak Pengaju
                    </div>
                    <div><span className="text-slate-500">Email:</span> <span className="font-mono font-medium text-slate-800">{inq.email || '-'}</span></div>
                    <div><span className="text-slate-500">No. WhatsApp:</span> <span className="font-mono font-medium text-slate-800">{inq.whatsapp || '-'}</span></div>
                    <div><span className="text-slate-500">Asal Formulir:</span> <span className="font-semibold text-slate-700">{inq.source === 'quotation_modal' ? 'Modal RFQ Website' : 'Halaman Kontak'}</span></div>
                  </div>

                  {/* Right: Product & Specs */}
                  <div className="space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">
                      Kebutuhan Barang / Jasa
                    </div>
                    <div><span className="text-slate-500">Kategori:</span> <span className="font-semibold text-amber-800">{inq.category || inq.productName || 'General Procurement'}</span></div>
                    {inq.productName && (
                      <div><span className="text-slate-500">Deskripsi Barang:</span> <span className="font-medium text-slate-800">{inq.productName}</span></div>
                    )}
                    {inq.quantity && (
                      <div><span className="text-slate-500">Estimasi Kuantitas:</span> <span className="font-bold text-slate-800">{inq.quantity}</span></div>
                    )}
                    {inq.deliveryTimeline && (
                      <div><span className="text-slate-500">Target Jadwal:</span> <span className="font-medium text-slate-700">{inq.deliveryTimeline}</span></div>
                    )}
                  </div>

                </div>

                {/* Technical Specifications / Additional Message */}
                {(inq.specification || inq.message || inq.deliveryAddress) && (
                  <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                    {inq.specification && (
                      <div>
                        <span className="font-bold text-slate-700">Spesifikasi Teknis:</span>{' '}
                        <span className="text-slate-600">{inq.specification}</span>
                      </div>
                    )}
                    {inq.deliveryAddress && (
                      <div>
                        <span className="font-bold text-slate-700">Alamat Pengiriman:</span>{' '}
                        <span className="text-slate-600">{inq.deliveryAddress}</span>
                      </div>
                    )}
                    {inq.message && (
                      <div>
                        <span className="font-bold text-slate-700">Catatan Khusus:</span>{' '}
                        <span className="text-slate-600">{inq.message}</span>
                      </div>
                    )}
                  </div>
                )}

              </div>
            );
          })}

          {filteredInquiries.length === 0 && (
            <div className="py-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
              Tidak ada data permintaan penawaran pada kategori ini.
            </div>
          )}
        </div>
      )}

    </div>
  );
};

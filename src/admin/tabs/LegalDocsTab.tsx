import React, { useState } from 'react';
import { LegalDocument } from '../../types';
import { 
  getStoredLegalDocs, 
  saveLegalDoc, 
  deleteLegalDoc 
} from '../../services/adminDataService';
import { ImageBrowsePicker } from '../components/ImageBrowsePicker';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  X 
} from 'lucide-react';

export const LegalDocsTab: React.FC = () => {
  const [docs, setDocs] = useState<LegalDocument[]>(() => getStoredLegalDocs());
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingDoc, setEditingDoc] = useState<LegalDocument | null>(null);

  // Form State
  const [id, setId] = useState('');
  const [titleId, setTitleId] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [category, setCategory] = useState('Perpajakan');
  const [descId, setDescId] = useState('');
  const [descEn, setDescEn] = useState('');
  const [previewImage, setPreviewImage] = useState('/assets/legal_npwp.jpg');
  const [fullImage, setFullImage] = useState('/assets/legal_npwp.jpg');

  const refreshList = () => {
    setDocs(getStoredLegalDocs());
  };

  const handleOpenAdd = () => {
    setEditingDoc(null);
    setId(`legal-${Date.now()}`);
    setTitleId('');
    setTitleEn('');
    setDocNumber('');
    setCategory('Perpajakan');
    setDescId('');
    setDescEn('');
    setPreviewImage('/assets/legal_npwp.jpg');
    setFullImage('/assets/legal_npwp.jpg');
    setModalOpen(true);
  };

  const handleOpenEdit = (d: LegalDocument) => {
    setEditingDoc(d);
    setId(d.id);
    setTitleId(d.title.id);
    setTitleEn(d.title.en);
    setDocNumber(d.docNumber);
    setCategory(d.category);
    setDescId(d.desc.id);
    setDescEn(d.desc.en);
    setPreviewImage(d.previewImage);
    setFullImage(d.fullImage);
    setModalOpen(true);
  };

  const handleDelete = async (docId: string, title: string) => {
    if (!window.confirm(`Hapus dokumen legalitas "${title}"?`)) return;
    await deleteLegalDoc(docId);
    refreshList();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleId.trim()) return;

    const payload: LegalDocument = {
      id: id.trim() || `legal-${Date.now()}`,
      title: {
        id: titleId.trim(),
        en: titleEn.trim() || titleId.trim()
      },
      docNumber: docNumber.trim(),
      category: category.trim() || 'Perpajakan',
      desc: {
        id: descId.trim(),
        en: descEn.trim() || descId.trim()
      },
      previewImage: previewImage.trim() || '/assets/legal_npwp.jpg',
      fullImage: fullImage.trim() || previewImage.trim() || '/assets/legal_npwp.jpg'
    };

    await saveLegalDoc(payload);
    refreshList();
    setModalOpen(false);
  };

  const filteredDocs = docs.filter(d => 
    d.title.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.docNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Legalitas & Kepatuhan Perusahaan (Corporate Compliance)
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Total {docs.length} berkas legalitas resmi (NIB, NPWP, SPPKP, SKT) tercatat.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari dokumen..."
              className="pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-amber-500 w-44 sm:w-56"
            />
          </div>

          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Tambah Dokumen</span>
          </button>
        </div>
      </div>

      {/* Grid Documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDocs.map((d) => (
          <div key={d.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                    {d.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1.5">
                    {d.title.id}
                  </h4>
                  <div className="font-mono text-xs font-bold text-amber-700 mt-0.5">
                    {d.docNumber}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(d)}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    title="Edit Dokumen"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(d.id, d.title.id)}
                    className="p-1.5 rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50"
                    title="Hapus Dokumen"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {d.desc.id}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>File: {d.previewImage}</span>
              <a href={d.fullImage} target="_blank" rel="noopener noreferrer" className="text-amber-700 font-bold hover:underline">
                Pratinjau Berkas &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-300 shadow-2xl overflow-hidden my-8">
            <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-900">
                {editingDoc ? 'Edit Dokumen Legalitas' : 'Tambah Dokumen Legalitas Baru'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="p-1.5 rounded-lg text-slate-500 hover:text-slate-700">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">ID Slug</label>
                  <input
                    type="text"
                    required
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Kategori Dokumen</label>
                  <input
                    type="text"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="misal: Perpajakan / Izin Usaha"
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Nomor Registrasi / Dokumen</label>
                <input
                  type="text"
                  required
                  value={docNumber}
                  onChange={(e) => setDocNumber(e.target.value)}
                  placeholder="misal: 99.500.604.6-413.000"
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nama Dokumen (ID)</label>
                  <input
                    type="text"
                    required
                    value={titleId}
                    onChange={(e) => setTitleId(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nama Dokumen (EN)</label>
                  <input
                    type="text"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Keterangan / Deskripsi (ID)</label>
                <textarea
                  rows={2}
                  value={descId}
                  onChange={(e) => setDescId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <ImageBrowsePicker
                label="Dokumen Legalitas / Berkas (Upload / Browse Galeri)"
                value={previewImage}
                onChange={(val) => {
                  setPreviewImage(val);
                  setFullImage(val);
                }}
                defaultCategory="legal"
              />

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl border text-slate-600 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold"
                >
                  Simpan Dokumen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

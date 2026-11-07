import React, { useState } from 'react';
import { ITSolutionItem } from '../../types';
import { 
  getStoredITSolutions, 
  saveITSolution, 
  deleteITSolution 
} from '../../services/adminDataService';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  X 
} from 'lucide-react';

const IT_ICON_OPTIONS = [
  'Monitor',
  'Network',
  'ShieldAlert',
  'Server',
  'FileCode',
  'Tv',
  'FileCheck',
  'Layers'
];

export const ITSolutionsTab: React.FC = () => {
  const [items, setItems] = useState<ITSolutionItem[]>(() => getStoredITSolutions());
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ITSolutionItem | null>(null);

  // Form State
  const [id, setId] = useState('');
  const [number, setNumber] = useState('01');
  const [titleId, setTitleId] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [subtitleId, setSubtitleId] = useState('');
  const [subtitleEn, setSubtitleEn] = useState('');
  const [descriptionId, setDescriptionId] = useState('');
  const [descriptionEn, setDescriptionEn] = useState('');
  const [equipmentString, setEquipmentString] = useState('');
  const [iconName, setIconName] = useState('Monitor');

  const refreshList = () => {
    setItems(getStoredITSolutions());
  };

  const handleOpenAdd = () => {
    const nextNum = String(items.length + 1).padStart(2, '0');
    setEditingItem(null);
    setId(`it-${Date.now()}`);
    setNumber(nextNum);
    setTitleId('');
    setTitleEn('');
    setSubtitleId('');
    setSubtitleEn('');
    setDescriptionId('');
    setDescriptionEn('');
    setEquipmentString('Item 1, Item 2, Item 3');
    setIconName('Monitor');
    setModalOpen(true);
  };

  const handleOpenEdit = (it: ITSolutionItem) => {
    setEditingItem(it);
    setId(it.id);
    setNumber(it.number);
    setTitleId(it.title.id);
    setTitleEn(it.title.en);
    setSubtitleId(it.subtitle.id);
    setSubtitleEn(it.subtitle.en);
    setDescriptionId(it.description.id);
    setDescriptionEn(it.description.en);
    setEquipmentString(it.equipmentList.join(', '));
    setIconName(it.iconName);
    setModalOpen(true);
  };

  const handleDelete = async (itemId: string, title: string) => {
    if (!window.confirm(`Hapus layanan IT "${title}"?`)) return;
    await deleteITSolution(itemId);
    refreshList();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleId.trim()) return;

    const equipmentList = equipmentString
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const payload: ITSolutionItem = {
      id: id.trim() || `it-${Date.now()}`,
      number: number.trim() || '01',
      title: {
        id: titleId.trim(),
        en: titleEn.trim() || titleId.trim()
      },
      subtitle: {
        id: subtitleId.trim(),
        en: subtitleEn.trim() || subtitleId.trim()
      },
      description: {
        id: descriptionId.trim(),
        en: descriptionEn.trim() || descriptionId.trim()
      },
      equipmentList,
      iconName: iconName || 'Monitor'
    };

    await saveITSolution(payload);
    refreshList();
    setModalOpen(false);
  };

  const filteredItems = items.filter(it => 
    it.title.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    it.title.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    it.number.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Solusi IT & Perangkat Teknologi Perusahaan
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Total {items.length} modul pengadaan IT & infrastruktur kantor.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari solusi IT..."
              className="pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-amber-500 w-44 sm:w-56"
            />
          </div>

          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Tambah Solusi IT</span>
          </button>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((it) => (
          <div key={it.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] font-bold">
                    #{it.number}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-mono text-[10px] font-semibold border border-amber-200">
                    Icon: {it.iconName}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(it)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                    title="Edit Solusi"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(it.id, it.title.id)}
                    className="p-1.5 rounded-lg text-red-500 hover:text-red-700 hover:bg-red-50"
                    title="Hapus Solusi"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <h4 className="text-sm font-bold text-slate-900 mt-2">
                {it.title.id} <span className="text-xs font-normal text-slate-400">({it.title.en})</span>
              </h4>
              <div className="text-[11px] font-semibold text-amber-700 mt-0.5">
                {it.subtitle.id}
              </div>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {it.description.id}
              </p>

              {/* Equipment list tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {it.equipmentList.map((eq, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] text-slate-700">
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-300 shadow-2xl overflow-hidden my-8">
            <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-900">
                {editingItem ? 'Edit Solusi IT' : 'Tambah Solusi IT Baru'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="p-1.5 rounded-lg text-slate-500 hover:text-slate-700">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
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
                  <label className="block font-bold text-slate-700 mb-1">Nomor Urut</label>
                  <input
                    type="text"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Judul (ID)</label>
                  <input
                    type="text"
                    required
                    value={titleId}
                    onChange={(e) => setTitleId(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Judul (EN)</label>
                  <input
                    type="text"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Subjudul (ID)</label>
                  <input
                    type="text"
                    value={subtitleId}
                    onChange={(e) => setSubtitleId(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Subjudul (EN)</label>
                  <input
                    type="text"
                    value={subtitleEn}
                    onChange={(e) => setSubtitleEn(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Deskripsi (ID)</label>
                <textarea
                  rows={2}
                  value={descriptionId}
                  onChange={(e) => setDescriptionId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Daftar Equipment (Pisahkan koma)</label>
                <input
                  type="text"
                  value={equipmentString}
                  onChange={(e) => setEquipmentString(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Ikon Lucide</label>
                <select
                  value={iconName}
                  onChange={(e) => setIconName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-mono"
                >
                  {IT_ICON_OPTIONS.map((ico) => (
                    <option key={ico} value={ico}>{ico}</option>
                  ))}
                </select>
              </div>

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
                  Simpan Solusi IT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

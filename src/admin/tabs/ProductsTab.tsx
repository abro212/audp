import React, { useState } from 'react';
import { ProductItem } from '../../types';
import { 
  getStoredProducts, 
  saveProduct, 
  deleteProduct 
} from '../../services/adminDataService';
import { ImageBrowsePicker } from '../components/ImageBrowsePicker';
import { ITSolutionsTab } from './ITSolutionsTab';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  Check, 
  X,
  Boxes,
  Cpu
} from 'lucide-react';

const ICON_OPTIONS = [
  'Settings',
  'Briefcase',
  'Zap',
  'Shield',
  'Sparkles',
  'Package',
  'Wrench',
  'Cpu',
  'Wind'
];

interface ProductsTabProps {
  initialSection?: 'catalog' | 'it-solutions';
}

export const ProductsTab: React.FC<ProductsTabProps> = ({ initialSection = 'catalog' }) => {
  const [activeSection, setActiveSection] = useState<'catalog' | 'it-solutions'>(initialSection);
  const [products, setProducts] = useState<ProductItem[]>(() => getStoredProducts());
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);

  // Form State
  const [id, setId] = useState('');
  const [number, setNumber] = useState('01');
  const [titleId, setTitleId] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [shortDescId, setShortDescId] = useState('');
  const [shortDescEn, setShortDescEn] = useState('');
  const [fullDescId, setFullDescId] = useState('');
  const [fullDescEn, setFullDescEn] = useState('');
  const [itemsString, setItemsString] = useState('');
  const [image, setImage] = useState('/assets/prod_1.jpg');
  const [iconName, setIconName] = useState('Settings');
  const [badge, setBadge] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);

  const refreshList = () => {
    setProducts(getStoredProducts());
  };

  const handleOpenAdd = () => {
    const nextNum = String(products.length + 1).padStart(2, '0');
    setEditingProduct(null);
    setId(`product-${Date.now()}`);
    setNumber(nextNum);
    setTitleId('');
    setTitleEn('');
    setShortDescId('');
    setShortDescEn('');
    setFullDescId('');
    setFullDescEn('');
    setItemsString('Item A, Item B, Item C');
    setImage('/assets/prod_1.jpg');
    setIconName('Settings');
    setBadge('');
    setIsFeatured(false);
    setModalOpen(true);
  };

  const handleOpenEdit = (p: ProductItem) => {
    setEditingProduct(p);
    setId(p.id);
    setNumber(p.number);
    setTitleId(p.title.id);
    setTitleEn(p.title.en);
    setShortDescId(p.shortDesc.id);
    setShortDescEn(p.shortDesc.en);
    setFullDescId(p.fullDesc.id);
    setFullDescEn(p.fullDesc.en);
    setItemsString(p.items.join(', '));
    setImage(p.image);
    setIconName(p.iconName);
    setBadge(p.badge || '');
    setIsFeatured(Boolean(p.isFeatured));
    setModalOpen(true);
  };

  const handleDelete = async (prodId: string, title: string) => {
    if (!window.confirm(`Hapus produk "${title}" secara permanen?`)) return;
    await deleteProduct(prodId);
    refreshList();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleId.trim()) return;

    const items = itemsString
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const payload: ProductItem = {
      id: id.trim() || `prod-${Date.now()}`,
      number: number.trim() || '01',
      title: {
        id: titleId.trim(),
        en: titleEn.trim() || titleId.trim()
      },
      shortDesc: {
        id: shortDescId.trim(),
        en: shortDescEn.trim() || shortDescId.trim()
      },
      fullDesc: {
        id: fullDescId.trim(),
        en: fullDescEn.trim() || fullDescId.trim()
      },
      items,
      image: image.trim() || '/assets/prod_1.jpg',
      iconName: iconName || 'Settings',
      badge: badge.trim() || undefined,
      isFeatured
    };

    await saveProduct(payload);
    refreshList();
    setModalOpen(false);
  };

  const filteredProducts = products.filter(p => 
    p.title.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.title.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.number.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      
      {/* Sub-navigation Tabs: Gabungan Produk Umum & Solusi IT */}
      <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
        <button
          type="button"
          onClick={() => setActiveSection('catalog')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSection === 'catalog'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Boxes className={`w-4 h-4 ${activeSection === 'catalog' ? 'text-amber-400' : 'text-slate-400'}`} />
          <span>Katalog Produk & Pasokan ({products.length} Kategori)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSection('it-solutions')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeSection === 'it-solutions'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Cpu className={`w-4 h-4 ${activeSection === 'it-solutions' ? 'text-amber-400' : 'text-slate-400'}`} />
          <span>Rincian Spesifikasi IT Solutions & Equipment</span>
        </button>
      </div>

      {activeSection === 'it-solutions' ? (
        <ITSolutionsTab />
      ) : (
        <>
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Katalog Produk & Solusi Pasokan
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Total {products.length} kategori layanan dan pasokan barang terdaftar.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari produk..."
              className="pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-amber-500 w-44 sm:w-56"
            />
          </div>

          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Tambah Produk</span>
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4 w-12 text-center">No</th>
                <th className="py-3 px-4 w-20">Foto</th>
                <th className="py-3 px-4">Nama Produk / Layanan</th>
                <th className="py-3 px-4">Deskripsi Singkat</th>
                <th className="py-3 px-4 w-28">Badge / Label</th>
                <th className="py-3 px-4 w-28 text-center">Tampil Beranda</th>
                <th className="py-3 px-4 w-24 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-500">
                    {p.number}
                  </td>
                  <td className="py-3.5 px-4">
                    <img 
                      src={p.image} 
                      alt={p.title.id} 
                      className="w-14 h-10 object-cover rounded-lg border border-slate-200 bg-slate-100"
                    />
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{p.title.id}</div>
                    <div className="text-[11px] text-slate-500 italic">{p.title.en}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">Icon: {p.iconName}</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 max-w-xs line-clamp-2 leading-relaxed">
                    {p.shortDesc.id}
                  </td>
                  <td className="py-3.5 px-4">
                    {p.badge ? (
                      <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                        {p.badge}
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[11px]">-</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {p.isFeatured ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <Check className="w-3 h-3" /> Utama
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[11px]">Katalog</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="inline-flex items-center gap-1">
                      <button
                        onClick={() => handleOpenEdit(p)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        title="Edit Produk"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(p.id, p.title.id)}
                        className="p-1.5 rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors"
                        title="Hapus Produk"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    Tidak ada produk yang cocok dengan pencarian.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* CRUD Modal Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-300 shadow-2xl overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-900">
                {editingProduct ? 'Edit Kategori Produk' : 'Tambah Kategori Produk Baru'}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">ID Slug (Unik)</label>
                  <input
                    type="text"
                    required
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="misal: safety-equipment"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nomor Urut</label>
                  <input
                    type="text"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="misal: 01"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white font-mono"
                  />
                </div>
              </div>

              {/* Title ID & EN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Judul (Bahasa Indonesia)</label>
                  <input
                    type="text"
                    required
                    value={titleId}
                    onChange={(e) => setTitleId(e.target.value)}
                    placeholder="misal: Industrial Supply"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Judul (English)</label>
                  <input
                    type="text"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    placeholder="e.g. Industrial Supply"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Short Description ID & EN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Deskripsi Singkat (ID)</label>
                  <textarea
                    rows={2}
                    value={shortDescId}
                    onChange={(e) => setShortDescId(e.target.value)}
                    placeholder="Ringkasan 1-2 baris untuk kartu produk..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Deskripsi Singkat (EN)</label>
                  <textarea
                    rows={2}
                    value={shortDescEn}
                    onChange={(e) => setShortDescEn(e.target.value)}
                    placeholder="Short 1-2 line summary for card..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Full Description ID & EN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Deskripsi Lengkap (ID)</label>
                  <textarea
                    rows={3}
                    value={fullDescId}
                    onChange={(e) => setFullDescId(e.target.value)}
                    placeholder="Penjelasan detail untuk modal popup..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Deskripsi Lengkap (EN)</label>
                  <textarea
                    rows={3}
                    value={fullDescEn}
                    onChange={(e) => setFullDescEn(e.target.value)}
                    placeholder="Comprehensive explanation for modal popup..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Items List */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Daftar Sub-Item / Spesifikasi (Pisahkan dengan tanda koma)
                </label>
                <input
                  type="text"
                  value={itemsString}
                  onChange={(e) => setItemsString(e.target.value)}
                  placeholder="Kabel Industri, Motor Dinamo, Pipa Valve, Fitting"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                />
              </div>

              {/* Image Browse & Picker */}
              <ImageBrowsePicker
                label="Foto / Gambar Produk (Upload / Browse Galeri)"
                value={image}
                onChange={setImage}
                defaultCategory="products"
              />

              {/* Icon, Badge, and Featured */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Ikon Lucide</label>
                  <select
                    value={iconName}
                    onChange={(e) => setIconName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white font-mono"
                  >
                    {ICON_OPTIONS.map((ico) => (
                      <option key={ico} value={ico}>{ico}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Label Badge (Opsional)</label>
                  <input
                    type="text"
                    value={badge}
                    onChange={(e) => setBadge(e.target.value)}
                    placeholder="misal: NEW / FABRIKASI"
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div className="flex items-center pt-5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isFeatured}
                      onChange={(e) => setIsFeatured(e.target.checked)}
                      className="w-4 h-4 rounded text-amber-600 border-slate-300 focus:ring-amber-500"
                    />
                    <span className="font-bold text-slate-800">Tampilkan di Beranda</span>
                  </label>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors cursor-pointer"
                >
                  Simpan Produk
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

        </>
      )}

    </div>
  );
};

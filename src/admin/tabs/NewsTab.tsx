import React, { useState } from 'react';
import { NewsItem } from '../../types';
import { 
  getStoredNews, 
  saveNews, 
  deleteNews 
} from '../../services/adminDataService';
import { ImageBrowsePicker } from '../components/ImageBrowsePicker';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  X, 
  Calendar 
} from 'lucide-react';

export const NewsTab: React.FC = () => {
  const [articles, setArticles] = useState<NewsItem[]>(() => getStoredNews());
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);

  // Form State
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  const [categoryId, setCategoryId] = useState('Perusahaan');
  const [categoryEn, setCategoryEn] = useState('Company');
  const [titleId, setTitleId] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [summaryId, setSummaryId] = useState('');
  const [summaryEn, setSummaryEn] = useState('');
  const [contentId, setContentId] = useState('');
  const [contentEn, setContentEn] = useState('');
  const [image, setImage] = useState('/assets/prod_1.jpg');

  const refreshList = () => {
    setArticles(getStoredNews());
  };

  const handleOpenAdd = () => {
    setEditingNews(null);
    setId(`news-${Date.now()}`);
    setDate(new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }));
    setCategoryId('Perusahaan');
    setCategoryEn('Company');
    setTitleId('');
    setTitleEn('');
    setSummaryId('');
    setSummaryEn('');
    setContentId('');
    setContentEn('');
    setImage('/assets/prod_1.jpg');
    setModalOpen(true);
  };

  const handleOpenEdit = (n: NewsItem) => {
    setEditingNews(n);
    setId(n.id);
    setDate(n.date);
    setCategoryId(n.category.id);
    setCategoryEn(n.category.en);
    setTitleId(n.title.id);
    setTitleEn(n.title.en);
    setSummaryId(n.summary.id);
    setSummaryEn(n.summary.en);
    setContentId(n.content.id);
    setContentEn(n.content.en);
    setImage(n.image);
    setModalOpen(true);
  };

  const handleDelete = async (newsId: string, title: string) => {
    if (!window.confirm(`Hapus artikel berita "${title}"?`)) return;
    await deleteNews(newsId);
    refreshList();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleId.trim()) return;

    const payload: NewsItem = {
      id: id.trim() || `news-${Date.now()}`,
      date: date.trim() || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      category: {
        id: categoryId.trim() || 'Perusahaan',
        en: categoryEn.trim() || categoryId.trim()
      },
      title: {
        id: titleId.trim(),
        en: titleEn.trim() || titleId.trim()
      },
      summary: {
        id: summaryId.trim(),
        en: summaryEn.trim() || summaryId.trim()
      },
      content: {
        id: contentId.trim() || summaryId.trim(),
        en: contentEn.trim() || summaryEn.trim() || summaryId.trim()
      },
      image: image.trim() || '/assets/prod_1.jpg'
    };

    await saveNews(payload);
    refreshList();
    setModalOpen(false);
  };

  const filteredArticles = articles.filter(a => 
    a.title.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.category.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Berita & Artikel Wawasan Industri
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Total {articles.length} artikel publikasi dan kabar perusahaan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 w-full sm:w-auto">
          <div className="relative w-full sm:w-56">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari artikel..."
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-amber-500"
            />
          </div>

          <button
            onClick={handleOpenAdd}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-bold transition-colors cursor-pointer min-h-[40px]"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Tulis Artikel</span>
          </button>
        </div>
      </div>

      {/* Articles List */}
      <div className="space-y-3.5">
        {filteredArticles.map((art) => (
          <div key={art.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-colors">
            <div className="flex items-start gap-4">
              <img 
                src={art.image} 
                alt={art.title.id} 
                className="w-20 h-16 rounded-xl object-cover border border-slate-200 bg-slate-100 flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {art.category.id}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {art.date}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 line-clamp-1">
                  {art.title.id}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                  {art.summary.id}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-shrink-0 self-end md:self-center">
              <button
                onClick={() => handleOpenEdit(art)}
                className="min-h-[38px] min-w-[38px] flex items-center justify-center p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
                title="Edit Artikel"
                aria-label="Edit Artikel"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(art.id, art.title.id)}
                className="min-h-[38px] min-w-[38px] flex items-center justify-center p-2 rounded-xl text-red-600 hover:text-red-700 hover:bg-red-50 active:bg-red-100 transition-colors cursor-pointer"
                title="Hapus Artikel"
                aria-label="Hapus Artikel"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-300 shadow-2xl overflow-hidden my-4 sm:my-8">
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-900">
                {editingNews ? 'Edit Artikel Berita' : 'Tulis Berita / Wawasan Baru'}
              </h3>
              <button 
                onClick={() => setModalOpen(false)} 
                className="min-h-[40px] min-w-[40px] flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-200 active:bg-slate-300 transition-colors cursor-pointer"
                aria-label="Tutup Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 max-h-[78vh] overflow-y-auto text-xs">
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
                  <label className="block font-bold text-slate-700 mb-1">Tanggal Publikasi</label>
                  <input
                    type="text"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="misal: 18 September 2024"
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Kategori (ID)</label>
                  <input
                    type="text"
                    required
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    placeholder="misal: Perusahaan / Pengadaan"
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Kategori (EN)</label>
                  <input
                    type="text"
                    value={categoryEn}
                    onChange={(e) => setCategoryEn(e.target.value)}
                    placeholder="e.g. Company / Procurement"
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Judul Artikel (ID)</label>
                  <input
                    type="text"
                    required
                    value={titleId}
                    onChange={(e) => setTitleId(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Judul Artikel (EN)</label>
                  <input
                    type="text"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Ringkasan / Excerpt (ID)</label>
                <textarea
                  rows={2}
                  required
                  value={summaryId}
                  onChange={(e) => setSummaryId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Isi Konten Lengkap (ID)</label>
                <textarea
                  rows={4}
                  value={contentId}
                  onChange={(e) => setContentId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <ImageBrowsePicker
                label="Gambar Thumbnail Berita (Upload / Browse Galeri)"
                value={image}
                onChange={setImage}
                defaultCategory="products"
              />

              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 active:bg-slate-200 font-bold transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold transition-colors cursor-pointer"
                >
                  Simpan Artikel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

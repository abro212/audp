import React, { useState, useRef } from 'react';
import { 
  Upload, 
  FolderOpen, 
  Check, 
  X, 
  Image as ImageIcon, 
  Trash2
} from 'lucide-react';

export interface GalleryAsset {
  category: 'products' | 'clients' | 'legal' | 'branding';
  label: string;
  url: string;
}

export const GALLERY_ASSETS: GalleryAsset[] = [
  // Products
  { category: 'products', label: 'Industrial Supply', url: '/assets/prod_1.jpg' },
  { category: 'products', label: 'Office & General Supply', url: '/assets/prod_2.jpg' },
  { category: 'products', label: 'Electrical & Mechanical', url: '/assets/prod_3.jpg' },
  { category: 'products', label: 'Safety Equipment K3', url: '/assets/prod_4.jpg' },
  { category: 'products', label: 'Cleaning Equipment', url: '/assets/prod_5.jpg' },
  { category: 'products', label: 'Packaging & Consumables', url: '/assets/prod_6.jpg' },
  { category: 'products', label: 'Operational Material', url: '/assets/prod_7.jpg' },
  { category: 'products', label: 'IT Solutions & Hardware', url: '/assets/prod_8.jpg' },
  { category: 'products', label: 'Main Panel MDP / SDP', url: '/assets/prod_panel.jpg' },
  { category: 'products', label: 'HVAC & Layanan AC', url: '/assets/prod_ac.jpg' },
  { category: 'products', label: 'Kategori Pasokan Khusus', url: '/assets/prod_9.jpg' },

  // Clients
  { category: 'clients', label: 'Bank Mandiri', url: '/assets/clients/mandiri.png' },
  { category: 'clients', label: 'Changming Automotive (CAI)', url: '/assets/clients/cai.png' },
  { category: 'clients', label: 'Sunshine Technica (ST)', url: '/assets/clients/st.png' },
  { category: 'clients', label: 'Tebe Indo Sunshine', url: '/assets/clients/tebeindo.png' },
  { category: 'clients', label: 'Bank Rakyat Indonesia (BRI)', url: '/assets/clients/bri.svg' },
  { category: 'clients', label: 'Metal One Steel (MOSSI)', url: '/assets/clients/mossi.png' },

  // Legal
  { category: 'legal', label: 'NPWP Perusahaan', url: '/assets/legal_npwp.jpg' },
  { category: 'legal', label: 'Nomor Induk Berusaha (NIB)', url: '/assets/legal_nib.png' },
  { category: 'legal', label: 'Surat Pengukuhan PKP', url: '/assets/legal_sppkp.jpg' },
  { category: 'legal', label: 'Surat Keterangan Terdaftar (SKT)', url: '/assets/legal_skt.png' },

  // News & Articles
  { category: 'products', label: 'Berita: Fabrikasi Panel MDP', url: '/assets/news_panel.jpg' },
  { category: 'products', label: 'Berita: Tata Udara & AC Industri', url: '/assets/news_hvac.jpg' },
  { category: 'products', label: 'Berita: Kemasan & Stretch Film', url: '/assets/news_packaging.jpg' },
  { category: 'products', label: 'Berita: Standarisasi APD K3', url: '/assets/news_safety.jpg' },
  { category: 'products', label: 'Berita: Jaringan Cat6 & IT Pabrik', url: '/assets/news_it.jpg' },
  { category: 'products', label: 'Berita: Sanitasi & Chemical Pabrik', url: '/assets/news_cleaning.jpg' },
  { category: 'products', label: 'Berita: Konsolidasi Vendor B2B', url: '/assets/news_supply.jpg' },

  // Branding
  { category: 'branding', label: 'Logo AUDP Emblem', url: '/assets/logo_emblem.png' },
  { category: 'branding', label: 'Logo AUDP Lengkap', url: '/assets/logo_full.png' },
  { category: 'branding', label: 'Hero Composite Banner', url: '/assets/hero_composite.png' },
  { category: 'branding', label: 'Hero Banner Full', url: '/assets/hero_banner_full.png' }
];

interface ImageBrowsePickerProps {
  label?: string;
  value: string;
  onChange: (newUrl: string) => void;
  defaultCategory?: 'products' | 'clients' | 'legal' | 'branding';
}

export const ImageBrowsePicker: React.FC<ImageBrowsePickerProps> = ({
  label = 'Foto / Gambar',
  value,
  onChange,
  defaultCategory = 'products'
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);
  const [uploadNotice, setUploadNotice] = useState<string>('');

  // Handle local image file browse & auto-compression
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if image
    if (!file.type.startsWith('image/')) {
      alert('Pilih berkas format gambar (JPG, PNG, WEBP, atau SVG).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // Compress image using Canvas
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
          onChange(compressedDataUrl);
          const sizeKb = Math.round((compressedDataUrl.length * 3) / 4 / 1024);
          setUploadNotice(`Berkas berhasil diunggah (${sizeKb} KB)`);
          setTimeout(() => setUploadNotice(''), 4000);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);

    // Reset input value so same file can be re-selected if needed
    e.target.value = '';
  };

  const filteredAssets = activeCategory === 'all' 
    ? GALLERY_ASSETS 
    : GALLERY_ASSETS.filter(a => a.category === activeCategory);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-slate-700">
          {label}
        </label>
        {uploadNotice && (
          <span className="text-[11px] font-semibold text-emerald-600 animate-fadeIn">
            {uploadNotice}
          </span>
        )}
      </div>

      {/* Main Bar with Preview, Inputs, and Browse Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
        
        {/* Thumbnail Preview */}
        <div className="relative group w-16 h-16 rounded-lg border border-slate-300 bg-white flex items-center justify-center overflow-hidden flex-shrink-0 self-center sm:self-auto">
          {value ? (
            <img 
              src={value} 
              alt="Preview" 
              className="w-full h-full object-contain p-0.5"
              onError={(e) => {
                (e.target as any).src = '/assets/logo_emblem.png';
              }}
            />
          ) : (
            <ImageIcon className="w-6 h-6 text-slate-300" />
          )}
        </div>

        {/* Input & Action Buttons */}
        <div className="flex-1 flex flex-col justify-between gap-2">
          
          {/* Path / URL Input */}
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="URL Gambar atau pilih browse..."
            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-800 font-mono focus:outline-hidden focus:border-amber-500"
          />

          {/* Action Buttons: Browse Device & Browse Gallery */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Hidden native file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            {/* 1. Browse from Device Button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-[11px] font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-amber-400" />
              <span>Browse File (Upload)</span>
            </button>

            {/* 2. Browse from Server Gallery Button */}
            <button
              type="button"
              onClick={() => setGalleryOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-300 transition-colors cursor-pointer"
            >
              <FolderOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Browse Galeri Aset</span>
            </button>

            {/* Clear value button */}
            {value && (
              <button
                type="button"
                onClick={() => onChange('')}
                className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-auto"
                title="Kosongkan Gambar"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}

          </div>

        </div>

      </div>

      {/* ========================================================
          VISUAL ASSET GALLERY BROWSER MODAL
         ======================================================== */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-300 shadow-2xl overflow-hidden my-6">
            
            {/* Gallery Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-amber-600" />
                  <span>Galeri Aset & Media PT. AUDP</span>
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Pilih salah satu gambar dari koleksi aset resmi proyek.
                </p>
              </div>

              <button
                onClick={() => setGalleryOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Gallery Category Filter Tabs */}
            <div className="p-3 border-b border-slate-200 bg-white flex flex-wrap gap-1.5 text-xs">
              {[
                { id: 'all', label: 'Semua Aset' },
                { id: 'products', label: 'Katalog Produk' },
                { id: 'clients', label: 'Logo Klien' },
                { id: 'legal', label: 'Dokumen Legal' },
                { id: 'branding', label: 'Branding / Hero' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Asset Thumbnails Grid */}
            <div className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filteredAssets.map((asset) => {
                const isSelected = value === asset.url;
                return (
                  <div
                    key={asset.url}
                    onClick={() => {
                      onChange(asset.url);
                      setGalleryOpen(false);
                    }}
                    className={`group relative p-2.5 rounded-xl border bg-white cursor-pointer transition-all duration-200 flex flex-col justify-between hover:-translate-y-0.5 hover:shadow-md ${
                      isSelected 
                        ? 'border-amber-500 ring-2 ring-amber-400/50 bg-amber-50/20' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Check badge if selected */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}

                    {/* Thumbnail Image Box */}
                    <div className="w-full h-24 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden mb-2">
                      <img 
                        src={asset.url} 
                        alt={asset.label} 
                        className="max-h-full max-w-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as any).src = '/assets/logo_emblem.png';
                        }}
                      />
                    </div>

                    {/* Label & Path */}
                    <div>
                      <div className="text-[11px] font-bold text-slate-900 line-clamp-1">
                        {asset.label}
                      </div>
                      <div className="text-[9px] font-mono text-slate-400 truncate mt-0.5">
                        {asset.url}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
              <span className="text-slate-500 text-[11px]">
                Menampilkan {filteredAssets.length} aset
              </span>
              <button
                type="button"
                onClick={() => setGalleryOpen(false)}
                className="px-4 py-1.5 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-200"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

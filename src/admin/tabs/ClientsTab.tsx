import React, { useState } from 'react';
import { ClientItem } from '../../types';
import { 
  getStoredClients, 
  saveClient, 
  deleteClient 
} from '../../services/adminDataService';
import { ImageBrowsePicker } from '../components/ImageBrowsePicker';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  X 
} from 'lucide-react';

export const ClientsTab: React.FC = () => {
  const [clients, setClients] = useState<ClientItem[]>(() => getStoredClients());
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<ClientItem | null>(null);

  // Form State
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [sectorId, setSectorId] = useState('');
  const [sectorEn, setSectorEn] = useState('');
  const [logoUrl, setLogoUrl] = useState('/assets/clients/cai.png');

  const refreshList = () => {
    setClients(getStoredClients());
  };

  const handleOpenAdd = () => {
    setEditingClient(null);
    setId(`client-${Date.now()}`);
    setName('');
    setSectorId('Industri Manufaktur');
    setSectorEn('Manufacturing Industry');
    setLogoUrl('/assets/clients/cai.png');
    setModalOpen(true);
  };

  const handleOpenEdit = (c: ClientItem) => {
    setEditingClient(c);
    setId(c.id);
    setName(c.name);
    setSectorId(c.sector.id);
    setSectorEn(c.sector.en);
    setLogoUrl(c.logoUrl);
    setModalOpen(true);
  };

  const handleDelete = async (clientId: string, clientName: string) => {
    if (!window.confirm(`Hapus klien "${clientName}" dari portofolio?`)) return;
    await deleteClient(clientId);
    refreshList();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const payload: ClientItem = {
      id: id.trim() || `client-${Date.now()}`,
      name: name.trim(),
      sector: {
        id: sectorId.trim() || 'Industri Manufaktur',
        en: sectorEn.trim() || sectorId.trim()
      },
      logoUrl: logoUrl.trim() || '/assets/clients/cai.png'
    };

    await saveClient(payload);
    refreshList();
    setModalOpen(false);
  };

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.sector.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Klien & Portofolio Mitra Rekanan
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Total {clients.length} perusahaan dan institusi mempercayakan pengadaan kepada AUDP.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari klien..."
              className="pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-amber-500 w-44 sm:w-56"
            />
          </div>

          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Tambah Klien</span>
          </button>
        </div>
      </div>

      {/* Grid Client Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredClients.map((client) => (
          <div key={client.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              {/* Logo Box */}
              <div className="w-full h-20 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 mb-3">
                <img 
                  src={client.logoUrl} 
                  alt={client.name} 
                  className="max-h-12 max-w-[80%] object-contain filter contrast-125"
                  onError={(e) => { (e.target as any).src = '/assets/logo_emblem.png'; }}
                />
              </div>

              <div className="text-[11px] font-bold text-slate-900 line-clamp-1">
                {client.name}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {client.sector.id}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono text-[10px] text-slate-400">ID: {client.id}</span>
              <div className="inline-flex items-center gap-1">
                <button
                  onClick={() => handleOpenEdit(client)}
                  className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  title="Edit Klien"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(client.id, client.name)}
                  className="p-1.5 rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50"
                  title="Hapus Klien"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
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
                {editingClient ? 'Edit Data Klien' : 'Tambah Klien Portofolio'}
              </h3>
              <button onClick={() => setModalOpen(false)} className="p-1.5 rounded-lg text-slate-500 hover:text-slate-700">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
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
                <label className="block font-bold text-slate-700 mb-1">Nama Perusahaan Klien</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="misal: PT. CHANGMING AUTOMOTIVE INDONESIA"
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Sektor / Industri (ID)</label>
                  <input
                    type="text"
                    required
                    value={sectorId}
                    onChange={(e) => setSectorId(e.target.value)}
                    placeholder="misal: Otomotif & Manufaktur"
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Sektor / Industri (EN)</label>
                  <input
                    type="text"
                    value={sectorEn}
                    onChange={(e) => setSectorEn(e.target.value)}
                    placeholder="e.g. Automotive & Manufacturing"
                    className="w-full p-2.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <ImageBrowsePicker
                label="Logo Klien (Upload / Browse Galeri)"
                value={logoUrl}
                onChange={setLogoUrl}
                defaultCategory="clients"
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
                  Simpan Klien
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

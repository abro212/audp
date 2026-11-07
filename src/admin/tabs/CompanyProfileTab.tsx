import React, { useState } from 'react';
import { 
  getStoredCompanyInfo, 
  saveCompanyInfo, 
  getStoredAboutContent, 
  saveAboutContent 
} from '../../services/adminDataService';
import { ImageBrowsePicker } from '../components/ImageBrowsePicker';
import { 
  CheckCircle,
  Plus,
  Trash2,
  RotateCcw
} from 'lucide-react';

export const CompanyProfileTab: React.FC = () => {
  const [info, setInfo] = useState(() => getStoredCompanyInfo());
  const [about, setAbout] = useState(() => getStoredAboutContent());
  const [savedMessage, setSavedMessage] = useState(false);

  // Form states
  const [logoUrl, setLogoUrl] = useState(info.logoUrl || '/assets/logo_emblem.png');
  const [name, setName] = useState(info.name);
  const [shortName, setShortName] = useState(info.shortName);
  const [tagline, setTagline] = useState(info.tagline);
  const [headlineHero, setHeadlineHero] = useState(info.headlineHero);
  const [established, setEstablished] = useState(info.established);
  const [director, setDirector] = useState(info.director);
  const [phone, setPhone] = useState(info.phone);
  const [phoneRaw, setPhoneRaw] = useState(info.phoneRaw);
  const [email, setEmail] = useState(info.email);
  const [address, setAddress] = useState(info.address);
  const [whatsappUrl, setWhatsappUrl] = useState(info.whatsappUrl);
  const [motto, setMotto] = useState(info.motto);
  const [quote, setQuote] = useState(info.quote);

  // Vision & Mission
  const [visionId, setVisionId] = useState(about.vision.id);
  const [visionEn, setVisionEn] = useState(about.vision.en);
  const [missionIdList, setMissionIdList] = useState<string[]>([...about.mission.id]);
  const [missionEnList, setMissionEnList] = useState<string[]>([...about.mission.en]);

  const handleAddMission = () => {
    setMissionIdList([...missionIdList, 'Poin misi baru']);
    setMissionEnList([...missionEnList, 'New mission point']);
  };

  const handleRemoveMission = (index: number) => {
    setMissionIdList(missionIdList.filter((_, i) => i !== index));
    setMissionEnList(missionEnList.filter((_, i) => i !== index));
  };

  const handleUpdateMissionId = (val: string, index: number) => {
    const next = [...missionIdList];
    next[index] = val;
    setMissionIdList(next);
  };

  const handleUpdateMissionEn = (val: string, index: number) => {
    const next = [...missionEnList];
    next[index] = val;
    setMissionEnList(next);
  };

  const handleSaveAll = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedInfo = {
      name: name.trim(),
      shortName: shortName.trim(),
      tagline: tagline.trim(),
      headlineHero: headlineHero.trim(),
      established: Number(established) || 2023,
      director: director.trim(),
      phone: phone.trim(),
      phoneRaw: phoneRaw.trim(),
      email: email.trim(),
      address: address.trim(),
      whatsappUrl: whatsappUrl.trim(),
      motto: motto.trim(),
      quote: quote.trim(),
      logoUrl: logoUrl.trim() || '/assets/logo_emblem.png'
    };

    const updatedAbout = {
      ...about,
      vision: {
        id: visionId.trim(),
        en: visionEn.trim()
      },
      mission: {
        id: missionIdList.map(s => s.trim()).filter(Boolean),
        en: missionEnList.map(s => s.trim()).filter(Boolean)
      }
    };

    await saveCompanyInfo(updatedInfo);
    await saveAboutContent(updatedAbout);

    setInfo(getStoredCompanyInfo());
    setAbout(getStoredAboutContent());

    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Profil Perusahaan & Informasi Kontak
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Konfigurasi identitas resmi, alamat, kontak sales/engineering, serta visi dan misi.
          </p>
        </div>

        {savedMessage && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Perubahan Tersimpan!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSaveAll} className="space-y-6">
        
        {/* Logo Resmi Perusahaan */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Logo Resmi Perusahaan
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Logo ini ditampilkan pada Header Navbar, Footer, Modal RFQ Penawaran, Halaman Login, dan Sidebar Admin.
              </p>
            </div>
            {logoUrl !== '/assets/logo_emblem.png' && (
              <button
                type="button"
                onClick={() => setLogoUrl('/assets/logo_emblem.png')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 cursor-pointer transition-colors w-fit"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset ke Logo Standar</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Live Dual-Preview (Light & Dark) */}
            <div className="lg:col-span-4 space-y-2">
              <label className="block text-xs font-bold text-slate-700">Preview Logo Aktif</label>
              <div className="grid grid-cols-2 gap-2.5">
                {/* Light Box */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex flex-col items-center justify-center min-h-[110px] text-center shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Tema Terang</span>
                  <div className="h-12 w-full flex items-center justify-center">
                    <img 
                      src={logoUrl || '/assets/logo_emblem.png'} 
                      alt="Logo Light Preview" 
                      className="max-h-12 max-w-full object-contain"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/assets/logo_emblem.png'; }}
                    />
                  </div>
                </div>

                {/* Dark Box */}
                <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950 flex flex-col items-center justify-center min-h-[110px] text-center shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Tema Gelap</span>
                  <div className="h-12 w-full flex items-center justify-center">
                    <img 
                      src={logoUrl || '/assets/logo_emblem.png'} 
                      alt="Logo Dark Preview" 
                      className="max-h-12 max-w-full object-contain"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/assets/logo_emblem.png'; }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Pastikan logo terlihat jelas dan proporsional baik pada latar belakang putih maupun gelap.
              </p>
            </div>

            {/* ImageBrowsePicker */}
            <div className="lg:col-span-8">
              <ImageBrowsePicker
                label="Pilih / Upload Logo Perusahaan (PNG Transparan / SVG Disarankan)"
                value={logoUrl}
                onChange={(newUrl) => setLogoUrl(newUrl)}
                defaultCategory="branding"
              />
              <div className="mt-2 text-[11px] text-slate-500 flex items-start gap-1.5">
                <span className="text-amber-500 font-bold">•</span>
                <span>Klik <strong>Browse / Upload Gambar</strong> untuk memilih file logo dari komputer Anda atau gunakan pilihan logo aset bawaan AUDP.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Identitas Umum */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Identitas Perusahaan
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Nama Resmi Perusahaan</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Singkatan / Brand</label>
              <input
                type="text"
                required
                value={shortName}
                onChange={(e) => setShortName(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Tagline</label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Direktur / Pimpinan</label>
              <input
                type="text"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Tahun Berdiri</label>
              <input
                type="number"
                value={established}
                onChange={(e) => setEstablished(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Headline Utama di Halaman Hero</label>
            <input
              type="text"
              value={headlineHero}
              onChange={(e) => setHeadlineHero(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Motto Perusahaan</label>
              <input
                type="text"
                value={motto}
                onChange={(e) => setMotto(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Slogan Pendukung</label>
              <input
                type="text"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
          </div>
        </div>

        {/* Informasi Kontak */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Kontak Resmi & Alamat Kantor
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Telepon Tampilan</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+62 813-1821-2184"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Telepon Raw (Angka Saja)</label>
              <input
                type="text"
                value={phoneRaw}
                onChange={(e) => setPhoneRaw(e.target.value)}
                placeholder="081318212184"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Resmi</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="iqbal@audp.co.id"
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Alamat Kantor Lengkap</label>
            <textarea
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">URL WhatsApp Quick Response</label>
            <input
              type="text"
              value={whatsappUrl}
              onChange={(e) => setWhatsappUrl(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs font-mono"
            />
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Visi & Misi Perusahaan
            </h3>
            <button
              type="button"
              onClick={handleAddMission}
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tambah Poin Misi</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Visi (Bahasa Indonesia)</label>
              <textarea
                rows={2}
                value={visionId}
                onChange={(e) => setVisionId(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Visi (English)</label>
              <textarea
                rows={2}
                value={visionEn}
                onChange={(e) => setVisionEn(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>
          </div>

          {/* Mission list items */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-bold text-slate-700">Daftar Poin Misi</label>
            {missionIdList.map((mId, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-3 sm:p-0 rounded-xl bg-slate-50 sm:bg-transparent border sm:border-0 border-slate-200">
                <div className="flex items-center gap-2 sm:hidden">
                  <span className="font-mono text-xs font-bold text-slate-500">Misi #{index + 1}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveMission(index)}
                    className="min-h-[36px] min-w-[36px] flex items-center justify-center p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-lg ml-auto cursor-pointer"
                    aria-label="Hapus Poin Misi"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <span className="hidden sm:inline-block font-mono text-xs font-bold text-slate-400 w-6 text-center">{index + 1}.</span>
                <input
                  type="text"
                  value={mId}
                  onChange={(e) => handleUpdateMissionId(e.target.value, index)}
                  placeholder="Misi (ID)"
                  className="flex-1 p-2.5 rounded-xl border border-slate-200 text-xs bg-white"
                />
                <input
                  type="text"
                  value={missionEnList[index] || ''}
                  onChange={(e) => handleUpdateMissionEn(e.target.value, index)}
                  placeholder="Mission (EN)"
                  className="flex-1 p-2.5 rounded-xl border border-slate-200 text-xs bg-white"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveMission(index)}
                  className="hidden sm:flex min-h-[38px] min-w-[38px] items-center justify-center p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg cursor-pointer"
                  title="Hapus Poin Misi"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold text-xs shadow-md transition-colors cursor-pointer text-center"
          >
            Simpan Perubahan Profil Perusahaan
          </button>
        </div>

      </form>

    </div>
  );
};

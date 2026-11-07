import React, { useState } from 'react';
import { 
  getStoredCompanyInfo, 
  saveCompanyInfo, 
  getStoredAboutContent, 
  saveAboutContent 
} from '../../services/adminDataService';
import { 
  CheckCircle,
  Plus,
  Trash2
} from 'lucide-react';

export const CompanyProfileTab: React.FC = () => {
  const [info, setInfo] = useState(() => getStoredCompanyInfo());
  const [about, setAbout] = useState(() => getStoredAboutContent());
  const [savedMessage, setSavedMessage] = useState(false);

  // Form states
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
      quote: quote.trim()
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
              <div key={index} className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-slate-400 w-6 text-center">{index + 1}.</span>
                <input
                  type="text"
                  value={mId}
                  onChange={(e) => handleUpdateMissionId(e.target.value, index)}
                  placeholder="Misi (ID)"
                  className="flex-1 p-2 rounded-xl border border-slate-200 text-xs"
                />
                <input
                  type="text"
                  value={missionEnList[index] || ''}
                  onChange={(e) => handleUpdateMissionEn(e.target.value, index)}
                  placeholder="Mission (EN)"
                  className="flex-1 p-2 rounded-xl border border-slate-200 text-xs"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveMission(index)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg"
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
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
          >
            Simpan Perubahan Profil Perusahaan
          </button>
        </div>

      </form>

    </div>
  );
};

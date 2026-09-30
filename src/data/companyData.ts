import { ProductItem, ITSolutionItem, CoreValueItem, ValuePropItem, LegalDocument, ClientItem, NewsItem } from '../types';

export const companyInfo = {
  name: "PT. ANEKA USAHA DUA PUTRA",
  shortName: "AUDP",
  tagline: "Your Trusted Partner",
  headlineHero: "General Trading Supplier & Procurement Solution",
  established: 2023,
  director: "Iqbal Rizky Nugroho",
  phone: "+62 813-1821-2184",
  phoneRaw: "081318212184",
  email: "iqbal@audp.co.id",
  emailAlt: "iqbal@audp.co.id",
  address: "Vila Mutiara Cikarang Blok E2 No 1 RT.21 Ciantra, Cikarang Selatan, Kab. Bekasi, Jawa Barat",
  whatsappUrl: "https://wa.me/6281318212184?text=Halo%20PT.%20Aneka%20Usaha%20Dua%20Putra,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20pengadaan%20perusahaan.",
  comproPdfUrl: "/Company Profile PT AUDP.pdf",
  motto: "Fast Service. Fast Response. Reliable Solution.",
  quote: "Supporting Your Business Every Step of the Way"
};

export const aboutContent = {
  story: {
    id: "Didirikan pada tahun 2023 di Cikarang, PT. Aneka Usaha Dua Putra melayani kebutuhan General Trading Supplier dan pengadaan operasional perusahaan secara cepat, tepat, dan fleksibel.",
    en: "Established in 2023 in Cikarang, PT. Aneka Usaha Dua Putra provides general trading and operational procurement services with speed, precision, and flexibility."
  },
  approach: {
    id: "Kami berperan sebagai mitra solusi pengadaan. Kami memastikan setiap barang yang dipasok sesuai dengan spesifikasi teknis, standar mutu, dan jadwal operasional pelanggan.",
    en: "We serve as a procurement solution partner, ensuring every supplied item matches technical specifications, quality standards, and customer delivery schedules."
  },
  commitmentNote: {
    id: "Kepercayaan pelanggan menjadi landasan kami untuk terus menjaga mutu pelayanan dan keandalan kerja sama jangka panjang.",
    en: "Customer trust is our benchmark to continually uphold service quality and reliable long-term business partnerships."
  },
  vision: {
    id: "Menjadi mitra general trading dan pengadaan terpercaya pilihan utama industri di Indonesia.",
    en: "To be the primary trusted procurement and general trading partner for enterprises in Indonesia."
  },
  mission: {
    id: [
      "Memberikan respon cepat dan penawaran transparan.",
      "Menyediakan barang sesuai spesifikasi dan standar mutu.",
      "Menjamin ketepatan jadwal pengiriman operasional.",
      "Membangun kerja sama bisnis berlandaskan integritas."
    ],
    en: [
      "Deliver fast responses and transparent quotations.",
      "Supply products strictly matching technical specifications.",
      "Ensure reliable on-time delivery for operational continuity.",
      "Build enduring business partnerships grounded in integrity."
    ]
  }
};

export const coreValuesList: CoreValueItem[] = [
  {
    letter: "F",
    title: {
      id: "FAST RESPONSE",
      en: "FAST RESPONSE"
    },
    description: {
      id: "Merespons setiap inquiry dan kebutuhan pengadaan dengan cepat dan tepat.",
      en: "Responding swiftly and precisely to every procurement inquiry."
    },
    iconName: "Zap"
  },
  {
    letter: "A",
    title: {
      id: "ACCOUNTABILITY",
      en: "ACCOUNTABILITY"
    },
    description: {
      id: "Bertanggung jawab atas spesifikasi barang dan komitmen jadwal pengiriman.",
      en: "Taking full ownership of product specifications and delivery commitments."
    },
    iconName: "ShieldCheck"
  },
  {
    letter: "S",
    title: {
      id: "SERVICE EXCELLENCE",
      en: "SERVICE EXCELLENCE"
    },
    description: {
      id: "Memberikan pelayanan profesional yang rapi sesuai kebutuhan pelanggan.",
      en: "Delivering professional, tailored service aligned with customer needs."
    },
    iconName: "Award"
  },
  {
    letter: "T",
    title: {
      id: "TRUST",
      en: "TRUST"
    },
    description: {
      id: "Menjaga integritas, transparansi harga, dan keandalan kerja sama bisnis.",
      en: "Upholding integrity, transparent pricing, and dependable business alliances."
    },
    iconName: "Handshake"
  }
];

export const valuePropsList: ValuePropItem[] = [
  {
    number: "01",
    title: {
      id: "Pelayanan Cepat",
      en: "Fast Service"
    },
    description: {
      id: "Pemrosesan pesanan efisien untuk menjaga kelancaran operasional perusahaan.",
      en: "Efficient order processing to keep company operations running smoothly."
    },
    iconName: "Clock"
  },
  {
    number: "02",
    title: {
      id: "Respon Cepat",
      en: "Fast Response"
    },
    description: {
      id: "Konfirmasi inquiry dan penawaran harga resmi dalam waktu singkat.",
      en: "Prompt inquiry confirmation and official quotation delivery."
    },
    iconName: "MessageSquare"
  },
  {
    number: "03",
    title: {
      id: "One Stop Solution",
      en: "One Stop Solution"
    },
    description: {
      id: "Pemenuhan berbagai kategori kebutuhan melalui satu rekanan terpercaya.",
      en: "Fulfilling diverse procurement categories through one dependable partner."
    },
    iconName: "Boxes"
  }
];

export const productsList: ProductItem[] = [
  {
    id: "industrial-supply",
    number: "01",
    title: {
      id: "Industrial Supply",
      en: "Industrial Supply"
    },
    shortDesc: {
      id: "Perkakas pabrik, komponen mesin, dan perlengkapan teknik industri.",
      en: "Industrial tools, machinery components, and technical supplies."
    },
    fullDesc: {
      id: "Penyediaan perkakas teknik, suku cadang mesin, dan perlengkapan fabrikasi pabrik untuk mendukung lini manufaktur.",
      en: "Supplying technical tools, machine spare parts, and fabrication supplies to sustain manufacturing plant operations."
    },
    items: ["Factory Hardware", "Industrial Tools", "Machinery Accessories", "Industrial Consumables"],
    image: "/assets/prod_1.jpg",
    iconName: "Settings"
  },
  {
    id: "office-general-supply",
    number: "02",
    title: {
      id: "Office & General Supply",
      en: "Office & General Supply"
    },
    shortDesc: {
      id: "Alat tulis kantor (ATK), kertas, dan kebutuhan operasional kerja.",
      en: "Office stationery, papers, and corporate supplies."
    },
    fullDesc: {
      id: "Pengadaan rutin kebutuhan ATK, kertas, ordner, dan perlengkapan kerja kantor untuk mendukung kenyamanan kerja karyawan.",
      en: "Routine procurement of stationery, paper supplies, filing systems, and general office operational supplies."
    },
    items: ["ATK & Stationery", "Paper Supplies", "Office Furniture", "Office Utilities"],
    image: "/assets/prod_2.jpg",
    iconName: "Briefcase"
  },
  {
    id: "electrical-mechanical-supply",
    number: "03",
    title: {
      id: "Electrical & Mechanical",
      en: "Electrical & Mechanical"
    },
    shortDesc: {
      id: "Kabel industri, motor listrik, panel, pipa, dan fitting mekanikal.",
      en: "Industrial cables, electric motors, panels, and mechanical fittings."
    },
    fullDesc: {
      id: "Pasokan kabel daya industri, komponen panel listrik, motor dinamo, valve, bearing, dan fitting mekanikal berdaya tahan tinggi.",
      en: "Supplying industrial power cables, electrical panel gear, electric motors, valves, bearings, and durable mechanical fittings."
    },
    items: ["Industrial Cables", "Electric Panels & Breakers", "Electric Motors", "Piping & Valves"],
    image: "/assets/prod_3.jpg",
    iconName: "Zap"
  },
  {
    id: "safety-equipment",
    number: "04",
    title: {
      id: "Safety Equipment (K3)",
      en: "Safety Equipment (K3)"
    },
    shortDesc: {
      id: "Alat pelindung diri (APD) dan perlengkapan K3 keselamatan kerja.",
      en: "Personal protective equipment (PPE) and occupational safety gear."
    },
    fullDesc: {
      id: "Perlengkapan K3 standar keselamatan kerja mencakup helm proyek, sepatu safety, kacamata, sarung tangan khusus, dan rompi reflektif.",
      en: "Compliant personal protective equipment including safety helmets, safety boots, goggles, specialized gloves, and high-visibility vests."
    },
    items: ["Safety Helmets & Glasses", "Safety Shoes & Boots", "Protective Gloves", "Ear & Respiratory Protection"],
    image: "/assets/prod_4.jpg",
    iconName: "Shield"
  },
  {
    id: "cleaning-equipment",
    number: "05",
    title: {
      id: "Cleaning Equipment",
      en: "Cleaning Equipment"
    },
    shortDesc: {
      id: "Peralatan kebersihan, chemical pembersih, dan sanitasi komersial.",
      en: "Cleaning tools, commercial chemicals, and industrial sanitation."
    },
    fullDesc: {
      id: "Peralatan sanitasi, chemical pembersih lantai, tempat sampah industri berkapasitas besar, dan perlengkapan janitorial fasilitas gedung.",
      en: "Sanitation tools, industrial floor cleaners, commercial waste bins, and janitorial equipment for corporate facilities."
    },
    items: ["Industrial Cleaners", "Chemical Solutions", "Janitorial Tools", "Disposal Bins"],
    image: "/assets/prod_5.jpg",
    iconName: "Sparkles"
  },
  {
    id: "packaging-consumables",
    number: "06",
    title: {
      id: "Packaging & Consumables",
      en: "Packaging & Consumables"
    },
    shortDesc: {
      id: "Stretch film, lakban industri, kardus box, dan perlengkapan packing.",
      en: "Stretch film, packaging tapes, carton boxes, and packing consumables."
    },
    fullDesc: {
      id: "Material kemasan pelindung barang logistik seperti stretch film, lakban OPP, karton box, strapping band, dan bubble wrap.",
      en: "Protective packaging materials for warehouse logistics including stretch film, OPP tape, carton boxes, and strapping bands."
    },
    items: ["Stretch Film", "OPP Packaging Tapes", "Bubble Wrap & Cushioning", "Strapping Bands"],
    image: "/assets/prod_6.jpg",
    iconName: "Package"
  },
  {
    id: "material-perlengkapan-operasional",
    number: "07",
    title: {
      id: "Material Operasional",
      en: "Operational Material"
    },
    shortDesc: {
      id: "Perlengkapan teknisi, pelumas, terpal, dan material pendukung kerja.",
      en: "Maintenance tools, industrial lubricants, tarpaulins, and utility goods."
    },
    fullDesc: {
      id: "Material pendukung operasional lapangan, pelumas industri, terpal pelindung, perkakas workshop, dan barang penunjang maintenance harian.",
      en: "Operational field materials, industrial lubricants, protective tarpaulins, workshop hand tools, and routine maintenance supplies."
    },
    items: ["Maintenance Consumables", "Lubricants & Grease", "Utility Tarps & Ropes", "Workshop Hardware"],
    image: "/assets/prod_7.jpg",
    iconName: "Wrench"
  },
  {
    id: "it-solutions-equipment",
    number: "08",
    title: {
      id: "IT Solutions & Equipment",
      en: "IT Solutions & Equipment"
    },
    shortDesc: {
      id: "PC desktop, laptop bisnis, switch jaringan, server, dan lisensi resmi.",
      en: "Desktop PCs, business laptops, network switches, servers, and licenses."
    },
    fullDesc: {
      id: "Pengadaan perangkat komputasi bisnis, infrastruktur jaringan, hardware server, dan lisensi software resmi sesuai spesifikasi perusahaan.",
      en: "Procurement of business workstations, networking hardware, servers, and legitimate enterprise software licensing."
    },
    items: ["Business Workstations & Laptops", "Network Switches & Access Points", "Server & Storage NAS", "Productivity & Security Licenses"],
    image: "/assets/prod_8.jpg",
    iconName: "Cpu",
    badge: "NEW",
    isFeatured: true
  }
];

export const itSolutionsList: ITSolutionItem[] = [
  {
    id: "it-hardware",
    number: "01",
    title: {
      id: "IT Hardware",
      en: "IT Hardware"
    },
    subtitle: {
      id: "Komputer & Perangkat Kerja",
      en: "Workstations & Office Hardware"
    },
    description: {
      id: "Pengadaan PC desktop, laptop bisnis, monitor, dan printer scanner multi-fungsi untuk operasional kantor.",
      en: "Procurement of desktop PCs, commercial laptops, monitors, and multi-function printers for office operations."
    },
    equipmentList: ["Desktop PC & All-in-One", "Corporate Laptops", "High-Resolution Monitors", "Multifunction Printers & Scanners", "Computer Accessories"],
    iconName: "Monitor"
  },
  {
    id: "network-connectivity",
    number: "02",
    title: {
      id: "Network & Connectivity",
      en: "Network & Connectivity"
    },
    subtitle: {
      id: "Perangkat Jaringan Kantor",
      en: "Networking Infrastructure"
    },
    description: {
      id: "Pasokan switch jaringan, router komersial, access point Wi-Fi, rak server, dan kabel Cat6 terstruktur.",
      en: "Supply of network switches, commercial routers, Wi-Fi access points, server racks, and structured Cat6 cabling."
    },
    equipmentList: ["Managed & Unmanaged Switches", "Enterprise Routers", "Wireless Access Points (AP)", "Server Rack Cabinets", "Structured Cabling Cat6/Cat6A"],
    iconName: "Network"
  },
  {
    id: "it-security",
    number: "03",
    title: {
      id: "IT Security",
      en: "IT Security"
    },
    subtitle: {
      id: "Keamanan Fisik & Fasilitas",
      en: "Physical Security & Access"
    },
    description: {
      id: "Pengadaan sistem IP CCTV industri, NVR storage, mesin absensi biometric, dan access door control.",
      en: "Procurement of industrial IP CCTV systems, NVR storage, biometric attendance terminals, and door access controls."
    },
    equipmentList: ["Hardware Security Appliances", "Industrial IP CCTV Cameras", "Biometric Access Control", "NVR & Surveillance Storage", "Endpoint Protection Hardware"],
    iconName: "ShieldAlert"
  },
  {
    id: "server-storage",
    number: "04",
    title: {
      id: "Server & Storage",
      en: "Server & Storage"
    },
    subtitle: {
      id: "Server & Penyimpanan Data",
      en: "Enterprise Server & Storage"
    },
    description: {
      id: "Pengadaan server tower/rackmount, Network Attached Storage (NAS), dan unit UPS penyedia daya cadangan.",
      en: "Procurement of rackmount/tower servers, Network Attached Storage (NAS), and backup UPS power units."
    },
    equipmentList: ["Tower & Rackmount Servers", "Enterprise NAS Enclosures", "Hot-swappable Enterprise HDDs/SSDs", "Backup Storage Systems", "UPS Power Protection Units"],
    iconName: "Server"
  },
  {
    id: "software-license",
    number: "05",
    title: {
      id: "Software & License",
      en: "Software & License"
    },
    subtitle: {
      id: "Lisensi Software Resmi",
      en: "Genuine Software Licensing"
    },
    description: {
      id: "Pengadaan lisensi sistem operasi bisnis, paket aplikasi kantor, dan perlindungan antivirus resmi.",
      en: "Procurement of genuine commercial operating systems, productivity software suites, and business antivirus licenses."
    },
    equipmentList: ["Business Operating Systems", "Productivity & Office Suites", "Commercial Antivirus & EDR", "Database & Server Licensing"],
    iconName: "FileCode"
  },
  {
    id: "it-office-equipment",
    number: "06",
    title: {
      id: "IT Office Equipment",
      en: "IT Office Equipment"
    },
    subtitle: {
      id: "Perlengkapan Ruang Rapat",
      en: "Meeting Room Tech Gear"
    },
    description: {
      id: "Penyediaan kamera video conference, speakerphone, proyektor bisnis, dan layar display rapat.",
      en: "Supplying video conference soundbars, business projectors, conference displays, and wireless presentation equipment."
    },
    equipmentList: ["Video Conference Cameras & Soundbars", "Corporate Projectors & Screens", "Online & Offline UPS Units", "Wireless Presentation Clickers"],
    iconName: "Tv"
  },
  {
    id: "it-procurement",
    number: "07",
    title: {
      id: "IT Procurement Sourcing",
      en: "IT Procurement Sourcing"
    },
    subtitle: {
      id: "Pencocokan BOQ & Spesifikasi",
      en: "BOQ & Spec Matching"
    },
    description: {
      id: "Bantuan sourcing perangkat IT sesuai Bill of Quantity (BOQ), anggaran, dan tenggat waktu operasional perusahaan.",
      en: "Assisting corporate teams in sourcing hardware matching their Bill of Quantities (BOQ), budgets, and delivery schedules."
    },
    equipmentList: ["Bespoke Specification Matching", "Budget-aligned Sourcing", "Principal Brand Comparison", "Multi-brand Consolidations"],
    iconName: "FileCheck"
  },
  {
    id: "custom-it-solution",
    number: "08",
    title: {
      id: "Custom IT Solution",
      en: "Custom IT Solution"
    },
    subtitle: {
      id: "Perangkat Spesifikasi Khusus",
      en: "Custom Hardware Sourcing"
    },
    description: {
      id: "Pencarian dan penyediaan perangkat IT dengan spesifikasi khusus dari distributor resmi terpercaya.",
      en: "Sourcing specialized IT equipment and custom hardware requirements through verified authorized distributors."
    },
    equipmentList: ["Custom Built Workstations", "Legacy Hardware Replacement", "Specialized Industrial Tablets", "Turnkey Sourcing Assistance"],
    iconName: "Layers"
  }
];

export const legalDocsList: LegalDocument[] = [
  {
    id: "npwp",
    title: {
      id: "NPWP Perusahaan",
      en: "Corporate Tax ID (NPWP)"
    },
    docNumber: "99.500.604.6-413.000",
    desc: {
      id: "Nomor Pokok Wajib Pajak Badan resmi terdaftar pada Direktorat Jenderal Pajak Republik Indonesia.",
      en: "Official Corporate Taxpayer Identification Number registered with the Directorate General of Taxes of Indonesia."
    },
    previewImage: "/assets/legal_npwp.jpg",
    fullImage: "/assets/legal_npwp.jpg",
    category: "Perpajakan"
  },
  {
    id: "skt",
    title: {
      id: "Surat Keterangan Terdaftar",
      en: "Certificate of Registration (SKT)"
    },
    docNumber: "KPP Pratama Terdaftar",
    desc: {
      id: "Surat Keterangan Terdaftar resmi mengesahkan status perpajakan entitas perseroan.",
      en: "Official Tax Registration Certificate confirming compliant company tax status."
    },
    previewImage: "/assets/legal_skt.png",
    fullImage: "/assets/legal_skt.png",
    category: "Registrasi Usaha"
  },
  {
    id: "sppkp",
    title: {
      id: "Surat Pengukuhan PKP",
      en: "Taxable Entrepreneur Confirmation (SPPKP)"
    },
    docNumber: "Pengukuhan PKP Resmi",
    desc: {
      id: "Surat Pengukuhan Pengusaha Kena Pajak resmi untuk penerbitan e-Faktur Pajak standar B2B.",
      en: "Official confirmation as a Taxable Enterprise (PKP) eligible to issue standard Indonesian VAT invoices."
    },
    previewImage: "/assets/legal_sppkp.jpg",
    fullImage: "/assets/legal_sppkp.jpg",
    category: "Faktur Pajak B2B"
  },
  {
    id: "nib",
    title: {
      id: "Nomor Induk Berusaha (NIB)",
      en: "Business Identification Number (NIB)"
    },
    docNumber: "Kementerian Investasi / BKPM",
    desc: {
      id: "Nomor Induk Berusaha berbasis OSS RBA sebagai izin operasional dan legalitas usaha perdagangan.",
      en: "Official Business Identification Number issued via Indonesian OSS System as prime commercial license."
    },
    previewImage: "/assets/legal_nib.png",
    fullImage: "/assets/legal_nib.png",
    category: "Izin Usaha Berusaha"
  }
];

export const clientsList: ClientItem[] = [
  {
    id: "changming",
    name: "PT. CHANGMING AUTOMOTIVE INDONESIA",
    sector: {
      id: "Otomotif & Manufaktur",
      en: "Automotive & Manufacturing"
    },
    logoUrl: "/assets/clients/cai.png"
  },
  {
    id: "mandiri",
    name: "PT. BANK MANDIRI (PERSERO) TBK",
    sector: {
      id: "Perbankan & Keuangan",
      en: "Banking & Financial Services"
    },
    logoUrl: "/assets/clients/mandiri.png"
  },
  {
    id: "sunshine",
    name: "PT. SUNSHINE TECHNICA INDONESIA",
    sector: {
      id: "Komponen Industri Presisi",
      en: "Precision Industrial Components"
    },
    logoUrl: "/assets/clients/st.png"
  },
  {
    id: "tebe",
    name: "PT. TEBE INDO SUNSHINE INDONESIA",
    sector: {
      id: "Industri Manufaktur",
      en: "Manufacturing Industry"
    },
    logoUrl: "/assets/clients/tebeindo.png"
  },
  {
    id: "bri",
    name: "PT. BANK RAKYAT INDONESIA (PERSERO) TBK",
    sector: {
      id: "Perbankan BUMN",
      en: "State-Owned Commercial Banking"
    },
    logoUrl: "/assets/clients/bri.svg"
  }
];

export const whyChooseUsList = [
  {
    title: { id: "Fast Response", en: "Fast Response" },
    desc: { id: "Merespons setiap inquiry dan penawaran harga dengan cepat.", en: "Prompt responses to inquiries and requests for quotation." },
    iconName: "Zap"
  },
  {
    title: { id: "Flexible Procurement", en: "Flexible Procurement" },
    desc: { id: "Fleksibel memenuhi spesifikasi teknis dan volume kebutuhan Anda.", en: "Adaptive in matching customized technical specifications and order volumes." },
    iconName: "Sliders"
  },
  {
    title: { id: "Multiple Solutions", en: "Multiple Solutions" },
    desc: { id: "Menyediakan beragam kategori produk melalui satu pintu rekanan.", en: "Fulfilling multiple product categories through a single trusted partner." },
    iconName: "Grid"
  },
  {
    title: { id: "Customer Oriented", en: "Customer Oriented" },
    desc: { id: "Memastikan pemahaman detail spesifikasi sebelum penawaran diajukan.", en: "Reviewing exact technical parameters before submitting quotations." },
    iconName: "HeartHandshake"
  },
  {
    title: { id: "Reliable Service", en: "Reliable Service" },
    desc: { id: "Menjaga kejelasan jadwal kirim dan keaslian spesifikasi barang.", en: "Upholding clear delivery timelines and verified product specifications." },
    iconName: "CheckCircle"
  },
  {
    title: { id: "Long-Term Partnership", en: "Long-Term Partnership" },
    desc: { id: "Berorientasi pada hubungan kerja sama bisnis yang berkelanjutan.", en: "Focused on sustaining long-term, mutually beneficial business alliances." },
    iconName: "Users"
  }
];

export const procurementSteps = [
  {
    step: "01",
    title: { id: "Kirim Kebutuhan", en: "Submit Request" },
    desc: { id: "Sampaikan daftar barang, BOQ, atau spesifikasi yang dicari.", en: "Submit your Bill of Quantities (BOQ) or product requirements." }
  },
  {
    step: "02",
    title: { id: "Analisis Spesifikasi", en: "Spec Analysis" },
    desc: { id: "Peninjauan detail teknis, volume pemesanan, dan target pengiriman.", en: "Technical review of specifications, order volume, and delivery schedule." }
  },
  {
    step: "03",
    title: { id: "Sourcing Produk", en: "Product Sourcing" },
    desc: { id: "Pengecekan stok dan ketersediaan dari supplier resmi.", en: "Verifying stock availability across certified supplier networks." }
  },
  {
    step: "04",
    title: { id: "Penawaran Harga", en: "Official Quotation" },
    desc: { id: "Penerbitan surat penawaran harga resmi (Quotation) yang transparan.", en: "Issuing a clear and competitive formal price quotation." }
  },
  {
    step: "05",
    title: { id: "Konfirmasi PO", en: "PO Processing" },
    desc: { id: "Pemrosesan pesanan sesuai kesepakatan Purchase Order.", en: "Order fulfillment processing strictly per the agreed Purchase Order." }
  },
  {
    step: "06",
    title: { id: "Pengiriman Tepat Waktu", en: "On-Time Delivery" },
    desc: { id: "Pengiriman barang ke lokasi perusahaan dengan kemasan aman.", en: "Prompt direct delivery to client premises with secure packaging." }
  }
];

export const newsList: NewsItem[] = [
  {
    id: "news-1",
    date: "18 September 2024",
    category: { id: "Perusahaan", en: "Company" },
    title: {
      id: "Efisiensi Pengadaan B2B untuk Kawasan Industri Cikarang",
      en: "B2B Procurement Efficiency for Cikarang Industrial Zone"
    },
    summary: {
      id: "Integrasi pasokan satu atap untuk mempercepat pemenuhan kebutuhan perlengkapan industri dan perkantoran.",
      en: "One-stop supply integration to accelerate industrial and office procurement fulfillment."
    },
    content: {
      id: "PT. Aneka Usaha Dua Putra memfasilitasi kebutuhan perlengkapan industri, keselamatan kerja, hingga perangkat teknologi kantor secara terpadu untuk mendukung operasional manufaktur.",
      en: "PT. Aneka Usaha Dua Putra integrates industrial supplies, safety gear, and corporate IT equipment to support manufacturing operations."
    },
    image: "/assets/prod_1.jpg"
  },
  {
    id: "news-2",
    date: "04 Agustus 2024",
    category: { id: "Pengadaan", en: "Procurement" },
    title: {
      id: "Pentingnya Standar K3 di Sektor Manufaktur",
      en: "Importance of K3 Safety Standards in Manufacturing"
    },
    summary: {
      id: "Kepatuhan alat pelindung diri standar untuk menjaga keselamatan kerja dan produktivitas pabrik.",
      en: "Adhering to certified personal protective equipment to maintain plant safety and productivity."
    },
    content: {
      id: "Penyediaan alat pelindung diri (APD) terstandar mendukung terciptanya lingkungan kerja aman di sektor otomotif, pergudangan, dan manufaktur presisi.",
      en: "Supplying standard-compliant personal protective equipment supports safe operating environments across automotive, warehousing, and precision manufacturing."
    },
    image: "/assets/prod_4.jpg"
  },
  {
    id: "news-3",
    date: "12 Juli 2024",
    category: { id: "Solusi IT", en: "IT Solutions" },
    title: {
      id: "Strategi Pengadaan Hardware IT untuk Kantor Modern",
      en: "IT Hardware Procurement Strategy for Modern Offices"
    },
    summary: {
      id: "Panduan pemilihan workstation, switch jaringan, dan lisensi software yang tepat guna serta hemat biaya.",
      en: "Guidelines for selecting workstations, network switches, and software licensing efficiently."
    },
    content: {
      id: "PT. Aneka Usaha Dua Putra membantu tim purchasing memetakan spesifikasi hardware dan jaringan yang sesuai dengan kebutuhan dan anggaran perusahaan.",
      en: "PT. Aneka Usaha Dua Putra assists purchasing teams in mapping hardware and network specifications aligned with corporate budgets."
    },
    image: "/assets/prod_8.jpg"
  }
];

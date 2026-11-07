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
  },
  {
    id: "main-distribution-panel",
    number: "09",
    title: {
      id: "Main Panel Distribusi (MDP / SDP)",
      en: "Main Distribution Panel (MDP / SDP)"
    },
    shortDesc: {
      id: "Fabrikasi kustom Main Distribution Panel (MDP), SDP, dan panel kontrol industri.",
      en: "Custom fabrication of Main Distribution Panels (MDP), SDP, and control panels."
    },
    fullDesc: {
      id: "Fabrikasi dan perakitan Main Distribution Panel (MDP/SDP) berstandar industri dengan komponen proteksi kelistrikan berkualitas tinggi.",
      en: "Custom fabrication and assembly of industrial Main Distribution Panels (MDP/SDP) engineered with high-grade electrical protection components."
    },
    items: [
      "Main Distribution Panel (MDP)",
      "Sub Distribution Panel (SDP)",
      "3-Phase Power Distribution & Busbars",
      "Custom Control, MCCB & Metering Panel"
    ],
    image: "/assets/prod_panel.jpg",
    iconName: "Zap",
    badge: "FABRIKASI",
    isFeatured: true
  },
  {
    id: "hvac-air-conditioning-service",
    number: "10",
    title: {
      id: "HVAC & Layanan AC (Air Conditioning)",
      en: "HVAC & Air Conditioning Solutions"
    },
    shortDesc: {
      id: "Pengadaan unit, instalasi, perawatan berkala, dan perbaikan AC industri komersial.",
      en: "Supply, installation, routine maintenance, and repair of commercial & industrial AC."
    },
    fullDesc: {
      id: "Layanan menyeluruh tata udara dan pendingin ruangan industri meliputi pengadaan unit AC (Split, Cassette, Standing, Chiller), instalasi pemipaan, perawatan cuci berkala, perbaikan kompresor, hingga precision AC ruang server.",
      en: "End-to-end commercial HVAC and climate solutions including AC unit supply (Split, Cassette, Floor Standing, Chiller), piping installation, scheduled preventive maintenance, compressor troubleshooting, and server room precision cooling."
    },
    items: [
      "Instalasi & Pengadaan Unit AC (Split, Cassette, Floor Standing)",
      "Perawatan Rutin & Cuci Berkala (Preventive Maintenance)",
      "Perbaikan Kompresor, Kelistrikan & Pengisian Freon",
      "Sistem HVAC Central, Chiller & Precision AC Ruang Server"
    ],
    image: "/assets/prod_ac.jpg",
    iconName: "Wind",
    badge: "LAYANAN"
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
  },
  {
    id: "mossi",
    name: "PT. METAL ONE STEEL SERVICE INDONESIA",
    sector: {
      id: "Industri Baja & Manufaktur Logam",
      en: "Steel Service & Metal Manufacturing"
    },
    logoUrl: "/assets/clients/mossi.png"
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
      id: "PT. Aneka Usaha Dua Putra memfasilitasi kebutuhan perlengkapan industri, keselamatan kerja, hingga perangkat teknologi kantor secara terpadu untuk mendukung operasional manufaktur. Melalui sistem logistik terpadu di kawasan Cikarang dan sekitarnya, perusahaan manufaktur dapat memangkas waktu tunggu pengadaan (lead time) hingga 40% sekaligus memastikan seluruh barang yang dipasok telah melalui verifikasi spesifikasi teknis dan standar mutu pabrik.",
      en: "PT. Aneka Usaha Dua Putra integrates industrial supplies, safety gear, and corporate IT equipment to support manufacturing operations. Through an integrated logistics system in the Cikarang corridor, manufacturing enterprises can cut procurement lead times by up to 40% while ensuring all delivered goods undergo rigorous technical verification against factory standards."
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
      id: "Penyediaan alat pelindung diri (APD) terstandar mendukung terciptanya lingkungan kerja aman di sektor otomotif, pergudangan, dan manufaktur presisi. Kepatuhan terhadap standar SNI dan standar internasional (EN ISO) tidak hanya melindungi pekerja dari risiko cedera mekanikal dan kimia, tetapi juga meningkatkan kepatuhan audit SMK3 perusahaan saat melayani pasar ekspor dan pelanggan multinasional.",
      en: "Supplying standard-compliant personal protective equipment supports safe operating environments across automotive, warehousing, and precision manufacturing. Adhering to certified SNI and EN ISO standards not only shields workers from mechanical and chemical hazards, but also bolsters corporate SMK3 audit compliance when fulfilling multinational client contracts."
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
      id: "PT. Aneka Usaha Dua Putra membantu tim purchasing memetakan spesifikasi hardware dan jaringan yang sesuai dengan kebutuhan dan anggaran perusahaan. Mulai dari laptop komersial berdaya tahan tinggi, monitor multi-display untuk workstation teknik, rak server rackmount dengan pendingin presisi, hingga lisensi sistem operasi dan keamanan siber bergaransi resmi distributor.",
      en: "PT. Aneka Usaha Dua Putra assists purchasing teams in mapping hardware and network specifications aligned with corporate budgets. From commercial enterprise laptops and multi-display technical workstations to rackmount server cabinets and genuine operating system and cybersecurity licensing with full distributor warranties."
    },
    image: "/assets/prod_8.jpg"
  },
  {
    id: "news-4",
    date: "24 Oktober 2024",
    category: { id: "Fabrikasi & Elektrikal", en: "Fabrication & Electrical" },
    title: {
      id: "Standar Keamanan dan Fabrikasi Main Distribution Panel (MDP/SDP) pada Fasilitas Pabrik",
      en: "Safety Standards and Fabrication of Industrial Main Distribution Panels (MDP/SDP)"
    },
    summary: {
      id: "Panduan teknis perakitan panel distribusi 3-fasa, pemilihan komponen pemutus daya (MCCB), serta proteksi beban lebih untuk mencegah downtime lini manufaktur.",
      en: "Technical guidelines for 3-phase power distribution assembly, MCCB protection selection, and overload prevention to eliminate manufacturing downtime."
    },
    content: {
      id: "Main Distribution Panel (MDP) dan Sub Distribution Panel (SDP) memegang peranan krusial dalam mendistribusikan energi listrik dari gardu trafo ke seluruh lini perakitan pabrik. Fabrikasi panel berstandar industri harus mengutamakan busbar tembaga murni dengan ketebalan teruji, proteksi lonjakan tegangan (Surge Arrester), pemutus daya MCCB berkapasitas interrupting sesuai beban arus hubung singkat, serta ventilasi termal otomatis. PT. Aneka Usaha Dua Putra melayani fabrikasi kustom panel MDP dan SDP dengan sertifikasi pengujian ketahanan isolasi (Megger test) dan pengkabelan terstruktur ferrule guna memastikan stabilitas pasokan daya bebas risiko korsleting.",
      en: "Main Distribution Panels (MDP) and Sub Distribution Panels (SDP) serve as the electrical lifeline distributing power from step-down transformers to high-load assembly machinery. Industrial-grade panel fabrication requires high-purity copper busbars with verified current capacity, transient surge arresters, molded case circuit breakers (MCCB) rated for prospective short-circuit currents, and automated cabinet thermal ventilation. PT. Aneka Usaha Dua Putra delivers custom MDP and SDP fabrication, comprehensive insulation resistance testing, and structured ferrule wire dressing to ensure flawless 24/7 power continuity."
    },
    image: "/assets/news_panel.jpg"
  },
  {
    id: "news-5",
    date: "15 November 2024",
    category: { id: "Layanan HVAC", en: "HVAC Services" },
    title: {
      id: "Manajemen Tata Udara Industri: Pentingnya Preventive Maintenance AC Central dan Ruang Server",
      en: "Industrial HVAC Management: Preventive Maintenance for Central AC and Server Rooms"
    },
    summary: {
      id: "Strategi perawatan berkala sistem pendingin udara komersial guna menjaga stabilitas temperatur ruang kontrol, efisiensi konsumsi listrik, dan kenyamanan kerja.",
      en: "Scheduled maintenance strategies for commercial climate systems to maintain server room temperature stability, energy efficiency, and operational comfort."
    },
    content: {
      id: "Fluktuasi suhu dan kelembapan di area produksi elektronik, laboratorium kontrol mutu, maupun ruang server dapat menyebabkan malfungsi sirkuit digital dan degradasi performa mesin. Melalui kontrak perawatan berkala (Preventive Maintenance) HVAC bersama AUDP, tim teknisi bersertifikasi melakukan pencucian kisi-kisi kondensor dan evaporator, pemantauan tekanan sirkulasi freon (R410A/R32), kalibrasi sensor termostat, serta penggantian filter udara secara berkala. Perawatan terjadwal ini terbukti menurunkan konsumsi daya kompresor hingga 25% dan memperpanjang usia operasional unit AC Split Duct, Cassette, maupun Floor Standing komersial.",
      en: "Uncontrolled thermal swings and humidity spikes within electronics manufacturing, cleanrooms, and data center server rooms risk hardware throttling and equipment breakdown. Through AUDP's scheduled HVAC Preventive Maintenance contracts, certified engineering technicians perform chemical coil washing, refrigerant operating pressure diagnostics, digital sensor calibration, and periodic high-efficiency air filter replacements. Scheduled maintenance reduces compressor electrical draw by up to 25% and extends the operational longevity of commercial Split Duct, Cassette, and Floor Standing climate units."
    },
    image: "/assets/news_hvac.jpg"
  },
  {
    id: "news-6",
    date: "28 November 2024",
    category: { id: "Logistik & Kemasan", en: "Packaging & Logistics" },
    title: {
      id: "Optimasi Material Kemasan: Cara Tepat Memilih Stretch Film dan Strapping Band untuk Ekspor",
      en: "Packaging Material Optimization: Selecting Heavy-Duty Stretch Film and Strapping Bands"
    },
    summary: {
      id: "Mencegah kerusakan kargo selama pengiriman darat dan laut melalui standarisasi ketebalan mikron stretch film dan kekuatan tarik tali strapping.",
      en: "Preventing palletized cargo damage during transit through standardized stretch film micron thickness and high-tensile strapping bands."
    },
    content: {
      id: "Kerusakan barang jadi akibat pergeseran palet saat pengangkutan kontainer laut atau truk logistik sering kali berakar dari ketebalan plastik kemasan yang tidak memenuhi spesifikasi berat muatan. Pemilihan stretch film murni dengan elastisitas tarik hingga 300% dan ketebalan 17 hingga 23 mikron memberikan daya cengkeram optimal tanpa sobek pada sudut karton tajam. Dikombinasikan dengan tali pengikat strapping band PP/PET bermutu tinggi dan klem segel baja, stabilitas susunan palet terjamin aman dari guncangan jalan dan rembesan uap air. AUDP menyediakan pasokan reguler material kemasan industri siap kirim dengan jaminan akurasi berat dan ketebalan.",
      en: "Finished product damage caused by pallet shifting during containerized ocean freight or long-haul trucking commonly stems from sub-standard packaging consumables mismatched to freight weight. Utilizing virgin linear low-density stretch film offering 300% pre-stretch yield and 17 to 23 micron thickness ensures puncture resistance around acute carton edges. Paired with high-tensile PP/PET strapping bands and galvanized steel seals, palletized loads withstand transport vibrations, moisture, and dust ingress. AUDP delivers continuous bulk shipments of certified industrial packaging consumables with verified micron tolerances."
    },
    image: "/assets/news_packaging.jpg"
  },
  {
    id: "news-7",
    date: "05 Desember 2024",
    category: { id: "Keselamatan Kerja K3", en: "Occupational Safety (OHS)" },
    title: {
      id: "Standarisasi APD Sesuai Regulasi Kemenaker: Helm Proyek, Sepatu Safety, dan Sarung Tangan Tahan Kimia",
      en: "OHS Compliance Standards: Certified Safety Helmets, Boots, and Chemical-Resistant Gloves"
    },
    summary: {
      id: "Kepatuhan standar perlindungan diri SNI dan EN ISO untuk menekan angka kecelakaan kerja pada lingkungan bengkel fabrikasi dan lini perakitan.",
      en: "Adhering to certified personal protective standards to eliminate workplace hazards across fabrication workshops and production lines."
    },
    content: {
      id: "Kepatuhan Keselamatan dan Kesehatan Kerja (K3) pada kawasan industri di Cikarang, Karawang, dan Bekasi kini menuntut dokumentasi sertifikasi uji beban yang ketat pada setiap Alat Pelindung Diri. Sepatu safety bertutup baja (steel toe cap) tahan benturan 200 Joule dengan sol antiselip tahan minyak (oil-resistant), helm keselamatan kelas E bersuspensi peredam benturan, serta sarung tangan tahan goresan mekanik (EN 388) merupakan perlengkapan primer wajib bagi teknisi lapangan. PT. Aneka Usaha Dua Putra bermitra dengan prinsipal APD terpercaya untuk menjamin keaslian barang, kenyamanan ergonomis saat dikenakan sepanjang shift kerja, serta kelengkapan dokumen sertifikasi teknis.",
      en: "Occupational Health and Safety (OHS) regulations across Indonesian industrial hubs require rigorous third-party impact test certifications for all personal protective gear. Heavy-duty safety footwear featuring 200-Joule impact steel toe caps, oil-and-acid resistant outsoles, dielectric Class E safety hard hats with suspension harnesses, and mechanical abrasion-resistant gloves (EN 388) constitute mandatory protection for plant operators. PT. Aneka Usaha Dua Putra collaborates directly with authorized PPE principals to guarantee genuine origin, shift-long ergonomic comfort, and valid compliance documentation."
    },
    image: "/assets/news_safety.jpg"
  },
  {
    id: "news-8",
    date: "14 Januari 2025",
    category: { id: "Infrastruktur IT", en: "IT Infrastructure" },
    title: {
      id: "Membangun Infrastruktur Jaringan Pabrik yang Andal: Pengkabelan Cat6 dan IP CCTV Industri",
      en: "Building Resilient Factory Networks: Structured Cat6 Cabling and Industrial IP Surveillance"
    },
    summary: {
      id: "Pentingnya instalasi kabel LAN berpelindung (STP/FTP), rak server rackmount, dan kamera pengawas tahan debu (IP67) untuk operasional 24/7.",
      en: "The necessity of shielded Cat6 networking, rackmount server enclosures, and IP67 industrial surveillance for round-the-clock plant operations."
    },
    content: {
      id: "Otomasi manufaktur modern menuntut jalur komunikasi data yang bebas dari interferensi gelombang elektromagnetik (EMI) dari mesin stamping, inverter, dan motor dinamo. Penerapan kabel jaringan berpelindung ganda (Cat6A SFTP/STP), patch panel berlabel rapi dalam rak server enclosure 19 inci, serta switch manageable bersertifikasi enterprise menjadi tulang punggung kestabilan data produksi. Untuk keamanan fisik, integrasi kamera IP CCTV berstandar proteksi cuaca IP67 dengan teknologi inframerah malam hari dan perekam NVR redundan menjamin seluruh area pabrik terpantau optimal. AUDP menyediakan perangkat keras jaringan lengkap, server storage NAS, dan asistensi teknis pemilihan spesifikasi.",
      en: "Modern factory automation hinges on high-throughput data highways shielded against electromagnetic interference (EMI) originating from industrial stamping presses and high-horsepower motors. Deploying fully shielded Cat6A SFTP/STP structured cabling, certified patch panels housed in 19-inch rack enclosures, and managed enterprise switches secures deterministic production telemetry. In tandem, high-definition IP surveillance cameras bearing IP67 weather seals, smart infrared arrays, and redundant NVR recording arrays safeguard physical facilities around the clock. AUDP supplies enterprise networking equipment, server NAS hardware, and technical spec-matching support."
    },
    image: "/assets/news_it.jpg"
  },
  {
    id: "news-9",
    date: "03 Februari 2025",
    category: { id: "Operasional Fasilitas", en: "Facility Operations" },
    title: {
      id: "Standar Kebersihan Pabrik dan Efisiensi Konsumsi Chemical Janitorial Komersial",
      en: "Industrial Sanitation Standards and Commercial Janitorial Chemical Efficiency"
    },
    summary: {
      id: "Panduan memilih cairan pembersih degreaser lantai produksi, alat sanitasi fasilitas, dan tempat sampah pilah untuk audit 5S/5R.",
      en: "Guidelines for selecting production floor degreasers, sanitation gear, and segregation waste bins to pass 5S corporate audits."
    },
    content: {
      id: "Keberhasilan audit 5S/5R (Ringkas, Rapi, Resik, Rawat, Rajin) pada industri manufaktur presisi bermula dari pemeliharaan kebersihan lantai kerja dan area mesin. Penggunaan chemical pembersih konsentrat tinggi (Heavy Duty Degreaser) mampu melarutkan residu minyak oli hidrolik dan debu karbon tanpa mengikis cat lantai epoxy workshop. Didukung dengan mesin ride-on floor scrubber komersial, kain lap microfiber industri penyerap tinggi, serta tempat sampah pilah limbah B3 berwarna standar, manajemen fasilitas dapat menghemat anggaran pembersihan hingga 30% sekaligus meminimalisir risiko lantai licin bagi para pekerja. AUDP menyediakan paket pengadaan chemical dan perkakas sanitasi fasilitas secara rutin.",
      en: "Sustaining successful 5S industrial audits across precision engineering plants begins with meticulous floor and machinery hygiene. Heavy-duty concentrated chemical degreasers emulsify tough hydraulic oil leaks and carbon residues without corroding sensitive industrial epoxy floor finishes. Complemented by commercial walk-behind floor scrubbers, high-absorbency microfiber wipers, and color-coded hazardous waste segregation containers, facility departments reduce sanitation expenditures by up to 30% while eliminating slip-and-fall hazards for workshop technicians. AUDP delivers routine procurement schedules for industrial janitorial chemicals and facility supplies."
    },
    image: "/assets/news_cleaning.jpg"
  },
  {
    id: "news-10",
    date: "20 Februari 2025",
    category: { id: "Manajemen Pasokan", en: "Supply Chain Management" },
    title: {
      id: "Konsolidasi Vendor B2B: Cara Mengurangi Biaya Administrasi Pengadaan Pabrik hingga 30%",
      en: "B2B Vendor Consolidation: Reducing Plant Procurement Overhead by up to 30%"
    },
    summary: {
      id: "Strategi efisiensi tim purchasing dengan menggabungkan pasokan ATK, perkakas teknik, dan perlengkapan umum ke dalam satu mitra rekanan terpercaya.",
      en: "Procurement efficiency tactics by consolidating stationery, technical consumables, and operational goods under one verified supplier partner."
    },
    content: {
      id: "Banyak perusahaan manufaktur di kawasan industri terbebani oleh tingginya biaya transaksi administratif akibat bertransaksi dengan puluhan vendor kecil untuk item yang berbeda-beda. Melalui model kemitraan terpadu (Vendor Consolidation) bersama PT. Aneka Usaha Dua Putra, seluruh lini kebutuhan rutin—dari alat tulis kantor (ATK), kertas, suku cadang mekanikal, kabel kelistrikan, hingga material kemasan—dapat dipenuhi melalui satu pintu rekanan resmi. Manfaat nyata yang diperoleh meliputi penerbitan e-Faktur Pajak resmi (SPPKP) yang tertib, harga kontrak volume yang lebih kompetitif, respon penawaran dalam 24 jam, serta jadwal pengiriman terkoordinasi yang menghilangkan risiko terhentinya operasional lini produksi.",
      en: "Many manufacturing plants struggle with heavy administrative overhead caused by transacting with dozens of fragmented micro-vendors for miscellaneous operational items. Through comprehensive Vendor Consolidation with PT. Aneka Usaha Dua Putra, diverse recurring requirements—including corporate stationery, mechanical components, electrical cabling, and warehouse packaging—are fulfilled under one reputable vendor partnership. Key advantages include streamlined official tax invoicing (e-Faktur PKP), competitive bulk contract pricing, 24-hour quotation turnarounds, and synchronized delivery schedules that safeguard manufacturing uptime."
    },
    image: "/assets/news_supply.jpg"
  }
];

// Helper to rehydrate data from localStorage or admin updates
export const rehydrateLocalData = () => {
  if (typeof window === 'undefined') return;
  try {
    const p = localStorage.getItem('audp_products');
    if (p) {
      const parsed = JSON.parse(p);
      if (Array.isArray(parsed) && parsed.length > 0) {
        productsList.length = 0;
        productsList.push(...parsed);
      }
    }
    const c = localStorage.getItem('audp_clients');
    if (c) {
      const parsed = JSON.parse(c);
      if (Array.isArray(parsed) && parsed.length > 0) {
        clientsList.length = 0;
        clientsList.push(...parsed);
      }
    }
    const n = localStorage.getItem('audp_news');
    if (n) {
      const parsed = JSON.parse(n);
      if (Array.isArray(parsed) && parsed.length > 0) {
        newsList.length = 0;
        newsList.push(...parsed);
      }
    }
    const it = localStorage.getItem('audp_it_solutions');
    if (it) {
      const parsed = JSON.parse(it);
      if (Array.isArray(parsed) && parsed.length > 0) {
        itSolutionsList.length = 0;
        itSolutionsList.push(...parsed);
      }
    }
    const l = localStorage.getItem('audp_legal_docs');
    if (l) {
      const parsed = JSON.parse(l);
      if (Array.isArray(parsed) && parsed.length > 0) {
        legalDocsList.length = 0;
        legalDocsList.push(...parsed);
      }
    }
    const info = localStorage.getItem('audp_company_info');
    if (info) {
      const parsed = JSON.parse(info);
      if (parsed && typeof parsed === 'object') {
        Object.assign(companyInfo, parsed);
      }
    }
    const about = localStorage.getItem('audp_about_content');
    if (about) {
      const parsed = JSON.parse(about);
      if (parsed && typeof parsed === 'object') {
        Object.assign(aboutContent, parsed);
      }
    }
  } catch (e) {
    console.warn("Could not rehydrate local data:", e);
  }
};

// Automatically run on script evaluation in browser
if (typeof window !== 'undefined') {
  rehydrateLocalData();
}


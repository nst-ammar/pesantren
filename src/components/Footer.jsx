import { images } from "../data/images.js";

const programLinks = [
  { label: "Tahfidz Al-Qur'an 30 Juz Mutqin", href: "#kurikulum" },
  { label: "Dirasah Islamiyah & Kitab Kuning", href: "#kurikulum" },
  { label: "MTs Unggulan Terakreditasi A", href: "#kurikulum" },
  { label: "Madrasah Aliyah (MA) Sains & Agama", href: "#kurikulum" },
  { label: "SMK Teknologi Informasi & Robotika", href: "#kurikulum" },
  { label: "Program Bahasa Arab & Inggris Aktif", href: "#kurikulum" },
];

const infoLinks = [
  { label: "Brosur & Rincian Biaya Pendidikan", href: "#psb" },
  { label: "Alur & Syarat Pendaftaran Santri Baru", href: "#psb" },
  { label: "Beasiswa Santri Berprestasi & Yatim", href: "#psb" },
  { label: "Fasilitas Asrama & Kampus Terpadu", href: "#fasilitas" },
  { label: "Warta Prestasi & Agenda Santri", href: "#berita" },
  { label: "Tanya Jawab Seputar Pondok (FAQ)", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary pt-space-xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
          {/* Brand & legalitas */}
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="p-1.5 rounded-lg bg-surface-container-lowest">
                <img
                  alt="Logo Pesantren Al-Hikmah"
                  className="h-8 w-auto object-contain"
                  src={images.logo}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-primary font-semibold">
                  Al-Hikmah
                </span>
                <span className="font-label-md text-label-md text-primary-fixed">
                  Modern Islamic Boarding School
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary/80">
              Membina generasi qur'ani berakhlak mulia, berwawasan global, dan unggul dalam ilmu
              agama serta sains teknologi terpadu.
            </p>
            <div className="p-space-sm rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md">
              <span className="block font-bold text-on-primary">Legalitas Kemenag RI:</span>
              <span className="block">No. Statistik Pontren: 510032010892</span>
              <span className="block">SK Kemenkumham RI: AHU-0012481.AH.01.04</span>
            </div>
          </div>

          {/* Kurikulum & program */}
          <div className="space-y-space-md">
            <span className="font-title-md text-title-md text-on-primary block font-semibold">
              Kurikulum &amp; Program
            </span>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-primary/80">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-primary-fixed transition-colors block py-0.5"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Informasi & panduan */}
          <div className="space-y-space-md">
            <span className="font-title-md text-title-md text-on-primary block font-semibold">
              Informasi &amp; Panduan
            </span>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-primary/80">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-primary-fixed transition-colors block py-0.5"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kampus & kontak */}
          <div className="space-y-space-md">
            <span className="font-title-md text-title-md text-on-primary block font-semibold">
              Kampus &amp; Kontak
            </span>
            <div className="space-y-space-sm font-body-sm text-body-sm text-on-primary/80">
              <p className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed mt-0.5">
                  location_on
                </span>
                <span>Jl. Pesantren Luhur No. 99, Cisarua, Bogor, Jawa Barat 16750</span>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed">call</span>
                <span>Hotline PSB: +62 812-3456-7890</span>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed">mail</span>
                <span>sekretariat@alhikmah.sch.id</span>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary-fixed">
                  schedule
                </span>
                <span>Layanan Kunjungan: Setiap Hari 08.00 - 16.00 WIB</span>
              </p>
            </div>
            <div className="pt-space-xs flex items-center gap-space-sm">
              <a
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center hover:bg-forest-rich transition-colors"
                href="https://wa.me/6281234567890"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </a>
              <a
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center hover:bg-forest-rich transition-colors"
                href="#beranda"
              >
                <span className="material-symbols-outlined text-[18px]">videocam</span>
              </a>
              <a
                aria-label="Situs resmi"
                className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center hover:bg-forest-rich transition-colors"
                href="#beranda"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-primary/70">
          <p>© 2025 Pesantren Modern Al-Hikmah. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-primary-fixed transition-colors" href="#faq">
              Kebijakan Privasi
            </a>
            <span className="opacity-40">•</span>
            <a className="hover:text-primary-fixed transition-colors" href="#faq">
              Tata Tertib Kampus
            </a>
            <span className="opacity-40">•</span>
            <a className="hover:text-primary-fixed transition-colors" href="#kontak">
              Peta Lokasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


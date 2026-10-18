import { facilityImages } from "../data/images.js";

const facilities = [
  {
    badge: "Kapasitas 1.500 Jamaah",
    badgeClass: "bg-primary/90",
    title: "Masjid Jami' 2 Lantai",
    desc: "Pusat spiritual pesantren untuk shalat berjamaah 5 waktu, kajian umum bersama para ulama, serta halaqah tahfidz yang sejuk dan luas.",
    alt: "Masjid Jami' dua lantai berarsitektur modern minimalis dengan karpet hijau zamrud tebal dan kubah berukir kaligrafi kontemporer",
  },
  {
    badge: "Terpisah Putra & Putri",
    badgeClass: "bg-surface-tint",
    title: "Asrama Ventilatif & Nyaman",
    desc: "Dilengkapi ranjang ergonomis, lemari berkunci, kamar mandi dalam bersih, pengawasan wali asrama 24 jam, serta layanan binatu terjadwal.",
    alt: "Kamar asrama santri yang bersih dan rapi dengan ranjang tingkat kayu kokoh bernuansa modern",
  },
  {
    badge: "Smart Classroom",
    badgeClass: "bg-forest-rich",
    title: "Kelas Multimedia & Smart TV",
    desc: "Setiap ruang kelas didukung smartboard interaktif, akses Wi-Fi edukasi terproteksi, serta pendingin udara untuk efektivitas belajar.",
    alt: "Ruang kelas modern interaktif dengan Interactive Smart TV display di depan kelas dan meja kursi ergonomis",
  },
  {
    badge: "60 Unit PC Core-i7",
    badgeClass: "bg-primary/90",
    title: "Lab Komputer & Bahasa",
    desc: "Fasilitas penunjang mata pelajaran IT, pemrograman web, robotika, serta audio-booth untuk latihan listening ujian bahasa internasional.",
    alt: "Laboratorium komputer modern dengan jajaran monitor seragam dan headset audio untuk lab bahasa",
  },
  {
    badge: "10.000+ Eksemplar",
    badgeClass: "bg-forest-rich",
    title: "Perpustakaan Islam Digital",
    desc: "Koleksi ensiklopedia Islam terlengkap, manuskrip fiqh salaf, serta akses portal e-library jurnal ilmiah nasional dan Timur Tengah.",
    alt: "Perpustakaan megah dengan ribuan jilid kitab kuning klasik Arab dan literatur ilmiah modern",
  },
  {
    badge: "Standar Nasional",
    badgeClass: "bg-surface-tint",
    title: "Sport Center & Arena Memanah",
    desc: "Lapangan futsal rumput sintetis, lapangan basket standar, arena panahan sunnah nabawiyyah, dan aula serbaguna beladiri Tapak Suci.",
    alt: "Area olahraga santri dengan lapangan futsal rumput sintetis dan arena panahan dikelilingi perbukitan hijau Cisarua",
  },
];

export default function Fasilitas() {
  return (
    <section id="fasilitas" className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-tint mb-space-xs">
              <span className="material-symbols-outlined text-[16px] text-surface-tint">
                apartment
              </span>
              <span className="font-label-md text-label-md font-bold text-surface-tint uppercase tracking-wide">
                Infrastruktur Kampus
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md font-semibold text-primary">
              Fasilitas Penunjang Santri
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Dibangun di atas lahan 8 hektar berhawa sejuk pegunungan, menghadirkan kenyamanan
              studi, kebugaran jasmani, dan kekhusyukan ibadah.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="font-label-md text-label-md text-surface-tint bg-slate-tint px-3 py-1.5 rounded-lg font-semibold inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>{" "}
              Lingkungan Terjaga 24 Jam CCTV &amp; Security
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col"
            >
              <div className="relative h-56 bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt={facility.alt}
                  src={facilityImages[index]}
                />
                <span
                  className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-on-primary font-label-md text-label-md font-bold ${facility.badgeClass}`}
                >
                  {facility.badge}
                </span>
              </div>
              <div className="p-space-md flex flex-col flex-1">
                <h3 className="font-title-md text-title-md font-bold text-primary">
                  {facility.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

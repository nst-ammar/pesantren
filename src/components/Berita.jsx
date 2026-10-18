import { newsImages } from "../data/images.js";

const news = [
  {
    tag: "Tahfidz Qur'an",
    tagClass: "bg-primary/80",
    date: "24 Oktober 2024",
    title: "Haflah Khotmil Qur'an Ke-XII: 48 Santri Resmi Menyandang Syahadah 30 Juz Mutqin",
    desc: "Kegiatan khotmil qur'an dihadiri dewan masyaikh dan perwakilan Kemenag Provinsi dengan prosesi tasmi' bil-ghaib 30 juz sekali duduk.",
    alt: "Wisuda Tahfiz akbar santri Al-Hikmah di aula megah, para wisudawan mengenakan jubah putih berselendang hijau tua menerima sertifikat sanad qira'ah",
  },
  {
    tag: "Sains & Robotik",
    tagClass: "bg-forest-rich/90",
    date: "12 November 2024",
    title: "Tim Robotika SMK IT Al-Hikmah Raih Juara 1 Nasional Islamic Science Expo 2024",
    desc: "Inovasi smart-irrigation berbasis internet of things karya santri berhasil mengungguli puluhan prototipe dari berbagai sekolah kejuruan nasional.",
    alt: "Dua santri berkopiah dan jas laboratorium sedang merakit robot sensorik line-follower di atas lintasan arena kompetisi sains",
  },
  {
    tag: "Ekstrakurikuler",
    tagClass: "bg-secondary/90",
    date: "28 November 2024",
    title: "Kejuaraan Silat Antar Pondok Pesantren se-Jawa Barat Borong 7 Medali Emas",
    desc: "Kontingen pesilat Tapak Suci Al-Hikmah membuktikan ketangguhan fisik dan sportivitas tinggi dalam ajang bergengsi tahunan.",
    alt: "Atraksi pencak silat tapak suci santri dengan seragam merah melakukan tendangan terbang estetik di lapangan upacara",
  },
];

export default function Berita() {
  return (
    <section id="berita" className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-tint mb-space-xs">
              <span className="material-symbols-outlined text-[16px] text-surface-tint">
                newspaper
              </span>
              <span className="font-label-md text-label-md font-bold text-surface-tint uppercase tracking-wide">
                Kabar Kampus
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md font-semibold text-primary">
              Aktivitas &amp; Prestasi Santri
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Dokumentasi denyut keseharian, torehan kejuaraan, dan dinamika pembelajaran di bumi
              Al-Hikmah.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              className="inline-flex items-center gap-1 font-label-lg text-label-lg font-bold text-surface-tint hover:underline"
              href="#berita"
            >
              Lihat Arsip Galeri Lengkap →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {news.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-48 bg-surface-container relative">
                <img className="w-full h-full object-cover" alt={item.alt} src={newsImages[index]} />
                <span
                  className={`absolute bottom-3 left-3 backdrop-blur-sm text-on-primary font-label-md text-label-md px-2.5 py-1 rounded-md ${item.tagClass}`}
                >
                  {item.tag}
                </span>
              </div>
              <div className="p-space-md flex flex-col flex-1 justify-between">
                <div>
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    {item.date}
                  </span>
                  <h3 className="font-title-md text-title-md font-bold text-primary mt-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <a
                  className="mt-4 font-label-md text-label-md font-bold text-surface-tint flex items-center gap-1"
                  href="#berita"
                >
                  Baca Rilis →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

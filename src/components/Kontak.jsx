import { images } from "../data/images.js";

const contactItems = [
  {
    icon: "location_on",
    title: "Alamat Kampus Utama",
    desc: "Jl. Pesantren Luhur No. 99, Cisarua, Bogor, Jawa Barat 16750",
  },
  {
    icon: "schedule",
    title: "Waktu Layanan Informasi PSB",
    desc: "Setiap Hari (Senin - Ahad): 08.00 - 16.00 WIB",
  },
  {
    icon: "chat",
    title: "Hotline WhatsApp Resmi",
    desc: "+62 812-3456-7890 (Ust. Fauzi / Ustzh. Maryam)",
  },
];

export default function Kontak() {
  return (
    <section id="kontak" className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Informasi kontak & jadwal kunjungan */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-space-md">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-tint mb-space-xs">
                <span className="material-symbols-outlined text-[16px] text-surface-tint">
                  pin_drop
                </span>
                <span className="font-label-md text-label-md font-bold text-surface-tint uppercase tracking-wide">
                  Silaturahmi Langsung
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md font-semibold text-primary">
                Kunjungi Kampus Kami
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Bapak/Ibu dipersilakan berkunjung untuk melihat langsung kegiatan belajar mengajar,
                suasana asrama, dan berkonsultasi dengan tim panitia PSB.
              </p>
            </div>

            <div className="space-y-space-sm">
              {contactItems.map((item) => (
                <div
                  key={item.title}
                  className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-forest-rich/10 text-forest-rich flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <div>
                    <span className="font-title-md text-body-md font-bold text-primary block">
                      {item.title}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a
                className="inline-flex items-center justify-center h-12 px-space-lg rounded-lg bg-secondary hover:bg-forest-rich text-on-primary font-label-lg text-label-lg font-bold shadow-md transition-all"
                href="https://wa.me/6281234567890"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined mr-2 text-[20px]">forum</span>
                Hubungi Panitia via WhatsApp
              </a>
            </div>
          </div>

          {/* Peta lokasi kampus */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden shadow-md relative bg-surface-container">
              <div
                className="w-full h-full min-h-[380px] bg-cover bg-center rounded-2xl"
                role="img"
                aria-label="Peta lokasi Cisarua, Bogor, Jawa Barat"
                style={{ backgroundImage: `url('${images.map}')` }}
              ></div>
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-forest-rich"></span>
                  <span className="font-title-md text-body-md font-bold text-primary">
                    Pesantren Modern Al-Hikmah
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Akses mudah via Tol Jagorawi keluar Gerbang Tol Ciawi arah Puncak Cisarua
                  (sekitar 15 menit).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

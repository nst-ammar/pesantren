import { images } from "../data/images.js";

const trijiwa = [
  {
    icon: "favorite",
    title: "Keikhlasan",
    desc: "Menata segenap amal ibadah dan ikhtiar thalabul ilmi semata mengharap ridha Allah SWT.",
  },
  {
    icon: "self_improvement",
    title: "Kemandirian",
    desc: "Terampil merawat diri, mengelola waktu secara teratur, serta tangguh menghadapi tantangan hidup.",
  },
  {
    icon: "handshake",
    title: "Ukhuwah Islamiyah",
    desc: "Menjalin persaudaraan suci antar santri dari Sabang sampai Merauke dalam bingkai rahmatan lil 'alamin.",
  },
];

export default function Sambutan() {
  return (
    <section id="profil" className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Visual pimpinan */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-surface-container-high">
                <img
                  className="w-full h-[420px] object-cover"
                  alt="Potret bijaksana K.H. Ahmad Syarifuddin pengasuh pesantren berpakaian koko putih rapi bersorban hijau tua dan peci hitam dengan latar rak buku kitab kuning"
                  src={images.pengasuh}
                />
              </div>
              <div className="mt-4 p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col">
                <span className="font-title-md text-title-md font-bold text-primary">
                  K.H. Ahmad Syarifuddin, Lc., M.A.
                </span>
                <span className="font-label-md text-label-md text-surface-tint uppercase font-semibold">
                  Pimpinan &amp; Pengasuh Pesantren Modern Al-Hikmah
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Alumnus Universitas Al-Azhar Kairo &amp; Pascasarjana UIN Syarif Hidayatullah
                </span>
              </div>
            </div>
          </div>

          {/* Sambutan & Trijiwa content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-space-md">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-slate-tint">
              <span className="material-symbols-outlined text-[16px] text-surface-tint">
                menu_book
              </span>
              <span className="font-label-md text-label-md font-bold text-surface-tint uppercase tracking-wide">
                Prakata Pengasuh
              </span>
            </div>

            <h2 className="font-headline-md text-headline-md font-semibold text-primary">
              "Menjaga Tradisi Luhur Salafus Shalih, Merangkul Kemajuan Peradaban Modern"
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Pesantren Modern Al-Hikmah didirikan atas komitmen kokoh menghadirkan generasi mukmin
              mutafaqqih fiddin yang berkarakter mandiri, fasih berdialog di kancah global, serta
              cakap memimpin masa depan bangsa dengan pondasi tauhid yang tak tergoyahkan.
            </p>

            {/* Trijiwa cards */}
            <div className="pt-2">
              <div className="font-label-lg text-label-lg uppercase tracking-wider text-primary font-bold mb-3">
                Trijiwa Nilai Dasar Al-Hikmah:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                {trijiwa.map((item) => (
                  <div
                    key={item.title}
                    className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-tint text-surface-tint flex items-center justify-center mb-2">
                      <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    </div>
                    <h3 className="font-title-md text-body-md font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 font-label-lg text-label-lg font-bold text-surface-tint hover:text-emerald-deep transition-colors"
                href="#profil"
              >
                <span>Pelajari Sejarah Selengkapnya</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { images } from "../data/images.js";

const highlights = [
  { value: "100%", label: "Lulus PTN & Timur Tengah" },
  { value: "30 Juz", label: "Tahfidz Center Bersanad" },
  { value: "15+", label: "Ekstrakurikuler Pilihan" },
  { value: "Predikat A", label: "Akreditasi Unggul BAN-S/M" },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden bg-primary-container text-on-primary"
    >
      {/* Subtle ambient glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-fixed opacity-10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-lime-vibrant opacity-10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Hero copy */}
          <div className="lg:col-span-7 flex flex-col space-y-space-md">
            <div className="inline-flex items-center gap-space-xs self-start px-3.5 py-1.5 rounded-full bg-forest-rich/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-lime-vibrant animate-ping"></span>
              <span className="font-label-md text-label-md tracking-wider text-lime-tint uppercase font-bold">
                Penerimaan Santri Baru TA 2025/2026
              </span>
            </div>

            <h1 className="font-display-hero text-headline-lg lg:text-display-hero tracking-tight text-ivory-pure font-bold leading-tight">
              Mencetak Generasi Qur'ani, Berakhlak Karimah &amp; Berwawasan Global
            </h1>

            <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl leading-relaxed">
              Pesantren Modern Al-Hikmah memadukan kurikulum salafiyah kitab kuning, tahfiz 30 juz
              ber-sanad, dan pendidikan formal sains berstandar nasional di lingkungan asri
              perbukitan Cisarua.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
              <a
                className="inline-flex items-center justify-center h-12 px-space-lg rounded-lg bg-secondary hover:bg-forest-rich text-on-primary font-label-lg text-label-lg font-bold shadow-xl transition-all duration-200"
                href="#psb"
              >
                <span className="material-symbols-outlined mr-2 text-[20px]">how_to_reg</span>
                Daftar Santri Baru (PSB 2025/2026)
              </a>
              <a
                className="inline-flex items-center justify-center h-12 px-space-lg rounded-lg bg-ivory-pure/10 hover:bg-ivory-pure/20 text-on-primary font-label-lg text-label-lg font-semibold backdrop-blur-sm transition-all duration-200"
                href="#kurikulum"
              >
                <span className="material-symbols-outlined mr-2 text-[20px]">download</span>
                Unduh Brosur &amp; Kurikulum
              </a>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-lg">
              {highlights.map((item) => (
                <div key={item.value} className="p-3.5 rounded-xl bg-ivory-pure/5 backdrop-blur-sm">
                  <div className="font-display-hero text-title-md font-bold text-lime-tint">
                    {item.value}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-primary/80 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl shadow-2xl bg-surface-container">
                <img
                  className="w-full h-[460px] object-cover transition-transform duration-700 hover:scale-105"
                  alt="Santri berkopiah putih dan mukena rapi sedang berdiskusi membawa Al-Qur'an dan tablet digital di selasar masjid modern dengan latar pepohonan pinus hijau di Cisarua"
                  src={images.hero}
                />
              </div>

              {/* Floating info pill */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-surface-container-lowest p-space-md rounded-xl shadow-xl flex items-center gap-space-sm max-w-xs">
                <div className="w-12 h-12 rounded-lg bg-surface-tint flex items-center justify-center text-on-primary shrink-0">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div className="min-w-0">
                  <div className="font-title-md text-body-md font-bold text-primary truncate">
                    Sanad Mutashil
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Talaqqi Bersambung Rasulullah SAW
                  </p>
                </div>
              </div>

              {/* Floating pill right */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-primary text-on-primary px-4 py-2.5 rounded-lg shadow-lg items-center gap-2">
                <span className="material-symbols-outlined text-lime-glow text-[18px]">public</span>
                <span className="font-label-md text-label-md font-semibold tracking-wide">
                  Bilingual Arabic-English
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

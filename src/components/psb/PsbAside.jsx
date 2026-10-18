import { images } from "../../data/images.js";

const alurSteps = [
  {
    title: "Isi Formulir Online",
    desc: "Lengkapi identitas calon santri, data wali, serta pilihan jenjang madrasah.",
    current: true,
  },
  {
    title: "Transfer Biaya Seleksi",
    desc: "Nominal Rp 450.000 via Virtual Account BSI / Bank Mandiri yang tertera pada bukti form.",
  },
  {
    title: "Ujian Masuk & Wawancara",
    desc: "Tes akademik, bacaan Qur'an & wawancara kepesantrenan (Online atau On-Campus Cisarua).",
  },
  {
    title: "Pengumuman & Daftar Ulang",
    desc: "Hasil seleksi diumumkan transparan melalui portal PSB dan grup WA resmi.",
  },
];

export default function PsbAside() {
  return (
    <aside className="lg:col-span-4 space-y-space-lg">
      {/* Alur seleksi singkat */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
        <div className="flex items-center gap-space-xs text-primary">
          <span className="material-symbols-outlined text-[24px] text-forest-rich">route</span>
          <h3 className="font-title-md text-title-md font-bold">Alur Pendaftaran PSB</h3>
        </div>
        <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">
          {alurSteps.map((step, index) => (
            <div className="relative" key={step.title}>
              <span
                className={`absolute -left-[1.85rem] top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  step.current
                    ? "bg-forest-rich text-on-primary"
                    : "bg-surface-container-highest text-primary"
                }`}
              >
                {index + 1}
              </span>
              <h4 className="font-label-lg text-label-lg font-bold text-primary">{step.title}</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Banner download brosur */}
      <div className="p-space-lg rounded-xl bg-primary-container text-on-primary space-y-space-sm relative overflow-hidden shadow-sm">
        <div className="relative z-10 space-y-space-xs">
          <span className="inline-flex items-center gap-1 font-label-md text-label-md text-lime-glow uppercase tracking-wider font-bold">
            <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
            E-Brosur Lengkap
          </span>
          <h4 className="font-headline-sm text-headline-sm font-semibold">
            Unduh Panduan &amp; Rincian Biaya
          </h4>
          <p className="font-body-sm text-body-sm text-on-primary/80">
            Pelajari kurikulum terpadu, rincian biaya asrama, seragam, konsumsi, dan jadwal kegiatan
            harian santri 24 jam.
          </p>
          <div className="pt-space-xs">
            <a
              className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold hover:bg-surface-container-low transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download PDF (4.8 MB)</span>
            </a>
          </div>
        </div>
        <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-forest-rich/30 blur-2xl pointer-events-none"></div>
      </div>

      {/* Bantuan admin WhatsApp */}
      <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm">
        <div className="flex items-center gap-space-sm">
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-forest-rich">
            <span className="material-symbols-outlined text-[24px]">chat_bubble</span>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg font-bold text-primary">
              Butuh Bantuan Pengisian?
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Layanan Konsultasi Santri Baru
            </span>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Jika mengalami kendala saat input NISN atau pemilihan jalur beasiswa, silakan sapa
          langsung narahubung panitia PSB.
        </p>
        <a
          className="w-full inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-forest-rich font-label-lg text-label-lg font-bold transition-all"
          href="https://wa.me/6281234567890?text=Halo%20Panitia%20PSB%20Al-Hikmah,%20saya%20ingin%20bertanya%20seputar%20pendaftaran"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[18px]">forum</span>
          <span>Tanya Admin PSB via WhatsApp</span>
        </a>
      </div>

      {/* Preview kampus */}
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <div
          className="bg-cover bg-center w-full h-44 relative"
          role="img"
          aria-label="Pemandangan udara Pesantren Modern Al-Hikmah di Cisarua Bogor dengan menara putih dan pepohonan pinus"
          style={{ backgroundImage: `url('${images.psbCampus}')` }}
        >
          <div className="absolute inset-0 bg-primary/40 flex items-end p-4">
            <span className="text-on-primary font-label-md text-label-md bg-primary-container/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
              Kampus Putra &amp; Putri Terpisah
            </span>
          </div>
        </div>
        <div className="p-space-md space-y-1">
          <h5 className="font-label-lg text-label-lg font-bold text-primary">
            Kunjungan Langsung (Survey Kampus)
          </h5>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Setiap Sabtu &amp; Ahad terbuka layanan Open Campus &amp; Wisata Edukasi Cisarua.
          </p>
        </div>
      </div>
    </aside>
  );
}


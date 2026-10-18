import { Link } from "react-router-dom";

const steps = [
  {
    numClass: "bg-primary",
    title: "Buat Akun & Form Online",
    desc: "Orang tua mengisi formulir biodata santri secara digital, mengunggah kartu keluarga, akta kelahiran, dan rapor 2 semester terakhir.",
    date: "1 Okt - 20 Des 2024",
  },
  {
    numClass: "bg-forest-rich",
    title: "Uji Al-Qur'an & Wawancara",
    desc: "Tes baca Al-Qur'an (tajwid & makhraj), hafalan surat pendek, tes potensi akademik, serta wawancara komitmen orang tua & santri.",
    date: "28 - 29 Des 2024",
  },
  {
    numClass: "bg-surface-tint",
    title: "Pengumuman Kelulusan",
    desc: "Hasil seleksi diterbitkan secara online via dashboard portal wali santri dan dikirimkan melalui notifikasi resmi WhatsApp.",
    date: "5 Januari 2025",
  },
  {
    numClass: "bg-secondary",
    title: "Daftar Ulang & Masuk Asrama",
    desc: "Penyelesaian administrasi biaya, pengukuran seragam, orientasi santri baru (Khutbatul Arsy), dan penempatan kamar asrama.",
    date: "12 - 13 Juli 2025",
  },
];

export default function Pendaftaran() {
  return (
    <section id="psb" className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-rich/10 text-forest-rich mb-space-xs">
            <span className="material-symbols-outlined text-[16px]">event_available</span>
            <span className="font-label-md text-label-md font-bold uppercase tracking-wide">
              Penerimaan Santri Baru (PSB)
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md font-semibold text-primary">
            Alur Pendaftaran &amp; Transparansi Biaya
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Proses seleksi transparan dan sistematis untuk memastikan kesiapan ananda menimba ilmu
            di asrama Pesantren Modern Al-Hikmah.
          </p>
        </div>

        {/* 4 langkah alur pendaftaran */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm relative overflow-hidden flex flex-col"
            >
              <div
                className={`w-10 h-10 rounded-full ${step.numClass} text-on-primary font-bold flex items-center justify-center font-title-md text-title-md mb-space-sm`}
              >
                {index + 1}
              </div>
              <h3 className="font-title-md text-body-md font-bold text-primary">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                {step.desc}
              </p>
              <span className="mt-4 font-label-md text-label-md text-surface-tint font-bold">
                {step.date}
              </span>
            </div>
          ))}
        </div>
        {/* Transparansi biaya & rincian SPP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          {/* Rincian biaya */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl p-space-lg shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-space-md">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-primary">
                    Rincian Komponen Biaya Investasi Pendidikan
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Tahun Ajaran 2025/2026 (MTs, MA, &amp; SMK IT)
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-forest-rich/10 text-forest-rich font-label-md text-label-md font-bold hidden sm:inline-block">
                  Transparan &amp; Tanpa Biaya Tersembunyi
                </span>
              </div>

              <div className="space-y-space-sm pt-space-xs">
                <FeeItem
                  icon="description"
                  title="Biaya Registrasi & Ujian Seleksi"
                  desc="Pendaftaran online, modul tes seleksi, & konsumsi ujian"
                  price="Rp 450.000"
                />
                <FeeItem
                  icon="domain"
                  title="Infaq Pengembangan Gedung & Sarana (Wakaf)"
                  desc="Hanya dibayarkan 1x di awal (Bisa dicicil 3x)"
                  price="Rp 12.500.000"
                />
                <FeeItem
                  icon="checkroom"
                  title="Paket Seragam Lengkap & Buku/Kitab Panduan"
                  desc="5 stel seragam, jas almamater, atribut, Al-Qur'an & kitab pokok"
                  price="Rp 2.800.000"
                />
                <FeeItem
                  icon="local_dining"
                  title="Iuran Bulanan (SPP & Asrama All-In)"
                  desc="Termasuk makan 3x sehari bergizi, laundry, listrik, air, & klinik kesehatan"
                  price="Rp 1.750.000"
                  suffix="/bln"
                  highlight
                />
              </div>
            </div>

            <div className="mt-space-md pt-3 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-gold-accent text-[18px]">
                  verified
                </span>
                Tersedia beasiswa penuh (100% Bebas Biaya) bagi penghafal Al-Qur'an 30 Juz &amp;
                Yatim Berprestasi.
              </p>
              <a
                className="font-label-md text-label-md font-bold text-surface-tint hover:underline shrink-0"
                href="#psb"
              >
                Syarat Beasiswa →
              </a>
            </div>
          </div>

          {/* Banner aksi pendaftaran */}
          <div className="lg:col-span-4 bg-primary-container text-on-primary rounded-2xl p-space-lg shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-rich/50 backdrop-blur-sm mb-space-md">
                <span className="material-symbols-outlined text-[16px] text-lime-glow">
                  hourglass_top
                </span>
                <span className="font-label-md text-label-md font-bold uppercase tracking-wide text-on-primary">
                  Kuota Terbatas
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-ivory-pure">
                Gelombang 1 Dibuka
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary/80 mt-2 leading-relaxed">
                Kapasitas asrama putra: 120 santri. Kapasitas asrama putri: 120 santriwati.
                Pendaftaran gelombang 1 akan ditutup sewaktu-waktu jika kuota terpenuhi.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-ivory-pure/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center justify-between text-body-sm font-body-sm">
                  <span>Kuota Terisi:</span>
                  <span className="font-bold text-lime-tint">72%</span>
                </div>
                <div className="w-full bg-surface-container/20 rounded-full h-2 overflow-hidden">
                  <div className="bg-secondary-fixed h-2 rounded-full w-[72%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-space-lg relative z-10 flex flex-col gap-2">
              <Link
                className="w-full h-12 rounded-lg bg-secondary hover:bg-forest-rich text-on-primary font-label-lg text-label-lg font-bold flex items-center justify-center shadow-lg transition-all"
                to="/pendaftaran-online"
              >
                <span className="material-symbols-outlined mr-2 text-[20px]">edit_note</span>
                Isi Formulir Pendaftaran Sekarang
              </Link>
              <a
                className="w-full h-10 rounded-lg bg-ivory-pure/10 hover:bg-ivory-pure/20 text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center transition-all"
                href="https://wa.me/6281234567890"
                rel="noopener noreferrer"
                target="_blank"
              >
                Konsultasi PSB via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeeItem({ icon, title, desc, price, suffix, highlight }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-surface-tint text-[20px]">{icon}</span>
        <div>
          <span className="font-title-md text-body-md font-bold text-primary block">{title}</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">{desc}</span>
        </div>
      </div>
      <span
        className={`font-title-md text-body-md font-bold shrink-0 ${
          highlight ? "text-emerald-deep" : "text-primary"
        }`}
      >
        {price}
        {suffix && (
          <span className="font-label-md text-label-md font-normal text-on-surface-variant">
            {" "}
            {suffix}
          </span>
        )}
      </span>
    </div>
  );
}


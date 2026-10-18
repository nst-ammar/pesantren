import { useState } from "react";

const faqs = [
  {
    q: "Bagaimana mekanisme seleksi dan materi ujian masuk PSB?",
    a: "Materi seleksi terdiri dari 3 tahapan utama: 1) Tes kemampuan membaca Al-Qur'an (makharijul huruf & tajwid dasar) dan hafalan juz 30, 2) Tes Potensi Akademik mencakup Matematika dasar dan Bahasa Indonesia, serta 3) Wawancara psikologi motivasi santri dan komitmen kepesantrenan bersama orang tua/wali.",
  },
  {
    q: "Bagaimana jadwal perizinan jenguk orang tua ke pondok?",
    a: "Untuk menjaga konsentrasi adaptasi thalabul ilmi, kunjungan orang tua dijadwalkan sebulan sekali pada pekan kedua atau keempat hari Ahad pukul 08.00 - 17.00 WIB di area Gazebo dan Selasar Masjid Jami'. Perizinan kepulangan santri diberikan saat libur semester dan hari raya keagamaan.",
  },
  {
    q: "Bagaimana kebijakan penggunaan gawai (gadget & smartphone)?",
    a: "Santri tidak diperkenankan membawa smartphone pribadi ke dalam asrama. Pembelajaran berbasis digital dan riset internet difasilitasi penuh di Laboratorium Komputer dan Multimedia di bawah pengawasan instruktur. Komunikasi santri dengan orang tua disediakan melalui saluran telepon asrama terjadwal.",
  },
  {
    q: "Apakah ada program beasiswa pendidikan di Al-Hikmah?",
    a: "Ya, kami membuka Jalur Beasiswa Tahfidz Mutqin (bagi pendaftar yang telah hafal 15-30 juz) serta Beasiswa Kader Ulama & Yatim Dhuafa Berprestasi. Beasiswa mencakup pembebasan biaya gedung hingga 100% biaya SPP dan makan bulanan berdasarkan hasil verifikasi faktual.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    // Match the design's behaviour: opening one item closes all others.
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="w-full py-space-xl bg-surface">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="text-center mb-space-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-tint mb-space-xs">
            <span className="material-symbols-outlined text-[16px] text-surface-tint">
              help_outline
            </span>
            <span className="font-label-md text-label-md font-bold text-surface-tint uppercase tracking-wide">
              Tanya Jawab
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md font-semibold text-primary">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Ketahui panduan operasional, tata tertib, dan kebijakan kependidikan sebelum bergabung.
          </p>
        </div>

        <div className="space-y-space-sm" id="faq-container">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                  className="faq-toggle w-full flex items-center justify-between text-left font-title-md text-title-md font-bold text-primary focus:outline-none"
                >
                  <span>{item.q}</span>
                  <span
                    className={`material-symbols-outlined faq-icon transition-transform duration-200 text-surface-tint ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>
                <div
                  className={`faq-content mt-3 pt-3 border-t-0 text-on-surface-variant font-body-md text-body-md leading-relaxed ${
                    isOpen ? "" : "hidden"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

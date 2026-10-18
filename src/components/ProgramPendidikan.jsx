const programs = [
  {
    icon: "auto_stories",
    tag: "Sanad & Talaqqi",
    title: "Tahfidzul Qur'an",
    desc: "Target mutqin 30 juz ber-sanad melalui bimbingan masyaikh bersertifikasi, halaqah subuh dan ashar, serta evaluasi tasmi' berkala di hadapan dewan penguji.",
    output: "Syahadah Tahfidz 30 Juz & Sanad Matan Jazariyyah",
  },
  {
    icon: "library_books",
    tag: "Dirasah Islamiyah",
    title: "Kajian Kitab Salaf",
    desc: "Pendalaman gramatika Nahwu-Sharaf (Jurumiyah, Imrithi, Alfiyah Ibnu Malik), Ushul Fiqh, Hadits Arba'in, Riyadlus Shalihin, dan Tauhid Ahlussunnah wal Jama'ah.",
    output: "Kemampuan membaca literatur Arab gundul & istinbath hukum dasar",
  },
  {
    icon: "badge",
    tag: "Akreditasi A Unggul",
    title: "Formal Berstandar",
    desc: "MTs & Madrasah Aliyah (Peminatan IPA, IPS, & Agama) serta SMK IT konsentrasi Rekayasa Perangkat Lunak dan Jaringan Komputer dengan sertifikasi BNSP.",
    output: "Ijazah Negara & Portofolio SNBP/SNBT Perguruan Tinggi Top",
  },
  {
    icon: "translate",
    tag: "Bi'ah Lughawiyyah",
    title: "Bahasa Internasional",
    desc: "Penerapan bahasa Arab dan Inggris secara bergiliran dua mingguan di lingkungan asrama, pidato muhadhoroh tiga bahasa, dan program persiapan tes TOAFL/TOEFL.",
    output: "Kemahiran aktif berpidato, debat, & skor TOEFL/TOAFL tinggi",
  },
];

export default function ProgramPendidikan() {
  return (
    <section id="kurikulum" className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-tint mb-space-xs">
            <span className="material-symbols-outlined text-[16px] text-surface-tint">school</span>
            <span className="font-label-md text-label-md font-bold text-surface-tint uppercase tracking-wide">
              Pilar Keilmuan
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md font-semibold text-primary">
            Program Unggulan Terpadu
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Integrasi harmonis antara keilmuan turots salaf, hafalan Al-Qur'an mutqin, kurikulum
            formal Kementerian Agama/Kemendikbud, serta kompetensi teknologi modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl bg-surface-container-lowest p-space-md shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-forest-rich/10 text-forest-rich flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[28px]">{program.icon}</span>
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-tint text-surface-tint font-label-md text-label-md font-semibold mb-2">
                  {program.tag}
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold text-primary">
                  {program.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  {program.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t-0 bg-surface-container-low/50 rounded-lg p-3">
                <span className="font-label-md text-label-md font-bold text-primary block">
                  Output Lulusan:
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                  {program.output}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

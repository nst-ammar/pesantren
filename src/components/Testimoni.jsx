function Avatar({ initials, colorClass }) {
  return (
    <div
      className={`w-10 h-10 rounded-full ${colorClass} text-on-primary flex items-center justify-center font-bold shrink-0`}
    >
      {initials}
    </div>
  );
}

function Person({ name, role }) {
  return (
    <div className="flex items-center gap-3">
      <div className="min-w-0">
        <span className="font-title-md text-body-md font-bold text-primary block">{name}</span>
        <span className="font-body-sm text-body-sm text-on-surface-variant">{role}</span>
      </div>
    </div>
  );
}

export default function Testimoni() {
  return (
    <section id="testimoni" className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-tint mb-space-xs">
            <span className="material-symbols-outlined text-[16px] text-surface-tint">
              format_quote
            </span>
            <span className="font-label-md text-label-md font-bold text-surface-tint uppercase tracking-wide">
              Bukti Nyata
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md font-semibold text-primary">
            Kata Wali Santri &amp; Jejak Alumni
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Komitmen pendidikan holistik yang berakar pada keteladanan telah mengantar para santri
            menggapai masa depan mulia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {/* Testimoni wali santri */}
          <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex text-gold-accent mb-3">
                {[0, 1, 2, 3, 4].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                "Perubahan adab dan kemandirian putra kami luar biasa. Baru setahun di Al-Hikmah,
                setiap pulang liburan ia senantiasa bangun tahajud tanpa dibangunkan dan santun
                sekali berbicara dengan orang tua."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-space-md mt-space-md border-t-0 bg-surface-container-low/40 p-2.5 rounded-xl">
              <Avatar initials="IR" colorClass="bg-forest-rich" />
              <Person
                name="Ir. H. Ridwan Mansyur"
                role="Wali Santri Kelas XI MA - Jakarta Selatan"
              />
            </div>
          </div>

          {/* Spotlight alumni: Kairo */}
          <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-tint text-surface-tint font-label-md text-label-md font-semibold mb-3">
                Alumni Spotlight • Kairo, Mesir
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                "Pondasi nahwu sharaf dan bahasa Arab aktif selama 6 tahun di Al-Hikmah menjadi
                bekal terbesar saya saat menembus ujian seleksi beasiswa Kemenag ke Fakultas
                Ushuluddin Universitas Al-Azhar Kairo."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-space-md mt-space-md border-t-0 bg-surface-container-low/40 p-2.5 rounded-xl">
              <Avatar initials="MA" colorClass="bg-primary" />
              <Person
                name="Muhammad Azka, Lc."
                role="Alumni MA 2020 • Mahasiswa Univ. Al-Azhar Kairo"
              />
            </div>
          </div>

          {/* Spotlight alumni: kampus negeri */}
          <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-tint text-surface-tint font-label-md text-label-md font-semibold mb-3">
                Alumni Spotlight • Kampus Negeri
              </div>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                "Belajar sains dan hafalan Al-Qur'an ternyata saling menguatkan. Manajemen disiplin
                asrama melatih fokus saya menghadapi UTBK hingga diterima di Teknik Informatika ITB."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-space-md mt-space-md border-t-0 bg-surface-container-low/40 p-2.5 rounded-xl">
              <Avatar initials="FZ" colorClass="bg-surface-tint" />
              <Person
                name="Farhan Zulkarnain"
                role="Alumni SMK IT 2021 • Mahasiswa STEI ITB"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

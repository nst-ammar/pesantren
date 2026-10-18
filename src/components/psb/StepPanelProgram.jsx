import { PanelHeader } from "./fields.jsx";

const hafalanOptions = [
  { value: "0", icon: "auto_stories", label: "Belum Hafal / Juz 30 Sebagian" },
  { value: "1_2_juz", icon: "format_list_numbered", label: "1 - 2 Juz Mutqin" },
  { value: "3_5_juz", icon: "workspace_premium", label: "3 - 5 Juz" },
  { value: "gt_5_juz", icon: "military_tech", label: "Di Atas 5 Juz" },
];

const jalurOptions = [
  {
    value: "reguler",
    icon: "assignment",
    title: "Jalur Reguler",
    desc: "Tes kemampuan akademik standar, baca Al-Qur'an & wawancara kepribadian.",
  },
  {
    value: "prestasi_tahfidz",
    icon: "star",
    title: "Jalur Beasiswa Tahfidz",
    desc: "Khusus calon santri dengan hafalan minimal 5 Juz lancar (Uji sambung ayat & sanad).",
  },
  {
    value: "prestasi_akademik",
    icon: "emoji_events",
    title: "Jalur Prestasi Akademik",
    desc: "Juara OSN/KSM/Robotic/Pidato Bahasa Arab minimal tingkat Kota/Kabupaten.",
  },
];

export default function StepPanelProgram({ active, onBack, fileNames, onFileChange }) {
  return (
    <fieldset className={`step-panel space-y-space-lg ${active ? "" : "hidden"}`}>
      {/* Bagian III: Tahfidz & jalur */}
      <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm space-y-space-lg">
        <PanelHeader
          section="Bagian III"
          title="Kesiapan Tahfidz &amp; Jalur Masuk"
          icon="menu_book"
        />

        <div className="space-y-space-md">
          <div className="space-y-2">
            <label className="block font-label-lg text-label-lg text-on-surface font-semibold">
              Jumlah Hafalan Al-Qur'an Calon Santri Saat Ini{" "}
              <span className="text-error">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
              {hafalanOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container has-[:checked]:bg-primary-container has-[:checked]:text-on-primary transition-all text-center"
                >
                  <input
                    className="sr-only"
                    defaultChecked={option.value === "0"}
                    name="hafalan_quran"
                    type="radio"
                    value={option.value}
                  />
                  <span className="material-symbols-outlined text-[20px] mb-1">{option.icon}</span>
                  <span className="font-label-md text-label-md font-semibold">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block font-label-lg text-label-lg text-on-surface font-semibold">
              Pilihan Jalur Masuk PSB <span className="text-error">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
              {jalurOptions.map((option) => (
                <label
                  key={option.value}
                  className="p-4 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container has-[:checked]:bg-surface-tint has-[:checked]:text-on-primary transition-all flex flex-col justify-between"
                >
                  <input
                    className="sr-only"
                    defaultChecked={option.value === "reguler"}
                    name="jalur_masuk"
                    type="radio"
                    value={option.value}
                  />
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-title-md text-title-md font-bold">{option.title}</span>
                      <span className="material-symbols-outlined text-[20px]">{option.icon}</span>
                    </div>
                    <p className="font-body-sm text-body-sm opacity-90">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bagian IV: Unggah berkas (opsional) */}
      <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm space-y-space-md">
        <PanelHeader
          section="Bagian IV"
          title="Unggah Berkas Awal Pendaftaran"
          icon="upload_file"
          badge={
            <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-md text-label-md">
              Opsional / Dapat Menyusul
            </span>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="space-y-2">
            <span className="block font-label-lg text-label-lg text-on-surface font-semibold">
              1. Pas Foto Calon Santri (Ukuran 3x4)
            </span>
            <div className="relative group p-6 rounded-xl bg-surface-container-low text-center flex flex-col items-center justify-center transition-all hover:bg-surface-container">
              <input
                accept="image/jpeg,image/png"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="foto_santri"
                name="foto_santri"
                onChange={onFileChange}
                type="file"
              />
              <span className="material-symbols-outlined text-[36px] text-forest-rich mb-2 group-hover:scale-110 transition-transform">
                account_circle
              </span>
              <span
                className={`font-label-lg text-label-lg font-semibold ${
                  fileNames.foto_santri ? "text-forest-rich" : "text-primary"
                }`}
              >
                {fileNames.foto_santri || "Pilih Berkas Foto"}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Format JPG/PNG, maksimal ukuran 2 MB. Latar polos.
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <span className="block font-label-lg text-label-lg text-on-surface font-semibold">
              2. Scan / Foto Kartu Keluarga (KK)
            </span>
            <div className="relative group p-6 rounded-xl bg-surface-container-low text-center flex flex-col items-center justify-center transition-all hover:bg-surface-container">
              <input
                accept="image/jpeg,image/png,application/pdf"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="dokumen_kk"
                name="dokumen_kk"
                onChange={onFileChange}
                type="file"
              />
              <span className="material-symbols-outlined text-[36px] text-forest-rich mb-2 group-hover:scale-110 transition-transform">
                badge
              </span>
              <span
                className={`font-label-lg text-label-lg font-semibold ${
                  fileNames.dokumen_kk ? "text-forest-rich" : "text-primary"
                }`}
              >
                {fileNames.dokumen_kk || "Pilih Berkas KK / Akta"}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Format PDF, JPG, atau PNG maksimal 5 MB.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pernyataan & aksi akhir */}
      <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-md space-y-space-md">
        <label className="flex items-start gap-space-sm cursor-pointer p-space-sm rounded-lg hover:bg-surface-container-low transition-colors">
          <input
            className="w-5 h-5 mt-1 rounded text-forest-rich accent-forest-rich focus:ring-forest-rich"
            id="persetujuan_wali"
            name="persetujuan_wali"
            required
            type="checkbox"
          />
          <span className="font-body-md text-body-md text-on-surface leading-relaxed">
            Saya menyatakan dengan sesungguhnya bahwa seluruh informasi dan dokumen yang dicantumkan
            dalam formulir ini adalah benar dan valid. Saya bersedia menaati seluruh tata tertib
            pelaksanaan seleksi dan tata pergaulan Pesantren Modern Al-Hikmah.
          </span>
        </label>
        <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <button
            type="button"
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-surface-container text-primary font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Kembali</span>
          </button>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-space-sm">
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded-lg bg-forest-rich hover:bg-emerald-deep text-on-primary font-label-lg text-label-lg font-bold shadow-[0_4px_14px_rgba(0,128,0,0.3)] hover:shadow-[0_6px_20px_rgba(0,100,0,0.4)] transition-all transform active:scale-95"
              type="submit"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>Kirim Formulir Pendaftaran</span>
            </button>
          </div>
        </div>
      </div>
    </fieldset>
  );
}


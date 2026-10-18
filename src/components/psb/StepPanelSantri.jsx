import { Field, PanelHeader, inputClass } from "./fields.jsx";

export default function StepPanelSantri({ active, onNext }) {
  return (
    <fieldset className={`step-panel space-y-space-lg ${active ? "" : "hidden"}`}>
      <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm space-y-space-lg">
        <PanelHeader section="Bagian I" title="Identitas Pribadi Calon Santri" icon="school" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="md:col-span-2">
            <Field
              htmlFor="nama_lengkap"
              label="Nama Lengkap Calon Santri"
              required
              hint="Gunakan huruf kapital di awal setiap kata tanpa gelar."
            >
              <input
                className={inputClass}
                id="nama_lengkap"
                name="nama_lengkap"
                placeholder="Sesuai akta kelahiran / ijazah terakhir"
                required
                type="text"
              />
            </Field>
          </div>

          <Field htmlFor="nisn" label="NISN (Nomor Induk Siswa Nasional)" required>
            <input
              className={inputClass}
              id="nisn"
              name="nisn"
              maxLength={10}
              placeholder="10 digit nomor NISN"
              required
              type="text"
            />
          </Field>

          <Field htmlFor="nik" label="NIK Santri (Sesuai Kartu Keluarga)" required>
            <input
              className={inputClass}
              id="nik"
              name="nik"
              maxLength={16}
              placeholder="16 digit NIK"
              required
              type="text"
            />
          </Field>

          <Field htmlFor="tempat_lahir" label="Tempat Lahir" required>
            <input
              className={inputClass}
              id="tempat_lahir"
              name="tempat_lahir"
              placeholder="Contoh: Bogor / Jakarta"
              required
              type="text"
            />
          </Field>

          <Field htmlFor="tanggal_lahir" label="Tanggal Lahir" required>
            <input className={inputClass} id="tanggal_lahir" name="tanggal_lahir" required type="date" />
          </Field>

          {/* Jenis kelamin */}
          <div className="md:col-span-2 space-y-2">
            <label className="block font-label-lg text-label-lg text-on-surface font-semibold">
              Jenis Kelamin <span className="text-error">*</span>
            </label>
            <div className="grid grid-cols-2 gap-space-md">
              <label className="relative flex items-center justify-center p-3 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container has-[:checked]:bg-primary-container has-[:checked]:text-on-primary transition-all">
                <input className="sr-only" defaultChecked name="jenis_kelamin" required type="radio" value="putra" />
                <div className="flex items-center gap-2 font-label-lg text-label-lg font-semibold">
                  <span className="material-symbols-outlined text-[20px]">man</span>
                  <span>Putra (Santriwan)</span>
                </div>
              </label>
              <label className="relative flex items-center justify-center p-3 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container has-[:checked]:bg-primary-container has-[:checked]:text-on-primary transition-all">
                <input className="sr-only" name="jenis_kelamin" type="radio" value="putri" />
                <div className="flex items-center gap-2 font-label-lg text-label-lg font-semibold">
                  <span className="material-symbols-outlined text-[20px]">woman</span>
                  <span>Putri (Santriwati)</span>
                </div>
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <Field htmlFor="asal_sekolah" label="Asal Sekolah / Madrasah Sebelumnya" required>
              <input
                className={inputClass}
                id="asal_sekolah"
                name="asal_sekolah"
                placeholder="Contoh: SDIT Al-Ihsan / MIN 1 Kota Depok"
                required
                type="text"
              />
            </Field>
          </div>

          <div className="md:col-span-2">
            <Field htmlFor="jenjang_pilihan" label="Pilihan Jenjang Pendidikan di Al-Hikmah" required>
              <select
                className={inputClass}
                id="jenjang_pilihan"
                name="jenjang_pilihan"
                required
                defaultValue=""
              >
                <option disabled value="">
                  Pilih salah satu jenjang yang dituju
                </option>
                <option value="mts">Madrasah Tsanawiyah (MTs) Unggulan Terpadu - Setara SMP</option>
                <option value="ma_ipa">
                  Madrasah Aliyah (MA) Peminatan Sains &amp; Keagamaan - Setara SMA
                </option>
                <option value="smk_it">SMK Teknologi Informasi &amp; Robotika Industri</option>
              </select>
            </Field>
          </div>
        </div>

        <div className="pt-space-md flex justify-end">
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-forest-rich shadow-sm transition-all"
          >
            <span>Lanjut: Data Orang Tua</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </fieldset>
  );
}

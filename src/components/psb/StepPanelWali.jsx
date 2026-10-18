import { Field, PanelHeader, inputClass } from "./fields.jsx";

export default function StepPanelWali({ active, onBack, onNext }) {
  return (
    <fieldset className={`step-panel space-y-space-lg ${active ? "" : "hidden"}`}>
      <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm space-y-space-lg">
        <PanelHeader
          section="Bagian II"
          title="Data Orang Tua / Wali Santri"
          icon="escalator_warning"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <Field htmlFor="nama_ayah" label="Nama Lengkap Ayah / Wali" required>
            <input
              className={inputClass}
              id="nama_ayah"
              name="nama_ayah"
              placeholder="Nama lengkap beserta gelar (jika ada)"
              required
              type="text"
            />
          </Field>

          <Field htmlFor="pekerjaan_ayah" label="Pekerjaan Ayah / Wali" required>
            <select
              className={inputClass}
              id="pekerjaan_ayah"
              name="pekerjaan_ayah"
              required
              defaultValue=""
            >
              <option disabled value="">
                Pilih pekerjaan
              </option>
              <option value="pns">PNS / TNI / Polri</option>
              <option value="swasta">Karyawan Swasta</option>
              <option value="wiraswasta">Wiraswasta / Pengusaha</option>
              <option value="tenaga_pendidik">Guru / Dosen</option>
              <option value="profesional">Dokter / Advokat / Konsultan</option>
              <option value="lainnya">Lain-lain</option>
            </select>
          </Field>

          <Field htmlFor="nama_ibu" label="Nama Lengkap Ibu Kandung" required>
            <input
              className={inputClass}
              id="nama_ibu"
              name="nama_ibu"
              placeholder="Nama lengkap ibu kandung"
              required
              type="text"
            />
          </Field>

          <Field htmlFor="pekerjaan_ibu" label="Pekerjaan Ibu" required>
            <select
              className={inputClass}
              id="pekerjaan_ibu"
              name="pekerjaan_ibu"
              required
              defaultValue=""
            >
              <option disabled value="">
                Pilih pekerjaan
              </option>
              <option value="irt">Ibu Rumah Tangga (IRT)</option>
              <option value="pns">PNS / BUMN</option>
              <option value="swasta">Karyawan Swasta</option>
              <option value="wiraswasta">Wirausaha / Pedagang</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </Field>

          <div className="md:col-span-2">
            <Field
              htmlFor="no_whatsapp"
              label="Nomor WhatsApp Aktif Wali Santri"
              required
              hint="Penting: Seluruh notifikasi bukti pendaftaran, jadwal tes seleksi, dan pengumuman kelulusan dikirim ke nomor ini."
            >
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-forest-rich font-bold font-body-md text-body-md">
                  +62
                </span>
                <input
                  className="w-full pl-14 pr-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-forest-rich shadow-sm transition-all"
                  id="no_whatsapp"
                  name="no_whatsapp"
                  placeholder="812-3456-7890 (Tanpa angka nol di awal)"
                  required
                  type="tel"
                />
              </div>
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field
              htmlFor="alamat_domisili"
              label="Alamat Lengkap Tempat Tinggal (Domisili Sekarang)"
              required
            >
              <textarea
                className={inputClass}
                id="alamat_domisili"
                name="alamat_domisili"
                placeholder="Nama jalan, RT/RW, Dusun/Kelurahan, Kecamatan"
                required
                rows="3"
              ></textarea>
            </Field>
          </div>

          <Field htmlFor="kota_kabupaten" label="Kota / Kabupaten" required>
            <input
              className={inputClass}
              id="kota_kabupaten"
              name="kota_kabupaten"
              placeholder="Contoh: Kabupaten Bogor"
              required
              type="text"
            />
          </Field>

          <Field htmlFor="provinsi" label="Provinsi" required>
            <input
              className={inputClass}
              id="provinsi"
              name="provinsi"
              placeholder="Contoh: Jawa Barat"
              required
              type="text"
            />
          </Field>
        </div>

        <div className="pt-space-md flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-space-md py-3 rounded-lg bg-surface-container text-primary font-label-lg text-label-lg font-semibold hover:bg-surface-container-high transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Kembali</span>
          </button>
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-forest-rich shadow-sm transition-all"
          >
            <span>Lanjut: Pilihan Program</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </fieldset>
  );
}


export default function FormSuccessCard() {
  return (
    <div
      className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md space-y-space-md"
      id="form-success-card"
    >
      <div className="w-16 h-16 rounded-full bg-forest-rich text-on-primary flex items-center justify-center mx-auto">
        <span className="material-symbols-outlined text-[36px]">check_circle</span>
      </div>
      <div className="text-center space-y-1">
        <h3 className="font-headline-md text-headline-md text-primary">
          Alhamdulillah! Data Berhasil Diterima
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
          Nomor Registrasi Awal Anda:{" "}
          <strong className="text-forest-rich font-bold">AH-PSB-2025-0891</strong>. Bukti ringkasan
          formulir serta instruksi transfer biaya pendaftaran telah dikirim ke WhatsApp Anda.
        </p>
      </div>
      <div className="p-space-md rounded-lg bg-surface-container-low max-w-md mx-auto text-center space-y-2">
        <span className="font-label-md text-label-md text-on-surface-variant block uppercase tracking-wider">
          Tahap Selanjutnya:
        </span>
        <span className="font-body-sm text-body-sm text-primary font-semibold block">
          Konfirmasi Pembayaran &amp; Cetak Kartu Peserta Ujian
        </span>
      </div>
      <div className="flex justify-center gap-space-md pt-2">
        <a
          className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-forest-rich text-on-primary font-label-lg text-label-lg font-bold"
          href="https://wa.me/6281234567890?text=Halo%20Panitia%20PSB%20Al-Hikmah,%20saya%20sudah%20mengisi%20formulir%20PSB"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>Hubungi Panitia PSB via WA</span>
        </a>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StepIndicator from "../components/psb/StepIndicator.jsx";
import StepPanelSantri from "../components/psb/StepPanelSantri.jsx";
import StepPanelWali from "../components/psb/StepPanelWali.jsx";
import StepPanelProgram from "../components/psb/StepPanelProgram.jsx";
import FormSuccessCard from "../components/psb/FormSuccessCard.jsx";
import PsbAside from "../components/psb/PsbAside.jsx";

const DEFAULT_TITLE =
  "Pesantren Modern Al-Hikmah — Generasi Qur'ani, Berakhlak Karimah & Berwawasan Global";

export default function PendaftaranOnlinePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [fileNames, setFileNames] = useState({ foto_santri: "", dokumen_kk: "" });

  useEffect(() => {
    document.title =
      "Formulir Pendaftaran Santri Baru (PSB) — Pesantren Modern Al-Hikmah";
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  // Mirrors the design's jumpToStep(): switch panel and scroll below the header.
  const goToStep = (step) => {
    setCurrentStep(step);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    if (files && files.length > 0) {
      setFileNames((prev) => ({ ...prev, [name]: files[0].name }));
    }
  };

  // Mirrors the design's handleFormSubmit(): show the acknowledgment card.
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 160, behavior: "smooth" });
  };

  return (
    <main className="w-full pt-[7.5rem] bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        {/* Top notification & breadcrumb banner */}
        <section className="bg-primary-container text-on-primary py-space-md px-margin-mobile md:px-margin-tablet lg:px-margin shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs font-label-md text-label-md text-primary-fixed">
              <Link className="hover:underline opacity-80" to="/">
                Beranda
              </Link>
              <span className="opacity-40">/</span>
              <Link className="hover:underline opacity-80" to="/#psb">
                Info PSB
              </Link>
              <span className="opacity-40">/</span>
              <span className="text-on-primary font-bold">Formulir Pendaftaran Online</span>
            </div>
            <div className="flex flex-wrap items-center gap-space-md text-on-primary/90 font-label-md text-label-md">
              <span className="inline-flex items-center gap-1.5 bg-forest-rich/60 px-3 py-1 rounded-full text-on-primary">
                <span className="w-2 h-2 rounded-full bg-lime-vibrant animate-pulse"></span>
                Gelombang 1: Dibuka s.d. 20 Desember 2024
              </span>
              <span className="hidden sm:inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-lime-glow">
                  receipt_long
                </span>
                Biaya Seleksi: Rp 450.000
              </span>
            </div>
          </div>
        </section>
        {/* Header title area */}
        <header className="py-space-xl px-margin-mobile md:px-margin-tablet lg:px-margin bg-surface-container-low">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl space-y-space-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-emerald-deep font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Portal Resmi Penerimaan Santri Baru
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Formulir Pendaftaran Santri Baru (PSB)
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Tahun Ajaran 2025/2026. Silakan lengkapi formulir pendaftaran awal di bawah ini
                dengan cermat. Tim panitia PSB akan memvalidasi berkas dan mengonfirmasi via
                WhatsApp resmi pesantren.
              </p>
            </div>
            <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-forest-rich">
                <span className="material-symbols-outlined text-[28px]">support_agent</span>
              </div>
              <div>
                <span className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  Pusat Informasi PSB
                </span>
                <span className="font-title-md text-title-md font-bold text-primary">
                  0812-3456-7890
                </span>
                <span className="block font-body-sm text-body-sm text-forest-rich">
                  Aktif Setiap Hari: 08.00 - 16.00 WIB
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Multi-step indicator */}
        <StepIndicator currentStep={currentStep} onStepChange={goToStep} />

        {/* Main content: form + aside */}
        <div className="py-space-xl px-margin-mobile md:px-margin-tablet lg:px-margin">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <section className="lg:col-span-8 space-y-space-xl">
              <form
                className={submitted ? "hidden" : "space-y-space-xl"}
                id="psb-registration-form"
                onSubmit={handleSubmit}
              >
                <StepPanelSantri active={currentStep === 1} onNext={() => goToStep(2)} />
                <StepPanelWali
                  active={currentStep === 2}
                  onBack={() => goToStep(1)}
                  onNext={() => goToStep(3)}
                />
                <StepPanelProgram
                  active={currentStep === 3}
                  onBack={() => goToStep(2)}
                  fileNames={fileNames}
                  onFileChange={handleFileChange}
                />
              </form>

              {submitted && <FormSuccessCard />}
            </section>

            <PsbAside />
          </div>
        </div>
      </div>
    </main>
  );
}


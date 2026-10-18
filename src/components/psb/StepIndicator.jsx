const steps = [
  { n: 1, label: "Langkah 1", title: "Data Calon Santri" },
  { n: 2, label: "Langkah 2", title: "Data Orang Tua / Wali" },
  { n: 3, label: "Langkah 3", title: "Program & Berkas" },
];

export default function StepIndicator({ currentStep, onStepChange }) {
  return (
    <section className="px-margin-mobile md:px-margin-tablet lg:px-margin -mt-4 z-10">
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Alur Pengisian Formulir"
          className="bg-surface-container-lowest rounded-xl shadow-md p-space-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm md:gap-space-md">
            {steps.map((step) => {
              const isActive = currentStep === step.n;
              return (
                <button
                  key={step.n}
                  type="button"
                  onClick={() => onStepChange(step.n)}
                  className={`step-tab text-left flex items-center gap-space-sm p-space-sm rounded-lg transition-all ${
                    isActive
                      ? "bg-surface-container-high text-primary font-bold"
                      : "hover:bg-surface-container text-on-surface-variant"
                  }`}
                >
                  <span
                    className={`step-badge w-8 h-8 rounded-full flex items-center justify-center font-label-lg text-label-lg font-bold ${
                      isActive
                        ? "bg-forest-rich text-on-primary"
                        : "bg-surface-container-highest text-on-surface-variant"
                    }`}
                  >
                    {step.n}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`font-label-md text-label-md uppercase tracking-wider ${
                        isActive ? "text-forest-rich" : "opacity-60"
                      }`}
                    >
                      {step.label}
                    </span>
                    <span className="font-title-md text-title-md truncate">{step.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
}

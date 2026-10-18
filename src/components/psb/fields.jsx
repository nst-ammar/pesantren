// Shared form primitives for the PSB registration form.
// The design repeats this exact input styling on every field.

export const inputClass =
  "w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-forest-rich shadow-sm transition-all";

export function Field({ htmlFor, label, hint, required = false, children }) {
  return (
    <div className="space-y-1">
      <label
        className="block font-label-lg text-label-lg text-on-surface font-semibold"
        htmlFor={htmlFor}
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      {children}
      {hint && <p className="font-body-sm text-body-sm text-on-surface-variant">{hint}</p>}
    </div>
  );
}

export function PanelHeader({ section, title, icon, badge }) {
  return (
    <div className="flex items-center justify-between pb-space-sm">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-label-md text-label-md text-forest-rich font-bold tracking-widest uppercase">
            {section}
          </span>
          {badge}
        </div>
        <h2 className="font-headline-sm text-headline-sm text-primary">{title}</h2>
      </div>
      <span className="material-symbols-outlined text-[32px] text-surface-tint">{icon}</span>
    </div>
  );
}

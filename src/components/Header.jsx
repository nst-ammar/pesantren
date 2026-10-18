import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { images } from "../data/images.js";

// Nav items anchor to their matching section on the beranda page.
const navItems = [
  { path: "beranda", label: "Beranda" },
  { path: "profil", label: "Profil & Sejarah" },
  { path: "kurikulum", label: "Program Pendidikan" },
  { path: "fasilitas", label: "Fasilitas" },
  { path: "psb", label: "Info PSB & Biaya" },
  { path: "berita", label: "Galeri & Berita" },
  { path: "faq", label: "FAQ" },
  { path: "kontak", label: "Kontak" },
];

export default function Header() {
  const { pathname } = useLocation();
  const onHomePage = pathname === "/";
  const [activePath, setActivePath] = useState("beranda");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-spy: highlight the nav item of the section currently in view.
  // Only meaningful on the beranda page; other pages have no active item.
  useEffect(() => {
    if (!onHomePage) {
      setActivePath(null);
      return;
    }
    const handleScroll = () => {
      const offset = window.scrollY + 160;
      let current = navItems[0].path;
      for (const item of navItems) {
        const el = document.getElementById(item.path);
        if (el && el.offsetTop <= offset) current = item.path;
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = navItems[navItems.length - 1].path;
      }
      setActivePath(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onHomePage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,75,35,0.06)]">
      {/* Top announcement bar */}
      <div className="bg-primary-container text-on-primary px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="max-w-7xl mx-auto h-10 flex items-center justify-between font-label-md text-label-md">
          <div className="flex items-center gap-space-sm">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-forest-rich text-on-primary font-label-md text-label-md uppercase tracking-wider">
              PSB 2025/2026
            </span>
            <span className="hidden sm:inline font-body-sm text-body-sm text-on-primary">
              Penerimaan Santri Baru Gelombang 1 Resmi Dibuka
            </span>
          </div>
          <div className="flex items-center gap-space-lg text-on-primary/90 font-label-md text-label-md">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>WhatsApp: +62 812-3456-7890</span>
            </span>
            <span className="hidden md:flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>psb@alhikmah.sch.id</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-space-md">
          <Link to="/" className="flex items-center gap-space-md" onClick={closeMenu}>
            <img alt="Logo Pesantren Al-Hikmah" className="h-8 w-auto object-contain" src={images.logo} />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-primary leading-tight">
                Pesantren Modern
              </span>
              <span className="font-label-md text-label-md tracking-wider text-surface-tint uppercase font-bold">
                Al-Hikmah
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-space-xs font-label-lg text-label-lg">
            {navItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <Link
                  key={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "text-primary font-bold bg-surface-container-high"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                  to={`/#${item.path}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-space-md">
            <Link
              className="hidden sm:inline-flex items-center justify-center h-10 px-space-lg rounded-lg bg-forest-rich hover:bg-emerald-deep text-on-primary font-label-lg text-label-lg font-semibold shadow-[0_4px_14px_rgba(0,75,35,0.2)] transition-all hover:shadow-[0_6px_20px_rgba(0,100,0,0.3)]"
              to="/pendaftaran-online"
            >
              Daftar PSB Online
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
            {/* Mobile menu toggle (the design hides nav below xl with no alternative) */}
            <button
              type="button"
              aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="xl:hidden w-9 h-9 rounded-lg bg-surface-container-high text-primary flex items-center justify-center hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div className="xl:hidden border-t border-outline-variant bg-surface/95 backdrop-blur-xl px-margin-mobile md:px-margin-tablet shadow-lg">
          <nav className="max-w-7xl mx-auto py-space-sm flex flex-col font-label-lg text-label-lg">
            {navItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <Link
                  key={item.path}
                  className={`px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? "text-primary font-bold bg-surface-container-high"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                  to={`/#${item.path}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              className="mt-2 mb-1 inline-flex items-center justify-center h-11 px-space-lg rounded-lg bg-forest-rich text-on-primary font-semibold"
              to="/pendaftaran-online"
              onClick={closeMenu}
            >
              Daftar PSB Online
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


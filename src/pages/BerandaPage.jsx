import Hero from "../components/Hero.jsx";
import Sambutan from "../components/Sambutan.jsx";
import ProgramPendidikan from "../components/ProgramPendidikan.jsx";
import Fasilitas from "../components/Fasilitas.jsx";
import Pendaftaran from "../components/Pendaftaran.jsx";
import Berita from "../components/Berita.jsx";
import Testimoni from "../components/Testimoni.jsx";
import Faq from "../components/Faq.jsx";
import Kontak from "../components/Kontak.jsx";

export default function BerandaPage() {
  return (
    <main className="w-full pt-[7.5rem] bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        <Hero />
        <Sambutan />
        <ProgramPendidikan />
        <Fasilitas />
        <Pendaftaran />
        <Berita />
        <Testimoni />
        <Faq />
        <Kontak />
      </div>
    </main>
  );
}

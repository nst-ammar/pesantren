import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import BerandaPage from "./pages/BerandaPage.jsx";
import PendaftaranOnlinePage from "./pages/PendaftaranOnlinePage.jsx";

export default function SiteLayout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<BerandaPage />} />
        <Route path="/pendaftaran-online" element={<PendaftaranOnlinePage />} />
      </Routes>
      <Footer />
    </>
  );
}

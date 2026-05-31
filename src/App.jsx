import { useState } from "react";
import { useIsMobile } from "./hooks/useIsMobile";
import { C } from "./constants";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

const SECTION_MAP = {
  Acasă: "home",
  "Despre noi": "about",
  Meniu: "menu",
  Galerie: "gallery",
  Contact: "contact",
};

const handleCall = () => {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "tel:+40725680000";
  } else {
    window.open("https://wa.me/40725680000", "_blank");
  }
};

export default function App() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState("Acasă");

  const scrollTo = (section) => {
    setActive(section);
    document.getElementById(SECTION_MAP[section])?.scrollIntoView({ behavior: "smooth" });
  };

  const pad = isMobile ? "56px 16px" : "90px 24px";

  return (
    <div
      style={{
        background: C.bg,
        color: C.text,
        fontFamily: "'Outfit', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <GlobalStyles />
      <Navbar active={active} onScrollTo={scrollTo} onCall={handleCall} isMobile={isMobile} />
      <HeroSection isMobile={isMobile} onScrollTo={scrollTo} />
      <AboutSection isMobile={isMobile} onCall={handleCall} pad={pad} />
      <MenuSection isMobile={isMobile} pad={pad} />
      <GallerySection isMobile={isMobile} pad={pad} />
      <ContactSection isMobile={isMobile} pad={pad} />
      <Footer isMobile={isMobile} />
      <ChatWidget isMobile={isMobile} />
    </div>
  );
}

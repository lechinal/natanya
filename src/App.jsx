import { useState, lazy, Suspense } from "react";
import { useIsMobile } from "./hooks/useIsMobile";
import { C } from "./constants";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NotFound from "./components/NotFound";

const AboutSection    = lazy(() => import("./components/AboutSection"));
const MenuSection     = lazy(() => import("./components/MenuSection"));
const GallerySection  = lazy(() => import("./components/GallerySection"));
const ContactSection  = lazy(() => import("./components/ContactSection"));
const Footer          = lazy(() => import("./components/Footer"));
const WhatsAppButton  = lazy(() => import("./components/WhatsAppButton"));
const CookieConsent   = lazy(() => import("./components/CookieConsent"));

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

const isValidPath = () => {
  const path = window.location.pathname;
  return path === "/" || path === "";
};

export default function App() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState("Acasă");

  const scrollTo = (section) => {
    setActive(section);
    document.getElementById(SECTION_MAP[section])?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => {
    window.history.pushState({}, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("Acasă");
  };

  const pad = isMobile ? "56px 16px" : "90px 24px";

  if (!isValidPath()) {
    return (
      <>
        <GlobalStyles />
        <NotFound onGoHome={goHome} />
      </>
    );
  }

  return (
    <div
      style={{
        background: C.bg,
        color: C.text,
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <GlobalStyles />
      <Navbar active={active} onScrollTo={scrollTo} onCall={handleCall} isMobile={isMobile} />
      <HeroSection isMobile={isMobile} onScrollTo={scrollTo} />
      <Suspense fallback={null}>
        <AboutSection isMobile={isMobile} onCall={handleCall} pad={pad} />
        <MenuSection isMobile={isMobile} pad={pad} />
        <GallerySection isMobile={isMobile} pad={pad} />
        <ContactSection isMobile={isMobile} pad={pad} />
        <Footer isMobile={isMobile} />
        <WhatsAppButton />
        <CookieConsent />
      </Suspense>
    </div>
  );
}

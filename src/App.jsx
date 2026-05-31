import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo/natanya_transparent_200.png";

const NAV_LINKS = ["Acasă", "Despre noi", "Meniu", "Galerie", "Contact"];

const MENIU = [
  {
    categorie: "SIGNATURE NATANYA",
    emoji: "🥙",
    items: [
      {
        nume: "Piadina",
        desc: "Lipie natanya proaspătă (200g), prosciuto cotto (40g), mozzarella (40g), salată verde (30g), roșii (30g), două sosuri (60g)",
        pret: "25 Lei",
        gramaj: "400g",
      },
      {
        nume: "Șnițel la lipie",
        desc: "Lipie natanya proaspătă (200g), carne de pui (150g), cartofi prăjiți (150g), legume (150g), sosuri (80g)",
        pret: "30 Lei",
        gramaj: "730g",
      },
      {
        nume: "Șnițel la lipie cu cremă de brânză",
        desc: "Lipie natanya proaspătă (200g), carne de pui (150g), cartofi prăjiți (150g), legume (150g), cremă de brânză (30g), sosuri (80g)",
        pret: "32 Lei",
        gramaj: "760g",
      },
    ],
  },
  {
    categorie: "SHAORMA",
    emoji: "🌯",
    items: [
      {
        nume: "Shaorma la lipie",
        desc: "Lipie natanya proaspătă (200g), carne de pui (120g), cartofi prăjiți (150g), legume (150g), sosuri (80g)",
        pret: "30 Lei",
        gramaj: "700g",
      },
    ],
  },
  {
    categorie: "KEBAB",
    emoji: "🍢",
    items: [
      {
        nume: "Kebab pui",
        desc: "Chiflă coaptă (200g), carne de pui (120g), cartofi prăjiți (150g), legume (150g), sosuri (80g)",
        pret: "33 Lei",
        gramaj: "700g",
      },
      {
        nume: "Kebab porc",
        desc: "Chiflă coaptă (200g), carne de porc (120g), cartofi prăjiți (150g), legume (150g), sosuri (80g)",
        pret: "33 Lei",
        gramaj: "700g",
      },
    ],
  },
  {
    categorie: "LA FARFURIE",
    emoji: "🍽️",
    items: [
      {
        nume: "Șnițel la farfurie",
        desc: "Lipie natanya proaspătă (200g), carne de pui (150g), cartofi prăjiți (150g), legume (100g), sosuri (40g)",
        pret: "32 Lei",
        gramaj: "640g",
      },
      {
        nume: "Shaorma la farfurie",
        desc: "Lipie natanya proaspătă (200g), carne de pui (200g), cartofi prăjiți (150g), legume (100g), sosuri (40g)",
        pret: "35 Lei",
        gramaj: "690g",
      },
    ],
  },
  {
    categorie: "WINGS BOX",
    emoji: "🍗",
    items: [
      {
        nume: "4 aripioare",
        desc: "+ cartofi (150g) + sos caramel (30g)",
        pret: "25 Lei",
        gramaj: "",
      },
      {
        nume: "8 aripioare",
        desc: "+ cartofi (200g) + sos caramel (30g)",
        pret: "35 Lei",
        gramaj: "",
      },
      {
        nume: "12 aripioare",
        desc: "+ cartofi (250g) + sos caramel (30g)",
        pret: "43 Lei",
        gramaj: "",
      },
    ],
  },
  {
    categorie: "MENIU COPII",
    emoji: "👶",
    items: [
      {
        nume: "Shaorma box",
        desc: "Carne de pui (100g), cartofi prăjiți (100g), lipie natanya proaspătă (100g), sos (20g)",
        pret: "22 Lei",
        gramaj: "320g",
      },
      {
        nume: "Crispy box",
        desc: "3 bucăți, lipie natanya proaspătă (100g), cartofi prăjiți (100g), sos (20g)",
        pret: "22 Lei",
        gramaj: "",
      },
    ],
  },
  {
    categorie: "COMBO",
    emoji: "🎁",
    items: [
      {
        nume: "Combo Șnițel la lipie + suc",
        desc: "",
        pret: "35 Lei",
        gramaj: "",
      },
      { nume: "Combo Shaorma + suc", desc: "", pret: "35 Lei", gramaj: "" },
      { nume: "Combo Kebab + suc", desc: "", pret: "35 Lei", gramaj: "" },
      { nume: "Combo Kids menu + suc", desc: "", pret: "27 Lei", gramaj: "" },
    ],
  },
  {
    categorie: "RĂCORITOARE",
    emoji: "🥤",
    items: [
      {
        nume: "Coca-Cola / Fanta / Sprite",
        desc: "500 ml",
        pret: "10 Lei",
        gramaj: "",
      },
      {
        nume: "Coca-Cola / Fanta / Sprite",
        desc: "330 ml",
        pret: "8 Lei",
        gramaj: "",
      },
      {
        nume: "Apă plată / carbogazoasă",
        desc: "500 ml",
        pret: "8 Lei",
        gramaj: "",
      },
    ],
  },
  {
    categorie: "SOSURI & GARNITURI",
    emoji: "🫙",
    items: [
      { nume: "Sos tzatziki", desc: "40g", pret: "5 Lei", gramaj: "" },
      { nume: "Sos picant", desc: "40g", pret: "5 Lei", gramaj: "" },
      { nume: "Top Secret", desc: "40g", pret: "5 Lei", gramaj: "" },
      { nume: "Maioneză", desc: "40g", pret: "5 Lei", gramaj: "" },
      { nume: "Ketchup", desc: "40g", pret: "5 Lei", gramaj: "" },
      { nume: "Pink", desc: "40g", pret: "5 Lei", gramaj: "" },
      {
        nume: "Lipie Natanya proaspătă",
        desc: "200g",
        pret: "5 Lei",
        gramaj: "",
      },
    ],
  },
];

const CHAT_REPLIES = [
  "Sunați la +40 725 680 000 pentru comenzi sau rezervări 🌯",
  "Programul nostru: zilnic 10:00–23:00 ⏰",
  "Toate produsele sunt preparate proaspăt la comandă 👨‍🍳",
  "Lipia Natanya e preparată zilnic în restaurant! 🥙",
  "Vă așteptăm cu drag la restaurant!",
];

const C = {
  bg: "#120800",
  bg2: "#0e0600",
  card: "#1e1000",
  red: "#8B1A1A",
  redLight: "#B22222",
  gold: "#D4891A",
  goldLight: "#E8A030",
  beige: "#C8A882",
  text: "#F5F0E8",
  muted: "#9A8870",
  border: "#2E1A08",
};

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function FadeIn({ id, children, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("Acasă");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { from: "bot", text: "Bună! 👋 Cu ce te pot ajuta?" },
  ]);
  const [form, setForm] = useState({ nume: "", email: "", mesaj: "" });
  const [formSent, setFormSent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCat, setActiveCat] = useState("SIGNATURE NATANYA");
  const chatEndRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const scrollTo = (section) => {
    setActive(section);
    setMobileOpen(false);
    const map = {
      Acasă: "home",
      "Despre noi": "about",
      Meniu: "menu",
      Galerie: "gallery",
      Contact: "contact",
    };
    document
      .getElementById(map[section])
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const sendChat = () => {
    if (!chatMsg.trim()) return;
    const reply = CHAT_REPLIES[Math.floor(Math.random() * CHAT_REPLIES.length)];
    setChatHistory((h) => [
      ...h,
      { from: "user", text: chatMsg },
      { from: "bot", text: reply },
    ]);
    setChatMsg("");
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #8B1A1A; border-radius: 2px; }
        input, textarea { outline: none; font-family: 'Outfit', sans-serif; }
        input:focus, textarea:focus { border-color: #D4891A !important; }
        .btn-red { background: #8B1A1A; color: #F5F0E8; border: none; padding: 12px 26px; border-radius: 8px; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 15px; cursor: pointer; transition: all 0.2s; }
        .btn-red:hover { background: #B22222; transform: translateY(-1px); }
        .btn-gold { background: transparent; color: #D4891A; border: 2px solid #D4891A; padding: 11px 24px; border-radius: 8px; font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s; }
        .btn-gold:hover { background: #D4891A; color: #120800; }
        .nav-btn { background: none; border: none; color: #9A8870; font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 600; cursor: pointer; padding: 8px 2px; transition: color 0.2s; border-bottom: 2px solid transparent; }
        .nav-btn.active { color: #D4891A; border-bottom-color: #D4891A; }
        .nav-btn:hover { color: #D4891A; }
        .menu-card { background: #1e1000; border: 1px solid #2E1A08; border-radius: 14px; padding: 18px; transition: all 0.25s; }
        .menu-card:hover { border-color: #D4891A; background: #271500; transform: translateY(-2px); }
        .cat-btn { background: transparent; border: 1px solid #2E1A08; color: #9A8870; padding: 8px 16px; border-radius: 100px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; white-space: nowrap; flex-shrink: 0; }
        .cat-btn.active { background: #8B1A1A; border-color: #8B1A1A; color: #F5F0E8; }
        .cat-btn:hover { border-color: #D4891A; color: #D4891A; }
        .gal-item { border-radius: 14px; aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.3s; position: relative; overflow: hidden; border: 1px solid #2E1A08; }
        .gal-item:hover { transform: scale(1.04); }
        .gal-item:hover .gal-label { opacity: 1 !important; }
        .mobile-nav-item { background: none; border: none; color: #F5F0E8; font-family: 'Outfit', sans-serif; font-size: 17px; font-weight: 600; cursor: pointer; padding: 15px 0; text-align: left; width: 100%; border-bottom: 1px solid #2E1A08; transition: color 0.2s; }
        .mobile-nav-item.active, .mobile-nav-item:hover { color: #D4891A; }
        .info-row { display: flex; gap: 14px; margin-bottom: 18px; align-items: flex-start; }
        .info-icon { width: 42px; height: 42px; min-width: 42px; background: rgba(139,26,26,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; }
        .about-card { background: #1e1000; border-radius: 16px; padding: 22px 18px; border: 1px solid #2E1A08; }
        .divider { width: 60px; height: 3px; background: linear-gradient(90deg, #8B1A1A, #D4891A); border-radius: 2px; margin: 12px auto 0; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .hero-emoji { animation: float 5s ease-in-out infinite; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: "rgba(12,5,0,0.95)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            height: 62,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img
              src={logo}
              alt="Natanya logo"
              style={{
                width: 48,
                height: 48,
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: C.red,
                  letterSpacing: 2,
                  lineHeight: 1,
                }}
              >
                NATANYA
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: C.beige,
                  letterSpacing: 0.5,
                  fontStyle: "italic",
                }}
              >
                Gustul începe cu lipia noastră proaspătă
              </div>
            </div>
          </div>
          {!isMobile && (
            <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {NAV_LINKS.map((l) => (
                <button
                  key={l}
                  className={`nav-btn${active === l ? " active" : ""}`}
                  onClick={() => scrollTo(l)}
                >
                  {l}
                </button>
              ))}
              <button
                className="btn-red"
                style={{ padding: "8px 18px", fontSize: 13 }}
              >
                📞 Sună acum
              </button>
            </div>
          )}
          {isMobile && (
            <button
              onClick={() => setMobileOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 24,
                    height: 2,
                    background: mobileOpen && i === 1 ? "transparent" : C.gold,
                    borderRadius: 2,
                    transition: "all 0.3s",
                    transform: mobileOpen
                      ? i === 0
                        ? "rotate(45deg) translate(5px,5px)"
                        : i === 2
                          ? "rotate(-45deg) translate(5px,-5px)"
                          : ""
                      : "none",
                  }}
                />
              ))}
            </button>
          )}
        </div>
        {isMobile && mobileOpen && (
          <div
            style={{
              background: "#0e0600",
              borderTop: `1px solid ${C.border}`,
              padding: "8px 20px 24px",
            }}
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                className={`mobile-nav-item${active === l ? " active" : ""}`}
                onClick={() => scrollTo(l)}
              >
                {l}
              </button>
            ))}
            <button
              className="btn-red"
              style={{
                width: "100%",
                marginTop: 16,
                padding: 14,
                fontSize: 16,
              }}
            >
              📞 +40 725 680 000
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        style={{
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          paddingTop: 62,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 65% 45%, rgba(139,26,26,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: isMobile ? "48px 20px 60px" : "0 24px",
            width: "100%",
          }}
        >
          {isMobile ? (
            <div style={{ textAlign: "center" }}>
              <div
                className="hero-emoji"
                style={{ fontSize: 110, marginBottom: 20 }}
              >
                🥙
              </div>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(139,26,26,0.2)",
                  border: "1px solid rgba(139,26,26,0.4)",
                  borderRadius: 100,
                  padding: "5px 14px",
                  fontSize: 12,
                  color: C.gold,
                  marginBottom: 18,
                  fontWeight: 600,
                }}
              >
                ★★★★★ Cea mai bună lipie din oraș
              </div>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(32px,9vw,46px)",
                  lineHeight: 1.15,
                  marginBottom: 8,
                }}
              >
                Gustul începe cu
              </h1>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(32px,9vw,46px)",
                  lineHeight: 1.15,
                  marginBottom: 20,
                  color: C.gold,
                  fontStyle: "italic",
                }}
              >
                lipia noastră proaspătă
              </h1>
              <p
                style={{
                  color: C.muted,
                  fontSize: 15,
                  lineHeight: 1.7,
                  marginBottom: 28,
                  maxWidth: 340,
                  margin: "0 auto 28px",
                }}
              >
                Shaorma, piadine, kebab — preparate zilnic din ingrediente
                proaspete.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginBottom: 36,
                }}
              >
                <button
                  className="btn-red"
                  onClick={() => scrollTo("Meniu")}
                  style={{ fontSize: 15, padding: "14px 28px" }}
                >
                  Vezi meniul 🌯
                </button>
                <button
                  className="btn-gold"
                  onClick={() => scrollTo("Contact")}
                  style={{ fontSize: 14, padding: "13px 22px" }}
                >
                  Locație & Contact
                </button>
              </div>
              <div
                style={{ display: "flex", justifyContent: "center", gap: 36 }}
              >
                {[
                  ["100%", "Proaspăt zilnic"],
                  ["★★★★★", "Google"],
                  ["+40 725", "680 000"],
                ].map(([v, l]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div
                      style={{ fontSize: 16, fontWeight: 700, color: C.gold }}
                    >
                      {v}
                    </div>
                    <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 60,
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(139,26,26,0.2)",
                    border: "1px solid rgba(139,26,26,0.4)",
                    borderRadius: 100,
                    padding: "6px 16px",
                    fontSize: 13,
                    color: C.gold,
                    marginBottom: 22,
                    fontWeight: 600,
                  }}
                >
                  ★★★★★ Cea mai bună lipie din oraș
                </div>
                <h1
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(40px,5vw,62px)",
                    lineHeight: 1.1,
                    marginBottom: 8,
                  }}
                >
                  Gustul începe cu
                </h1>
                <h1
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(40px,5vw,62px)",
                    lineHeight: 1.1,
                    marginBottom: 22,
                    color: C.gold,
                    fontStyle: "italic",
                  }}
                >
                  lipia noastră proaspătă
                </h1>
                <p
                  style={{
                    color: C.muted,
                    fontSize: 17,
                    lineHeight: 1.75,
                    marginBottom: 34,
                    maxWidth: 460,
                  }}
                >
                  Shaorma, piadine, kebab — preparate zilnic din ingrediente
                  proaspete. Lipia Natanya e secretul care face diferența.
                </p>
                <div style={{ display: "flex", gap: 14, marginBottom: 44 }}>
                  <button
                    className="btn-red"
                    onClick={() => scrollTo("Meniu")}
                    style={{ fontSize: 16, padding: "14px 30px" }}
                  >
                    Vezi meniul 🌯
                  </button>
                  <button
                    className="btn-gold"
                    onClick={() => scrollTo("Contact")}
                  >
                    Locație & Contact
                  </button>
                </div>
                <div style={{ display: "flex", gap: 40 }}>
                  {[
                    ["100%", "Proaspăt zilnic"],
                    ["★★★★★", "Google Reviews"],
                    ["+40 725 680 000", "Telefon"],
                  ].map(([v, l]) => (
                    <div key={l} style={{ textAlign: "center" }}>
                      <div
                        style={{ fontSize: 17, fontWeight: 700, color: C.gold }}
                      >
                        {v}
                      </div>
                      <div
                        style={{ fontSize: 12, color: C.muted, marginTop: 3 }}
                      >
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  className="hero-emoji"
                  style={{
                    fontSize: 180,
                    filter: "drop-shadow(0 0 60px rgba(139,26,26,0.3))",
                  }}
                >
                  🥙
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── DESPRE NOI ── */}
      <FadeIn id="about" style={{ padding: pad, background: C.bg2 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {isMobile ? (
            <div>
              <div
                style={{
                  color: C.gold,
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Despre noi
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(26px,7vw,38px)",
                  lineHeight: 1.2,
                  marginBottom: 4,
                }}
              >
                Pasiunea noastră
              </h2>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(26px,7vw,38px)",
                  lineHeight: 1.2,
                  color: C.gold,
                  fontStyle: "italic",
                  marginBottom: 18,
                }}
              >
                e în fiecare lipie
              </h2>
              <p
                style={{
                  color: C.muted,
                  lineHeight: 1.8,
                  fontSize: 15,
                  marginBottom: 14,
                }}
              >
                Natanya înseamnă mai mult decât mâncare fast — înseamnă rețete
                autentice, lipie pregătită zilnic în restaurant și ingrediente
                alese cu grijă.
              </p>
              <p
                style={{
                  color: C.muted,
                  lineHeight: 1.8,
                  fontSize: 15,
                  marginBottom: 24,
                }}
              >
                Fiecare shaorma, fiecare piadină, fiecare kebab e asamblat la
                comandă. Gustul pe care îl cunoști, calitatea pe care o meriți.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                  marginBottom: 24,
                }}
              >
                {[
                  "🥙 Lipie proaspătă zilnic",
                  "🥩 Carne selectată",
                  "🥬 Legume proaspete",
                  "🫙 Sosuri proprii",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="about-card"
                    style={{
                      textAlign: "center",
                      fontSize: 13,
                      fontWeight: 600,
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <button
                className="btn-red"
                style={{ width: "100%", padding: 14 }}
              >
                📞 +40 725 680 000
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    color: C.gold,
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Despre noi
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(28px,3.5vw,44px)",
                    lineHeight: 1.2,
                    marginBottom: 4,
                  }}
                >
                  Pasiunea noastră
                </h2>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(28px,3.5vw,44px)",
                    lineHeight: 1.2,
                    color: C.gold,
                    fontStyle: "italic",
                    marginBottom: 22,
                  }}
                >
                  e în fiecare lipie
                </h2>
                <p
                  style={{
                    color: C.muted,
                    lineHeight: 1.8,
                    fontSize: 16,
                    marginBottom: 16,
                  }}
                >
                  Natanya înseamnă mai mult decât mâncare fast — înseamnă rețete
                  autentice, lipie pregătită zilnic în restaurant și ingrediente
                  alese cu grijă.
                </p>
                <p
                  style={{
                    color: C.muted,
                    lineHeight: 1.8,
                    fontSize: 16,
                    marginBottom: 32,
                  }}
                >
                  Fiecare shaorma, fiecare piadină, fiecare kebab e asamblat la
                  comandă. Gustul pe care îl cunoști, calitatea pe care o
                  meriți.
                </p>
                <button className="btn-red">📞 +40 725 680 000</button>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                {[
                  [
                    "🥙",
                    "Lipie proaspătă zilnic",
                    "Preparată în restaurant în fiecare dimineață",
                  ],
                  ["🥩", "Carne selectată", "Furnizori locali de încredere"],
                  [
                    "🥬",
                    "Legume proaspete",
                    "Selectate zilnic pentru calitate maximă",
                  ],
                  ["🫙", "Sosuri proprii", "Rețete originale Natanya"],
                ].map(([emoji, titlu, desc], i) => (
                  <div key={i} className="about-card">
                    <div style={{ fontSize: 32, marginBottom: 10 }}>
                      {emoji}
                    </div>
                    <div
                      style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}
                    >
                      {titlu}
                    </div>
                    <div
                      style={{ fontSize: 12, color: C.muted, lineHeight: 1.6 }}
                    >
                      {desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </FadeIn>

      {/* ── MENIU ── */}
      <FadeIn id="menu" style={{ padding: pad }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{ textAlign: "center", marginBottom: isMobile ? 28 : 48 }}
          >
            <div
              style={{
                color: C.gold,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Meniu complet
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(26px,6vw,42px)",
              }}
            >
              Ce pregătim pentru tine
            </h2>
            <div className="divider" />
          </div>
          {/* Category tabs */}
          <div
            style={{
              display: "flex",
              gap: 8,
              overflowX: "auto",
              paddingBottom: 12,
              marginBottom: 28,
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {MENIU.map((cat) => (
              <button
                key={cat.categorie}
                className={`cat-btn${activeCat === cat.categorie ? " active" : ""}`}
                onClick={() => setActiveCat(cat.categorie)}
              >
                {cat.emoji} {cat.categorie}
              </button>
            ))}
          </div>
          {/* Items */}
          {MENIU.filter((c) => c.categorie === activeCat).map((cat) => (
            <div
              key={cat.categorie}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fill, minmax(320px,1fr))",
                gap: 14,
              }}
            >
              {cat.items.map((item, i) => (
                <div key={i} className="menu-card">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: item.desc ? 8 : 0,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 16,
                        color: C.text,
                        flex: 1,
                        paddingRight: 12,
                      }}
                    >
                      {item.nume}
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div
                        style={{
                          color: C.gold,
                          fontWeight: 700,
                          fontSize: 20,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.pret}
                      </div>
                      {item.gramaj && (
                        <div
                          style={{ fontSize: 11, color: C.muted, marginTop: 2 }}
                        >
                          {item.gramaj}
                        </div>
                      )}
                    </div>
                  </div>
                  {item.desc && (
                    <p
                      style={{ color: C.muted, fontSize: 13, lineHeight: 1.6 }}
                    >
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ── GALERIE ── */}
      <FadeIn id="gallery" style={{ padding: pad, background: C.bg2 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{ textAlign: "center", marginBottom: isMobile ? 28 : 48 }}
          >
            <div
              style={{
                color: C.gold,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Galerie foto
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(26px,6vw,42px)",
              }}
            >
              Arată la fel de bine pe cât e de bun
            </h2>
            <div className="divider" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(3,1fr)",
              gap: 10,
            }}
          >
            {[
              { bg: "#2a0a0a", emoji: "🥙", label: "Shaorma la lipie" },
              { bg: "#1a1500", emoji: "🍽️", label: "La farfurie" },
              { bg: "#1a0800", emoji: "🍗", label: "Wings Box" },
              { bg: "#200a0a", emoji: "🥙", label: "Piadina" },
              { bg: "#180e00", emoji: "🍢", label: "Kebab" },
              { bg: "#1a1000", emoji: "🎁", label: "Combo" },
            ].map((item, i) => (
              <div
                key={i}
                className="gal-item"
                style={{ background: item.bg, fontSize: isMobile ? 40 : 56 }}
              >
                {item.emoji}
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: C.muted,
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </div>
                <div
                  className="gal-label"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent,rgba(0,0,0,0.9))",
                    padding: "20px 12px 12px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.gold,
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              color: C.muted,
              fontSize: 13,
              marginTop: 20,
              fontStyle: "italic",
            }}
          >
            * Pozele reale ale produselor vor fi adăugate în curând
          </p>
        </div>
      </FadeIn>

      {/* ── CONTACT ── */}
      <FadeIn id="contact" style={{ padding: pad }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{ textAlign: "center", marginBottom: isMobile ? 28 : 48 }}
          >
            <div
              style={{
                color: C.gold,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Contact
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(26px,6vw,42px)",
              }}
            >
              Vino să ne cunoști
            </h2>
            <div className="divider" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 32 : 60,
            }}
          >
            <div>
              {[
                ["📞", "Telefon", "+40 725 680 000"],
                ["⏰", "Program", "Luni–Duminică: 10:00 – 23:00"],
                ["📧", "Email", "contact@natanya.ro"],
                ["📍", "Adresă", "Adresa restaurantului"],
              ].map(([icon, label, val]) => (
                <div key={label} className="info-row">
                  <div className="info-icon">{icon}</div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: C.muted,
                        marginBottom: 2,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{val}</div>
                  </div>
                </div>
              ))}
              <div
                style={{
                  marginTop: 16,
                  borderRadius: 16,
                  height: 160,
                  background: `linear-gradient(135deg, ${C.card}, #1a0800)`,
                  border: `1px solid ${C.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.muted,
                  fontSize: 14,
                  gap: 8,
                }}
              >
                🗺️ Google Maps integrat aici
              </div>
            </div>
            {formSent ? (
              <div
                style={{
                  background: C.card,
                  borderRadius: 20,
                  padding: 36,
                  textAlign: "center",
                  border: `1px solid ${C.border}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  minHeight: 320,
                }}
              >
                <div style={{ fontSize: 56 }}>✅</div>
                <h3 style={{ fontSize: 20, fontWeight: 700 }}>Mesaj trimis!</h3>
                <p style={{ color: C.muted, fontSize: 14 }}>
                  Te contactăm în scurt timp.
                </p>
                <button className="btn-gold" onClick={() => setFormSent(false)}>
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <div
                style={{
                  background: C.card,
                  borderRadius: 20,
                  padding: isMobile ? 20 : 32,
                  border: `1px solid ${C.border}`,
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
                  Trimite un mesaj
                </h3>
                {[
                  ["Nume", "text", "nume", "Numele tău"],
                  ["Email", "email", "email", "email@exemplu.ro"],
                ].map(([label, type, field, ph]) => (
                  <div key={field} style={{ marginBottom: 14 }}>
                    <label
                      style={{
                        fontSize: 11,
                        color: C.muted,
                        fontWeight: 700,
                        display: "block",
                        marginBottom: 5,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={ph}
                      value={form[field]}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, [field]: e.target.value }))
                      }
                      style={{
                        width: "100%",
                        background: C.bg,
                        border: `1px solid ${C.border}`,
                        borderRadius: 10,
                        padding: "13px 15px",
                        color: C.text,
                        fontSize: 15,
                        transition: "border-color 0.2s",
                      }}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: 18 }}>
                  <label
                    style={{
                      fontSize: 11,
                      color: C.muted,
                      fontWeight: 700,
                      display: "block",
                      marginBottom: 5,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    Mesaj
                  </label>
                  <textarea
                    placeholder="Scrie mesajul tău..."
                    rows={4}
                    value={form.mesaj}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, mesaj: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      background: C.bg,
                      border: `1px solid ${C.border}`,
                      borderRadius: 10,
                      padding: "13px 15px",
                      color: C.text,
                      fontSize: 15,
                      resize: "vertical",
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>
                <button
                  className="btn-red"
                  style={{ width: "100%", padding: 15, fontSize: 16 }}
                  onClick={() => setFormSent(true)}
                >
                  Trimite mesajul 🚀
                </button>
              </div>
            )}
          </div>
        </div>
      </FadeIn>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: C.bg2,
          borderTop: `1px solid ${C.border}`,
          padding: "28px 20px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: C.red,
                  letterSpacing: 2,
                }}
              >
                NATANYA
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: C.muted,
                  marginTop: 2,
                  fontStyle: "italic",
                }}
              >
                Gustul începe cu lipia noastră proaspătă
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Facebook", "Instagram", "TikTok"].map((sn) => (
                <button
                  key={sn}
                  className="btn-gold"
                  style={{ padding: "6px 14px", fontSize: 12 }}
                >
                  {sn}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              color: C.muted,
              fontSize: 12,
              textAlign: isMobile ? "center" : "left",
              borderTop: `1px solid ${C.border}`,
              paddingTop: 16,
            }}
          >
            © 2026 Natanya. Toate drepturile rezervate. | +40 725 680 000
          </div>
        </div>
      </footer>

      {/* ── CHAT WIDGET ── */}
      <div style={{ position: "fixed", bottom: 20, right: 16, zIndex: 999 }}>
        {chatOpen && (
          <div
            style={{
              position: "absolute",
              bottom: 68,
              right: 0,
              width: isMobile ? "calc(100vw - 32px)" : 310,
              background: C.card,
              borderRadius: 20,
              border: `1px solid ${C.border}`,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
            }}
          >
            <div
              style={{
                background: C.red,
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ fontSize: 20 }}>💬</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>
                  Natanya Support
                </div>
                <div style={{ fontSize: 11, opacity: 0.85 }}>● Online acum</div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                style={{
                  marginLeft: "auto",
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: 18,
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            <div
              style={{
                padding: 14,
                height: 200,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {chatHistory.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent:
                      m.from === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      background: m.from === "user" ? C.red : "#2a1400",
                      borderRadius: 12,
                      padding: "8px 13px",
                      fontSize: 13,
                      maxWidth: "82%",
                      lineHeight: 1.5,
                      color: C.text,
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div
              style={{
                padding: "10px 14px",
                borderTop: `1px solid ${C.border}`,
                display: "flex",
                gap: 8,
              }}
            >
              <input
                value={chatMsg}
                onChange={(e) => setChatMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendChat()}
                placeholder="Scrie un mesaj..."
                style={{
                  flex: 1,
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  padding: "10px 12px",
                  color: C.text,
                  fontSize: 14,
                }}
              />
              <button
                className="btn-red"
                onClick={sendChat}
                style={{ padding: "10px 14px", fontSize: 16 }}
              >
                →
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen((o) => !o)}
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            background: C.red,
            border: "none",
            fontSize: 22,
            cursor: "pointer",
            boxShadow: "0 4px 24px rgba(139,26,26,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s",
          }}
        >
          {chatOpen ? "✕" : "💬"}
        </button>
      </div>
    </div>
  );
}

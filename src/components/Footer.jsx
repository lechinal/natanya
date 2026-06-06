import {
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaClock,
  FaLocationDot,
} from "react-icons/fa6";
import logo from "../assets/logo/natanya_transparent_512.png";
import logoWebp from "../assets/logo/natanya_transparent_512.webp";
import logoScris from "../assets/logo/logo-scris.png";
import logoScrisWebp from "../assets/logo/logo-scris.webp";
import { NAV_LINKS, C } from "../constants";

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/natanyafastfood?utm_source=qr",
    Icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@itsnatanya?_r=1&_t=ZN-96r5b2qIwKc",
    Icon: FaTiktok,
  },
];

const SECTION_MAP = {
  Acasă: "home",
  "Despre noi": "about",
  Meniu: "menu",
  Galerie: "gallery",
  Contact: "contact",
};

export default function Footer({ isMobile }) {
  const scrollTo = (section) => {
    document
      .getElementById(SECTION_MAP[section])
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: C.bg2,
        borderTop: `1px solid ${C.border}`,
        padding: isMobile ? "36px 20px 28px" : "52px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Grid principal */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr 1fr",
            gap: isMobile ? 36 : 60,
            marginBottom: 40,
          }}
        >
          {/* Col 1 — Logo + motto */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                marginBottom: 16,
              }}
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              role="button"
              aria-label="Mergi la pagina principală"
            >
              <picture>
                <source srcSet={logoWebp} type="image/webp" />
                <img
                  src={logo}
                  alt="Logo Natanya"
                  width={isMobile ? 40 : 68}
                  height={isMobile ? 40 : 68}
                  style={{ objectFit: "contain", flexShrink: 0 }}
                />
              </picture>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <picture>
                  <source srcSet={logoScrisWebp} type="image/webp" />
                  <img
                    src={logoScris}
                    alt="Natanya"
                    style={{
                      height: isMobile ? 26 : 36,
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </picture>
                <div
                  style={{
                    fontSize: isMobile ? 9 : 12,
                    color: C.beige,
                    letterSpacing: 0.5,
                    fontStyle: "italic",
                    whiteSpace: "nowrap",
                  }}
                >
                  Gustul începe cu lipia noastră proaspătă
                </div>
              </div>
            </div>
          </div>

          {/* Col 2 — Linkuri rapide */}
          <nav aria-label="Linkuri rapide">
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.gold,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Navigare
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  className="footer-link"
                  onClick={() => scrollTo(link)}
                >
                  {link}
                </button>
              ))}
            </div>
          </nav>

          {/* Col 3 — Social + contact */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.gold,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Social Media
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {SOCIAL.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label={`Natanya pe ${label}`}
                >
                  <Icon size={15} style={{ marginRight: 8, flexShrink: 0 }} />
                  {label}
                </a>
              ))}
            </div>

            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.gold,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginTop: 28,
                marginBottom: 18,
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { Icon: FaPhone, text: "+40 725 680 000" },
                { Icon: FaClock, text: "Luni–Duminică: 10:00–23:00" },
                {
                  Icon: FaLocationDot,
                  text: "Bd. 1 Decembrie 1918, Alba Iulia",
                },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                >
                  <Icon
                    size={14}
                    color={C.gold}
                    style={{ marginTop: 2, flexShrink: 0 }}
                  />
                  <span
                    style={{ color: C.muted, fontSize: 13, lineHeight: 1.6 }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: `1px solid ${C.border}`,
            paddingTop: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <p style={{ color: C.muted, fontSize: 12 }}>
            © 2026 Natanya. Toate drepturile rezervate.
          </p>
          {!isMobile && (
            <p style={{ color: C.muted, fontSize: 12 }}>
              Bd. 1 Decembrie 1918, Alba Iulia &nbsp;·&nbsp; +40 725 680 000
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}

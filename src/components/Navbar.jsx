import { useState } from "react";
import logo from "../assets/logo/natanya_transparent_512.png";
import logoWebp from "../assets/logo/natanya_transparent_512.webp";
import logoScris from "../assets/logo/logo-scris.png";
import logoScrisWebp from "../assets/logo/logo-scris.webp";
import { NAV_LINKS, C } from "../constants";

export default function Navbar({ active, onScrollTo, onCall, isMobile }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (link) => {
    setMobileOpen(false);
    onScrollTo(link);
  };

  return (
    <nav
      aria-label="Navigare principală"
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
          height: isMobile ? 70 : 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
          }}
          onClick={() => handleNav("Acasă")}
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
              fetchPriority="high"
              style={{ objectFit: "contain", flexShrink: 0 }}
            />
          </picture>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <picture>
              <source srcSet={logoScrisWebp} type="image/webp" />
              <img
                src={logoScris}
                alt="Natanya"
                fetchPriority="high"
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

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                className={`nav-btn${active === l ? " active" : ""}`}
                onClick={() => handleNav(l)}
                aria-current={active === l ? "page" : undefined}
              >
                {l}
              </button>
            ))}
            <button
              className="btn-red"
              style={{ padding: "8px 18px", fontSize: 13 }}
              onClick={onCall}
              aria-label="Sună la Natanya"
            >
              📞 Sună acum
            </button>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={mobileOpen}
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

      {/* Mobile menu */}
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
              onClick={() => handleNav(l)}
              aria-current={active === l ? "page" : undefined}
            >
              {l}
            </button>
          ))}
          <button
            className="btn-red"
            style={{ width: "100%", marginTop: 16, padding: 14, fontSize: 16 }}
            onClick={onCall}
            aria-label="Sună la Natanya"
          >
            📞 +40 725 680 000
          </button>
        </div>
      )}
    </nav>
  );
}

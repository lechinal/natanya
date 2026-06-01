import { useState } from "react";
import logo from "../assets/logo/natanya_transparent_512.png";
import logoWebp from "../assets/logo/natanya_transparent_512.webp";
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
          height: 62,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img
              src={logo}
              alt="Logo Natanya"
              width={48}
              height={48}
              fetchPriority="high"
              style={{ objectFit: "contain", flexShrink: 0 }}
            />
          </picture>
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
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

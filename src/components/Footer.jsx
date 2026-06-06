import logo from "../assets/logo/natanya_transparent_512.png";
import logoWebp from "../assets/logo/natanya_transparent_512.webp";
import logoScris from "../assets/logo/logo-scris.png";
import logoScrisWebp from "../assets/logo/logo-scris.webp";
import { C } from "../constants";

const SOCIAL = ["Facebook", "Instagram", "TikTok"];

export default function Footer({ isMobile }) {
  return (
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
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
          <nav aria-label="Rețele sociale">
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {SOCIAL.map((sn) => (
                <button
                  key={sn}
                  className="btn-gold"
                  style={{ padding: "6px 14px", fontSize: 12 }}
                  aria-label={`Natanya pe ${sn}`}
                >
                  {sn}
                </button>
              ))}
            </div>
          </nav>
        </div>
        <p
          style={{
            color: C.muted,
            fontSize: 12,
            textAlign: isMobile ? "center" : "left",
            borderTop: `1px solid ${C.border}`,
            paddingTop: 16,
          }}
        >
          © 2026 Natanya. Toate drepturile rezervate. | +40 725 680 000
        </p>
      </div>
    </footer>
  );
}

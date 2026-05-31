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

import FadeIn from "./FadeIn";
import { C } from "../constants";

const GALLERY_ITEMS = [
  { bg: "#2a0a0a", emoji: "🥙", label: "Shaorma la lipie" },
  { bg: "#1a1500", emoji: "🍽️", label: "La farfurie" },
  { bg: "#1a0800", emoji: "🍗", label: "Wings Box" },
  { bg: "#200a0a", emoji: "🥙", label: "Piadina" },
  { bg: "#180e00", emoji: "🍢", label: "Kebab" },
  { bg: "#1a1000", emoji: "🎁", label: "Combo" },
];

export default function GallerySection({ isMobile, pad }) {
  return (
    <FadeIn id="gallery" style={{ padding: pad, background: C.bg2 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: isMobile ? 28 : 48 }}>
          <p
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
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(26px,6vw,42px)",
            }}
          >
            Arată la fel de bine pe cât e de bun
          </h2>
          <div className="divider" />
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(3,1fr)",
            gap: 10,
          }}
        >
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.label}
              className="gal-item"
              style={{ background: item.bg, fontSize: isMobile ? 40 : 56 }}
              role="img"
              aria-label={item.label}
            >
              {item.emoji}
              <div style={{ marginTop: 8, fontSize: 12, color: C.muted, fontWeight: 600 }}>
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
  );
}

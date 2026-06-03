import FadeIn from "./FadeIn";
import { C } from "../constants";
import { MENU_IMAGES } from "../assets/menuImages";

const GALLERY_ITEMS = [
  { bg: "#2a0a0a", imgKey: "shorma",         label: "Shaorma la lipie" },
  { bg: "#1a1500", imgKey: "shormaFarfurie",  label: "La farfurie" },
  { bg: "#1a0800", imgKey: "aripioare",       label: "Wings Box" },
  { bg: "#200a0a", imgKey: "piadina",         label: "Piadina" },
  { bg: "#180e00", imgKey: "kebab",           label: "Kebab" },
  { bg: "#1a1000", imgKey: "snitelLipie",     label: "Șnițel la lipie" },
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
          {GALLERY_ITEMS.map((item) => {
            const img = MENU_IMAGES[item.imgKey];
            return (
              <div
                key={item.label}
                className="gal-item"
                style={{
                  background: item.bg,
                  padding: 10,
                  alignItems: "stretch",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
                role="img"
                aria-label={item.label}
              >
                <div
                  style={{
                    flex: 1,
                    minHeight: 0,
                    borderRadius: 8,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <picture>
                    <source srcSet={img.webp} type="image/webp" />
                    <img
                      src={img.fallback}
                      alt={item.label}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: img.position || "center center",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </picture>
                  <div
                    className="gal-label"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
                      padding: "24px 10px 10px",
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
                <div
                  style={{
                    fontSize: 12,
                    color: C.muted,
                    fontWeight: 600,
                    textAlign: "center",
                    paddingTop: 8,
                    flexShrink: 0,
                  }}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}

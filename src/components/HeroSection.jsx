import shaormaImg from "../assets/img/shaorma-img-noBG.png";
import shaormaWebp from "../assets/img/shaorma-img-noBG.webp";
import { C } from "../constants";

export default function HeroSection({ isMobile, onScrollTo }) {
  const stats = isMobile
    ? [
        ["100%", "Proaspăt zilnic"],
        ["★★★★★", "Google"],
        ["+40 725", "680 000"],
      ]
    : [
        ["100%", "Proaspăt zilnic"],
        ["★★★★★", "Google Reviews"],
        ["+40 725 680 000", "Telefon"],
      ];

  return (
    <section
      id="home"
      aria-label="Pagina principală Natanya"
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
        aria-hidden="true"
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
            <picture>
              <source srcSet={shaormaWebp} type="image/webp" />
              <img
                src={shaormaImg}
                alt="Shaorma Natanya – preparată proaspăt"
                fetchPriority="high"
                className="hero-img"
                style={{
                  width: "85%",
                  maxWidth: 300,
                  display: "block",
                  margin: "0 auto 20px",
                  filter: "drop-shadow(0 0 40px rgba(139,26,26,0.5))",
                }}
              />
            </picture>
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
            <p
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
            </p>
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
                onClick={() => onScrollTo("Meniu")}
                style={{ fontSize: 15, padding: "14px 28px" }}
                aria-label="Vezi meniul Natanya"
              >
                Vezi meniul 🌯
              </button>
              <button
                className="btn-gold"
                onClick={() => onScrollTo("Contact")}
                style={{ fontSize: 14, padding: "13px 22px" }}
                aria-label="Locație și contact Natanya"
              >
                Locație & Contact
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 36 }}>
              {stats.map(([v, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.gold }}>
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
              <p
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
              </p>
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
                  onClick={() => onScrollTo("Meniu")}
                  style={{ fontSize: 16, padding: "14px 30px" }}
                  aria-label="Vezi meniul Natanya"
                >
                  Vezi meniul 🌯
                </button>
                <button
                  className="btn-gold"
                  onClick={() => onScrollTo("Contact")}
                  aria-label="Locație și contact Natanya"
                >
                  Locație & Contact
                </button>
              </div>
              <div style={{ display: "flex", gap: 40 }}>
                {stats.map(([v, l]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div
                      style={{ fontSize: 17, fontWeight: 700, color: C.gold }}
                    >
                      {v}
                    </div>
                    <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <picture>
                <source srcSet={shaormaWebp} type="image/webp" />
                <img
                  src={shaormaImg}
                  alt="Shaorma Natanya – preparată proaspăt din ingrediente de calitate"
                  fetchPriority="high"
                  className="hero-img"
                  style={{
                    width: "100%",
                    maxWidth: 480,
                    filter: "drop-shadow(0 0 60px rgba(139,26,26,0.4))",
                  }}
                />
              </picture>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

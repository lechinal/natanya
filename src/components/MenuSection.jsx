import { useState } from "react";
import FadeIn from "./FadeIn";
import { MENIU, C } from "../constants";

export default function MenuSection({ isMobile, pad }) {
  const [activeCat, setActiveCat] = useState("SIGNATURE NATANYA");

  return (
    <FadeIn id="menu" style={{ padding: pad }}>
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
            Meniu complet
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px,6vw,42px)",
            }}
          >
            Ce pregătim pentru tine
          </h2>
          <div className="divider" />
        </header>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Categorii meniu"
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
              role="tab"
              aria-selected={activeCat === cat.categorie}
              className={`cat-btn${activeCat === cat.categorie ? " active" : ""}`}
              onClick={() => setActiveCat(cat.categorie)}
            >
              {cat.emoji} {cat.categorie}
            </button>
          ))}
        </div>

        {/* Menu items */}
        {MENIU.filter((c) => c.categorie === activeCat).map((cat) => (
          <div
            key={cat.categorie}
            role="tabpanel"
            aria-label={cat.categorie}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(320px,1fr))",
              gap: 14,
            }}
          >
            {cat.items.map((item) => (
              <article key={item.nume} className="menu-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: item.desc ? 8 : 0,
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: 16,
                      color: C.text,
                      flex: 1,
                      paddingRight: 12,
                    }}
                  >
                    {item.nume}
                  </h3>
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
                      <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>
                        {item.gramaj}
                      </div>
                    )}
                  </div>
                </div>
                {item.desc && (
                  <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
                )}
              </article>
            ))}
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

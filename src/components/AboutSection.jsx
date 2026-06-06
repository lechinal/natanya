import FadeIn from "./FadeIn";
import { C } from "../constants";
import { Sandwich, Drumstick, LeafyGreen, ChefHat, Phone } from "lucide-react";

const CARDS = [
  { Icon: Sandwich,   titlu: "Lipie proaspătă zilnic", desc: "Proaspătă la fiecare comandă, fără excepție" },
  { Icon: Drumstick,  titlu: "Carne selectată",        desc: "Furnizori locali de încredere" },
  { Icon: LeafyGreen, titlu: "Legume proaspete",       desc: "Selectate zilnic pentru calitate maximă" },
  { Icon: ChefHat,    titlu: "Sosuri proprii",         desc: "Rețete originale Natanya" },
];

export default function AboutSection({ isMobile, onCall, pad }) {
  return (
    <FadeIn id="about" style={{ padding: pad, background: C.bg2 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {isMobile ? (
          <div>
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
              Despre noi
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(26px,7vw,38px)",
                lineHeight: 1.2,
                marginBottom: 4,
              }}
            >
              Pasiunea noastră
            </h2>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
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
              autentice, lipie pregătită la comandă și ingrediente alese cu
              grijă.
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
              {CARDS.map(({ Icon, titlu }) => (
                <div
                  key={titlu}
                  className="about-card"
                  style={{
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: 600,
                    lineHeight: 1.6,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Icon size={22} color={C.gold} strokeWidth={1.5} />
                  {titlu}
                </div>
              ))}
            </div>
            <button
              className="btn-red"
              style={{ width: "100%", padding: 14 }}
              onClick={onCall}
              aria-label="Sună la Natanya"
            >
              +40 725 680 000
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
              <p
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
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(28px,3.5vw,44px)",
                  lineHeight: 1.2,
                  marginBottom: 4,
                }}
              >
                Pasiunea noastră
              </h2>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
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
                autentice, lipie pregătită la comandă și ingrediente alese cu
                grijă.
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
                comandă. Gustul pe care îl cunoști, calitatea pe care o meriți.
              </p>
              <button
                className="btn-red"
                onClick={onCall}
                aria-label="Sună la Natanya"
              >
                +40 725 680 000
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {CARDS.map(({ Icon, titlu, desc }) => (
                <div key={titlu} className="about-card">
                  <Icon size={32} color={C.gold} strokeWidth={1.5} style={{ marginBottom: 10 }} />
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{titlu}</div>
                  <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

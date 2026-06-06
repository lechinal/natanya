import lipieVideo from "../assets/videos/lipie-video.mp4";
import { C } from "../constants";

export default function VideoBanner() {
  return (
    <section
      id="video-banner"
      style={{ position: "relative", overflow: "hidden" }}
      aria-label="Cum pregătim lipia Natanya"
    >
      <video
        src={lipieVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "clamp(280px, 45vw, 520px)",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Overlay gradient top + bottom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(18,8,0,0.55) 0%, rgba(18,8,0,0.08) 35%, rgba(18,8,0,0.08) 65%, rgba(18,8,0,0.65) 100%)",
        }}
      />

      {/* Text centrat */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          gap: 14,
        }}
      >
        {/* Linie decorativă sus */}
        <div
          style={{
            width: 70,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          }}
        />

        <p
          style={{
            fontSize: "clamp(11px, 1.5vw, 13px)",
            color: C.gold,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Meșteșugul nostru
        </p>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 5vw, 54px)",
            color: C.text,
            fontStyle: "italic",
            lineHeight: 1.2,
            maxWidth: 600,
          }}
        >
          Secretul e în fiecare lipie
        </h2>

        <p
          style={{
            color: C.beige,
            fontSize: "clamp(13px, 1.8vw, 17px)",
            lineHeight: 1.7,
            maxWidth: 440,
            opacity: 0.9,
          }}
        >
          Preparată proaspăt la comandă, de fiecare dată
        </p>

        {/* Linie decorativă jos */}
        <div
          style={{
            width: 70,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}

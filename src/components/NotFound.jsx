import logo from "../assets/logo/natanya_transparent_512.png";
import { C } from "../constants";

export default function NotFound({ onGoHome }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        color: C.text,
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        gap: 24,
      }}
    >
      <img src={logo} alt="Natanya" style={{ width: 90, height: 90, objectFit: "contain" }} />
      <div
        style={{
          fontSize: "clamp(80px,15vw,140px)",
          fontWeight: 700,
          color: C.red,
          lineHeight: 1,
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        404
      </div>
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(22px,5vw,36px)",
          marginBottom: 8,
        }}
      >
        Pagina nu a fost găsită
      </h1>
      <p style={{ color: C.muted, fontSize: 16, maxWidth: 400, lineHeight: 1.7 }}>
        Se pare că pagina pe care o cauți nu există. Poate ai ajuns aici din greșeală?
      </p>
      <button
        className="btn-red"
        onClick={onGoHome}
        style={{ fontSize: 16, padding: "14px 32px" }}
      >
        Înapoi acasă 🏠
      </button>
    </div>
  );
}

import { useState, useEffect } from "react";
import { C } from "../constants";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consimțământ cookie-uri"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "#1a0c02",
        borderTop: `1px solid ${C.border}`,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 14,
        boxShadow: "0 -8px 32px rgba(0,0,0,0.6)",
      }}
    >
      <p
        style={{
          color: C.muted,
          fontSize: 13,
          lineHeight: 1.6,
          maxWidth: 700,
          margin: 0,
        }}
      >
        Folosim cookie-uri pentru a îmbunătăți experiența pe site. Prin continuarea navigării,
        ești de acord cu{" "}
        <span style={{ color: C.gold }}>politica noastră de cookie-uri</span>.
      </p>
      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <button
          className="btn-gold"
          onClick={decline}
          style={{ padding: "8px 18px", fontSize: 13 }}
        >
          Refuz
        </button>
        <button
          className="btn-red"
          onClick={accept}
          style={{ padding: "8px 18px", fontSize: 13 }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

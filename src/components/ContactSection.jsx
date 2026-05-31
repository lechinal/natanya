import { useState } from "react";
import FadeIn from "./FadeIn";
import { C } from "../constants";

const INFO_ROWS = [
  ["📞", "Telefon", "+40 725 680 000"],
  ["⏰", "Program", "Luni–Duminică: 10:00 – 23:00"],
  ["📧", "Email", "newnatanya@yahoo.com"],
  ["📍", "Adresă", "Bd. 1 Decembrie 1918, 51008 Alba Iulia"],
];

const FORM_FIELDS = [
  ["Nume", "text", "nume", "Numele tău"],
  ["Email", "email", "email", "email@exemplu.ro"],
];

export default function ContactSection({ isMobile, pad }) {
  const [form, setForm] = useState({ nume: "", email: "", mesaj: "" });
  const [formSent, setFormSent] = useState(false);

  return (
    <FadeIn id="contact" style={{ padding: pad }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header
          style={{ textAlign: "center", marginBottom: isMobile ? 28 : 48 }}
        >
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
            Contact
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px,6vw,42px)",
            }}
          >
            Vino să ne cunoști
          </h2>
          <div className="divider" />
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 32 : 60,
          }}
        >
          {/* Contact info */}
          <address style={{ fontStyle: "normal" }}>
            {INFO_ROWS.map(([icon, label, val]) => (
              <div key={label} className="info-row">
                <div className="info-icon" aria-hidden="true">
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: C.muted,
                      marginBottom: 2,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>{val}</div>
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: 16,
                borderRadius: 16,
                overflow: "hidden",
                border: `1px solid ${C.border}`,
              }}
            >
              <iframe
                title="Locație Natanya pe Google Maps"
                src="https://maps.google.com/maps?q=46.0697237,23.5643903&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{
                  display: "block",
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) saturate(0.8)",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </address>

          {/* Contact form */}
          {formSent ? (
            <div
              style={{
                background: C.card,
                borderRadius: 20,
                padding: 36,
                textAlign: "center",
                border: `1px solid ${C.border}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                minHeight: 320,
              }}
              role="status"
              aria-live="polite"
            >
              <div style={{ fontSize: 56 }} aria-hidden="true">
                ✅
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>Mesaj trimis!</h3>
              <p style={{ color: C.muted, fontSize: 14 }}>
                Te contactăm în scurt timp.
              </p>
              <button className="btn-gold" onClick={() => setFormSent(false)}>
                Trimite alt mesaj
              </button>
            </div>
          ) : (
            <form
              style={{
                background: C.card,
                borderRadius: 20,
                padding: isMobile ? 20 : 32,
                border: `1px solid ${C.border}`,
              }}
              onSubmit={(e) => {
                e.preventDefault();
                setFormSent(true);
              }}
              aria-label="Formular de contact Natanya"
            >
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
                Trimite un mesaj
              </h3>
              {FORM_FIELDS.map(([label, type, field, ph]) => (
                <div key={field} style={{ marginBottom: 14 }}>
                  <label
                    htmlFor={`contact-${field}`}
                    style={{
                      fontSize: 11,
                      color: C.muted,
                      fontWeight: 700,
                      display: "block",
                      marginBottom: 5,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {label}
                  </label>
                  <input
                    id={`contact-${field}`}
                    type={type}
                    placeholder={ph}
                    value={form[field]}
                    required
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [field]: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      background: C.bg,
                      border: `1px solid ${C.border}`,
                      borderRadius: 10,
                      padding: "13px 15px",
                      color: C.text,
                      fontSize: 15,
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>
              ))}
              <div style={{ marginBottom: 18 }}>
                <label
                  htmlFor="contact-mesaj"
                  style={{
                    fontSize: 11,
                    color: C.muted,
                    fontWeight: 700,
                    display: "block",
                    marginBottom: 5,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Mesaj
                </label>
                <textarea
                  id="contact-mesaj"
                  placeholder="Scrie mesajul tău..."
                  rows={4}
                  value={form.mesaj}
                  required
                  onChange={(e) =>
                    setForm((f) => ({ ...f, mesaj: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    borderRadius: 10,
                    padding: "13px 15px",
                    color: C.text,
                    fontSize: 15,
                    resize: "vertical",
                    transition: "border-color 0.2s",
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn-red"
                style={{ width: "100%", padding: 15, fontSize: 16 }}
              >
                Trimite mesajul 🚀
              </button>
            </form>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

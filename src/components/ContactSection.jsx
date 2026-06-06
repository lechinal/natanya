import { useState } from "react";
import FadeIn from "./FadeIn";
import { C } from "../constants";
import { Phone, Clock, Mail, MapPin, Send, CircleCheck } from "lucide-react";

const INFO_ROWS = [
  { Icon: Phone,  label: "Telefon", val: "+40 725 680 000" },
  { Icon: Clock,  label: "Program", val: "Luni–Duminică: 10:00 – 23:00" },
  { Icon: Mail,   label: "Email",   val: "newnatanya@yahoo.com" },
  { Icon: MapPin, label: "Adresă",  val: "Bd. 1 Decembrie 1918, 51008 Alba Iulia" },
];

const FORM_FIELDS = [
  ["Nume", "text", "name", "Numele tău"],
  ["Email", "email", "email", "email@exemplu.ro"],
];

export default function ContactSection({ isMobile, pad }) {
  const [sending, setSending] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const data = new FormData(e.target);
    data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormSent(true);
        e.target.reset();
      } else {
        throw new Error();
      }
    } catch {
      setError("Mesajul nu a putut fi trimis. Încearcă din nou sau sună-ne direct.");
    } finally {
      setSending(false);
    }
  };

  return (
    <FadeIn id="contact" style={{ padding: pad }}>
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
            Contact
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
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
          {/* Contact info + harta */}
          <address style={{ fontStyle: "normal" }}>
            {INFO_ROWS.map(({ Icon, label, val }) => (
              <div key={label} className="info-row">
                <div className="info-icon" aria-hidden="true">
                  <Icon size={18} color={C.gold} strokeWidth={1.5} />
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

          {/* Formular contact */}
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
              <CircleCheck size={56} color={C.gold} strokeWidth={1.5} aria-hidden="true" />
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
              onSubmit={handleSubmit}
              aria-label="Formular de contact Natanya"
            >
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
                Trimite un mesaj
              </h3>

              {FORM_FIELDS.map(([label, type, name, ph]) => (
                <div key={name} style={{ marginBottom: 14 }}>
                  <label
                    htmlFor={`contact-${name}`}
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
                    id={`contact-${name}`}
                    type={type}
                    name={name}
                    placeholder={ph}
                    required
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
                  htmlFor="contact-message"
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
                  id="contact-message"
                  name="message"
                  placeholder="Scrie mesajul tău..."
                  rows={4}
                  required
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

              {error && (
                <p
                  style={{ color: "#e05555", fontSize: 13, marginBottom: 12, lineHeight: 1.5 }}
                  role="alert"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn-red"
                disabled={sending}
                style={{
                  width: "100%",
                  padding: 15,
                  fontSize: 16,
                  opacity: sending ? 0.7 : 1,
                  cursor: sending ? "not-allowed" : "pointer",
                }}
              >
                {sending ? "Se trimite..." : "Trimite mesajul"}
              </button>
            </form>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

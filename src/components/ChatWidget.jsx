import { useState, useRef, useEffect } from "react";
import { CHAT_REPLIES, C } from "../constants";

export default function ChatWidget({ isMobile }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { from: "bot", text: "Bună! 👋 Cu ce te pot ajuta?" },
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const sendChat = () => {
    if (!chatMsg.trim()) return;
    const reply = CHAT_REPLIES[Math.floor(Math.random() * CHAT_REPLIES.length)];
    setChatHistory((h) => [
      ...h,
      { from: "user", text: chatMsg },
      { from: "bot", text: reply },
    ]);
    setChatMsg("");
  };

  return (
    <div
      style={{ position: "fixed", bottom: 20, right: 16, zIndex: 999 }}
      role="complementary"
      aria-label="Chat suport Natanya"
    >
      {chatOpen && (
        <div
          style={{
            position: "absolute",
            bottom: 68,
            right: 0,
            width: isMobile ? "calc(100vw - 32px)" : 310,
            background: C.card,
            borderRadius: 20,
            border: `1px solid ${C.border}`,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
          }}
          role="dialog"
          aria-modal="false"
          aria-label="Chat cu Natanya"
        >
          {/* Chat header */}
          <div
            style={{
              background: C.red,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 20 }} aria-hidden="true">💬</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>Natanya Support</div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>● Online acum</div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              aria-label="Închide chat"
              style={{
                marginLeft: "auto",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          {/* Chat messages */}
          <div
            style={{
              padding: 14,
              height: 200,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
            aria-live="polite"
            aria-label="Conversație chat"
          >
            {chatHistory.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: m.from === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    background: m.from === "user" ? C.red : "#2a1400",
                    borderRadius: 12,
                    padding: "8px 13px",
                    fontSize: 13,
                    maxWidth: "82%",
                    lineHeight: 1.5,
                    color: C.text,
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Chat input */}
          <div
            style={{
              padding: "10px 14px",
              borderTop: `1px solid ${C.border}`,
              display: "flex",
              gap: 8,
            }}
          >
            <input
              value={chatMsg}
              onChange={(e) => setChatMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendChat()}
              placeholder="Scrie un mesaj..."
              aria-label="Mesaj chat"
              style={{
                flex: 1,
                background: C.bg,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "10px 12px",
                color: C.text,
                fontSize: 14,
              }}
            />
            <button
              className="btn-red"
              onClick={sendChat}
              aria-label="Trimite mesaj"
              style={{ padding: "10px 14px", fontSize: 16 }}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setChatOpen((o) => !o)}
        aria-label={chatOpen ? "Închide chat" : "Deschide chat"}
        aria-expanded={chatOpen}
        style={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          background: C.red,
          border: "none",
          fontSize: 22,
          cursor: "pointer",
          boxShadow: "0 4px 24px rgba(139,26,26,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s",
        }}
      >
        {chatOpen ? "✕" : "💬"}
      </button>
    </div>
  );
}

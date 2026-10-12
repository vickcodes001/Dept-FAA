import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_txwbnjz";
const EMAILJS_TEMPLATE_ID = "template_z64fxu9";
const EMAILJS_PUBLIC_KEY = "MIoTDCizdf6QgIYaq";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const backdropStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 0,
  width: 520,
  maxWidth: "95%",
  boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
  borderTop: "4px solid #3aafe4",
  overflow: "hidden",
};

const BLUE = "#3aafe4";
const DARK = "#2d3748";
const SLATE = "#4a5568";

const ApplicationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setError("");
      setShowSuccess(false);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    console.log("clicked");
    

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: "okorovictorchidubem185@gmail.com",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setShowSuccess(true);
    } catch (err) {
  console.error("EmailJS submission failed:", err);

  const errorMessage =
    err instanceof Error
      ? err.message
      : "Unable to send your message. Please try again.";

  setError(`Message could not be sent: ${errorMessage}`);
} finally {
  setSending(false);
}
  };

  // ── SUCCESS STATE ──
  if (showSuccess) {
    return (
      <div
        style={backdropStyle}
        onMouseDown={onClose}
        role="dialog"
        aria-modal="true"
      >
        <div
          style={{ ...modalStyle, borderTop: "4px solid #38a169" }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#38a169",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            {/* Checkmark circle */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.4rem",
                margin: 0,
              }}
            >
              Message Sent!
            </h2>
          </div>

          {/* Body */}
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <p
              style={{ color: SLATE, lineHeight: 1.7, marginBottom: "0.5rem" }}
            >
              Thank you, <strong style={{ color: DARK }}>{name}</strong>. Your
              message has been received by the Department of Fine & Applied
              Arts.
            </p>
            <p
              style={{
                color: "#a0aec0",
                fontSize: "0.875rem",
                marginBottom: "2rem",
              }}
            >
              We'll get back to you at{" "}
              <strong style={{ color: DARK }}>{email}</strong> as soon as
              possible.
            </p>
            <button
              onClick={onClose}
              style={{
                backgroundColor: "#38a169",
                color: "#fff",
                border: "none",
                padding: "0.75rem 2.5rem",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                width: "100%",
              }}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── FORM STATE ──
  return (
    <div
      style={backdropStyle}
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div style={modalStyle} onMouseDown={(e) => e.stopPropagation()}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 2rem",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: BLUE,
                marginBottom: "0.3rem",
                textTransform: "uppercase",
              }}
            >
              Department of Fine & Applied Arts
            </p>
            <h2
              style={{
                color: DARK,
                fontWeight: 700,
                fontSize: "1.3rem",
                margin: 0,
              }}
            >
              Send Us a Message
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: SLATE,
              padding: "0.25rem",
            }}
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: "1.5rem 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            {/* Name */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: DARK,
                  marginBottom: "0.4rem",
                  textTransform: "uppercase",
                }}
              >
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  border: "1px solid #cbd5e0",
                  outline: "none",
                  fontSize: "0.9rem",
                  color: DARK,
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = BLUE)}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#cbd5e0")}
              />
            </div>
            {/* Email */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: DARK,
                  marginBottom: "0.4rem",
                  textTransform: "uppercase",
                }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  border: "1px solid #cbd5e0",
                  outline: "none",
                  fontSize: "0.9rem",
                  color: DARK,
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = BLUE)}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#cbd5e0")}
              />
            </div>
          </div>

          {/* Subject */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: DARK,
                marginBottom: "0.4rem",
                textTransform: "uppercase",
              }}
            >
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder="What is your enquiry about"
              style={{
                width: "100%",
                padding: "0.7rem 1rem",
                border: "1px solid #cbd5e0",
                outline: "none",
                fontSize: "0.9rem",
                color: DARK,
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = BLUE)}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#cbd5e0")}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: DARK,
                marginBottom: "0.4rem",
                textTransform: "uppercase",
              }}
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              placeholder="Write your message here..."
              style={{
                width: "100%",
                padding: "0.7rem 1rem",
                border: "1px solid #cbd5e0",
                outline: "none",
                fontSize: "0.9rem",
                color: DARK,
                resize: "none",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = BLUE)}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#cbd5e0")}
            />
          </div>

          {/* Error */}
          {error && (
            <p
              style={{
                color: "#e53e3e",
                fontSize: "0.85rem",
                marginBottom: "1rem",
              }}
            >
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={sending}
            style={{
              width: "100%",
              padding: "0.85rem",
              backgroundColor: sending ? "#a0aec0" : BLUE,
              color: "#fff",
              border: "none",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.14em",
              cursor: sending ? "not-allowed" : "pointer",
              textTransform: "uppercase",
              transition: "background-color 0.2s",
            }}
          >
            {sending ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;

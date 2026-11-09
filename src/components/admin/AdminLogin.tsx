import { useState } from "react";
import { SupabaseClient } from "@supabase/supabase-js";

const BLUE = "#3aafe4";
const NAVY = "#031430";

interface AdminLoginProps {
  anonSupabase: SupabaseClient;
  onSuccess: () => void;
}

const AdminLogin = ({ anonSupabase, onSuccess }: AdminLoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(58,175,228,0.3)",
    color: "#fff",
    fontSize: "0.9rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: err } = await anonSupabase.auth.signInWithPassword({
      email,
      password,
    });

    if (err) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    onSuccess();
    setLoading(false);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: NAVY }}
    >
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-full max-w-sm px-8"
      >
        <p
          className="text-xs font-bold tracking-widest mb-1 text-center"
          style={{ color: BLUE, letterSpacing: "0.18em" }}
        >
          ADMIN ACCESS
        </p>
        <h1
          className="font-bold text-white text-center mb-4"
          style={{ fontSize: "1.4rem" }}
        >
          Sign In
        </h1>

        <div className="flex flex-col gap-1">
          <label
            className="text-xs font-bold tracking-widest"
            style={{ color: BLUE, letterSpacing: "0.12em" }}
          >
            EMAIL
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="admin@university.edu.ng"
            style={inputStyle}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="text-xs font-bold tracking-widest"
            style={{ color: BLUE, letterSpacing: "0.12em" }}
          >
            PASSWORD
          </label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{ ...inputStyle, paddingRight: "3rem" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
                padding: "0 1rem",
                border: 0,
                background: "transparent",
                color: BLUE,
                cursor: "pointer",
              }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {showPassword ? (
                  <>
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 002.8 2.8" />
                    <path d="M9.9 5.2A10.8 10.8 0 0112 5c5 0 8.3 4.2 9 7-.3 1.1-1 2.3-2.1 3.4" />
                    <path d="M6.2 6.2C4.4 7.4 3.3 9.3 3 12c.7 2.8 4 7 9 7 1.1 0 2.1-.2 3-.6" />
                  </>
                ) : (
                  <>
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {error && (
          <p className="text-xs text-center" style={{ color: "#fc8181" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="py-3 text-sm font-bold tracking-widest transition-opacity"
          style={{
            backgroundColor: BLUE,
            color: "#fff",
            letterSpacing: "0.14em",
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "SIGNING IN..." : "SIGN IN"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

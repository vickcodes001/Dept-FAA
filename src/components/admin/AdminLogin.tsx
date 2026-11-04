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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            style={inputStyle}
          />
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

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import AdminLogin from "./components/admin/AdminLogin";
import AdminHeader from "./components/admin/AdminHeader";
import AdminTabs from "./components/admin/AdminTabs";
import ArtworkGrid from "./components/admin/ArtworkGrid";
import type { Artwork } from "./components/admin/ArtworkCard";

const NAVY = "#031430";

type Tab = "pending" | "approved" | "rejected";

const AdminDashboard = () => {
  const [authed, setAuthed] = useState(false);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("pending");
  const [processing, setProcessing] = useState<string | null>(null);

  const adminSupabase = useMemo(
    () =>
      createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_SERVICE_KEY,
        { auth: { autoRefreshToken: false, persistSession: false } },
      ),
    [],
  );

  const anonSupabase = useMemo(
    () =>
      createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY,
      ),
    [],
  );

  useEffect(() => {
    if (!authed) return;
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      const { data } = await adminSupabase
        .from("artworks")
        .select("*, artists(name, email, whatsapp)")
        .eq("status", activeTab)
        .order("created_at", { ascending: false });

      if (!cancelled) {
        setArtworks((data as Artwork[]) ?? []);
        setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [activeTab, authed]);

  const handleUpdateStatus = async (
    id: string,
    status: "approved" | "rejected",
  ) => {
    setProcessing(id);
    await adminSupabase.from("artworks").update({ status }).eq("id", id);
    setArtworks((prev) => prev.filter((a) => a.id !== id));
    setProcessing(null);
  };

  const handleLogout = async () => {
    await anonSupabase.auth.signOut();
    setAuthed(false);
    setArtworks([]);
  };

  if (!authed) {
    return (
      <AdminLogin
        anonSupabase={anonSupabase}
        onSuccess={() => setAuthed(true)}
      />
    );
  }

  return (
    <div style={{ backgroundColor: NAVY, minHeight: "100vh", color: "#fff" }}>
      <AdminHeader onLogout={handleLogout} />
      <AdminTabs activeTab={activeTab} onChange={setActiveTab} />
      <div className="px-8 py-8">
        <ArtworkGrid
          artworks={artworks}
          loading={loading}
          activeTab={activeTab}
          processing={processing}
          onUpdateStatus={handleUpdateStatus}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;

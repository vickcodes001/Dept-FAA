import { useState } from "react";
import { supabase } from "./data/supabaseClient";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useContactModal from "./hooks/useContactModal";
import ContactModal from "./components/ContactModal";

const BLUE = "#3aafe4";
const NAVY = "#031430";
const CATEGORIES = [
  "Painting",
  "Ceramics",
  "Textiles",
  "Graphics",
  "Sculpting",
  "Mixed Media",
];

type Step = "register" | "upload" | "done";

const ArtistDashboard = () => {
  const { isOpen, open, close } = useContactModal();
  const [step, setStep] = useState<Step>("register");
  const [artistId, setArtistId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Artist form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  // Artwork form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const { data, error: err } = await supabase
      .from("artists")
      .insert({ name, email, whatsapp, bio })
      .select("id")
      .single();

    if (err) {
      setError(err.message);
      setSubmitting(false);
      return;
    }

    setArtistId(data.id);
    setStep("upload");
    setSubmitting(false);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile || !artistId) return;
    setSubmitting(true);
    setError("");

    // Upload image to Supabase storage
    const ext = imageFile.name.split(".").pop();
    const path = `${artistId}/${Date.now()}.${ext}`;

    const { error: uploadErr } = await supabase.storage
      .from("artworks")
      .upload(path, imageFile);

    if (uploadErr) {
      setError(uploadErr.message);
      setSubmitting(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("artworks")
      .getPublicUrl(path);

    // Insert artwork record
    const { error: insertErr } = await supabase.from("artworks").insert({
      artist_id: artistId,
      title,
      description,
      price: parseFloat(price),
      category,
      image_url: urlData.publicUrl,
      status: "pending",
    });

    if (insertErr) {
      setError(insertErr.message);
      setSubmitting(false);
      return;
    }

    setStep("done");
    setSubmitting(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(58,175,228,0.2)",
    color: "#fff",
    fontSize: "0.9rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    color: BLUE,
    marginBottom: "0.4rem",
    textTransform: "uppercase",
  };

  return (
    <div style={{ backgroundColor: NAVY, minHeight: "100vh" }}>
      <Navbar onContactClick={open} />

      <div
        className="w-full flex flex-col items-center justify-center py-20 text-center"
        style={{ borderBottom: `3px solid ${BLUE}` }}
      >
        <p
          className="text-xs font-bold tracking-widest mb-3"
          style={{ color: BLUE, letterSpacing: "0.18em" }}
        >
          ARTIST PORTAL
        </p>
        <h1
          className="font-bold text-white mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          Submit Your Artwork
        </h1>
        <p
          className="max-w-xl text-sm leading-relaxed"
          style={{ color: "#a0aec0" }}
        >
          Register as an artist and submit your work for review. Once approved
          by the department, your artwork will appear in the public gallery.
        </p>
      </div>

      <div className="max-w-xl mx-auto px-6 py-20">
        {/* Progress steps */}
        <div className="flex items-center gap-0 mb-12">
          {(["register", "upload", "done"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold shrink-0"
                style={{
                  backgroundColor:
                    step === s || (i === 2 && step === "done")
                      ? BLUE
                      : "transparent",
                  border: `2px solid ${step === s || i < ["register", "upload", "done"].indexOf(step) ? BLUE : "rgba(58,175,228,0.25)"}`,
                  color: step === s ? "#fff" : "#a0aec0",
                }}
              >
                {i + 1}
              </div>
              {i < 2 && (
                <div
                  className="flex-1 h-px"
                  style={{
                    backgroundColor:
                      i < ["register", "upload", "done"].indexOf(step)
                        ? BLUE
                        : "rgba(58,175,228,0.2)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Register */}
        {step === "register" && (
          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            <h2 className="font-bold text-white text-xl mb-2">Your Details</h2>
            <div>
              <label style={labelStyle}>Full Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>WhatsApp Number</label>
              <input
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                placeholder="+234 800 000 0000"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Short Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                placeholder="Tell us about yourself and your practice..."
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>
            {error && (
              <p className="text-sm" style={{ color: "#fc8181" }}>
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="py-3 font-bold text-sm tracking-widest transition-opacity"
              style={{
                backgroundColor: BLUE,
                color: "#fff",
                letterSpacing: "0.14em",
                opacity: submitting ? 0.6 : 1,
                cursor: submitting ? "not-allowed" : "pointer",
              }}
            >
              {submitting ? "SAVING..." : "CONTINUE →"}
            </button>
          </form>
        )}

        {/* Step 2: Upload artwork */}
        {step === "upload" && (
          <form onSubmit={handleUpload} className="flex flex-col gap-5">
            <h2 className="font-bold text-white text-xl mb-2">Your Artwork</h2>

            {/* Image upload */}
            <div>
              <label style={labelStyle}>Artwork Image</label>
              <label
                className="flex flex-col items-center justify-center cursor-pointer transition-colors"
                style={{
                  border: `2px dashed ${preview ? BLUE : "rgba(58,175,228,0.3)"}`,
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 py-12">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={BLUE}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <p className="text-sm" style={{ color: "#a0aec0" }}>
                      Click to upload image
                    </p>
                    <p className="text-xs" style={{ color: "#718096" }}>
                      JPG, PNG, WEBP — max 5MB
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                  required
                />
              </label>
            </div>

            <div>
              <label style={labelStyle}>Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Artwork title"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                placeholder="Describe your artwork, materials used, dimensions..."
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Price (₦)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  placeholder="e.g. 25000"
                  min="0"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c} style={{ backgroundColor: NAVY }}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <p className="text-sm" style={{ color: "#fc8181" }}>
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="py-3 font-bold text-sm tracking-widest transition-opacity"
              style={{
                backgroundColor: BLUE,
                color: "#fff",
                letterSpacing: "0.14em",
                opacity: submitting ? 0.6 : 1,
                cursor: submitting ? "not-allowed" : "pointer",
              }}
            >
              {submitting ? "UPLOADING..." : "SUBMIT FOR REVIEW"}
            </button>
          </form>
        )}

        {/* Step 3: Done */}
        {step === "done" && (
          <div className="flex flex-col items-center text-center gap-6 py-10">
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 72,
                height: 72,
                backgroundColor: "rgba(56,161,105,0.15)",
                border: "2px solid #38a169",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#38a169"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-white text-xl mb-2">
                Submission Received!
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#a0aec0" }}
              >
                Your artwork has been submitted for review. The department will
                review it and approve it for the public gallery. This usually
                takes 1–2 working days.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="/gallery"
                className="px-6 py-3 text-xs font-bold tracking-widest"
                style={{
                  border: `2px solid ${BLUE}`,
                  color: BLUE,
                  letterSpacing: "0.12em",
                }}
              >
                VIEW GALLERY
              </a>
              <button
                onClick={() => {
                  setStep("upload");
                  setTitle("");
                  setDescription("");
                  setPrice("");
                  setImageFile(null);
                  setPreview(null);
                }}
                className="px-6 py-3 text-xs font-bold tracking-widest"
                style={{
                  backgroundColor: BLUE,
                  color: "#fff",
                  letterSpacing: "0.12em",
                }}
              >
                SUBMIT ANOTHER
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <ContactModal isOpen={isOpen} onClose={close} />
    </div>
  );
};

export default ArtistDashboard;

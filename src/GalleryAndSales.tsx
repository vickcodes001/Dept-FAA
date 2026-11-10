import { useEffect, useState } from "react";
import { supabase } from "./data/supabaseClient";
import Footer from "./components/Footer";
import useContactModal from "./hooks/useContactModal";
import ContactModal from "./components/ContactModal";

const BLUE = "#3aafe4";
const NAVY = "#031430";

interface Artwork {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  created_at: string;
  artists: {
    name: string;
    whatsapp: string;
  };
}

const CATEGORIES = [
  "All",
  "Painting",
  "Ceramics",
  "Textiles",
  "Graphics",
  "Sculpting",
  "Mixed Media",
];

const GalleryAndSales = () => {
  const { isOpen, close } = useContactModal();
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Artwork | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("artworks")
        .select("*, artists(name, whatsapp)")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      setArtworks((data as Artwork[]) ?? []);
      setLoading(false);
    };
    fetch();
  }, []);

  const filtered =
    activeCategory === "All"
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);

  const whatsappLink = (phone: string, title: string, price: number) => {
    const msg = encodeURIComponent(
      `Hi, I'm interested in purchasing "${title}" listed at ${formatPrice(price)} on the FAA Art Gallery. Could you provide more details?`,
    );
    return `https://wa.me/${phone.replace(/\D/g, "")}?text=${msg}`;
  };

  return (
    <div style={{ backgroundColor: NAVY, minHeight: "100vh" }}>
      <nav
        className="w-full flex items-center justify-between px-6 lg:px-12 py-4"
        style={{ borderBottom: "1px solid rgba(58,175,228,0.2)" }}
      >
        <a href="/" className="flex items-center" aria-label="Go to homepage">
          <img
            src="/images/Logo.webp"
            alt="College Logo"
            className="w-50 mr-3"
          />
        </a>
        <a
          href="/"
          className="px-4 py-2 text-xs font-bold tracking-widest transition-colors"
          style={{ border: `1px solid ${BLUE}`, color: BLUE }}
        >
          GO BACK TO HOME
        </a>
      </nav>

      {/* Hero */}
      <div
        className="w-full flex flex-col items-center justify-center px-6 py-14 sm:py-20 text-center"
        style={{ borderBottom: `3px solid ${BLUE}` }}
      >
        <p
          className="text-xs font-bold tracking-widest mb-3"
          style={{ color: BLUE, letterSpacing: "0.18em" }}
        >
          DEPARTMENT OF FINE & APPLIED ARTS
        </p>
        <h1
          className="font-bold text-white mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          Art Gallery & Sales
        </h1>
        <p
          className="max-w-xl text-sm leading-relaxed"
          style={{ color: "#a0aec0" }}
        >
          Original artworks by our students and department, available for
          purchase. Each piece is reviewed and approved by the department before
          listing.
        </p>
      </div>

      {/* Category filter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 text-xs font-bold tracking-widest transition-all duration-200"
              style={{
                letterSpacing: "0.12em",
                border: `2px solid ${activeCategory === cat ? BLUE : "rgba(58,175,228,0.25)"}`,
                backgroundColor: activeCategory === cat ? BLUE : "transparent",
                color: activeCategory === cat ? "#fff" : "#a0aec0",
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}

          {/* Artist portal link */}
          <a
            href="/artist"
            className="w-full sm:w-auto sm:ml-auto text-center px-5 py-2 text-xs font-bold tracking-widest transition-all duration-200"
            style={{
              letterSpacing: "0.12em",
              border: `2px solid rgba(58,175,228,0.25)`,
              color: "#a0aec0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = BLUE;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(58,175,228,0.25)";
              e.currentTarget.style.color = "#a0aec0";
            }}
          >
            + SUBMIT YOUR ARTWORK
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  aspectRatio: "3/4",
                }}
              />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <p className="text-4xl mb-4">🎨</p>
            <p className="font-bold text-white mb-2">No artworks yet</p>
            <p className="text-sm" style={{ color: "#718096" }}>
              {activeCategory !== "All"
                ? `No approved ${activeCategory} works available yet.`
                : "No approved artworks available yet. Check back soon."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((artwork) => (
              <div
                key={artwork.id}
                className="flex flex-col cursor-pointer group"
                onClick={() => setSelected(artwork)}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden mb-0"
                  style={{ aspectRatio: "4/5" }}
                >
                  <img
                    src={artwork.image_url}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 text-xs font-bold tracking-widest"
                    style={{
                      backgroundColor: NAVY,
                      color: BLUE,
                      letterSpacing: "0.12em",
                      border: `1px solid ${BLUE}`,
                    }}
                  >
                    {artwork.category.toUpperCase()}
                  </div>
                </div>

                {/* Info */}
                <div
                  className="p-4"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderTop: `2px solid ${BLUE}`,
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white text-sm leading-snug">
                      {artwork.title}
                    </h3>
                    <span
                      className="text-sm font-bold flex-shrink-0"
                      style={{ color: BLUE }}
                    >
                      {formatPrice(artwork.price)}
                    </span>
                  </div>
                  <p className="text-xs mb-3" style={{ color: "#718096" }}>
                    by {artwork.artists?.name}
                  </p>
                  {/* WhatsApp CTA */}
                  <a
                    href={whatsappLink(
                      artwork.artists?.whatsapp,
                      artwork.title,
                      artwork.price,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-2 w-full py-2 text-xs font-bold tracking-widest transition-all duration-200"
                    style={{
                      backgroundColor: "#25D366",
                      color: "#fff",
                      letterSpacing: "0.1em",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1ebe5d")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#25D366")
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    ENQUIRE TO BUY
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Artwork detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-3xl flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
            style={{
              backgroundColor: NAVY,
              borderTop: `3px solid ${BLUE}`,
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="w-full h-56 sm:h-72 md:w-1/2 md:h-auto flex-shrink-0">
              <img
                src={selected.image_url}
                alt={selected.title}
                className="w-full h-full object-cover"
                style={{ maxHeight: "90vh" }}
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between p-5 sm:p-8 overflow-y-auto">
              <div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4"
                  style={{ color: "#718096" }}
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

                <p
                  className="text-xs font-bold tracking-widest mb-3"
                  style={{ color: BLUE, letterSpacing: "0.14em" }}
                >
                  {selected.category.toUpperCase()}
                </p>
                <h2
                  className="font-bold text-white mb-1 leading-snug"
                  style={{ fontSize: "1.5rem" }}
                >
                  {selected.title}
                </h2>
                <p className="text-sm mb-4" style={{ color: "#718096" }}>
                  by {selected.artists?.name}
                </p>
                <p className="text-2xl font-bold mb-6" style={{ color: BLUE }}>
                  {formatPrice(selected.price)}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#a0aec0" }}
                >
                  {selected.description}
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={whatsappLink(
                    selected.artists?.whatsapp,
                    selected.title,
                    selected.price,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 font-bold text-sm tracking-widest"
                  style={{
                    backgroundColor: "#25D366",
                    color: "#fff",
                    letterSpacing: "0.1em",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  CONTACT ARTIST ON WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <ContactModal isOpen={isOpen} onClose={close} />
    </div>
  );
};

export default GalleryAndSales;

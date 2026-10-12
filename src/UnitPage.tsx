import { Link, useParams } from "react-router-dom";
import academicUnits from "./data/academicUnits";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const BLUE = "#3aafe4";
const DARK = "#2d3748";
const SLATE = "#4a5568";

const UnitPage = () => {
  const { slug } = useParams();
  const unit = academicUnits.find((u) => u.slug === slug);

  if (!unit) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center p-10 text-center text-white bg-[#031430] h-screen">
        <h1 className="text-5xl font-bold">Page not found</h1>
        <Link to="/" className="text-3xl text-[#e84a27] font-bold">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="text-gray-800">
      <Navbar />

      {/* ── HERO ── faded bg + tagline + blue-bordered title box */}
      <div
        className="relative w-full flex flex-col items-center justify-center pt-20 pb-0 overflow-hidden"
        style={{ minHeight: "440px", backgroundColor: "#f5f5f3" }}
      >
        {/* Faded grayscale background image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('${unit.image}')`,
            filter: "grayscale(100%) opacity(15%)",
          }}
        />

        {/* Tagline */}
        <div className="relative z-10 text-center px-6 mb-8">
          <h1
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: DARK,
            }}
          >
            {unit.tagline.split(". ").map((word, i, arr) => (
              <span key={i}>
                {word}
                {i < arr.length - 1 ? ". " : ""}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>
        </div>

        {/* Blue-bordered title box */}
        <div
          className="relative z-10 px-16 py-5 mb-8"
          style={{
            border: `3px solid ${BLUE}`,
            backgroundColor: "rgba(255,255,255,0.92)",
            minWidth: "460px",
            maxWidth: "760px",
            width: "58%",
          }}
        >
          <h2
            className="text-center font-bold"
            style={{
              fontSize: "1.25rem",
              color: DARK,
              letterSpacing: "0.18em",
            }}
          >
            {unit.name.toUpperCase()}
          </h2>
        </div>

        {/* Subtitle */}
        <p
          className="relative z-10 text-center max-w-2xl px-6 pb-12"
          style={{ color: SLATE, fontSize: "1rem", lineHeight: "1.75" }}
        >
          {unit.description}
        </p>
      </div>

      {/* ── PROGRAMS DIVIDER ── */}
      <div
        className="w-full py-4 text-center font-semibold text-sm tracking-wide border-t border-gray-200"
        style={{ color: DARK, backgroundColor: "#f5f5f3" }}
      >
        Explore the spectrum of our degree programmes
      </div>

      {/* ── PROGRAMS ── left info card + right photo, alternating */}
      <div style={{ backgroundColor: "#586272" }}>
        {unit.programs.map(
          (
            program: {
              name: string;
              image: string;
              degrees: string[];
              description: string;
            },
            index: number,
          ) => {
            const isEven = index % 2 === 0;
            const infoCard = (
              <div
                key="info"
                className="flex flex-col justify-center px-12 py-14"
                style={{ backgroundColor: "#f7f7f5" }}
              >
                <h3
                  className="font-bold mb-5 tracking-wider"
                  style={{ fontSize: "1.4rem", color: DARK }}
                >
                  {program.name}
                </h3>

                {/* <p
                  className="text-xs font-bold tracking-widest mb-3"
                  style={{ color: SLATE }}
                >
                  DEGREES
                </p> */}

                {/* Degree pills */}
                {/* <div className="flex flex-wrap gap-2 mb-6">
                  {program.degrees.map((deg: string) => (
                    <button
                      key={deg}
                      className="px-4 py-2 text-sm font-semibold transition-all duration-200"
                      style={{
                        border: `2px solid ${BLUE}`,
                        color: DARK,
                        backgroundColor: "transparent",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.backgroundColor = BLUE;
                        el.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.backgroundColor = "transparent";
                        el.style.color = DARK;
                      }}
                    >
                      {deg}
                    </button>
                  ))}
                  <button
                    className="px-4 py-2 text-sm font-semibold transition-all duration-200"
                    style={{
                      border: `2px solid ${DARK}`,
                      color: DARK,
                      backgroundColor: "transparent",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = DARK;
                      el.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "transparent";
                      el.style.color = DARK;
                    }}
                  >
                    More (click me)
                  </button>
                </div> */}

                <p
                  className="leading-relaxed"
                  style={{ fontSize: "0.93rem", color: SLATE }}
                >
                  {program.description}
                </p>
              </div>
            );

            const photoCard = (
              <div
                key="photo"
                className="relative overflow-hidden"
                style={{ minHeight: "420px" }}
              >
                <img
                  src={program.image}
                  alt={program.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.65) 35%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3
                    className="font-bold text-white tracking-widest"
                    style={{ fontSize: "1.4rem" }}
                  >
                    {program.name}
                  </h3>
                </div>
              </div>
            );

            return (
              <div
                key={index}
                className="grid"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {isEven ? [infoCard, photoCard] : [photoCard, infoCard]}
              </div>
            );
          },
        )}
      </div>

      <Footer />
    </div>
  );
};

export default UnitPage;

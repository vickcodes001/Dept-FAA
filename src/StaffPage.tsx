import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import staff from "./data/staff";


const BLUE = "#3aafe4";
// const DARK = "#2d3748";
const NAVY = "#031430";

const StaffPage = () => {
  return (
    <div style={{ backgroundColor: NAVY, minHeight: "100vh" }}>
      <Navbar />

      {/* Page hero */}
      <div
        className="w-full flex flex-col items-center justify-center py-20 text-center"
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
          Our Faculty & Staff
        </h1>
        <p
          className="max-w-xl text-sm leading-relaxed"
          style={{ color: "#a0aec0" }}
        >
          A distinguished body of practicing artists, designers, and scholars
          dedicated to mentoring the next generation of creative professionals.
        </p>
      </div>

      {/* Staff grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-3 gap-x-8 gap-y-16">
          {staff.map((member) => (
            <div key={member.id} className="flex flex-col">
              {/* Photo */}
              <div
                className="w-full mb-5 overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1b2a4a&color=3aafe4&size=400`;
                  }}
                />
              </div>

              {/* Info */}
              <div className="pt-4" style={{ borderTop: `2px solid ${BLUE}` }}>
                <h3
                  className="font-bold text-white mb-1"
                  style={{ fontSize: "1rem" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-bold tracking-widest mb-1"
                  style={{ color: BLUE, letterSpacing: "0.12em" }}
                >
                  {member.title.toUpperCase()}
                </p>
                <p className="text-xs mb-3" style={{ color: "#718096" }}>
                  {member.department}
                </p>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#a0aec0" }}
                >
                  {member.bio}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-xs font-bold tracking-widest transition-opacity hover:opacity-70"
                  style={{ color: BLUE, letterSpacing: "0.12em" }}
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StaffPage;

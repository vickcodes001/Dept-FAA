import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import staff from "./data/staff";
import useContactModal from "./hooks/useContactModal";
import ContactModal from "./components/ContactModal";

const BLUE = "#3aafe4";
const NAVY = "#031430";

const StaffPage = () => {
  const { isOpen, open, close } = useContactModal();

  const hod = staff.find((m) => m.id === 1)!;
  const rest = staff.filter((m) => m.id !== 1);

  return (
    <div style={{ backgroundColor: NAVY, minHeight: "100vh" }}>
      <Navbar onContactClick={open} />

      {/* Page hero */}
      <div
        className="w-full flex flex-col items-center justify-center py-10 lg:py-20 text-center"
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
          Our Department Staff
        </h1>
        <p
          className="max-w-xl text-sm leading-relaxed"
          style={{ color: "#a0aec0" }}
        >
          A distinguished body of practicing artists, designers, and scholars
          dedicated to mentoring the next generation of creative professionals.
        </p>
      </div>

      {/* ── HOD SECTION ── */}
      <div
        className="w-full"
        style={{ borderBottom: `1px solid rgba(58,175,228,0.15)` }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* HOD Photo */}
            <div className="relative">
              {/* Decorative blue accent behind image */}
              <div
                className="absolute"
                style={{
                  top: "24px",
                  left: "24px",
                  right: "-24px",
                  bottom: "-24px",
                  border: `2px solid ${BLUE}`,
                  opacity: 0.25,
                }}
              />
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src={hod.image}
                  alt={hod.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(hod.name)}&background=1b2a4a&color=3aafe4&size=800`;
                  }}
                />
                {/* Name overlay at bottom of photo */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(3,20,48,0.95) 60%, transparent)",
                  }}
                >
                  <h2
                    className="font-bold text-white mb-1"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {hod.name}
                  </h2>
                  <p
                    className="text-xs font-bold tracking-widest"
                    style={{ color: BLUE, letterSpacing: "0.14em" }}
                  >
                    {hod.title.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>

            {/* HOD Welcome Speech */}
            <div className="flex flex-col justify-center">
              <p
                className="text-xs font-bold tracking-widest mb-4"
                style={{ color: BLUE, letterSpacing: "0.18em" }}
              >
                WELCOME ADDRESS
              </p>
              <h3
                className="font-bold text-white mb-6 leading-snug"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                A Message from the Head of Department
              </h3>

              {/* Quote mark */}
              <div
                className="text-6xl font-bold leading-none mb-4 select-none"
                style={{
                  color: BLUE,
                  opacity: 0.4,
                  fontFamily: "Georgia, serif",
                }}
              >
                "
              </div>

              <div
                className="flex flex-col gap-4 text-sm leading-relaxed"
                style={{ color: "#a0aec0" }}
              >
                <p>
                  Welcome to the Department of Fine & Applied Arts. Over the
                  years, this department has been a crucible of creative
                  excellence. A place where raw talent is shaped into purposeful
                  artistic practice.
                </p>
                <p>
                  Our staff are educators, practicing artists, and researchers
                  who champion the value of fine and applied arts. We nurture
                  creative skill, technical excellence, critical thinking, and
                  cultural awareness. Welcome; we look forward to your ideas,
                  talents, and contributions to our vibrant community.
                </p>
                <p>
                  Whether you are a prospective student, a collaborator, or a
                  visitor to our work, I invite you to explore the richness of
                  what we do here and to join us in celebrating the
                  transformative power of art.
                </p>
              </div>

              {/* Closing signature */}
              <div
                className="mt-8 pt-6"
                style={{ borderTop: `1px solid rgba(58,175,228,0.2)` }}
              >
                <p className="font-bold text-white text-sm">{hod.name}</p>
                <p className="text-xs mt-1" style={{ color: "#718096" }}>
                  {hod.title} · {hod.department}
                </p>
                <a
                  href={`mailto:${hod.email}`}
                  className="text-xs font-bold tracking-widest mt-2 inline-block transition-opacity hover:opacity-70"
                  style={{ color: BLUE, letterSpacing: "0.12em" }}
                >
                  {hod.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STAFF GRID ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <p
          className="text-xs font-bold tracking-widest mb-2"
          style={{ color: BLUE, letterSpacing: "0.18em" }}
        >
          ACADEMIC STAFF
        </p>
        <h2
          className="font-bold text-white mb-16"
          style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
        >
          Department Members
        </h2>

        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-16">
          {rest.map((member) => (
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
      <ContactModal isOpen={isOpen} onClose={close} />
    </div>
  );
};

export default StaffPage;

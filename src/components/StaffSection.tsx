import { useNavigate } from "react-router-dom";
import staff from "../data/staff";

const BLUE = "#3aafe4";
// const DARK = "#2d3748";
const NAVY = "#031430";

const StaffSection = () => {
  const navigate = useNavigate();
  const preview = staff.slice(0, 3);

  return (
    <section className="py-20" style={{ backgroundColor: NAVY }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-bold tracking-widest mb-2"
            style={{ color: BLUE, letterSpacing: "0.18em" }}
          >
            OUR PEOPLE
          </p>
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
          >
            Meet the Faculty
          </h2>
          <div
            className="mt-3"
            style={{ width: 48, height: 3, backgroundColor: BLUE }}
          />
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-3 gap-8">
          {preview.map((member) => (
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
                  className="text-xs font-bold tracking-widest mb-3"
                  style={{ color: BLUE, letterSpacing: "0.12em" }}
                >
                  {member.title.toUpperCase()}
                </p>
                <p
                  className="text-sm leading-relaxed line-clamp-3"
                  style={{ color: "#a0aec0" }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See All button — bottom right */}
        <div className="flex justify-end mt-12">
          <button
            onClick={() => navigate("/staff")}
            className="flex items-center gap-3 px-8 py-3 text-sm font-bold tracking-widest transition-all duration-200 hover:opacity-90"
            style={{
              border: `2px solid ${BLUE}`,
              color: BLUE,
              letterSpacing: "0.14em",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = BLUE;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = BLUE;
            }}
          >
            SEE ALL STAFF
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;

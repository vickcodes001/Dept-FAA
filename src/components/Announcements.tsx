import announcements from "../data/announcements";
import type { Announcement } from "../data/announcements";

const BLUE = "#3aafe4";
const DARK = "#2d3748";
// const NAVY = "#031430";

const categoryColors: Record<Announcement["category"], string> = {
  Exhibition: "#e84a27",
  Event: BLUE,
  News: "#38a169",
  Academic: "#9f7aea",
};

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Announcements = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#f7f7f5" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-xs font-bold tracking-widest mb-2"
              style={{ color: BLUE, letterSpacing: "0.18em" }}
            >
              LATEST FROM THE DEPARTMENT
            </p>
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: DARK }}
            >
              Announcements
            </h2>
            <div
              className="mt-3"
              style={{ width: 48, height: 3, backgroundColor: BLUE }}
            />
          </div>
          <a
            href="#"
            className="text-sm font-bold tracking-wider transition-opacity hover:opacity-70 hidden md:block"
            style={{ color: BLUE, letterSpacing: "0.12em" }}
          >
            VIEW ALL →
          </a>
        </div>

        {/* Cards grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {announcements.map((item) => (
            <div
              key={item.id}
              className="bg-white flex flex-col transition-shadow duration-300 hover:shadow-lg"
              style={{
                borderTop: `3px solid ${categoryColors[item.category]}`,
              }}
            >
              {/* Card top */}
              <div className="px-6 pt-6 pb-4 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold tracking-widest px-3 py-1"
                    style={{
                      backgroundColor: `${categoryColors[item.category]}18`,
                      color: categoryColors[item.category],
                      letterSpacing: "0.14em",
                    }}
                  >
                    {item.category.toUpperCase()}
                  </span>
                  <span className="text-xs" style={{ color: "#a0aec0" }}>
                    {formatDate(item.date)}
                  </span>
                </div>

                <h3
                  className="font-bold mb-3 leading-snug"
                  style={{ fontSize: "1.05rem", color: DARK }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#718096" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Card footer */}
              <div
                className="px-6 py-4 border-t flex items-center justify-between"
                style={{ borderColor: "#e2e8f0" }}
              >
                <a
                  href="#"
                  className="text-xs font-bold tracking-widest transition-opacity hover:opacity-70"
                  style={{ color: BLUE, letterSpacing: "0.12em" }}
                >
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="text-sm font-bold tracking-wider"
            style={{ color: BLUE }}
          >
            VIEW ALL ANNOUNCEMENTS →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Announcements;

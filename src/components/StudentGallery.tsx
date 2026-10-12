import { useEffect, useRef } from "react";

const BLUE = "#3aafe4";
// const DARK = "#2d3748";
// const NAVY = "#031430";

// Replace with your actual Google Drive folder link
const DRIVE_LINK = "https://drive.google.com/drive/folders/YOUR_FOLDER_ID";

// Placeholder gallery images — replace with your actual student artwork paths
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/image1.webp",
    title: "Untitled I",
    student: "Amara Osei",
    dept: "Painting",
  },
  {
    id: 2,
    src: "/images/gallery/image2.webp",
    title: "Forms in Clay",
    student: "Tunde Bello",
    dept: "Ceramics",
  },
  {
    id: 3,
    src: "/images/gallery/image3.webp",
    title: "Lagos Lines",
    student: "Chisom Eze",
    dept: "Graphics",
  },
  {
    id: 4,
    src: "/images/gallery/image4.webp",
    title: "Woven Memory",
    student: "Fatima Sule",
    dept: "Textiles",
  },
  {
    id: 5,
    src: "/images/gallery/image5.webp",
    title: "Mass & Void",
    student: "Emeka Obi",
    dept: "Sculpting",
  },
  {
    id: 6,
    src: "/images/gallery/image6.webp",
    title: "Identity Series",
    student: "Ngozi Kalu",
    dept: "Painting",
  },
  {
    id: 7,
    src: "/images/gallery/image7.webp",
    title: "Digital Ankara",
    student: "Kolade Ojo",
    dept: "Graphics",
  },
  {
    id: 8,
    src: "/images/gallery/image8.webp",
    title: "Earth & Fire",
    student: "Aisha Musa",
    dept: "Ceramics",
  },
  {
    id: 9,
    src: "/images/gallery/image10.webp",
    title: "Threads",
    student: "Bukola Adeyemi",
    dept: "Textiles",
  },
  {
    id: 10,
    src: "/images/gallery/image10.jpeg",
    title: "Monument",
    student: "Uche Nwachukwu",
    dept: "Sculpting",
  },
];

// Duplicate for seamless infinite loop
const doubled = [...galleryImages, ...galleryImages];

const StudentGallery = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef<number>(0);
  const speed = 0.5; // px per frame — adjust to taste

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2; // half because we doubled

    const animate = () => {
      posRef.current += speed;
      if (posRef.current >= totalWidth) posRef.current = 0;
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handleClick = () => {
    window.open(DRIVE_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="py-20 overflow-hidden"
      style={{ backgroundColor: "#111827" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <p
          className="text-xs font-bold tracking-widest mb-2"
          style={{ color: BLUE, letterSpacing: "0.18em" }}
        >
          STUDENT WORK
        </p>
        <div className="flex items-end justify-between">
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
          >
            Student Gallery
          </h2>
          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest transition-opacity hover:opacity-70"
            style={{ color: BLUE, letterSpacing: "0.12em" }}
          >
            VIEW ALL ON DRIVE
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
        <div
          className="mt-3"
          style={{ width: 48, height: 3, backgroundColor: BLUE }}
        />
        <p className="mt-4 text-sm" style={{ color: "#718096" }}>
          Click any image to view the full student gallery on Google Drive.
        </p>
      </div>

      {/* Carousel track */}
      <div
        className="relative w-full overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubled.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative shrink-0 overflow-hidden group"
              style={{ width: "320px", height: "420px" }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback gradient placeholder
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement!;
                  parent.style.background = `linear-gradient(135deg, #1b2a4a 0%, #2d4a7a 100%)`;
                }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent 100%)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-widest mb-1"
                  style={{ color: BLUE, letterSpacing: "0.14em" }}
                >
                  {item.dept.toUpperCase()}
                </p>
                <h4
                  className="font-bold text-white mb-1"
                  style={{ fontSize: "1rem" }}
                >
                  {item.title}
                </h4>
                <p className="text-xs" style={{ color: "#a0aec0" }}>
                  {item.student}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Left/right fade edges */}
        <div
          className="absolute top-0 left-0 h-full w-24 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #111827, transparent)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-24 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #111827, transparent)",
          }}
        />
      </div>
    </section>
  );
};

export default StudentGallery;

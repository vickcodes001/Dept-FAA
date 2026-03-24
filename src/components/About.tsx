import React from "react";

const About = () => {
  const academicUnits = [
    {
      name: "Graphics",
      description: "Design and visual communication for modern media",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Painting",
      description: "Explore visual art and creative expression",
      image: "/images/painting.jpg",
    },
    {
      name: "Textiles",
      description: "Fabric design and textile innovation",
      image: "/images/textile.jpg",
    },
    {
      name: "Ceramics",
      description: "Clay craftsmanship and ceramic art",
      image: "/images/ceramics.jpeg",
    },
    {
      name: "Moulding",
      description: "Sculpture and three-dimensional form",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "PG",
      description: "Sculpture and three-dimensional form",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const ORANGE = "#E84A27";
  //   const NAVY = "#1b2a4a";

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Academic Units
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse academic programs that foster creativity,
            innovation, and artistic excellence
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {academicUnits.map((unit, index) => (
            <a
              key={index}
              href="#"
              className="relative overflow-hidden flex flex-col justify-between group h-125"
              style={{ textDecoration: "none" }}
            >
              {/* Background photo */}
              <img
                src={unit.image}
                alt={unit.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)",
                  opacity: 0.6,
                }}
              />

              {/* Top orange circle with external link icon */}
              <div className="relative z-10 flex justify-center -mt-5 pt-0">
                <div
                  className="flex items-center justify-center rounded-full shadow-lg"
                  style={{ width: 56, height: 56, backgroundColor: ORANGE }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <div className="relative z-10 px-6 flex-1 flex items-center justify-center">
                <h3
                  className="text-white text-center font-bold leading-tight"
                  style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)" }}
                >
                  {unit.name}
                </h3>
              </div>

              {/* Bottom orange circle */}
              <div className="relative z-10 flex justify-center mb-[-28px]">
                <div
                  className="rounded-full"
                  style={{ width: 56, height: 56, backgroundColor: ORANGE }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

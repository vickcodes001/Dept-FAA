import academicUnits from "../data/academicUnits";

const About = () => {
  // const ORANGE = "#E84A27";
  //   const NAVY = "#1b2a4a";

  return (
    <section id="about" className="py-20 bg-[#031430]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Academic Units</h2>
          <p className="text-xl text-[#e0dddd] max-w-3xl mx-auto">
            Explore our diverse academic programs that foster creativity,
            innovation, and artistic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {academicUnits.map((unit, index) => (
            <a
              key={index}
              href={`/unit/${unit.slug}`}
              className="relative overflow-hidden flex flex-col justify-between group h-200"
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

              {/* Title */}
              <div className="bg-[#031430d8] rounded-l-2xl h-20 w-70 right-0 bottom-0 absolute z-10 pr-6 flex items-center justify-center">
                <h3
                  className="text-white text-right font-bold leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 1.7vw, 2rem)" }}
                >
                  {unit.name}
                </h3>
              </div>

              {/* Bottom orange circle */}
              {/* <div className="relative z-10 flex justify-center mb-[-28px]">
                <div
                className="rounded-full"
                style={{ width: 56, height: 56, backgroundColor: ORANGE }}
                />
              </div> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

const Hero = () => {
  return (
    <section className="w-full overflow-">
      {/* first section */}
      <div className="grid grid-cols-2 h-125 max-w-360 mx-auto relative">
        <div className="relative flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute right-[-60%] top-1/2 -translate-y-1/2 bg-[#E84A27] w-full h-125 rounded-full z-10" />

          <h1 className="relative z-20 text-6xl text-[#1b2a4a] font-bold leading-tight">
            Department of Fine <br />
            <span>& Applied Arts</span>
          </h1>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 h-full w-[50vw]">
            <video
              src="/dept-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="grid grid-cols-2 h-125 mx-auto relative">
        <div className="grid grid-cols-2 w-full relative z-20">
          <div className="h-125 ">
            <img
              src="/images/hero-img1.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="">
            <div className="h-62.5">
              <img
                src="/images/hero-img2.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-62.5">
              <img
                src="/images/hero-img3.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-15 gap-10">
          <div className="absolute left-[-35%] top-1/2 -translate-y-1/2 bg-white w-full h-125 rounded-full z-10" />
          <h3 className="relative z-20 text-4xl font-medium">
            Find your passion in Art
          </h3>
          <button className="relative z-20 cursor-pointer bg-transparent hover:bg-[#e84a27] text-[#E84A27] hover:text-white ease-in-out rounded-full w-40 py-4 font-bold border-3 border-[#E84A27] transition-all duration-300">
            Apply to FAA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

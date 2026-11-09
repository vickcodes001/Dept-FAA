"use client";

import { useState } from "react";
import ApplicationModal from "./ApplicationModal";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full overflow-hidden">
      {/* first section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-125 max-w-360 mx-auto relative">
        {/* subsection */}
        <div className="relative flex min-h-72 lg:min-h-0 items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute right-[-35%] lg:right-[-60%] top-1/2 -translate-y-1/2 bg-[#E84A27] w-full h-100 lg:h-125 rounded-full z-10" />
          <h1 className="relative z-20 text-3xl sm:text-4xl lg:text-6xl text-[#1b2a4a] font-bold leading-tight">
            Department of Fine <br />
            <span>& Applied Arts</span>
          </h1>
        </div>

        <div className="relative aspect-video lg:aspect-auto">
          <div className="absolute inset-0 lg:top-0 lg:left-0 lg:w-full lg:h-full">
            <video
              src="/new-dept.mp4"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-125 mx-auto relative">
        <div className="grid grid-cols-2 w-full relative z-20">
          <div className="h-[22rem] sm:h-[28rem] lg:h-125">
            <img
              src="/images/hero-img1.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="">
            <div className="h-[11rem] sm:h-[14rem] lg:h-62.5">
              <img
                src="/images/hero-img2.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[11rem] sm:h-[14rem] lg:h-62.5">
              <img
                src="/images/hero-img3.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-4 py-10 sm:px-6 lg:px-15 lg:py-0 gap-6 lg:gap-10">
          <div className="absolute left-[-35%] top-1/2 -translate-y-1/2 bg-white w-full h-125 rounded-full z-10 hidden lg:block" />
          <h3 className="relative z-20 text-3xl sm:text-4xl font-medium">
            Find your passion in Art and Design and whatsoever you want to do
          </h3>
          <div className="relative z-20 flex gap-4">
            <button
              onClick={onContactClick}
              className="cursor-pointer bg-transparent hover:bg-[#e84a27] text-[#E84A27] hover:text-white ease-in-out rounded-full w-40 py-4 font-bold border-3 border-[#E84A27] transition-all duration-300"
            >
              Apply to FAA
            </button>
            {/* <button
              onClick={onContactClick}
              className="cursor-pointer bg-transparent hover:bg-[#031430] text-[#031430] hover:text-white ease-in-out rounded-full w-40 py-4 font-bold border-3 border-[#031430] transition-all duration-300"
            >
              Contact Us
            </button> */}
          </div>
        </div>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;

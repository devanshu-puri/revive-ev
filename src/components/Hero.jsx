import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-[#1F1F1F] text-white overflow-x-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-10">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold font-sans text-[#2ECC71] mb-6">
            Powering the Future of Electric Mobility
          </h1>
          <p className="text-lg text-gray-300 font-normal font-sans mb-6">
            Revive EV is India’s first tech-driven electric vehicle repair and battery swapping solution.
            From doorstep servicing to franchise opportunities, we’re building a smarter, greener EV ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#2ECC71] text-black px-6 py-3 rounded-2xl font-semibold font-sans">
              Get Started
            </button>
            <button className="border border-[#2ECC71] text-[#2ECC71] px-6 py-3 rounded-2xl font-semibold font-sans hover:bg-[#2ECC71] hover:text-black transition">
              Explore Services
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/Electric car-rafiki (1).png"
            alt="Electric Vehicle Charging"
            className="w-full max-w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

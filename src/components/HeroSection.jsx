// components/HeroSection.jsx

const HeroSection = () => {
  return (
    <section className="hero-section flex flex-col-reverse md:flex-row items-center justify-between p-8">
      <div className="text-content max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Drive the Future with Revive EV
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sustainable, Powerful, Smart.
        </p>
      </div>
      <div className="image-container">
        <img
          src="/assets/electric-car-animate.svg"
          alt="Animated Electric Car"
          className="animated-svg"
        />
      </div>
    </section>
  );
};

export default HeroSection;

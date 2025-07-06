import React from "react";

const BatterySwap = () => {
  return (
    <section className="min-h-screen w-full bg-white text-gray-900 pt-32 pb-20 px-10 overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex justify-between items-start mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            🔋 Swap. Drive. Repeat. Charging is history.
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            We're building India’s smartest network of battery swapping stations — because EV users shouldn’t have to wait. Even in our early phase, we are piloting fast, reliable swaps starting with 2-wheelers and 3-wheelers.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Pilot stations in Chennai, Coimbatore, and Bangalore suburbs</li>
            <li>Seamless experience via QR-based access</li>
            <li>Partnering with local garages and stores for scale</li>
          </ul>
          <p className="text-gray-600">
            Our goal is to decentralize power — literally. With each local partner, we're building a robust, fast-access grid that reduces wait times and enables constant EV uptime.
          </p>
        </div>

        {/* Image on right */}
        <div className="ml-6">
          <img
            src="/imagxyz.png"
            alt="Battery Swap Station"
            className="w-[400px] rounded-md "
          />
        </div>
      </div>

      {/* Future Plan Section */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          In the next phase, we plan to integrate smart billing, location-based swap discovery, and support for electric LCVs. Our AI platform will ensure predictive routing and optimized station load — ensuring minimal wait, maximum performance.
        </p>
      </div>
    </section>
  );
};

export default BatterySwap;

import React from "react";

const services = [
  {
    title: "EV Repair & Maintenance",
    desc: "Expert repair and routine maintenance by trained EV specialists to keep your vehicle in top condition.",
    icon: "🔧",
  },
  {
    title: "Mobile On-Demand Van",
    desc: "Get repair and maintenance at your doorstep with our mobile van service, anytime, anywhere.",
    icon: "🚐",
  },
  {
    title: "Fleet Servicing",
    desc: "Reliable care plans and bulk servicing solutions tailored for EV fleets and delivery vehicles.",
    icon: "🚚",
  },
  {
    title: "Annual Maintenance Plans",
    desc: "Worry-free annual plans with scheduled check-ups, priority service, and exclusive discounts.",
    icon: "📅",
  },
];

const Services = () => {
  return (
    <section className="bg-white text-gray-900 pt-32 pb-20 w-full overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-sm text-gray-500 mt-2">
            Reliable & Modern Solutions for Every EV Owner
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Comprehensive EV Care, Delivered Differently
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From regular tune-ups to emergency repairs and long-term maintenance
              contracts, we offer it all to keep your electric vehicle in peak
              condition.
            </p>
            <button className="bg-[#2ECC71] text-white px-6 py-2 rounded-md font-medium hover:bg-[#00cc66] transition">
              Schedule a Repair
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="/service-illustration.png"
              alt="EV Service"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-10">
            What We Offer
          </h3>
          <div className="grid grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h4 className="text-xl font-semibold mb-2">Need expert help?</h4>
          <p className="text-gray-600 mb-4">
            We’re available to answer your questions and schedule your service today.
          </p>
          <button className="border border-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-800 hover:text-white transition">
            Talk to a Technician
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

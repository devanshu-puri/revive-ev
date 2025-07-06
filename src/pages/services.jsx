import React from "react";
import Footer from "../components/Footer"; // ensure this exists or comment it

const roadmap = [
  {
    title: "EV Repair & Maintenance",
    content:
      "Certified technicians handle diagnostics, system checks, and part replacements to keep your EV in peak condition. Scheduled servicing improves performance and longevity.",
  },
  {
    title: "Mobile On-Demand Van",
    content:
      "Our mobile vans bring EV maintenance to your doorstep. Equipped for emergencies and regular services — perfect for your convenience, wherever you are.",
  },
  {
    title: "Fleet Servicing",
    content:
      "Custom fleet management for EV taxis, delivery vans, and corporate vehicles. Includes monitoring, preventive checks, and priority repairs to minimize downtime.",
  },
  {
    title: "Annual Maintenance Plans",
    content:
      "Pre-scheduled service visits, battery reports, emergency support, and software upgrades bundled in an affordable yearly plan — ideal for long-term EV care.",
  },
];

const Services = () => {
  return (
    <div className="bg-[#1f1f1f] text-white pt-28 px-6 md:px-16 lg:px-24 xl:px-32 overflow-x-hidden">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <span className="text-[#00FFCC]">Our Services</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Built to support every stage of your EV journey — from diagnostics to doorstep service to fleet plans.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-[#00FFCC]"></div>

        {/* Service Blocks */}
        <div className="flex flex-col space-y-12 pl-12">
          {roadmap.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Node */}
              <div className="absolute -left-[22px] top-1 w-5 h-5 bg-[#1f1f1f] border-4 border-[#00FFCC] rounded-full z-10"></div>

              {/* Content */}
              <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-semibold text-white mb-2">{item.title}</h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-6">
        <a
          href="/repair"
          className="bg-[#00cc66] hover:bg-[#00b359] text-white px-6 py-3 rounded-full text-lg font-medium transition"
        >
          Schedule a Repair
        </a>
        <a
          href="/technician"
          className="border border-white hover:border-[#97e6b8] hover:bg-[#97e6b8] hover:text-black px-6 py-3 rounded-full text-lg font-medium transition text-white"
        >
          Talk to a Technician
        </a>
      </div>

      {/* Footer */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Services;

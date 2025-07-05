import React from "react";

const services = [
  {
    title: "EV Repair & Maintenance",
    description:
      "Expert repair and routine maintenance by trained EV specialists to keep your vehicle in top condition.",
  },
  {
    title: "Mobile On-Demand Van",
    description:
      "Get repair and maintenance at your doorstep with our mobile van service, anytime, anywhere.",
  },
  {
    title: "Fleet Servicing",
    description:
      "Reliable care plans and bulk servicing solutions tailored for EV fleets and delivery vehicles.",
  },
  {
    title: "Annual Maintenance Plans",
    description:
      "Worry-free annual plans with scheduled check-ups, priority service, and exclusive discounts.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#18191B] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#222] p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium">
            Schedule a Repair
          </button>
          <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-xl font-medium">
            Talk to a Technician
          </button>
        </div>
      </div>
    </div>
  );
}

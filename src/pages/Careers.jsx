// src/pages/Careers.jsx
import React from "react";

const Careers = () => {
  return (
    <section className="w-full bg-gray-50 text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Join a revolution. We’re just getting started.</h2>

        <p className="text-lg mb-6">
          At Revive EV, we’re creating the infrastructure India needs to adopt electric vehicles at scale. We’re lean, fast-moving, and ready to change the game.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">What We Offer</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Startup culture — fast, frugal, fun</li>
          <li>Work directly with founders</li>
          <li>Flexible remote or hybrid roles</li>
          <li>You’ll build the future, not just maintain it</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Open Roles</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>🛠 2 Field EV Technicians</li>
          <li>🧑‍💻 1 Full Stack Developer (React + Firebase)</li>
          <li>🚀 1 Business Development Intern</li>
          <li>🎯 1 Social Media + Content Creator (Intern/Freelancer)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">How to Apply</h3>
        <p className="text-gray-700">
          WhatsApp us at +91-XXXXXXXXXX or email <strong>team@reviveev.com</strong>
        </p>
      </div>
    </section>
  );
};

export default Careers;

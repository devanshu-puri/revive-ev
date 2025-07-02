import React from 'react';
import Hero from './Hero';

const Homepage = () => {
  return (
    <main className="bg-[#1F1F1F] text-white overflow-x-hidden">
      <Hero />

      {/* Feature Grid Section */}
      <section className="py-20 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2ECC71]">Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'EV Repair & Maintenance', desc: 'On-demand repair and servicing by trained EV specialists.' },
            { title: 'Battery Swapping', desc: 'Find nearby stations and replace your battery instantly.' },
            { title: 'Fleet Services', desc: 'Comprehensive care plans for your EV fleets and delivery vehicles.' },
          ].map((feature, index) => (
            <div key={index} className="bg-[#2ECC71] text-black p-6 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 lg:px-20 bg-[#F4F4F4] text-black text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Book Service', step: 'Choose your EV problem and book via app.' },
            { title: 'We Come to You', step: 'Mobile van reaches your location for service.' },
            { title: 'All Done!', step: 'Track and manage everything from the app.' },
          ].map((step, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="font-semibold text-lg text-[#2ECC71] mb-2">{step.title}</h3>
              <p className="text-sm">{step.step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Banner Section */}
      <section className="py-20 px-6 lg:px-20 bg-[#2ECC71] text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Download the Revive EV App</h2>
        <p className="mb-6">Access repair, battery swaps, fleet tracking, and more — all in one place.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-xl">Play Store</button>
          <button className="bg-black text-white px-6 py-3 rounded-xl">App Store</button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#2ECC71]">Join the EV Revolution</h2>
        <p className="mb-6 text-gray-300">Become a partner, technician, or franchisee — shape the future with us.</p>
        <button className="bg-[#2ECC71] text-black px-6 py-3 rounded-2xl font-semibold font-sans">
          Apply Now
        </button>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-20 bg-[#111] text-gray-400 text-sm text-center">
        © 2025 Revive EV. All rights reserved.
      </footer>
    </main>
  );
};

export default Homepage;

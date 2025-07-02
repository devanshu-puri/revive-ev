import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// additional (up)
import React from "react";

function App() {
  return (
    <main className="font-body text-charcoal bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Powering the Future of EV Maintenance
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Trusted, On-Demand & Franchise-Ready Electric Vehicle Services.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-white text-primary font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-primary transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-6 bg-lightgray">
        <h2 className="text-3xl font-heading text-center mb-10">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "EV Repair & Maintenance", desc: "On-demand repair and service for all EV models." },
            { title: "Battery Swapping", desc: "Fast battery replacement at verified stations." },
            { title: "Fleet Servicing", desc: "Bulk maintenance support for EV fleets and businesses." },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white text-center py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm mb-2">&copy; 2025 Revive EV. All rights reserved.</p>
          <div className="text-sm">
            <a href="/about" className="hover:underline mx-2">About</a>|
            <a href="/services" className="hover:underline mx-2">Services</a>|
            <a href="/contact" className="hover:underline mx-2">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;

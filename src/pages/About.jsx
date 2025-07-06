import React from "react";

const About = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-6 text-center">
          Built for EV owners, by EV users.
        </h2>

        {/* Story */}
        <p className="text-lg mb-6">
          Revive EV was founded by engineers, logistics operators, and EV users frustrated by poor service and lack of infrastructure. We launched in 2025 to fix this and bring EV support to every corner of India.
        </p>

        <p className="text-lg mb-6">
          Our mission is simple: make EV servicing, battery swapping, and on-road support accessible in every city and town. As India transitions to clean mobility, Revive EV is building the support ecosystem it needs.
        </p>

        {/* Stats */}
        <ul className="list-disc list-inside mb-10 text-gray-700">
          <li>1 founding member</li>
          <li>2 swap stations live</li>
          <li>1 mobile repair van in Chennai</li>
          <li>12 pilot customers — and growing 🚀</li>
        </ul>

        {/* Services */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">What We Offer</h3>
        <ul className="list-disc list-inside text-gray-700 mb-10">
          <li>✅ EV Repair & Diagnosis for 2W and 3W</li>
          <li>🔋 Battery Swapping (Beta)</li>
          <li>🚐 Mobile EV Technician</li>
          <li>📦 Spare Parts Delivery (Coming Soon)</li>
        </ul>

        {/* Founder Bio */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10 shadow-sm">
          <h4 className="text-xl font-bold mb-2">👤 Founder – Jayanth Ramasami</h4>
          <p className="text-gray-700 leading-relaxed">
            Jayanth Ramasami is the visionary founder of Revive EV, reimagining how India services and sustains its electric vehicle revolution. With a background in tech-enabled operations and a passion for grassroots innovation, he launched Revive EV in 2025 with a belief — every EV deserves a second chance, and every city deserves access to clean mobility support.
            <br /><br />
            Under his leadership, Revive EV is rapidly building an ecosystem of mobile repair units, battery swap hubs, and micro-franchise garages across Chennai, Coimbatore, and Bangalore. Jayanth is committed to sustainable infrastructure, inclusive tech, and empowering India's next generation of EV mechanics, entrepreneurs, and engineers.
          </p>
        </div>

        {/* Team Bio */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          <h4 className="text-xl font-bold mb-2">🤖 Gen AI Engineer – Sudharshan</h4>
          <p className="text-gray-700 leading-relaxed">
            Sudharshan is the Gen AI Engineer at Revive EV, powering the intelligence behind India’s most adaptive EV service platform. With deep expertise in machine learning, NLP, and diagnostics, he is building AI tools that predict EV breakdowns, optimize technician dispatch, and enable smart repair decisions.
            <br /><br />
            At the start of his AI journey, Sudharshan is already transforming raw EV data into real-time insights — bringing speed, precision, and automation to every Revive EV van, garage, and app. He believes AI isn’t just for big tech — it’s the future backbone of smart garages across India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

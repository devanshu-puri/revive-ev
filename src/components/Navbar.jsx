import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300" id="main-nav">
      <div className="flex items-center justify-between px-6 py-2 bg-transparent text-white w-[95vw] max-w-6xl mx-auto rounded-none backdrop-blur-none border border-transparent transition-all duration-300">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img src="/Screenshot_2025-07-02_142244-removebg-preview.png" alt="logo" className="w-8 h-8" />
          <span className="text-lg font-bold text-[#2ECC71]">Revive EV</span>
        </div>

        {/* Right: Links */}
        <nav className="flex items-center space-x-4 text-sm font-medium">
          <a href="#" className="text-white hover:bg-[#97E6B8] hover:text-black px-3 py-1 rounded transition">
  Battery Swap
</a>
<a href="#" className="text-white hover:bg-[#97E6B8] hover:text-black px-3 py-1 rounded transition">
  About
</a>
<a href="#" className="text-white hover:bg-[#97E6B8] hover:text-black px-3 py-1 rounded transition">
  Careers
</a>
<a href="#" className="text-white hover:bg-[#97E6B8] hover:text-black px-3 py-1 rounded transition">
  Contact
</a>
          <button className="bg-[#2ECC71] text-black px-4 py-1 rounded-lg hover:bg-white hover:text-black transition">Login</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

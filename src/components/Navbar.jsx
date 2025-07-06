import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-[40px] ${
        scrolled
          ? "backdrop-blur-md bg-black/50 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Screenshot_2025-07-02_142244-removebg-preview.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="text-[#00FFCC] font-bold text-xl">Revive EV</span>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-white px-3 py-1 rounded-md transition-all duration-300 hover:bg-[#97e6b8] hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <Link
          to="/login"
          className="bg-[#00FF66] hover:bg-[#00CC66] text-black px-4 py-2 rounded-lg font-semibold transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

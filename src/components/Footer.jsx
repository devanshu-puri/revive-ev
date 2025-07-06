import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">© 2025 Revive EV. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-[#97e6b8]">Privacy</a>
          <a href="/terms" className="hover:text-[#97e6b8]">Terms</a>
          <a href="/contact" className="hover:text-[#97e6b8]">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// @ts-nocheck
import React from 'react';
import './index.css'; // Ensure Tailwind is imported
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import useNavScroll from './hooks/useNavScroll';

function App() {
  useNavScroll(); // ✅ Enables sticky navbar scroll behavior

  return (
    <div className="bg-[#1F1F1F] min-h-screen text-white overflow-x-hidden">
      {/* ✅ Navbar from separate file */}
      <Navbar />

      {/* ✅ Full homepage (Hero + other sections) */}
      <Homepage />
    </div>
  );
}

export default App;

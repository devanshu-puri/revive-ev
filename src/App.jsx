import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Services from './pages/services';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-[#1F1F1F] min-h-screen text-white overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes like About, Contact as needed */}
      </Routes>
    </div>
  );
}

export default App;

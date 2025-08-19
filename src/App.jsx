import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu } from "lucide-react";

// Dummy Coming Soon page
function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen text-2xl font-bold">
      🚧 Coming Soon 🚧
    </div>
  );
}

// Home Page
function Home() {
  const categories = [
    { name: "For You" },
    { name: "Women's Fashion" },
    { name: "Men's Fashion" },
    { name: "Beauty & Personal Care" },
    { name: "Food & Beverages" },
  ];

  return (
    <div className="pb-20">
      {/* Top Navbar */}
      <div className="flex items-center justify-between bg-purple-300 p-3">
        <Menu />
        <div className="flex items-center bg-white rounded-lg px-2 flex-1 mx-2">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search Parqis"
            className="p-2 w-full outline-none"
          />
        </div>
        <Heart />
      </div>

      {/* Categories */}
      <div className="flex space-x-4 overflow-x-auto p-2 bg-purple-200">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            to="/coming-soon"
            className="flex flex-col items-center min-w-[80px]"
          >
            <div className="w-16 h-16 bg-white rounded-full shadow flex items-center justify-center">
              {cat.name[0]}
            </div>
            <p className="text-sm mt-1">{cat.name}</p>
          </Link>
        ))}
      </div>

      {/* Banner */}
      <div className="p-4">
        <img
          src="/parqis-hero1.png"
          alt="banner"
          className="rounded-2xl shadow"
          onError={e => {
            if (!e.target.dataset.failed) {
              e.target.dataset.failed = "1";
              e.target.src = "https://via.placeholder.com/400x200?text=Image+Not+Found";
            }
          }}
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <Link to="/coming-soon" className="bg-white p-3 rounded-xl shadow">
          <img
            src="/glowrify.png"
            alt="lamp"
            className="rounded-lg mb-2"
            onError={e => {
              if (!e.target.dataset.failed) {
                e.target.dataset.failed = "1";
                e.target.src = "https://via.placeholder.com/150?text=Image+Not+Found";
              }
            }}
          />
          <p className="font-semibold text-sm">Brand Calling You!</p>
          <p className="text-xs">GLOWRIFY</p>
        </Link>

        <Link to="/coming-soon" className="bg-white p-3 rounded-xl shadow">
          <img
            src="/Healthastic.png"
            alt="chips"
            className="rounded-lg mb-2"
            onError={e => {
              if (!e.target.dataset.failed) {
                e.target.dataset.failed = "1";
                e.target.src = "https://via.placeholder.com/150?text=Image+Not+Found";
              }
            }}
          />
          <p className="font-semibold text-sm">Explore More</p>
          <p className="text-xs">HEALTASTIC!</p>
        </Link>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* Redirect all unknown routes to Home */}
          <Route path="*" element={<Home />} />
        </Routes>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 w-full bg-purple-300 flex justify-around p-2 text-sm z-50">
          <Link to="/" className="flex flex-col items-center">
            <span>🏠</span>
            Home
          </Link>
          <Link to="/coming-soon" className="flex flex-col items-center">
            <span>📈</span>
            Trends
          </Link>
          <Link to="/coming-soon" className="flex flex-col items-center">
            <span>🔲</span>
            Explore All
          </Link>
          <Link to="/coming-soon" className="flex flex-col items-center">
            <ShoppingCart />
            Cart
          </Link>
          <Link to="/coming-soon" className="flex flex-col items-center">
            <User />
            You
          </Link>
        </div>
      </div>
    </Router>
  );
}
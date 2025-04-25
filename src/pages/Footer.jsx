// components/Footer.jsx
import React from "react";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">QuickBite</h2>
          <p className="text-gray-400">
            Satisfy your cravings with the fastest and freshest bites around.
            Powered by passion, served with pride.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Restaurants</li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt className="text-green-400" /> Nairobi, Kenya
          </p>
          <p className="mt-3 flex items-center gap-2 text-gray-400">
            <FaHeart className="text-pink-400" /> Made with love
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} QuickBite Kenya. All rights reserved.
      </div>
    </footer>
  );
}

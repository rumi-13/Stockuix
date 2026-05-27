import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Signup", path: "/signup" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navbar Container */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="logo.svg"
              alt="StockUIX"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 font-medium hover:text-black transition no-underline"
                style={{ textDecoration: "none" }}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2 bg-white border-t border-gray-100 flex flex-col gap-4">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className="text-gray-700 font-medium hover:text-black transition no-underline"
              style={{ textDecoration: "none" }}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/login"
            onClick={closeMenu}
            className="bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
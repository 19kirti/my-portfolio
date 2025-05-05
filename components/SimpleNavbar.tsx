"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const SimpleNavbar = () => {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Work Experience",
      link: "#workexperience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Education",
      link: "#education",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Hackathons & Contests",
      link: "#hackathons",
    },
    {
      name: "Contact Me",
      link: "#contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Only add the event listener client-side
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-2"
          : "bg-white py-4 mt-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/">Portfolio</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, idx) => (
              <a
                key={`desktop-link-${idx}`}
                href={item.link}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SimpleNavbar;
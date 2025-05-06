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
      className={`fixed z-[100] transition-all duration-300 rounded-full ${
        scrolled
          ? "top-3 left-0 right-0 w-11/12 max-w-7xl mx-auto bg-blue-400 backdrop-blur-sm shadow-md py-2"
          : "top-5 left-0 right-0 w-11/12 max-w-7xl mx-auto bg-blue-300 py-3"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center md:justify-center md:relative">
          {/* Logo - Left on mobile, absolute left on desktop */}
          <div className="text-2xl text-black font-bold md:absolute md:left-0">
            <Link href="/">Portfolio</Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            {navItems.map((item, idx) => (
              <a
                key={`desktop-link-${idx}`}
                href={item.link}
                className={`transition-colors text-sm lg:text-base ${
                  scrolled 
                    ? "text-black hover:text-white" 
                    : "text-gray-700 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-white"
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
          <div className={`md:hidden mt-4 pb-4 rounded-2xl shadow-lg absolute left-0 right-0 px-4 ${
            scrolled ? "bg-blue-400" : "bg-blue-300"
          }`}>
            <div className="flex flex-col space-y-3">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  className="text-black hover:text-white transition-colors px-2 py-1 text-center"
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
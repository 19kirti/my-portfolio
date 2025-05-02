"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/Resizable-Navbar";
import { useState } from "react";

import React from 'react'

const NavbarComp = () => {
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
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="relative rounded-4xl bg-white mt-5 w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="px-5">
          <NavbarLogo />
          <NavItems className="flex items-center gap-6" items={navItems} />
          {/* <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Theme</NavbarButton>
          </div> */}
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            {/* <div className="flex w-full flex-col gap-4">
              
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Theme
              </NavbarButton>
            </div> */}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
 
      {/* Navbar */}
    </div>
  );
};

export default NavbarComp



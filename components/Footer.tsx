"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-5 mb-20"
    >
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="text-center text-gray-300 text-sm">
          © {currentYear} Kirti Aggarwal. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

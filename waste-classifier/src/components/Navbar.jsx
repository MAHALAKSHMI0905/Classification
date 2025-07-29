import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-title">Smart Waste Classifier</div>

      {/* Desktop Nav Links */}
      <ul className="nav-links desktop">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/result">Result</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="nav-links mobile"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/result" onClick={toggleMenu}>Result</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="about-card"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>About Smart Waste Classifier</h2>
        <p>
          Smart Waste Classifier is a modern web app that uses AI to detect and classify different types of waste from images.
          It helps promote better waste management and environmental awareness.
        </p>
        <p>💡 Key Features:</p>
        <ul>
          <li>Upload an image of any waste item</li>
          <li>Get AI-powered predictions instantly</li>
          <li>Learn if it’s biodegradable, recyclable, or non-recyclable</li>
          <li>Eco tips and awareness for a cleaner planet 🌍</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default About;

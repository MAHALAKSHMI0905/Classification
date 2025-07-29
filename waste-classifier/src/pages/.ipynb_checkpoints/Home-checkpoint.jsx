import React from 'react';
import { motion } from 'framer-motion';
import { FaUpload } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="upload-box">
        <h2><FaUpload /> Upload a Waste Image</h2>
        <input type="file" accept="image/*" />
        <button disabled>Predict</button>
      </div>
    </motion.div>
  );
};

export default Home;

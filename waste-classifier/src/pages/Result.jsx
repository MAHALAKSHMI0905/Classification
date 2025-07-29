import React from 'react';
import { motion } from 'framer-motion';
import './Result.css';

const Result = () => {
  const predictedClass = "Recyclable Waste";
  const confidence = "92.5%";

  return (
    <motion.div
      className="result-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="result-card">
        <h2>Prediction Result</h2>
        <p className="type">🧪 Type: <strong>{predictedClass}</strong></p>
        <p className="confidence">🔍 Confidence: <strong>{confidence}</strong></p>
        <p className="note">⚠️ Note: This is a static dummy result for frontend preview.</p>
      </div>
    </motion.div>
  );
};

export default Result;

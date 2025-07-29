import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Result from './pages/Result';
import About from './pages/About';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="app-container">
      <Router>
        <header className="navbar">
          <h1>Smart Waste Classifier</h1>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/result">Result</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <main className="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2025 Smart Waste Classifier | Built with 💚</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;

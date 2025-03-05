import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Favorites from "./Favorites";
import Navbar from "./Navbar";
import "./styles.css"; // Make sure you have styles imported

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Background Overlay */}
        <div className="background-overlay"></div>

        {/* IMDb Logo */}
        <Link to="/">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" 
            alt="IMDb Logo" 
            className="imdb-logo"
          />
        </Link>

        {/* Navigation Bar */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

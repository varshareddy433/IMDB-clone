import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  useEffect(() => {
    if (search.length > 2) {
      axios
        .get(`https://www.omdbapi.com/?apikey=cff86bc5&s=${search}`)
        .then((res) => setMovies(res.data.Search || []))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [search]);

  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="movies-container">
        {movies.map((movie) => {
          const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
          return (
            <div key={movie.imdbID} className="movie-card">
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              </Link>
              <div className="movie-info">
                <h3 className="movie-title">{movie.Title}</h3>
                <p className="movie-year">{movie.Year}</p>
                <button
                  onClick={() => addToFavorites(movie)}
                  disabled={isFavorite}
                  className={`favorite-button ${isFavorite ? "disabled" : ""}`}
                >
                  {isFavorite ? "✅ Added to Favorites" : "❤ Add to Favorites"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

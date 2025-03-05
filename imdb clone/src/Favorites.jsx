import React, { useState } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Favorite Movies</h2>
      {favorites.length === 0 ? <p>No favorites added.</p> : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {favorites.map((movie) => (
            <div key={movie.imdbID} style={{ border: "1px solid gray", padding: "10px" }}>
              <Link to={`/movie/${movie.imdbID}`}><img src={movie.Poster} alt={movie.Title} style={{ width: "100%" }} /></Link>
              <h3>{movie.Title}</h3>
              <button onClick={() => removeFromFavorites(movie.imdbID)}>❌ Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

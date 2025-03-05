import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${id}`).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} style={{ width: "300px" }} />
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;

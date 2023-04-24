import React from "react";
import "./Row.css";

const baseUrl = `https://image.tmdb.org/t/p/original`;

const Row = ({ title, movies }) => {
  if (movies.length === 0) {
    return <p>Loading</p>;
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => {
          console.log(movie);
          return (
            <img
              className="poster"
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Row;

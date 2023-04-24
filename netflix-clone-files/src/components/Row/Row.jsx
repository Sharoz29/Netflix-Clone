import React from "react";
import "./Row.css";

export const baseUrl = `https://image.tmdb.org/t/p/original`;

const Row = ({ title, movies, isLargeRow }) => {
  if (movies.length === 0) {
    return <p>Loading</p>;
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`poster && ${isLargeRow && "posterLarge"}`}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Row;

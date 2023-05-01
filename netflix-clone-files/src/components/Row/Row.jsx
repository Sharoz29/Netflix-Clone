import React, { useState } from "react";
import "./Row.css";
// import { Modal, Button } from "react-bootstrap";
import Modal from "../modal/modal";

export const baseUrl = `https://image.tmdb.org/t/p/original`;

const Row = ({ title, movies, isLargeRow, id }) => {
  const [openModal, setOpenModal] = useState(false);
  const [movieInfo, setMovieInfo] = useState([]);

  const clickEvent = (e) => {
    setOpenModal(true);
    const targetMovie = e.target;
    setMovieInfo(targetMovie);
  };

  if (movies.length === 0) {
    return <p>Loading</p>;
  }
  return (
    <div className="row" key={id}>
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => {
          const name = movie.name;
          const title = movie.title;
          const info = movie.overview;
          const releaseDate = movie.release_date;
          const firstAirDate = movie.first_air_date;
          return (
            <>
              <img
                key={movie?.id}
                name={name || title}
                value={info}
                releasedate={releaseDate || firstAirDate}
                className={`poster && ${isLargeRow && "posterLarge"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={clickEvent}
              />
              {openModal && (
                <Modal setOpenModal={setOpenModal} movie={movieInfo} />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Row;

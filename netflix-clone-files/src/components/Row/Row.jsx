import React, { useState } from "react";
import "./Row.css";
// import { Modal, Button } from "react-bootstrap";
import Modal from "../modal/modal";

export const baseUrl = `https://image.tmdb.org/t/p/original`;

const Row = ({ title, movies, isLargeRow }) => {
  const [openModal, setOpenModal] = useState(false);

  const clickEvent = (e) => {
    setOpenModal(true);
    console.log(openModal);
  };

  if (movies.length === 0) {
    return <p>Loading</p>;
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => {
          const name = movie.name;
          const title = movie.title;
          const overview = movie.overview;
          // console.log(movie);
          return (
            <>
              <img
                key={movie.id}
                name={name || title}
                className={`poster && ${isLargeRow && "posterLarge"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={clickEvent}
                overview={overview}
              />
              {openModal && <Modal setOpenModal={setOpenModal} />}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Row;

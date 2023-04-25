import React, { useState } from "react";
import "./Row.css";
import { Modal, Button } from "react-bootstrap";

export const baseUrl = `https://image.tmdb.org/t/p/original`;

const Row = ({ title, movies, isLargeRow }) => {
  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const clickEvent = (e) => {
    console.log(e.target);
    setModalInfo(e.target);
    toggle();
  };
  const toggle = () => {
    setShowModal(handleShow);
  };

  const Modalcontent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalInfo.overview}</Modal.Body>
      </Modal>
    );
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
            </>
          );
        })}
      </div>
      <Modalcontent />
    </div>
  );
};
export default Row;

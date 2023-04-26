import React from "react";
import "./modal.css";

const Modal = ({ setOpenModal, movie }) => {
  const movieData = { movie };
  const value = movieData.movie.attributes[1].value;
  const releaseDate = movieData.movie.attributes[2].value;

  // console.log(name, value, releasedOn);

  return (
    <div className="modal-background">
      <div className="modal-container">
        <button
          className="close-button"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
        <div className="modal-title">
          <h1>{movie?.name}</h1>
        </div>
        <div className="body">
          <img
            className="modal-img"
            src={`${movie.src}`}
            alt={`${movie.alt}`}
          />
          <br></br>
          <p className="modal-info">{value}</p>
          <br></br>
          <p className="modal-date">Released On : {releaseDate}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

//<img name="The Super Mario Bros. Movie" value="While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi." releasedate="2023-04-05" class="poster &amp;&amp; undefined" src="https://image.tmdb.org/t/p/original/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg">

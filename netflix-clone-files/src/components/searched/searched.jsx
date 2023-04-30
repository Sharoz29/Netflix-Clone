import { baseUrl } from "../Row/Row";
import { useState } from "react";
import Modal from "../modal/modal";
import "./searched.css";
import Footer from "../Footer/Footer";

const Searched = ({ movies }) => {
  const [openModal, setOpenModal] = useState(false);
  const [movieInfo, setMovieInfo] = useState([]);
  const clickEvent = (e) => {
    setOpenModal(true);
    const targetMovie = e.target;
    setMovieInfo(targetMovie);
  };
  return (
    <div className="search-page">
      <h1 className="search-title">Search</h1>
      <div className="movie-page">
        {movies?.map((movie) => {
          const name = movie.name;
          const title = movie.title;
          const info = movie.overview;
          const releaseDate = movie.release_date;
          const firstAirDate = movie.first_air_date;
          const imgPath = movie.poster_path;
          return (
            <>
              {imgPath && (
                <img
                  key={movie.id}
                  name={name || title}
                  value={info}
                  releasedate={releaseDate || firstAirDate}
                  src={`${baseUrl}${movie.poster_path}`}
                  alt={movie.name}
                  className="movie-card"
                  onClick={clickEvent}
                />
              )}
              {openModal && (
                <Modal setOpenModal={setOpenModal} movie={movieInfo} />
              )}
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Searched;

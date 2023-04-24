import React from "react";
import "./Banner.css";
import { baseUrl } from "../Row/Row";

const Banner = ({ movies }) => {
  if (movies.length === 0) {
    return <p>Loading</p>;
  }
  const random = Math.floor(Math.random() * movies.length - 1);

  const randomMovie = movies[random];
  console.log(randomMovie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${baseUrl}${randomMovie.backdrop_path}')`,
        backgroundPosition: "center-center",
      }}
    >
      <div className="content"></div>
      {/*Banner Content*/}
      <h1 className="title">{randomMovie.name}</h1>

      <div className="btns">
        {/*2 Buttons*/}
        <button className="btn play">Play</button>
        <button className="btn my-list">My List</button>
      </div>
      <div className="description">
        {/*Banner description*/}
        <div className="description">{randomMovie.overview}</div>
      </div>
    </header>
  );
};
export default Banner;

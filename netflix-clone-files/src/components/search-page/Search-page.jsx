import React from "react";
import { useEffect, useState, useMemo } from "react";
import requests from "../../request";
import { baseUrl } from "../Row/Row";
import "./Search-page.css";
import Modal from "../modal/modal";

const SearchResults = ({ searchField, onSearchChange }) => {
  const [openModal, setOpenModal] = useState(false);
  const [movieInfo, setMovieInfo] = useState([]);
  const searchFieldItem = searchField;

  const clickEvent = (e) => {
    setOpenModal(true);
    const targetMovie = e.target;
    setMovieInfo(targetMovie);
  };
  //1.  Netflix
  const [netflixMovies, setNetflixMovies] = useState([]);

  //2.  Trending
  const [trendingMovies, setTrendingMovies] = useState([]);

  //3.  Top Rated
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  //4.  Action Movies
  const [actionMovies, setActionMovies] = useState([]);

  //5.  Comedy Movies
  const [comedyMovies, setComedyMovies] = useState([]);

  //6.  Horror Movies
  const [horrorMovies, setHorrorMovies] = useState([]);

  //7.  Romance Movies
  const [romanceMovies, setRomanceMovies] = useState([]);

  //8.  Documentaries
  const [documentaries, setDocumentaries] = useState([]);

  //Fetching Data
  //1.  Netflix Originals
  useEffect(() => {
    async function fetchNetflix() {
      const netflixResponse = await fetch(requests.netflixoriginals);
      const netflixMoviesArr = await netflixResponse.json();
      const netflixMovies = netflixMoviesArr.results;
      setNetflixMovies(netflixMovies);
    }
    fetchNetflix();
  }, []);

  //2.  Trending
  useEffect(() => {
    async function fetchTrending() {
      const trendingResponse = await fetch(requests.fetchTrending);
      const trendingMoviesArr = await trendingResponse.json();
      const trendingMovies = trendingMoviesArr.results;
      setTrendingMovies(trendingMovies);
    }
    fetchTrending();
  }, []);

  //3.  Top Rated
  useEffect(() => {
    async function fetchTopRated() {
      const topRatedResponse = await fetch(requests.fetchTopRated);
      const topRatedArr = await topRatedResponse.json();
      const topRated = topRatedArr.results;
      setTopRatedMovies(topRated);
    }
    fetchTopRated();
  }, []);

  //4.  Action Movies
  useEffect(() => {
    async function fetchAction() {
      const actionResponse = await fetch(requests.fetchActionMovies);
      const actionArr = await actionResponse.json();
      const actionMovies = actionArr.results;
      setActionMovies(actionMovies);
    }
    fetchAction();
  }, []);

  //5.  Comedy Movies
  useEffect(() => {
    async function fetchComedy() {
      const comedyResponse = await fetch(requests.fetchComedyMovies);
      const comedyMoviesArr = await comedyResponse.json();
      const comedyMovies = comedyMoviesArr.results;
      setComedyMovies(comedyMovies);
    }
    fetchComedy();
  }, []);

  //6.  Horror Movies
  useEffect(() => {
    async function fetchHorror() {
      const horrorResponse = await fetch(requests.fetchHorrorMovies);
      const horrorMoviesArr = await horrorResponse.json();
      const horrorMovies = horrorMoviesArr.results;
      setHorrorMovies(horrorMovies);
    }
    fetchHorror();
  }, []);

  //7.  Romance Movies
  useEffect(() => {
    async function fetchRomance() {
      const romanceResponse = await fetch(requests.fetchRomanceMovies);
      const romanceMoviesArr = await romanceResponse.json();
      const romanceMovies = romanceMoviesArr.results;
      setRomanceMovies(romanceMovies);
    }
    fetchRomance();
  }, []);

  //8.  Documentaries
  useEffect(() => {
    async function fetchDocumentaries() {
      const documentariesResponse = await fetch(requests.fetchDocumentaries);
      const documentariesArr = await documentariesResponse.json();
      const documentaries = documentariesArr.results;

      setDocumentaries(documentaries);
    }
    fetchDocumentaries();
  }, []);

  const movies = useMemo(
    () => [
      ...netflixMovies,
      ...topRatedMovies,
      ...trendingMovies,
      ...actionMovies,
      ...comedyMovies,
      ...horrorMovies,
      ...romanceMovies,
      ...documentaries,
    ],
    [
      actionMovies,
      comedyMovies,
      documentaries,
      horrorMovies,
      netflixMovies,
      romanceMovies,
      topRatedMovies,
      trendingMovies,
    ]
  );
  const [searchMovie, setSearchMovie] = useState(movies);
  useEffect(() => {
    const filteredMovie = movies.filter((movie) => {
      const movieName = movie.name?.toLowerCase();
      const movieTitle = movie.title?.toLowerCase();
      if (movieName) {
        return movieName.includes(searchFieldItem);
      } else {
        return movieTitle.includes(searchFieldItem);
      }
    });
    setSearchMovie(filteredMovie);
  }, [searchFieldItem, movies]);

  return (
    <div className="search-page">
      <h1 className="search-title">Search</h1>
      <div className="movie-page">
        {searchMovie.map((movie) => {
          const name = movie.name;
          const title = movie.title;
          const info = movie.overview;
          const releaseDate = movie.release_date;
          const firstAirDate = movie.first_air_date;
          return (
            <>
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
export default SearchResults;

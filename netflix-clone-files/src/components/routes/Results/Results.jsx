import React from "react";
import SearchResults from "../../search-page/Search-page";
import Fetcher from "../../Fetcher/Fetcher";
import requests from "../../../request";

const Result = ({ onSearchChange, searchField }) => {
  let movies;

  const [netFlixData] = Fetcher(requests.netflixoriginals);

  const [trendingMovieData] = Fetcher(requests.fetchTrending);

  const [topRatedMoviesData] = Fetcher(requests.fetchTopRated);

  const [actionMoviesData] = Fetcher(requests.fetchActionMovies);

  const [comedyMoviesData] = Fetcher(requests.fetchComedyMovies);

  const [horrorMoviesData] = Fetcher(requests.fetchHorrorMovies);

  const [documentariesData] = Fetcher(requests.fetchDocumentaries);

  const [romanceMoviesData] = Fetcher(requests.fetchRomanceMovies);

  if (
    netFlixData &&
    trendingMovieData &&
    topRatedMoviesData &&
    actionMoviesData &&
    comedyMoviesData &&
    horrorMoviesData &&
    romanceMoviesData &&
    documentariesData
  ) {
    movies = [
      ...netFlixData,
      ...trendingMovieData,
      ...topRatedMoviesData,
      ...actionMoviesData,
      ...comedyMoviesData,
      ...horrorMoviesData,
      ...documentariesData,
      ...romanceMoviesData,
    ];
  }

  return (
    <SearchResults
      onSearchChange={onSearchChange}
      searchField={searchField}
      allmovies={movies}
    />
  );
};

export default Result;

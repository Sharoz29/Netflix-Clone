import React from "react";
import requests from "../../../request";
import Row from "../../Row/Row";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";
import Fetcher from "../../Fetcher/Fetcher";

const Home = () => {
  const [netFlixData] = Fetcher(requests.netflixoriginals);

  const [trendingMovieData] = Fetcher(requests.fetchTrending);

  const [topRatedMoviesData] = Fetcher(requests.fetchTopRated);

  const [actionMoviesData] = Fetcher(requests.fetchActionMovies);

  const [comedyMoviesData] = Fetcher(requests.fetchComedyMovies);

  const [horrorMoviesData] = Fetcher(requests.fetchHorrorMovies);

  const [documentariesData] = Fetcher(requests.fetchDocumentaries);

  const [romanceMoviesData] = Fetcher(requests.fetchRomanceMovies);

  return (
    <>
      {netFlixData && <Banner movies={netFlixData} />}
      {netFlixData && (
        <Row title="NETFLIX ORIGINALS" movies={netFlixData} isLargeRow />
      )}
      {trendingMovieData && (
        <Row title="TRENDING NOW" movies={trendingMovieData} />
      )}
      {topRatedMoviesData && (
        <Row title="TOP RATED MOVIES" movies={topRatedMoviesData} />
      )}
      {actionMoviesData && (
        <Row title="ACTION MOVIES" movies={actionMoviesData} />
      )}
      {comedyMoviesData && <Row title="COMEDIES" movies={comedyMoviesData} />}
      {horrorMoviesData && (
        <Row title="HORROR MOVIES" movies={horrorMoviesData} />
      )}
      {romanceMoviesData && (
        <Row title="ROMANCE MOVIES" movies={romanceMoviesData} />
      )}
      {documentariesData && (
        <Row title="DOCUMENTARIES" movies={documentariesData} />
      )}
      <Footer />
    </>
  );
};
export default Home;

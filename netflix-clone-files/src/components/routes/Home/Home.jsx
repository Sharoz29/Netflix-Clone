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
        <Row
          title="NETFLIX ORIGINALS"
          movies={netFlixData}
          isLargeRow
          key={"NETFLIX"}
          id={"NETFLIX"}
        />
      )}
      {trendingMovieData && (
        <Row
          title="TRENDING NOW"
          movies={trendingMovieData}
          key={"TRENDING"}
          id={"TRENDING"}
        />
      )}
      {topRatedMoviesData && (
        <Row
          title="TOP RATED MOVIES"
          movies={topRatedMoviesData}
          key={"TOP"}
          id={"TOP"}
        />
      )}
      {actionMoviesData && (
        <Row
          title="ACTION MOVIES"
          movies={actionMoviesData}
          key={"ACTION"}
          id={"ACTION"}
        />
      )}
      {comedyMoviesData && <Row title="COMEDIES" movies={comedyMoviesData} />}
      {horrorMoviesData && (
        <Row
          title="HORROR MOVIES"
          movies={horrorMoviesData}
          key={"HORROR"}
          id={"HORROR"}
        />
      )}
      {romanceMoviesData && (
        <Row
          title="ROMANCE MOVIES"
          movies={romanceMoviesData}
          key={"ROMANCE"}
          id={"ROMANCE"}
        />
      )}
      {documentariesData && (
        <Row
          title="DOCUMENTARIES"
          movies={documentariesData}
          key={"DOCUMNETARIES"}
          id={"DOCUMENTARIES"}
        />
      )}
      <Footer />
    </>
  );
};
export default Home;

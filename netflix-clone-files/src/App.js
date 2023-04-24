import "./App.css";
import Row from "./components/Row/Row";
import requests from "../src/request";
import { useState, useEffect } from "react";

function App() {
  //Hooks
  //1.  Netflix
  const [netflixMovies, setNetflixMovies] = useState([]);

  //2.  Trending
  const [trendingMovies, setTrendingMovies] = useState([]);

  //3.  Top Rated
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  //4.  Action Movies
  const [actionMovies, setActionMovies] = useState([]);

  //5.  Comedy Movies
  const [comedyMoovies, setComedyMovies] = useState([]);

  //6.  Horror Movies
  const [horrorMoovies, setHorrorMovies] = useState([]);

  //7.  Romance Movies
  const [romanceMoovies, setRomanceMovies] = useState([]);

  //8.  Documentaries
  const [documentaries, setDocumentaries] = useState([]);

  //Fetching Data
  //1.  Netflix Originals
  useEffect(() => {
    fetch(requests.netflixoriginals)
      .then((res) => res.json())
      .then((data) => {
        setNetflixMovies(data.results);
      });
  }, []);

  //2.  Trending
  useEffect(() => {
    fetch(requests.fetchTrending)
      .then((res) => res.json())
      .then((data) => {
        setTrendingMovies(data.results);
      });
  }, []);

  //3.  Top Rated
  useEffect(() => {
    fetch(requests.fetchTopRated)
      .then((res) => res.json())
      .then((data) => {
        setTopRatedMovies(data.results);
        console.log(data.results);
      });
  }, []);

  //4.  Action Movies
  useEffect(() => {
    fetch(requests.fetchActionMovies)
      .then((res) => res.json())
      .then((data) => {
        setActionMovies(data.results);
        console.log(data.results);
      });
  }, []);

  //5.  Comedy Movies
  useEffect(() => {
    fetch(requests.fetchcomedyMovies)
      .then((res) => res.json())
      .then((data) => {
        setComedyMovies(data.results);
        console.log(data.results);
      });
  }, []);

  //6.  Horror Movies
  useEffect(() => {
    fetch(requests.fetchHorrorMovies)
      .then((res) => res.json())
      .then((data) => {
        setTopRatedMovies(data.results);
        console.log(data.results);
      });
  }, []);

  //7.  Romance Movies
  useEffect(() => {
    fetch(requests.fetchRomanceMovies)
      .then((res) => res.json())
      .then((data) => {
        setRomanceMovies(data.results);
        console.log(data.results);
      });
  }, []);

  //8.  Documentaries
  useEffect(() => {
    fetch(requests.fetchDocumentaries)
      .then((res) => res.json())
      .then((data) => {
        setDocumentaries(data.results);
      });
  }, []);

  return (
    <div className="App">
      <h1>Netflix clone</h1>
      <Row title="NETFLIX ORIGINALS" movies={netflixMovies} />
    </div>
  );
}

export default App;

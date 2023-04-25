import React from "react";
import requests from "../../../request";
import "./Home.css";
import Row from "../../Row/Row";
import { useState, useEffect } from "react";
import Banner from "../../Banner/Banner";

const Home = () => {
  //Hooks

  //1.  Netflix

  //b.  Movies Hooks
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
      // console.log(trendingMovies);
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
      // console.log(topRated);
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
      // console.log(actionMovies);
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
      // console.log(comedyMovies);
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
      // console.log(horrorMovies);
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
      // console.log(romanceMovies);
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
      // console.log(documentaries);
      setDocumentaries(documentaries);
    }
    fetchDocumentaries();
  }, []);

  return (
    <>
      <Banner movies={netflixMovies} />
      <Row title="NETFLIX ORIGINALS" movies={netflixMovies} isLargeRow />
      <Row title="TRENDING NOW" movies={trendingMovies} />
      <Row title="TOP RATED MOVIES" movies={topRatedMovies} />
      <Row title="ACTION MOVIES" movies={actionMovies} />
      <Row title="COMEDIES" movies={comedyMovies} />
      <Row title="HORROR MOVIES" movies={horrorMovies} />
      <Row title="ROMANCE MOVIES" movies={romanceMovies} />
      <Row title="DOCUMENTARIES" movies={documentaries} />
    </>
  );
};
export default Home;

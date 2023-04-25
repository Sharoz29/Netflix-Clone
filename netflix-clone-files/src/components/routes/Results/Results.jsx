import React from "react";
import Row from "../../Row/Row";
import { useState, useEffect } from "react";
import requests from "../../../request";
import Home from "../Home/Home";

const Result = () => {
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
      const netflixMoviesNames = netflixMovies.map((doc) => {
        return doc.title;
      });
      console.log(netflixMoviesNames);
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
      const trendingMoviesName = trendingMovies.map((movie) => {
        return movie.title;
      });
      console.log(trendingMoviesName);
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
      const topRatedName = topRated.map((movie) => {
        return movie.title;
      });
      console.log(topRatedName);
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
      const actionName = actionMovies.map((movie) => {
        return movie.title;
      });
      console.log(actionName);
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
      const comedyName = comedyMovies.map((movie) => {
        return movie.title;
      });
      console.log(comedyName);
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
      const horrorName = horrorMovies.map((movie) => {
        return movie.title;
      });
      console.log(horrorName);
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
      const romanceName = romanceMovies.map((movie) => {
        return movie.title;
      });
      console.log(romanceName);
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

      const documentariesName = documentaries.map((doc) => {
        return doc.title;
      });
      console.log(documentariesName);
      setDocumentaries(documentaries);
    }
    fetchDocumentaries();
  }, []);

  return (
    <>
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

export default Result;

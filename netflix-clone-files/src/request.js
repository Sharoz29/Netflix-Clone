const APIKey = "27cb28ba8d1e306e8e7e33d6c073d792";

//https://api.themoviedb.org/3/movie/550?api_key=27cb28ba8d1e306e8e7e33d6c073d792

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKey}`,
  netflixoriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${APIKey}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genre=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genre=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genre=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genre=99`,
};
export default requests;

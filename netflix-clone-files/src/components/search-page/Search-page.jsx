import { APIKey } from "../../request";
import Fetcher from "../Fetcher/Fetcher";
import Searched from "../../searched/searched";
import NotSearched from "../NotSearched/NotSearched";

const SearchResults = ({ searchField, allmovies }) => {
  const searchFieldItem = searchField;
  const allmoviesData = allmovies;

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${searchFieldItem}`;

  const searchedMoviesData = Fetcher(searchUrl);

  const searched = searchedMoviesData[0];

  if (!searchFieldItem && searched?.length === 0) {
    return <Searched movies={allmoviesData} />;
  } else if (searchFieldItem && searched?.length === 0) {
    return <NotSearched searched={searchFieldItem} />;
  } else if (searchFieldItem && searched?.length !== 0) {
    return <Searched movies={searched} />;
  }
};
export default SearchResults;

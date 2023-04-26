import React from "react";
import SearchResults from "../../search-page/Search-page";

const Result = ({ onSearchChange, searchField }) => {
  return (
    <SearchResults onSearchChange={onSearchChange} searchField={searchField} />
  );
};

export default Result;

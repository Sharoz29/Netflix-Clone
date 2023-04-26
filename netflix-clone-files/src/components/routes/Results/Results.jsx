import React from "react";
import SearchResults from "../../search-page/Search-page";
import Animated from "../../Animated/Animated";

const Result = ({ onSearchChange, searchField }) => {
  return (
    <SearchResults onSearchChange={onSearchChange} searchField={searchField} />
  );
};

export default Result;

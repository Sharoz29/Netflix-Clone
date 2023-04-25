import React from "react";
import "./Searchbar.css";
import requests from "../../request";
import { useState, useEffect } from "react";

const Searchbar = ({ onChangeHandler, placeholder, className }) => {
  return (
    <div className="search option">
      <form className="search-container hidden">
        <input
          type="search"
          className={className}
          placeholder={placeholder}
          onChange={onChangeHandler}
        ></input>
      </form>
    </div>
  );
};
export default Searchbar;

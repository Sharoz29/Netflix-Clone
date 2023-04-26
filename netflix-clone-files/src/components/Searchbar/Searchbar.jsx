import React from "react";
import "./Searchbar.css";

const Searchbar = ({ onChangeHandler, placeholder, className }) => {
  const preventSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="search option">
      <form className="search-container" onSubmit={preventSubmit}>
        <input
          type="search"
          className={className}
          placeholder={placeholder}
          onChange={onChangeHandler}
          autoFocus
        ></input>
      </form>
    </div>
  );
};
export default Searchbar;

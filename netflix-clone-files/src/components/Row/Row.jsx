import React from "react";
import "./Row.css";

const Row = ({ title, fetchUrl }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        <img src={fetchUrl} alt="Netflix Origins" />
      </div>
    </div>
  );
};
export default Row;

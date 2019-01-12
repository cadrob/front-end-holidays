import React from "react";
import "../Button.css";
import "../App.css";

const SortButtons = props => {
  return (
    <div className="select-container">
      <button className="sort-button">
        sort <strong>alphabetically</strong>
      </button>
      <button className="sort-button">
        sort by <strong>price</strong>
      </button>
      <button className="sort-button">
        sort by star <strong>rating</strong>
      </button>
    </div>
  );
};

export default SortButtons;

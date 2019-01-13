import React, { Component } from "react";
import "../Button.css";
import "../App.css";
import * as sort from "../utils/sort";

class SortButtons extends Component {
  state = {
    active: 1
  };
  render() {
    return (
      <div className="select-container">
        <button
          className={this.selectedCSS(0)}
          onClick={() => {
            this.toggle(0);
            this.sortAlphabetically();
          }}
        >
          sort <strong>alphabetically</strong>
        </button>
        <button
          className={this.selectedCSS(1)}
          onClick={() => {
            this.toggle(1);
            this.sortByPrice();
          }}
        >
          sort by <strong>price</strong>
        </button>
        <button
          className={this.selectedCSS(2)}
          onClick={() => {
            this.toggle(2);
            this.sortByStar();
          }}
        >
          sort by star <strong>rating</strong>
        </button>
      </div>
    );
  }

  selectedCSS = button => {
    if (this.state.active === button) {
      return "sort-button-selected";
    }
    return "sort-button";
  };

  toggle = button => {
    if (this.state.active === button) {
      this.setState({ active: null });
    } else {
      this.setState({ active: button });
    }
  };

  sortAlphabetically = () => {
    const { data, amendHolidays } = this.props;
    const result = sort.byName(data);
    amendHolidays(result);
  };

  sortByPrice = () => {
    const { data, amendHolidays } = this.props;
    const result = sort.byPrice(data);
    amendHolidays(result);
  };

  sortByStar = () => {
    const { data, amendHolidays } = this.props;
    const result = sort.byStar(data);
    amendHolidays(result);
  };
}

export default SortButtons;

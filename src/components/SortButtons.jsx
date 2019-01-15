import React, { Component } from "react";
import "../css/Button.css";
import "../css/App.css";
import * as sort from "../utils/sort";

class SortButtons extends Component {
  state = {
    active: 1,
    defaultSort: false
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
    const { holidays, amendHolidays } = this.props;
    const result = sort.byName(holidays);
    amendHolidays(result);
  };

  sortByPrice = () => {
    const { holidays, amendHolidays } = this.props;
    const result = sort.byPrice(holidays);
    amendHolidays(result);
  };

  sortByStar = () => {
    const { holidays, amendHolidays } = this.props;
    const result = sort.byStar(holidays);
    amendHolidays(result);
  };

  componentDidMount() {
    this.sortByPrice();
  }
  componentDidUpdate() {
    if (!this.state.defaultSort) {
      this.sortByPrice();
      this.setState({ defaultSort: true });
    }
  }
}

export default SortButtons;

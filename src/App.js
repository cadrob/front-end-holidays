import React, { Component } from "react";
import "../src/css/App.css";
import SortButtons from "../src/components/SortButtons";
import Holiday from "../src/components/Holiday";
import Data from "../src/assets/fakeHolidays.json";
import Filters from "../src/components/Filters";

class App extends Component {
  state = {
    holidays: [],
    selectedHolidays: []
  };
  render() {
    const { holidays, selectedHolidays } = this.state;
    return (
      <div className="App">
        <div className="main-container">
          <Filters holidays={holidays} amendHolidays={this.amendHolidays} />
          <SortButtons
            holidays={selectedHolidays}
            amendHolidays={this.amendHolidays}
          />
          {selectedHolidays.map(holiday => (
            <Holiday key={holiday.id} info={holiday} />
          ))}
          {!selectedHolidays.length && (
            <p>Sorry there are no results matching this criteria</p>
          )}
        </div>
      </div>
    );
  }

  amendHolidays = ammendedHolidays => {
    this.setState({ selectedHolidays: ammendedHolidays });
  };

  componentDidMount() {
    this.setState({ holidays: Data, selectedHolidays: Data });
  }
}

export default App;

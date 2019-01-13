import React, { Component } from "react";
import "../src/css/App.css";
import SortButtons from "../src/components/SortButtons";
import Holiday from "../src/components/Holiday";
import Data from "../src/assets/fakeHolidays.json";
import Filters from "../src/components/Filters";

class App extends Component {
  state = {
    data: []
  };
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <div className="main-container">
          <Filters data={Data} amendHolidays={this.amendHolidays} />
          <SortButtons data={Data} amendHolidays={this.amendHolidays} />
          {data.length &&
            data.map(datum => <Holiday key={datum.id} info={datum} />)}
          {!data.length && (
            <p>Sorry there are no results matching this criteria</p>
          )}
        </div>
      </div>
    );
  }

  amendHolidays = ammendedHolidays => {
    this.setState({ data: ammendedHolidays });
  };

  componentDidMount() {
    this.setState({ data: Data });
  }
}

export default App;

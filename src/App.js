import React, { Component } from "react";
import "./App.css";
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
    console.log(data);
    return (
      <div className="App">
        <div className="main-container">
          <SortButtons data={data} amendHolidays={this.amendHolidays} />
          <Filters data={Data} amendHolidays={this.amendHolidays} />
          {data.map(datum => (
            <Holiday key={datum.id} info={datum} />
          ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({ data: Data });
  }

  amendHolidays = ammendedHolidays => {
    this.setState({ data: ammendedHolidays });
  };
}

export default App;

import React, { Component } from "react";
import "./App.css";
import SortButtons from "../src/components/SortButtons";
import Holiday from "../src/components/Holiday";
import Data from "../src/assets/fakeHolidays.json";
class App extends Component {
  state = {
    data: []
  };
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <div className="main-container">
          <SortButtons data={data} sortHolidays={this.sortHolidays} />
          {data.map((datum, index) => (
            <Holiday key={datum.id} info={datum} />
          ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({ data: Data });
  }

  sortHolidays = sortedHolidays => {
    console.log("lets reorder the data here then set state");
    this.setState({ data: sortedHolidays });
  };
}

export default App;

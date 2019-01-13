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
          <SortButtons />
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
}

export default App;

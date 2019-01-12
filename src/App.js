import React, { Component } from "react";
import "./App.css";
import SortButtons from "../src/components/SortButtons";
import Holiday from "../src/components/Holiday";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SortButtons />
        <Holiday />
      </div>
    );
  }
}

export default App;

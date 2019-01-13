import React, { Component } from "react";
import "../Filters.css";

class Filters extends Component {
  state = {
    data: [],
    selectedAirport: ""
  };
  render() {
    return (
      <div className="filter-wrapper">
        <form>
          <label htmlFor="ddate">Departure Date:</label>
          <input type="date" name="ddate" />
          <label htmlFor="airport">Departure Airport:</label>
          <select onChange={this.handleAirportChange} name="airport">
            <option value="">Any</option>
            {this.createAirportList()}
          </select>
        </form>
      </div>
    );
  }

  createAirportList = () => {
    const { data } = this.props;
    const results = data.reduce((acc, holiday, index) => {
      if (!acc.includes(holiday.depart_from))
        acc.push(
          <option key={holiday.depart_from} value={holiday.depart_from}>
            {holiday.depart_from}
          </option>
        );
      return acc;
    }, []);
    return results;
  };

  handleAirportChange = event => {
    const { data, amendHolidays } = this.props;
    const { value } = event.target;
    let results = [];
    if (value) results = data.filter(holiday => holiday.depart_from === value);
    else results = data;
    amendHolidays(results);
  };
  componentDidMount() {
    console.log("setting the data in state", this.props.data);
    this.setState({ data: this.props.data });
  }

  // function to set displayedHolidays here
}

export default Filters;

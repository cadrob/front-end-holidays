import React, { Component } from "react";
import "../css/Filters.css";

class Filters extends Component {
  state = {
    data: []
  };
  render() {
    return (
      <div className="filter-wrapper">
        <form>
          <label htmlFor="ddate">Departure Date </label>
          <input type="date" name="ddate" onChange={this.handleChange} />
          <label htmlFor="airport">Departure Airport </label>
          <select onChange={this.handleChange} name="airport">
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

  handleChange = event => {
    const { data, amendHolidays } = this.props;
    const { value } = event.target;
    let results = [];
    if (event.target.type === "date") {
      if (value) results = data.filter(holiday => holiday.date === value);
      else results = data;
    } else {
      if (value)
        results = data.filter(holiday => holiday.depart_from === value);
      else results = data;
    }
    amendHolidays(results);
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }
}

export default Filters;

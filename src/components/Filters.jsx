import React, { Component } from "react";
import "../css/Filters.css";

class Filters extends Component {
  state = {
    holidays: []
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

  componentDidUpdate() {
    if (!this.state.holidays.length)
      this.setState({ holidays: this.props.holidays });
  }

  createAirportList = () => {
    const { holidays } = this.state;

    const results = holidays.reduce((acc, holiday, index) => {
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
    const { holidays, amendHolidays } = this.props;
    const { value } = event.target;
    let results = [];
    if (event.target.type === "date") {
      if (value) results = holidays.filter(holiday => holiday.date === value);
      else results = holidays;
    } else {
      if (value)
        results = holidays.filter(holiday => holiday.depart_from === value);
      else results = holidays;
    }
    amendHolidays(results);
  };
}

export default Filters;

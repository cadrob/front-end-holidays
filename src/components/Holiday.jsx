import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../Holiday.css";

class Holiday extends Component {
  state = {
    collapsed: true,
    info: null,
    isLoading: true
  };
  render() {
    if (this.state.isLoading) return <p>Loading...</p>;
    const {
      name,
      hotel,
      price,
      date,
      duration,
      depart_from,
      guests
    } = this.state.info;
    return (
      <div className="holiday-container">
        <div className="holiday-top">
          <header>
            {name} <p>{hotel}</p>
          </header>
          <div className="holiday-price">
            <p>holiday price</p>£{price}
          </div>
        </div>
        <div className="wrap-collabsible">
          <input
            id="collapsible"
            className="toggle"
            type="checkbox"
            onClick={this.handleCollapse}
          />
          <label htmlFor="collapsible" className="lbl-toggle">
            <p>
              <strong>{date} </strong>for <strong>{duration} </strong>from {""}
              <strong>{depart_from}</strong>, {guests}
            </p>

            {this.state.collapsed && (
              <FontAwesomeIcon icon={faAngleRight} color="white" size="lg" />
            )}
            {!this.state.collapsed && (
              <FontAwesomeIcon icon={faAngleDown} color="white" size="lg" />
            )}
          </label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p>
                Overview If you're looking for something special for your
                holiday to Tenerife, the five-star Costa Adeje Gran Hotel could
                be the perfect choice. It's an impressive hotel in the resort of
                Costa Adeje, with brilliant views over the Playa del Duque
                beach. The area offers relaxation, nightlife and a lovely
                selection of shops and restaurants. The hotel itself is a deluxe
                property, surrounded by countryside, with amazing views of the
                Atlantic Ocean. This stylish hotel is a great match for couples,
                families and friends who are looking for a tranquil holiday with
                beautiful beaches and lots of things to see and do.
              </p>
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({ info: this.props.info, isLoading: false });
  }

  handleCollapse = () => {
    if (this.state.collapsed === true) this.setState({ collapsed: false });
    else this.setState({ collapsed: true });
  };
}

export default Holiday;

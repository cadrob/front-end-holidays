import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleDown,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import "../css/Holiday.css";
import * as format from "../utils/format";
import image1 from "../assets/image_01.png";
import image2 from "../assets/image_02.png";
import image3 from "../assets/image_03.png";

let Backgrounds = [image1, image2, image3];

class Holiday extends Component {
  state = {
    open: false,
    info: null,
    isLoading: true
  };
  render() {
    if (this.state.isLoading) return <p>Loading...</p>;
    const {
      id,
      name,
      hotel,
      price,
      date,
      duration,
      depart_from,
      guests,
      star
    } = this.state.info;

    let sectionStyle = {
      backgroundImage: `url(${Backgrounds[id]})`
    };
    return (
      <div className="holiday-container" style={sectionStyle}>
        <div className="holiday-top">
          <header>
            {name} {this.getStars(star)} <p>{hotel}</p>
          </header>
          <div className="holiday-price">
            <p>holiday price</p>£{format.currency(price)}
          </div>
        </div>
        <div className="wrap-collapsible">
          <button className="btn-collapse" onClick={this.handleCollapse}>
            <p>
              <strong>{format.date(date)} </strong>for{" "}
              <strong>{duration} </strong>from {""}
              <strong>{depart_from}</strong>, {guests}
            </p>
            {!this.state.open && (
              <FontAwesomeIcon icon={faAngleRight} color="white" size="lg" />
            )}
            {this.state.open && (
              <FontAwesomeIcon icon={faAngleDown} color="white" size="lg" />
            )}
          </button>
          <div
            id="content"
            className={"collapse" + (this.state.open ? " in" : "")}
          >
            <p>
              Demo Text. Overview If you're looking for something special for
              your holiday to Tenerife, the five-star Costa Adeje Gran Hotel
              could be the perfect choice. It's an impressive hotel in the
              resort of Costa Adeje, with brilliant views over the Playa del
              Duque beach. The area offers relaxation, nightlife and a lovely
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
    );
  }
  componentDidMount() {
    this.setState({ info: this.props.info, isLoading: false });
  }

  handleCollapse = () => {
    this.setState({ open: !this.state.open });
  };

  getStars = stars => {
    let starsicons = [];
    for (let i = 0; i < stars; i++) {
      starsicons.push(
        <FontAwesomeIcon key={i} icon={faStar} color="#FFCF05" size="xs" />
      );
    }

    return starsicons;
  };
}

export default Holiday;

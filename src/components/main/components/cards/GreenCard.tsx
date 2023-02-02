import React from "react";
import "./styles/CardsStyles.scss";

const GreenCard = () => {
  return (
    <div className="greenCard" id="greenCard">
      <button className="greenCard-closeBtn">+</button>
      <h2 className="greenCard-h2">
        MSc Data Analytics <br/> and Information Systems Management
      </h2>
      <div className="greenCard-duration">
        <h4 className="greenCard-duration_title">Duration:</h4>
        <p className="greenCard-duration_min">Minimum: 18 months</p>
        <p className="greenCard-duration_max">Maximum: 36 months</p>
      </div>
      <div className="greenCard-startDates">
        <h4 className="greenCard-startDates_title">Start Dates:</h4>
        <p className="greenCard-startDates_date">
          January, April, July, October:
        </p>
      </div>
      <div className="greenCard-price">£8,500</div>
      <button className="greenCard-button">More info</button>
    </div>
  );
};

export default GreenCard;

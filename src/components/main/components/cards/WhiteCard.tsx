import React from "react";
import "./styles/CardsStyles.scss";

interface WhiteCardProps {
  logo: string;
}

const WhiteCard = ({ logo }: WhiteCardProps) => {
  return (
    <div className="whiteCard" id="whiteCard">
      <img
        className="whiteCard-logo"
        src={logo}
        alt=""
      />
      <h3 className="whiteCard-h3">Business & Management</h3>
      <h1 className="whiteCard-h1">Master of Business Administration (CMI)</h1>
      <div className="whiteCard-info">
        <div className="whiteCard-info_graduation">
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 8.21897V12.5801C4.5 14.1801 7 15.5801 10 15.5801C13 15.5801 15.5 14.2801 15.5 12.5801V8.21897M17.5 6.99674V11.0801C17.5 11.8801 18.2 12.5801 19 12.5801M19 6.08008L10 11.5801L1 6.08008L10 0.580078L19 6.08008Z"
              stroke="#3E3E3E"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Postgraduate</span>
        </div>
        <div className="whiteCard-info_shedule">
          <svg
            width="18"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 2.87891H15.5V15.8789H0.5V2.87891H2.5M10.5 2.87891H5.5M0.5 6.87891H15.5M13.5 0.878906H10.5V4.87891H13.5V0.878906ZM5.5 0.878906H2.5V4.87891H5.5V0.878906Z"
              stroke="#3E3E3E"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Every 12 weeks </span>
        </div>
      </div>
      <button className="whiteCard-button">More info</button>
    </div>
  );
};

export default WhiteCard;

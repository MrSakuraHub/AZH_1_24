/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const WifiSpeaker1 = ({ color = "#FF5C25", className }) => {
  return (
    <svg
      className={`wifi-speaker-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13 17V22H2V2H13V7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M7.5 9C8.33 9 9 8.33 9 7.5C9 6.67 8.33 6 7.5 6C6.67 6 6 6.67 6 7.5C6 8.33 6.67 9 7.5 9Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M7.5 19C8.88 19 10 17.88 10 16.5C10 15.12 8.88 14 7.5 14C6.12 14 5 15.12 5 16.5C5 17.88 6.12 19 7.5 19Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M14 13.5C14.31 13.08 14.5 12.56 14.5 12C14.5 11.44 14.31 10.92 14 10.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M16.8799 16C17.6599 14.89 18.1299 13.5 18.1299 12C18.1299 10.5 17.6599 9.11 16.8799 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M19.5 19C21.06 17.13 22 14.68 22 12C22 9.32 21.06 6.87 19.5 5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

WifiSpeaker1.propTypes = {
  color: PropTypes.string,
};

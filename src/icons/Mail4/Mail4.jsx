/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Mail4 = ({ color = "#F7FBFA", className }) => {
  return (
    <svg
      className={`mail-4 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" opacity="0.3">
        <path
          className="path"
          d="M13.3333 13.3333H2.66659C1.93325 13.3333 1.33325 12.7333 1.33325 12V3.99999C1.33325 3.26666 1.93325 2.66666 2.66659 2.66666H13.3333C14.0666 2.66666 14.6666 3.26666 14.6666 3.99999V12C14.6666 12.7333 14.0666 13.3333 13.3333 13.3333Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M13.3333 2.66666H2.66659C1.93325 2.66666 1.33325 3.26666 1.33325 3.99999L7.99992 8.66666L14.6666 3.99999C14.6666 3.26666 14.0666 2.66666 13.3333 2.66666Z"
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

Mail4.propTypes = {
  color: PropTypes.string,
};

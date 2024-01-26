/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ClipboardAdd1 = ({ color = "#2EB3FF", className }) => {
  return (
    <svg
      className={`clipboard-add-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8 4V5C8 5.55 8.45 6 9 6H15C15.55 6 16 5.55 16 5V4H19C19.55 4 20 4.45 20 5V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V5C4 4.45 4.45 4 5 4H8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M15 6H9C8.45 6 8 5.55 8 5V3C8 2.45 8.45 2 9 2H15C15.55 2 16 2.45 16 3V5C16 5.55 15.55 6 15 6Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M12 10V18"
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M16 14H8"
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </svg>
  );
};

ClipboardAdd1.propTypes = {
  color: PropTypes.string,
};

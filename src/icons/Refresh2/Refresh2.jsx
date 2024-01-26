/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Refresh2 = ({ color = "black", className }) => {
  return (
    <svg
      className={`refresh-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19.7102 7.29C17.5902 4.68 15.2502 3 12.0002 3C10.5502 3 9.17021 3.35 7.96021 3.96C5.60021 5.15 3.83021 7.35 3.22021 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path className="path" d="M21 6V7.4V9H19.4H18L21 6Z" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
      <path
        className="path"
        d="M4.29004 16.71C6.41004 19.32 8.75004 21 12 21C13.45 21 14.83 20.65 16.04 20.04C18.4 18.85 20.17 16.65 20.78 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path className="path" d="M3 18V16.6V15H4.6H6L3 18Z" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
};

Refresh2.propTypes = {
  color: PropTypes.string,
};

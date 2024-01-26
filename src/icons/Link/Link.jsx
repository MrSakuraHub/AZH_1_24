/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Link = ({ className }) => {
  return (
    <svg
      className={`link ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1471_15287)">
        <path
          className="path"
          d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
          fill="#2A5ADA"
        />
        <path
          className="path"
          d="M18 6.75L15.9761 7.93687L10.4625 11.1881L8.4375 12.375V23.625L10.4614 24.8119L16.0268 28.0631L18.0506 29.25L20.0745 28.0631L25.5386 24.8119L27.5625 23.625V12.375L25.5386 11.1881L20.0239 7.93687L18 6.75ZM12.4852 21.2512V14.7487L18 11.4975L23.5148 14.7487V21.2512L18 24.5025L12.4852 21.2512Z"
          fill="white"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1471_15287">
          <rect className="rect" fill="white" height="36" width="36" />
        </clipPath>
      </defs>
    </svg>
  );
};

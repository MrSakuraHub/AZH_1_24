/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Mail16 } from "../../icons/Mail16";
import { Mail4 } from "../../icons/Mail4";
import "./style.css";

export const Button = ({
  showLeftIcon = false,
  text = "BUTTON",
  showRightIcon = true,
  showIcon = true,
  property1,
  priority,
  className,
  text1 = "Send money",
}) => {
  return (
    <button className={`button ${property1} ${priority} ${className}`}>
      {showIcon && (
        <>
          <>
            {(property1 === "default" ||
              property1 === "hover" ||
              property1 === "pressed" ||
              (priority === "tertiary" && property1 === "disabled")) && (
              <Mail16
                className="mail"
                color={
                  property1 === "pressed" || (priority === "primary" && property1 === "default")
                    ? "#F7FBFA"
                    : (priority === "primary" && property1 === "hover") ||
                      (priority === "secondary" && property1 === "default") ||
                      (priority === "tertiary" && property1 === "default") ||
                      property1 === "disabled"
                    ? "#3D7064"
                    : property1 === "hover" && ["secondary", "tertiary"].includes(priority)
                    ? "#DEF1DD"
                    : undefined
                }
              />
            )}

            {property1 === "disabled" && ["primary", "secondary"].includes(priority) && (
              <Mail4 className="mail" color={priority === "primary" ? "#F7FBFA" : "#3D7064"} />
            )}
          </>
        </>
      )}

      <div className="send-money">{text1}</div>
    </button>
  );
};

Button.propTypes = {
  showLeftIcon: PropTypes.bool,
  text: PropTypes.string,
  showRightIcon: PropTypes.bool,
  showIcon: PropTypes.bool,
  property1: PropTypes.oneOf(["disabled", "pressed", "hover", "default"]),
  priority: PropTypes.oneOf(["primary", "secondary", "secodary", "tertiary"]),
  text1: PropTypes.string,
};

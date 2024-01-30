/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useEffect, useState } from 'react';
import { ChevronDown } from "../../icons/ChevronDown";
import { Mail16 } from "../../icons/Mail16";
import { Mail4 } from "../../icons/Mail4";
import { SortLinesDown1 } from "../../icons/SortLinesDown1";
import "./style.css";

export const Dropdown = ({
  showLeftIcon = false,
  text = "BUTTON",
  showRightIcon = true,
  showIcon = true,
  property1,
  priority,
  className,
  options = [],
  divClassName,
  text1 = "Send money",
  chevronDownStyleOverrideClassName,
  chevronDownColor = "#3D7064",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  return (
    
    <div className={`dropdown property-1-0-${property1} priority-0-${priority} ${className}`}>
      {priority === "primary" && ["default", "hover"].includes(property1) && (
        <>
          <div className="div" onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {property1 === "default" && <>{text1}</>}

            {property1 === "hover" && (
              <>
                <>{visible && <SortLinesDown1 className="sort-lines-down" color="#3D7064" />}</>
                <div className={`text-wrapper ${divClassName}`}>{selectedOption || text1}</div>
              </>
            )}
          </div>
          {isOpen && (
          <ul className="text-wrapper">
            <li onClick={() => setSelectedOption(null)}>{text1}</li>
          {options.map((option) => (
            <li key={option} onClick={() => setSelectedOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
          <ChevronDown className={chevronDownStyleOverrideClassName} color={chevronDownColor} />
        </>
      )}

      {((priority === "secondary" && property1 === "default") ||
        (priority === "secondary" && property1 === "hover") ||
        (priority === "tertiary" && property1 === "default") ||
        (priority === "tertiary" && property1 === "hover") ||
        property1 === "disabled" ||
        property1 === "pressed") && (
        <>
          <>
            {showIcon && (
              <>
                <>
                  {(property1 === "default" ||
                    property1 === "hover" ||
                    property1 === "pressed" ||
                    (priority === "tertiary" && property1 === "disabled")) && (
                    <Mail16
                      className="instance-node"
                      color={property1 === "hover" ? "#DEF1DD" : property1 === "pressed" ? "#F7FBFA" : "#3D7064"}
                    />
                  )}

                  {property1 === "disabled" && ["primary", "secondary"].includes(priority) && (
                    <Mail4 className="instance-node" color={priority === "primary" ? "#F7FBFA" : "#3D7064"} />
                  )}
                </>
              </>
            )}
          </>
          <div className="send-money-2">{text1}</div>
        </>
      )}
    </div>
  
  );
};

Dropdown.propTypes = {
  showLeftIcon: PropTypes.bool,
  text: PropTypes.string,
  showRightIcon: PropTypes.bool,
  showIcon: PropTypes.bool,
  property1: PropTypes.oneOf(["disabled", "pressed", "hover", "default"]),
  priority: PropTypes.oneOf(["primary", "secondary", "secodary", "tertiary"]),
  options: PropTypes.array,
  visible: PropTypes.bool,
  text1: PropTypes.string,
  chevronDownColor: PropTypes.string,
};

import React from "react";
import { Spring } from "react-spring/renderprops";

const Header = () => {
  return (
    <div id="Home" className="header">
      <Spring
        from={{ opacity: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {props => (
          <div style={props}>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default Header;

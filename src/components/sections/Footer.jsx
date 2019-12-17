import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuItems = ["About", "Development", "Contact"];

const Footer = () => {
  return (
    <div id="Footer" className="footer">
      <h5>
        © 2019 <span>Isabella Fry</span>
      </h5>
      <div className="footer-items">
        {menuItems.map(menuItem => (
          <li className="footer-item" key={menuItem}>
            <AnchorLink offset={() => 1} href={`#${menuItem}`}>
              {menuItem}
            </AnchorLink>
          </li>
        ))}
      </div>
      <div className="footer-media">
        <a
          className="footer-social"
          target="_blank"
          href="https://github.com/dragonslayer77"
        >
          <i className="fab fa-github fa-lg" />
        </a>
        <a
          className="footer-social"
          target="_blank"
          href="https://www.linkedin.com/in/isabella-f-5a1618182/"
        >
          <i className="fab fa-linkedin-in fa-lg" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

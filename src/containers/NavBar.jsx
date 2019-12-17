import React, { Component } from "react";
import NavbarItems from "./NavBarItems";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  markAsOpen = () => {
    this.setState(state => {
      return { isOpen: !state.isOpen };
    });
  };

  handleBurgerMenu = () => {
    return <NavbarItems />;
  };

  handleBurgerImage = () => {
    return (
      <img
        className="burger-menu-image"
        src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563454482/bars_em6wtp.png"
        alt="burgermenu"
      />
    );
  };

  render() {
    const { screen } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="navbar">
        <AnchorLink className="navbar-logo" offset={() => 1} href={"#Home"}>
          <img
            className="navbar-logo-image"
            src="https://res.cloudinary.com/dciypbwrh/image/upload/v1575370222/JwhhSAne0t_htnepc.svg"
            alt="dragonLogo"
          />
        </AnchorLink>
        {screen === "laptop" ? (
          <NavbarItems />
        ) : (
          <div
            className="burger-menu"
            role="presentation"
            onClick={this.markAsOpen}
          >
            {!isOpen ? this.handleBurgerImage() : null}

            {isOpen ? this.handleBurgerMenu() : null}
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;

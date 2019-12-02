import React, { Component } from 'react';
import NavbarItems from './NavBarItems';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    markAsOpen = () => {
        this.setState((state) => {
            return { isOpen: !state.isOpen };
        });
    }
    
    handleBurgerMenu = () => {
        return (
            <NavbarItems />
        );
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
                {/* <a className="navbar-logo" href="#banner">
                    <img className="navbar-logo-image" src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563444165/owl-white_lprcho.png" alt="mercedeslogo" />
                </a> */}
                {/* { screen === "laptop"
                    ? (
                        <NavbarItems />
                    )
                    : (
                        <div
                            className="burger-menu"
                            role="presentation"
                            onClick={this.markAsOpen}
                        >
                            {!isOpen ? this.handleBurgerImage() : null}
                            
                            {isOpen ? this.handleBurgerMenu() : null}
                        </div>
                    ) } */}
                    < NavbarItems />
            </div>

        );
    }
}

export default Navbar;
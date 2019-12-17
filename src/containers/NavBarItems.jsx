import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const menuItems = [
    'About',
    'Development',
    'Contact'
];

class NavbarItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: ''
        };
    }

    handleActive = (menuItem) => {
        this.setState({
            isActive: menuItem
        });
    };

    render() {
        return (
            <ul className="navbar-menu" id="navbarMenu">
                {menuItems.map(menuItem => (
                    <li
                        onClick={() => this.handleActive(menuItem)}
                        className={this.state.isActive === menuItem ? "nav-item-active" : "nav-item"}
                        key={menuItem}
                    >
                        <AnchorLink
                            offset={() => 1}
                            href={`#${menuItem}`}
                        >
                            {menuItem}
                        </AnchorLink>
                    </li>
                ))}
            </ul>
        );
    }
}

export default NavbarItems;
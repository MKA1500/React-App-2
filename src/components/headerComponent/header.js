import React, { Component } from 'react';
import audiLogo from './Audi_Logo.svg.png';

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <img src={audiLogo} className="brand-logo" />
                <nav>
                    <ul>
                        <li><a href="#">One</a></li>
                        <li><a href="#">Two</a></li>
                        <li><a href="#">Three</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;

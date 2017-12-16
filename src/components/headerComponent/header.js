import React, { Component } from 'react';
import porscheLogo from '../../Assets/images/porsche_logo_PNG7.png';

class Header extends Component {
    render() {
        return (
            <header className="mainHeader">
                <img src={porscheLogo} className="brand-logo" />
                <nav>
                    <ul>
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;

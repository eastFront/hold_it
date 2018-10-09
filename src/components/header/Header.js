import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className="navigation">
                    <Link to="/" className="navigation__item navigation__logo" />
                    <Link to="/" className="navigation__item">Home</Link>
                    <Link to="/photo" className="navigation__item"><span className="silver">Hold</span> photo</Link>
                    <Link to="/video" className="navigation__item"><span className="silver">Hold</span> video</Link>
                    <Link to="/documents" className="navigation__item"><span className="silver">Hold</span> document</Link>
                    <Link to="/about" className="navigation__item">About</Link>
                </nav>
            </div>
        </header>
    )
};

export default Header;
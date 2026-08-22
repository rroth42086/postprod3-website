import type { FC } from 'react';
import './Navbar.css';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="postprod3 Logo" className="logo-img" />
          <span className="logo-text">POSTPROD3</span>
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#waitlist" className="btn btn-primary">Join the Waitlist</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

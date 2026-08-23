import type { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <div className="logo">
            <span className="logo-text">Truss</span>
          </div>
          <p>Shared, S3-Backed Storage for Video Teams.</p>
          <p className="copyright">
            © 2026 <a href="https://route86visuals.com">Route 86 Visuals LLC</a>. All Rights Reserved.
          </p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Support</h4>
            <ul>
              <li><a href="mailto:rnbvfx@gmail.com">Contact Support</a></li>
              <li><a href="https://route86visuals.com">Route 86 Visuals</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

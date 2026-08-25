import type { FC } from 'react';
import './Hero.css';

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">In Development · macOS</div>
          <h1>Shared storage that keeps up with your footage.</h1>
          <p>
            Vault is a faster, self-hosted alternative to LucidLink for video teams —
            S3-backed, mounted natively on macOS, built by editors who got tired of waiting
            on scrub-and-cache to catch up.
          </p>
          <div className="hero-actions">
            <a href="#waitlist" className="btn btn-primary btn-lg">Join the Waitlist</a>
            <a href="#how-it-works" className="btn btn-outline btn-lg">How It Works</a>
          </div>
          <p className="hero-meta">macOS only &nbsp;·&nbsp; S3-backed &nbsp;·&nbsp; Your own cloud storage, your own bill.</p>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Vault" className="hero-main-icon" />
            <div className="glass-card">
              <div className="card-top">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="card-inner">
                <div className="line"></div>
                <div className="line half"></div>
                <div className="line lime"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

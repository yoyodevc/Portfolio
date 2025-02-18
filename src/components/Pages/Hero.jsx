import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Hi, I'm Fred!</h1>
      <p className="hero-subtitle">
        A passionate software developer crafting clean and efficient code.
      </p>
      <div className="hero-buttons">
        <button className="hero-button primary">View Projects</button>
        <button className="hero-button secondary">Contact Me</button>
        <a href="#about-me">
          <button className="hero-button tertiary">About Me</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;

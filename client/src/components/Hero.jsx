import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <span className="hero-badge">
            Get Ready to Ace your Next Interview
          </span>

          <h1 className="hero-title">
            One LastView Before
            <br />
            <span>Your Interview.</span>
          </h1>
          <p className="hero-subtitle">
            LastView gives you a focused, high-impact quiz built from real
            interview patterns — designed to sharpen your edge in just 30
            minutes.
          </p>
          <div className="hero-btns">
            <a href="/quiz" className="primary-btn">
              Start Practice — It's Free
            </a>
          </div>
          <div className="hero-image-wrapper">
            <img id="img" src="/src/assets/lastview.jpg" alt="Lastview" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

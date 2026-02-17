import React from "react";
import "./Features.css";

const Features = () => {
  const featureList = [
    {
      title: "Short Quizzes",
      desc: "Master core concepts with 5-minute rapid-fire rounds designed for busy schedules.",
      icon: "⚡",
    },
    {
      title: "Coding Tests",
      desc: "Practice real-world syntax and logic problems sourced from top tech companies.",
      icon: "💻",
    },
    {
      title: "AI Interview",
      desc: "Get real-time feedback on your performance from our proprietary AI coach.",
      icon: "🤖",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
       
        <div className="features-header">
          <span className="features-label">Why LastView?</span>
          <h3 className="features-main-title">
            Everything you need to crush it.
          </h3>
        </div>

       
        <div className="features-grid">
          {featureList.map((f, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4 className="feature-title">{f.title}</h4>
              <p className="feature-text">{f.desc}</p>
            </div>
          ))}
        </div>

       
        <div className="features-cta">
          <p>Ready to level up your career?</p>
          <a href="/signup" className="cta-link">
            Get Started for Free &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

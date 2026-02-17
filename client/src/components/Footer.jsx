import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            Last<span>View</span>
          </div>
          <p className="footer-tagline">
            Master your next interview with precision-engineered Quizzes and AI
            feedback.
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Platform</h4>
            <ul>
              <li>
                <a href="/mentors">Find Internships</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/cookies">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/suhailmalik-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/MohdSuhail89589"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/iam_suhail89589"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {new Date().getFullYear()} LastView. All rights reserved.</p>
          <div className="footer-legal">
            <span>Built with ❤️ for Students</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

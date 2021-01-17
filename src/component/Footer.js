import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links-wrapper">
        <div className="footer-description">
          <h2>Porslock ~ Hotels</h2>
          <p>We create Tremendous Experiences of a Life Time. </p>
        </div>
        <div className="footer-link-items">
          <div className="footer-link-title">Contact Us</div>
          <div className="footer-link">Contact</div>
          <div className="footer-link">Current News</div>
          <div className="footer-link">Useful Information</div>
          <div className="footer-link">News Letter</div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-link-items">
          <div className="footer-link-title">Explore Us</div>
          <div className="footer-link">Carrers</div>
          <div className="footer-link">Guest Review</div>
          <div className="footer-link">Rooms</div>
          <div className="footer-link">Press</div>
        </div>
        <div className="footer-link-items">
          <div className="footer-link-title">Follow Us</div>

          <div className="footer-link">
            <i className="fab fa-instagram"></i>
            Instagram
          </div>
          <div className="footer-link">
            <i className="fab fa-facebook"></i>
            Facebook
          </div>
          <div className="footer-link">
            <i className="fab fa-youtube"></i>
            Youtube
          </div>
          <div className="footer-link">
            <i className="fab fa-twitter"></i>
            Twitter
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

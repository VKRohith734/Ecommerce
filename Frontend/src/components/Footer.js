import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="bg-dark p-5 text-light footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>

          <div className="footer-links">
            <div className="quick-links-column">
              <a href="/about">
                <i className="fas fa-user"></i> About
              </a>
              <a href="/home">
                <i className="fas fa-home"></i> Home
              </a>
              <a href="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </a>
            </div>
            <div className="quick-links-column">
              <a href="/login">
                <i className="fas fa-store"></i> Login
              </a>
              <a href="/register">
                <i className="fas fa-store"></i> Register
              </a>
              <a href="/contact">
                <i className="fas fa-envelope"></i> Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Everything is a copy of a copy of a copy</p>
        <p>
          Built with <i className="fas fa-heart"></i> and
          <i className="fas fa-code"></i>
        </p>
      </div>
    </div>
  );
}

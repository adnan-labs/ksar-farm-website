/* =============================================
   FIXED FOOTER COMPONENT
   Place this in: src/components/Footer.js
   ============================================= */

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ksar-footer">
      <div className="ksar-container">
        <div className="footer-content">
          {/* Column 1: About */}
          <div className="footer-col">
            <h4 className="footer-heading">About KSAR Farms</h4>
            <p>
              The best farmhouse in Karjat, just 92 km from Mumbai. Experience organic farming, pristine nature, 32+ waterfalls, and luxury stays on our 29-acre gated property.
            </p>
            <div className="social-links">
              <a href="https://facebook.com/ksarfarms" target="_blank" rel="noopener noreferrer" title="Facebook">📘</a>
              <a href="https://instagram.com/ksarfarms" target="_blank" rel="noopener noreferrer" title="Instagram">📷</a>
              <a href="https://youtube.com/ksarfarms" target="_blank" rel="noopener noreferrer" title="YouTube">▶️</a>
              <a href="https://twitter.com/ksarfarms" target="_blank" rel="noopener noreferrer" title="Twitter">🐦</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bhimashankar">Bhimashankar</Link></li>
              <li><Link to="/sahyadri">Sahyadri Ranges</Link></li>
              <li><Link to="/sidhagad">Sidhagad Fort</Link></li>
              <li><Link to="/waterfalls">Waterfalls</Link></li>
            </ul>
          </div>

          {/* Column 3: Attractions */}
          <div className="footer-col">
            <h4 className="footer-heading">Attractions</h4>
            <ul className="footer-links">
              <li><a href="#features">Swimming Pools</a></li>
              <li><a href="#features">Organic Farm</a></li>
              <li><a href="#features">Camping</a></li>
              <li><a href="#features">BBQ Dinners</a></li>
              <li><a href="#features">Wildlife Sanctuary</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-info">
              <p>
                <strong>📍 Location:</strong><br />
                Nandgaon Balivere Road<br />
                Karjat, Maharashtra 410201
              </p>
              <p>
                <strong>📞 Phone:</strong><br />
                <a href="tel:+919867610525">+91 9867 610 525</a><br />
                <a href="tel:+918652034820">+91 8652 034 820</a>
              </p>
              <p>
                <strong>📧 Email:</strong><br />
                <a href="mailto:info@ksarfarms.com">info@ksarfarms.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} KSAR Farms. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <a href="/privacy">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="/terms">Terms of Service</a>
            <span className="divider">|</span>
            <a href="/contact">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
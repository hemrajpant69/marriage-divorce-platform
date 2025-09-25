import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="footer-logo-container me-3">
                <i className="fas fa-balance-scale footer-logo"></i>
              </div>
              <div>
                <h5 className="fw-bold mb-0">Marriage & Divorce</h5>
                <small className="text-muted">Legal Services Nepal</small>
              </div>
            </div>
            <p className="text-light opacity-75 mb-3">
              Providing expert legal guidance for marriage registration, 
              divorce proceedings, and family law matters in Nepal.
            </p>
            <div className="social-links">
              <a href="#" className="social-link me-2" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link me-2" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link me-2" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold text-primary mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/marriage" className="footer-link">Marriage</Link>
              </li>
              <li className="mb-2">
                <Link to="/divorce" className="footer-link">Divorce</Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="footer-link">Blog</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold text-primary mb-3">Our Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="footer-link">Marriage Registration</span>
              </li>
              <li className="mb-2">
                <span className="footer-link">Divorce Proceedings</span>
              </li>
              <li className="mb-2">
                <span className="footer-link">Legal Consultation</span>
              </li>
              <li className="mb-2">
                <span className="footer-link">Document Preparation</span>
              </li>
              <li className="mb-2">
                <span className="footer-link">Court Representation</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold text-primary mb-3">Contact Info</h6>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-map-marker-alt text-primary me-3"></i>
              <span className="text-light opacity-75">
                Kathmandu, Nepal
              </span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-phone text-primary me-3"></i>
              <span className="text-light opacity-75">
                +977 1 4XXXXXX
              </span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-envelope text-primary me-3"></i>
              <span className="text-light opacity-75">
                info@marriagedivorce.np
              </span>
            </div>
            <div className="d-flex align-items-center">
              <i className="fas fa-clock text-primary me-3"></i>
              <span className="text-light opacity-75">
                Mon-Fri: 9AM-6PM
              </span>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-lg-6 mb-3">
            <h6 className="fw-bold text-light mb-2">Subscribe to Our Newsletter</h6>
            <p className="text-light opacity-75 small">
              Get the latest updates on marriage and divorce laws in Nepal.
            </p>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="input-group">
              <input 
                type="email" 
                className="form-control newsletter-input" 
                placeholder="Enter your email"
                aria-label="Email subscription"
              />
              <button className="btn btn-primary newsletter-btn" type="button">
                Subscribe <i className="fas fa-paper-plane ms-2"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4 pt-3 border-top border-secondary">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0 text-light opacity-75">
              © {new Date().getFullYear()} Marriage & Divorce Nepal. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-links">
              <Link to="/privacy" className="footer-link me-3 small">Privacy Policy</Link>
              <Link to="/terms" className="footer-link me-3 small">Terms of Service</Link>
              <Link to="/sitemap" className="footer-link small">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        footer {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%) !important;
        }
        
        .footer-logo-container {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          color: #fff;
        }
        
        .footer-link {
          color: rgba(255, 255, 255, 0.7) !important;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .footer-link:hover {
          color: #3498db !important;
          transform: translateX(5px);
        }
        
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #fff !important;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: #3498db;
          transform: translateY(-2px);
          color: #fff !important;
        }
        
        .newsletter-input {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          border-right: none;
        }
        
        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .newsletter-input:focus {
          background: rgba(255, 255, 255, 0.15);
          border-color: #3498db;
          box-shadow: none;
          color: #fff;
        }
        
        .newsletter-btn {
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          border: 1px solid #3498db;
          transition: all 0.3s ease;
        }
        
        .newsletter-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-logo-container {
            width: 40px;
            height: 40px;
          }
          
          .footer-logo {
            font-size: 1.2rem;
          }
          
          .social-link {
            width: 35px;
            height: 35px;
          }
          
          .input-group {
            flex-direction: column;
          }
          
          .newsletter-input {
            border-right: 1px solid rgba(255, 255, 255, 0.2);
            border-bottom: none;
            margin-bottom: 0.5rem;
            border-radius: 0.375rem;
          }
          
          .newsletter-btn {
            border-radius: 0.375rem;
          }
        }
        
        @media (max-width: 576px) {
          .text-md-start, .text-md-end {
            text-align: center !important;
          }
          
          .footer-links {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}
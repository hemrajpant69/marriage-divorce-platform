import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const isActiveLink = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-primary shadow-lg sticky-top">
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div className="brand-logo-container me-2">
            <i className="fas fa-heart brand-icon"></i>
          </div>
          <div>
            <span className="fw-bold fs-4">Marriage & Divorce</span>
            <span className="d-block brand-subtitle">Legal Services Nepal</span>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActiveLink("/")}`}
              >
                <i className="fas fa-home me-1 d-lg-none"></i>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/marriage" 
                className={`nav-link ${isActiveLink("/marriage")}`}
              >
                <i className="fas fa-ring me-1 d-lg-none"></i>
                Marriage
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/divorce" 
                className={`nav-link ${isActiveLink("/divorce")}`}
              >
                <i className="fas fa-file-contract me-1 d-lg-none"></i>
                Divorce
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/blog" 
                className={`nav-link ${isActiveLink("/blog")}`}
              >
                <i className="fas fa-blog me-1 d-lg-none"></i>
                Blog
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${isActiveLink("/contact")}`}
              >
                <i className="fas fa-envelope me-1 d-lg-none"></i>
                Contact
              </Link>
            </li>
            
            {/* CTA Button */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link 
                to="/consultation" 
                className="btn btn-light btn-consultation fw-semibold"
              >
                <i className="fas fa-calendar-check me-2"></i>
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
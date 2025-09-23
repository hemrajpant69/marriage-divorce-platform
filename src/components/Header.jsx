import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold text-primary">
          Marriage & Divorce Nepal
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/marriage" className="nav-link">Marriage</Link>
            </li>
            <li className="nav-item">
              <Link to="/divorce" className="nav-link">Divorce</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

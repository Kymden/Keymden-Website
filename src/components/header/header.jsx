import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">Logo</Link>

        <span>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
        </span>

        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </div>
    </header>
  );
}

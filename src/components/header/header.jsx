import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/keymden.png";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/" className="logo-button">
          <img src={logo} alt="logo" />
          <p>
            Keymden <br />
            Solutions
          </p>
        </Link>

        <span>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
        </span>

        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import "./footer.css";

import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div id="foot-0">
        <span id="foot-0-head">
          <h3>Signup for our newsletter.</h3>
          <p>
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </span>

        <form>
          <input type="text" placeholder="Enter email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div id="foot-1">
        <span className="footer-information"></span>

        <span className="footer-info">
          <h4>Products and Services</h4>
          <Link to="/">Innoteq</Link>
          <Link to="/">Insunity Fund</Link>
          <Link to="/">Skill-Up</Link>
          <Link to="/">Hard Support</Link>
        </span>

        <span className="footer-info">
          <h4>Company</h4>
          <Link to="/">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/">Press</Link>
          <Link to="/">News</Link>
          <Link to="/">Contact</Link>
        </span>

        <span className="footer-info">
          <h4>Resources</h4>
          <Link to="/">Blog</Link>
          <Link to="/">Newsletter</Link>
          <Link to="/">Events</Link>
          <Link to="/">Support</Link>
        </span>

        <span className="footer-info">
          <h4>Legal</h4>
          <Link to="/">Terms</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Cookies</Link>
          <Link to="/">Licences</Link>
          <Link to="/">Contact</Link>
        </span>
      </div>

      <div id="foot-2">
        <span id="foot-2-head">&copy; 2023 Keymden Solutions</span>
        <span id="foot-2-body">
          <Link to="/terms">Terms of use</Link>
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/license">License</Link>
        </span>
        <span id="foot-2-foot">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </span>
      </div>
    </footer>
  );
}

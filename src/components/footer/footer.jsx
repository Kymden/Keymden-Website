import { Link } from "react-router-dom";
import "./footer.css";

import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div id="foot-0">
        <span id="foot-0-head">
          <h3>Get notified of new products and solutions.</h3>
          <p>
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </span>

        <form>
          <input type="text" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      
      <div id="foot-1">
        <span>
          <span className="footer-info"></span>
          <span className="footer-info"></span>
          <span className="footer-info"></span>
          <span className="footer-info"></span>
          <span className="footer-info"></span>
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

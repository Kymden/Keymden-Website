import "./footer.css";

import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div id="foot-1"></div>

      <div id="foot-2">
        <span id="foot-2-head">&copy; 2023 Keymden Solutions</span>
        <span id="foot-2-body">
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>Licence</p>
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

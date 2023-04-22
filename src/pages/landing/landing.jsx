import { Link } from "react-router-dom";
import "./landing.css";

export default function Landing() {
  return (
    <main id="landing">
      <section className="landing-1">
        <p className="landing-par1">WELCOME TO KEYMDEN SOLUTIONS</p>
        <h1>
          Simplify Your Digital <br />
          Adoption
        </h1>

        <p className="landing-par">
          Experience streamlined operations and accelerated growth with our
          customized and scalable technology solutions, designed to meet the
          unique needs of businesses of any size and industry.
        </p>

        <div>
          <Link to="">Request A Quote</Link>
          <Link to="">How We Work</Link>
        </div>
      </section>

      <div id="landing-2">
        <div id="landing-2-1"></div>
        <div id="landing-2-2"></div>
        <div id="landing-2-3"></div>
      </div>

      <section id="landing-3">
        <div id="landing-3-head">
          <h2>Our services</h2>
          <p>We provide end to end solutions</p>
        </div>

        <div id="landing-3-body">
          <div id="landing-3-1"></div>
          <div id="landing-3-2"></div>
          <div id="landing-3-3"></div>
        </div>
      </section>
    </main>
  );
}

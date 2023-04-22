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
    </main>
  );
}

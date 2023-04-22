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
        {/* <div id="landing-2-1"></div> */}
        <div id="landing-2-2">
          <span id="partner-desc">
            <h4>Companies That Have Partnered with us</h4>
            <p>
              Meet some of the organiztions that have trusted with us in the
              past to conduct business with them.
            </p>
            <button className="partners-button">Be Our Next Partner</button>
          </span>

          <span id="partner-logos">
            <span className="partner-logo"></span>
            <span className="partner-logo"></span>
            <span className="partner-logo"></span>
            <span className="partner-logo"></span>
            <span className="partner-logo"></span>
          </span>
        </div>
        <div id="landing-2-3">
          <span className="brag-cont">
            <h4>6 Years +</h4>
            <p>Experience</p>
          </span>

          <span className="brag-cont">
            <h4>6 Years +</h4>
            <p>Experience</p>
          </span>

          <span className="brag-cont">
            <h4>7 Completed</h4>
            <p>Projects</p>
          </span>

          <span className="brag-cont">
            <h4>6 Years +</h4>
            <p>Experience</p>
          </span>
        </div>
      </div>

      <section id="landing-3">
        <div id="landing-3-head">
          <h2>Services & Products</h2>
          <p>We provide end to end solutions</p>
        </div>

        <div id="landing-3-body">
          <div id="landing-3-1">
            <span className="services-cont"></span>
            <span className="services-cont">
              <h3>Management Systems</h3>
              <p>
                Whether youre an individual, a group or a coporate we are ready
                to equip you with tech skills for you. We focus on equipping you
                or your team with industry based skills.
              </p>
              <button>Skill Up</button>
            </span>

            <span className="services-cont"></span>
            <span className="services-cont">
              <h3>API development and intergarions</h3>
              <p>
                Whether youre an individual, a group or a coporate we are ready
                to equip you with tech skills for you. We focus on equipping you
                or your team with industry based skills.
              </p>
              <button>Skill Up</button>
            </span>
          </div>

          <div id="landing-3-2"></div>

          <div id="landing-3-3">
            <span className="services-cont">
              <h3>Tech skills & education</h3>
              <p>
                Whether youre an individual, a group or a coporate we are ready
                to equip you with tech skills for you. We focus on equipping you
                or your team with industry based skills.
              </p>
              <button>Skill Up</button>
            </span>
            <span className="services-cont"></span>
            <span className="services-cont">
              <h3>Technical support</h3>
              <p>
                Whether youre an individual, a group or a coporate we are ready
                to equip you with tech skills for you. We focus on equipping you
                or your team with industry based skills.
              </p>
              <button>Contact Us</button>
            </span>
          </div>
        </div>
      </section>

      <section id="landing-4"></section>
    </main>
  );
}

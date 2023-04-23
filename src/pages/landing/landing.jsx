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
          <Link to="" className="quote-button">
            Request A Quote
          </Link>
          <Link to="" className="work-button">
            How We Work
          </Link>
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
            <h4>25 +</h4>
            <p>Team Members</p>
          </span>

          <span className="brag-cont">
            <h4>7 Completed</h4>
            <p>Projects</p>
          </span>

          <span className="brag-cont">
            <h4>30 +</h4>
            <p>Partners</p>
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
            <span className="services-cont" id="service-cont-1">
              <h3>Management Systems</h3>
              <p>
                Whether its an ERP or HRM systems we have experience. Manage
                your business with our cutting-edge management systems
                empowering you to achieve your goals with ease.
              </p>
              <button>Learn More</button>
            </span>

            <span className="services-cont"></span>
            <span className="services-cont" id="service-cont-1">
              <h3>API Intergrations</h3>
              <p>
                We optimize API performance, create seamless integrations and
                enhance user experience, working with various platforms to
                streamline your business processes.
              </p>
              <button>Learn More</button>
            </span>
            <span className="services-cont"></span>
          </div>

          <div id="landing-3-2"></div>

          <div id="landing-3-3">
            <span className="services-cont" id="service-cont-2">
              <h3>Tech skills & education</h3>
              <p>
                We offer comprehensive courses in machine learning, data
                analysis, statistics, and software engineering. Our programs are
                designed to equip you with the latest industry-based skills and
                knowledge, to help you succeed in your career.
              </p>
              <button>Learn More</button>
            </span>

            <span className="services-cont"></span>

            <span className="services-cont" id="service-cont-2">
              <h3>Technical support</h3>
              <p>
                Our company provides reliable technical hardware support to
                ensure your technology infrastructure runs efficiently and
                effectively, minimizing downtime and maximizing productivity.
              </p>
              <button>Learn More</button>
            </span>

            <span className="services-cont"></span>

            <span className="services-cont" id="service-cont-2">
              <h3>Insunity Fund</h3>
              <p>
                We provide funding options for startups, offering a range of
                investment opportunities to help turn your ideas into reality.
                Our team of experts can guide you through the process, providing
                support and resources to help you succeed.
              </p>
              <button>Learn More</button>
            </span>
          </div>
        </div>
      </section>

      <section id="landing-4"></section>
    </main>
  );
}

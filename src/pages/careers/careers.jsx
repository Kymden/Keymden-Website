import { TiTime, FaMapMarkerAlt } from "react-icons/all";
// import { FiChevronUpRight } from "react-icons/fi";

import "./careers.css";

export default function Careers() {
  return (
    <main id="careers">
      <section id="careers-1">
        <button>We're hiring</button>
        <h1>
          Be <strong>part</strong> of our mission
        </h1>
        <p>
          We are always looking for passionate and talented individuals to join
          our mission. We value flat hierachies, clear communication and full
          ownership of responsibility.
        </p>

        <div>
          <button>View All</button>
          <button>Design</button>
          <button>Development</button>
          <button>Marketing</button>
          <button>Finance</button>
          <button>Operations</button>
          <button>Management</button>
          <button>Instructing</button>
        </div>
      </section>

      <div className="careers-2">
        <span className="careers-2-1">
          <h4>Software Engineer</h4>
          <p>
            We're looking for a mid-level software engineer to join our team
          </p>
          <span>
            <button className="job-button">
              <TiTime />
              <p>Full-Time</p>
            </button>

            <button className="job-button">
              <FaMapMarkerAlt />
              <p>Hybrid</p>
            </button>
          </span>
        </span>

        <span className="careers-2-2">
          <button>
            {/* <FiChevronUpRight /> */}
            <p>Apply</p>
          </button>
        </span>
      </div>

      <div className="careers-2">
        <span className="careers-2-1">
          <h4>Software Engineer</h4>
          <p>
            We're looking for a mid-level software engineer to join our team
          </p>
          <span>
            <button className="job-button">
              <TiTime />
              <p>Full-Time</p>
            </button>

            <button className="job-button">
              <FaMapMarkerAlt />
              <p>Hybrid</p>
            </button>
          </span>
        </span>

        <span className="careers-2-2">
          <button>
            <p>Apply</p>
          </button>
        </span>
      </div>

      <div className="careers-2">
        <span className="careers-2-1">
          <h4>Software Engineer</h4>
          <p>
            We're looking for a mid-level software engineer to join our team
          </p>
          <span>
            <button className="job-button">
              <TiTime />
              <p>Full-Time</p>
            </button>

            <button className="job-button">
              <FaMapMarkerAlt />
              <p>Hybrid</p>
            </button>
          </span>
        </span>

        <span className="careers-2-2">
          <button>
            <p>Apply</p>
          </button>
        </span>
      </div>

      <div className="careers-2">
        <span className="careers-2-1">
          <h4>Software Engineer</h4>
          <p>
            We're looking for a mid-level software engineer to join our team
          </p>
          <span>
            <button className="job-button">
              <TiTime />
              <p>Full-Time</p>
            </button>

            <button className="job-button">
              <FaMapMarkerAlt />
              <p>Hybrid</p>
            </button>
          </span>
        </span>

        <span className="careers-2-2">
          <button>
            <p>Apply</p>
          </button>
        </span>
      </div>

      <section id="careers-3">
        
      </section>
    </main>
  );
}

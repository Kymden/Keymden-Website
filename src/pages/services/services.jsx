import "./services.css";
import { FaStar } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiVideo } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";

export default function Services() {
  return (
    <main id="services">
      <section id="services-1">
        <h2>
          We <strong>are</strong> versatile
        </h2>
        <p>
          Enabling a variety of industries through the provision of tailored
          solutions and services.
        </p>
      </section>

      <section className="services-2" id="services-2">
        <div className="section-header">
          <p>1</p>
        </div>
        <div className="section-body">
          <h3>Coding and programming</h3>
          <p>
            We believe that code and data is a means to the end. Learn proper
            probelm solving with us.
          </p>

          <div className="section-info">
            <span className="course-cont">
              <div />
              <span>
                <span className="course-card-header">
                  <p>UI/UX Design</p>
                  <span>
                    <FaStar />
                    <p>4.5</p>
                  </span>
                </span>

                <span className="course-card-body">
                  <p>UI/UX Design for Beginners</p>
                  <p>$200</p>
                </span>

                <span className="course-card-foot">
                  <p>
                    <AiOutlineClockCircle />
                    50hr 30min
                  </p>
                  <p>
                    <BiVideo />
                    40 modules
                  </p>
                  <p>
                    <BsDownload />
                    207 sales
                  </p>
                </span>

                <span className="course-card-f1">
                  <button>Enroll</button>
                </span>
              </span>
            </span>

            <span className="course-cont">
              <div />
              <span>
                <span className="course-card-header">
                  <p>UI/UX Design</p>
                  <span>
                    <FaStar />
                    <p>4.5</p>
                  </span>
                </span>

                <span className="course-card-body">
                  <p>UI/UX Design for Beginners</p>
                  <p>$200</p>
                </span>

                <span className="course-card-foot">
                  <p>
                    <AiOutlineClockCircle />
                    50hr 30min
                  </p>
                  <p>
                    <BiVideo />
                    40 modules
                  </p>
                  <p>
                    <BsDownload />
                    207 sales
                  </p>
                </span>

                <span className="course-card-f1">
                  <button>Enroll</button>
                </span>
              </span>
            </span>

            <span className="course-cont">
              <div />
              <span>
                <span className="course-card-header">
                  <p>UI/UX Design</p>
                  <span>
                    <FaStar />
                    <p>4.5</p>
                  </span>
                </span>

                <span className="course-card-body">
                  <p>UI/UX Design for Beginners</p>
                  <p>$200</p>
                </span>

                <span className="course-card-foot">
                  <p>
                    <AiOutlineClockCircle />
                    50hr 30min
                  </p>
                  <p>
                    <BiVideo />
                    40 modules
                  </p>
                  <p>
                    <BsDownload />
                    207 sales
                  </p>
                </span>

                <span className="course-card-f1">
                  <button>Enroll</button>
                </span>
              </span>
            </span>

            <span className="course-cont">
              <div />
              <span>
                <span className="course-card-header">
                  <p>UI/UX Design</p>
                  <span>
                    <FaStar />
                    <p>4.5</p>
                  </span>
                </span>

                <span className="course-card-body">
                  <p>UI/UX Design for Beginners</p>
                  <p>$200</p>
                </span>

                <span className="course-card-foot">
                  <p>
                    <AiOutlineClockCircle />
                    50hr 30min
                  </p>
                  <p>
                    <BiVideo />
                    40 modules
                  </p>
                  <p>
                    <BsDownload />
                    207 sales
                  </p>
                </span>

                <span className="course-card-f1">
                  <button>Enroll</button>
                </span>
              </span>
            </span>
          </div>

          <div className="section-foot">
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section className="services-3">
        <h3>Software development</h3>
        <p>
          We power existing businesses through inhouse solutions that are secure
          and fast. Focus on growth we will manage it for you
        </p>
      </section>

      <section className="services-2">
        <h3>Technical support</h3>
        <p>
          We also offer hardware solutions for your businesses exprience
          discounted maintenance and superior hardware solutions.
        </p>
      </section>

      <section className="services-3">
        <h3>Insunity Fund</h3>
        <p>
          Some of our students have gone on to create solutions that are shaping
          and changing the future of Africa. These solutions exist within SMEs.
          Learn how you can partner with them.
        </p>
      </section>
      {/* <section className="services-2"></section>
      <section className="services-3"></section>
      <section className="services-2"></section> */}
    </main>
  );
}

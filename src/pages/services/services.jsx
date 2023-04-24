import "./services.css";

let courses = [
  {
    name: "Machine Learning",
    description:
      "Machine learning is a field of study that focuses on developing algorithms and statistical models that enable computer systems to learn from and make predictions or decisions based on data. This course covers the fundamentals of machine learning, including supervised and unsupervised learning, neural networks, and deep learning.",
    tags: ["Online", "Instructor-led", "Certification"],
  },
  {
    name: "Frontend Development",
    description:
      "Frontend development involves building user interfaces and experiences for websites and web applications. This course covers HTML, CSS, and JavaScript, as well as popular frontend frameworks such as React and Angular. Students will learn how to design responsive and accessible web pages and applications.",
    tags: ["Online", "Instructor-led", "Industry-based"],
  },
  {
    name: "Backend Development",
    description:
      "Backend development involves building the server-side components of web applications, including databases, APIs, and server-side logic. This course covers programming languages such as Python and Ruby, as well as frameworks such as Node.js and Django. Students will learn how to build scalable and maintainable web applications.",
    tags: ["Online", "Instructor-led", "Certification"],
  },
  {
    name: "Statistical Packages",
    description:
      "Statistical packages are software applications that are used for statistical analysis and data visualization. This course covers popular statistical packages such as R and SAS, as well as data analysis techniques such as regression analysis, hypothesis testing, and data visualization. Students will learn how to use statistical packages to analyze and visualize data.",
    tags: ["Online", "Instructor-led", "Industry-based"],
  },
];

export default function Services() {
  function CourseContainer({ name, description, tags }) {
    return (
      <span className="course-cont">
        <h4>{name}</h4>
        <p>{description}</p>
        <span>
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </span>
        <button>Enroll</button>
      </span>
    );
  }
  
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
            {/* <span className="course-cont">
              <h4>Machine Learning</h4>
              <p></p>
              <span></span>
              <button>Enroll</button>
            </span> */}
            {courses.map((course, index) => (
              <CourseContainer
                key={index}
                name={course.name}
                description={course.description}
                tags={course.tags}
              />
            ))}

            {/* <CourseContainer name={"Machine Learning"} />
            <CourseContainer />
            <CourseContainer /> */}
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

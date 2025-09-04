import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
            Hello! I'm Nakshatra Pawar, currently pursuing my Master’s in 
            Applied Data Science at the University of Southern California. 
            I am passionate about turning complex data into actionable insights 
            and am exploring roles as a Data Scientist, Data Engineer, or Data Analyst. 
            With expertise in Python, SQL, R, Spark, Hadoop, and cloud platforms like 
            AWS and GCP, I aim to solve real-world problems through data-driven solutions.
          </p>

          <p>
          I have experience in data visualization, predictive modeling, and building 
          end-to-end data pipelines. I am constantly learning and staying updated with 
          the latest trends in data science and analytics. I am eager to take on new 
          challenges and contribute to impactful projects.
          </p>

          <p>
          I am actively looking for internship and job opportunities where I can grow 
          and make a meaningful impact. I am always open to new opportunities and 
          collaborations – feel free to connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/nakshatra-pawar/"
              target="_blank"
              className="app__links"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;

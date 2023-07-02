import React from "react";
import "./style.css";
import ResponsiveDesign from "../Icons/ResponsiveDesign";
import WebDev from "../Icons/WebDev";
import CleanCode from "../Icons/CleanCode";
import WebDesign from "../Icons/WebDesign";
import TriangleIcon from "../Icons/TriangleIcon";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div>
          <h2 className="title-top" data-aos="fade-right">
            <TriangleIcon />I love being a web developer !"
          </h2>
          <p className="description" data-aos="fade-right">
            My name is Ny Nivoarijaona, as a front-end developer and UI/UX
            designer, I'm passionate about creating exceptional user
            experiences. With a solid background in web development, I strive to
            combine visually appealing aesthetics with optimal functionality. My
            goal is to create intuitive, user-friendly interfaces that captivate
            users and enhance their interaction with digital products.
          </p>
          <div className="card-wrapper">
            <article className="card-service webdev-section"  data-aos="fade-right">
              <div className="icon-box">
                <WebDev />
              </div>
              <div className="card-details">
                <h3>Web Development</h3>
                <p className="sub-title">
                  A passion for knowledge. Ability to plan for everything. Great
                  debugging skills. “Accelerated Failure” Mentality.
                </p>
              </div>
            </article>
            <article className="card-service responsive-section" data-aos="fade-left">
              <div className="icon-box">
                <ResponsiveDesign />
              </div>
              <div className="card-details">
                <h3>Responsive Design</h3>
                <p className="sub-title">
                  Less Effort. Smooth User Experience. User Friendly website.
                  Mobile Segment. Search Engine Optimization (SEO) .
                </p>
              </div>
            </article>
            <article className="card-service cleancode-section" data-aos="fade-right">
              <div className="icon-box stroke-svg">
                <CleanCode />
              </div>
              <div className="card-details">
                <h3>Clean Code</h3>
                <p className="sub-title">
                  Understandable and readable code, Always following updated
                  structure, simple and focused.
                </p>
              </div>
            </article>
            <article className="card-service webdesign-section" data-aos="fade-left">
              <div className="icon-box">
                <WebDesign />
              </div>
              <div className="card-details">
                <h3>Web Design</h3>
                <p className="sub-title">
                  I build & design stuff.Interactional architecture, page
                  organization, tree structure and navigation in a web site...
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

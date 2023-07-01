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
          <h2 className="title-top wow animate__animated animate__bounceInLeft">
            <TriangleIcon />I love being a web developer !"
          </h2>
          <p className="description">
            My name is Ny Nivoarijaona, a passionate of IT and UI/UX. I'm 25
            years old and currently working in the web field. I started coding
            in 2016, and until now I have done a lot of web projects.
          </p>
          <div className="card-wrapper">
            <article className="card-service webdev-section wow animate__animated animate__bounceInLeft">
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
            <article className="card-service responsive-section wow animate__animated animate__bounceInRight">
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
            <article className="card-service cleancode-section wow animate__animated animate__bounceInLeft">
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
            <article className="card-service webdesign-section  wow animate__animated animate__bounceInRight">
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

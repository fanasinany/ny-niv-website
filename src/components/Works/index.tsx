import React, { useState } from "react";
import CardWork from "../CardWork";
import "./style.css";
import svgImage from "../../images/works/svg-store.jpg";
import qrImage from "../../images/works/qrcode.jpg";
import frontImage from "../../images/works/skyline.jpg";
import zionImage from "../../images/works/zion.jpg";
import portfolioImage from "../../images/works/ny-nivoarijaona.jpg";
import lrImage from "../../images/works/lrcrea.jpg";
import feAdvice from "../../images/works/fm-advice-generator.jpg";
import feQrcode from "../../images/works/fm-qrcode.jpg";
import wdSpaceFiesta from "../../images/works/wd-spacefiesta.jpg";
import wdZion from "../../images/works/wd-ziontwo.jpg";
import wdTravelAgency from "../../images/works/wd-travelagency.jpg";
import coriandreImage from "../../images/works/coriandre.jpg";
import TriangleIcon from "../Icons/TriangleIcon";

const Works = () => {
  const [activefilter, setActiveFilter] = useState("all");
  return (
    <section id="works">
      <div className="container">
        <div className="margin-y">
          <h2 className="title-top">
            <TriangleIcon />
            Some projects I've built.
          </h2>
          <p className="description">
            I am pleased to present a selection of my recent development
            projects. These projects have been developed with different
            technologies and skills to solve various problems. Feel free to
            explore these projects to discover the different facets of my
            development skills.
          </p>
          <div className="switcher-wrapper">
            <button
              className={`all-filter ${activefilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              Tous
            </button>
            <button
              className={`web-project-filter ${
                activefilter === "wp" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("wp")}
            >
              Web Project
            </button>
            <button
              className={`web-design-filter ${
                activefilter === "wd" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("wd")}
            >
              Web Design
            </button>
          </div>
          <div className={`career-card-wrapper show-${activefilter}`}>
            <CardWork
              classTag="wp"
              title="SVG Generator"
              tags={["reactjs", "html", "css", "nodejs", "mysql"]}
              description="A platform to store SVG icons."
              initial="S"
              bgColor="#8E7497"
              imageLink={svgImage}
              url="https://svg-store.vercel.app/"
            />
            <CardWork
              classTag="wd"
              title="Space Fiesta"
              tags={["Adobe XD"]}
              description="Web design for Space Fiesta"
              initial="S"
              bgColor="#f5b901"
              imageLink={wdSpaceFiesta}
              url="https://xd.adobe.com/view/7f967b56-8343-49ca-96ca-b6e398b0597f-2ac5/grid"
            />
            <CardWork
              classTag="wp"
              title="QR Code Generator"
              tags={["reactjs", "html", "css"]}
              description="QR code generator for websites"
              initial="Q"
              bgColor="#1D1D1D"
              imageLink={qrImage}
              url="https://qr-code-by-ny.vercel.app/"
            />
            <CardWork
              classTag="wd"
              title="Travel Agency"
              tags={["Adobe XD"]}
              description="Web design for a Travel Agency"
              initial="T"
              bgColor="#318194"
              imageLink={wdTravelAgency}
              url="https://xd.adobe.com/view/5ccc87ae-41b9-462c-ad1f-c3802b7ea266-099f/"
            />
            <CardWork
              classTag="wp"
              title="Front end Award"
              tags={["html", "css", "js"]}
              description="A challenge that I did during the FrontEnd Award 2021."
              initial="F"
              bgColor="#1D5053"
              imageLink={frontImage}
              url="https://fa-nivoarijaona.netlify.app/"
            />
            <CardWork
              classTag="wp"
              title="Portfolio V1"
              tags={["reactjs", "html", "css"]}
              description="My previous portfolio."
              initial="V1"
              bgColor="#1D1D1D"
              imageLink={portfolioImage}
              url="https://ny-nivoarijaona.vercel.app/"
            />
            <CardWork
              classTag="wp"
              title="Zion Market"
              tags={["nextjs", "html", "css"]}
              description="A platform dedicated to local products."
              initial="Z"
              bgColor="#F99300"
              imageLink={zionImage}
              url="http://www.zion-market.com/"
            />
            <CardWork
              classTag="wp"
              title="LR Crea Website"
              tags={["html", "sass", "js"]}
              description="A showcase site of a creative agency that trusted me."
              initial="L"
              bgColor="#d85830"
              imageLink={lrImage}
              url="https://lrcrea.vercel.app/"
            />
            <CardWork
              classTag="wp"
              title="Advice Generator App"
              tags={["html", "sass", "js", "api"]}
              description="Frontend Mentor Challenge"
              initial="A"
              bgColor="hsl(217, 19%, 24%)"
              imageLink={feAdvice}
              url="https://fanasinany.github.io/fa-mentor-advice-generator"
            />
            <CardWork
              classTag="wp"
              title="Travel Agency"
              tags={["html", "css"]}
              description="Site vitrine d'un agence de voyage"
              initial="T"
              bgColor="#318194"
              imageLink={coriandreImage}
              url="https://coriandre.netlify.app/"
            />
            <CardWork
              classTag="wp"
              title="QR Code Component"
              tags={["html", "sass"]}
              description="Frontend Mentor Challenge"
              initial="Q"
              bgColor="#2c7dfa"
              imageLink={feQrcode}
              url="https://fanasinany.github.io/fe-mentor-qr-code-component"
            />
            <CardWork
              classTag="wd"
              title="Zion 2.0"
              tags={["Adobe XD"]}
              description="Redesign of Zion Market"
              initial="Z"
              bgColor="#ad0214"
              imageLink={wdZion}
              url="https://xd.adobe.com/view/77c9f681-d5ca-4057-8ab1-e22ceea2d84d-229a/grid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

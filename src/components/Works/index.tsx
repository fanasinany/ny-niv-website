import React, { useState } from "react";
import CardWork from "../CardWork";
import "./style.css";
import svgImage from "../../images/works/svg-store.webp";
import qrImage from "../../images/works/qrcode.webp";
import frontImage from "../../images/works/skyline.webp";
import zionImage from "../../images/works/zion.webp";
import portfolioImage from "../../images/works/ny-nivoarijaona.webp";
import lrImage from "../../images/works/lrcrea.webp";
import feAdvice from "../../images/works/fm-advice-generator.webp";
import feQrcode from "../../images/works/fm-qrcode.webp";
import wdSpaceFiesta from "../../images/works/wd-spacefiesta.webp";
import wdZion from "../../images/works/wd-ziontwo.webp";
import wdTravelAgency from "../../images/works/wd-travelagency.webp";
import coriandreImage from "../../images/works/coriandre.webp";
import mampii from "../../images/works/mampii.webp";
import belone from "../../images/works/belone.webp";
import pixelz from "../../images/works/pixelz.webp";
import TriangleIcon from "../Icons/TriangleIcon";

const Works = () => {
  const [activefilter, setActiveFilter] = useState("all");
  return (
    <section id="works">
      <div className="container">
        <div className="margin-y">
          <h2 className="title-top" data-aos="zoom-in">
            <TriangleIcon />
            Some projects I've built.
          </h2>
          <p className="description" data-aos="fade-right">
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
              All
            </button>
            <button
              className={`web-project-filter ${activefilter === "wp" ? "active" : ""
                }`}
              onClick={() => setActiveFilter("wp")}
            >
              Web Project
            </button>
            <button
              className={`web-design-filter ${activefilter === "wd" ? "active" : ""
                }`}
              onClick={() => setActiveFilter("wd")}
            >
              Web Design
            </button>
          </div>
          <div className={`career-card-wrapper show-${activefilter}`}>
            <CardWork
              classTag="wp"
              title="Mampii Photography"
              tags={["gatsby", "html", "css"]}
              description="A photographer's website called Mampii."
              initial="M"
              bgColor="#8E7497"
              imageLink={mampii}
              url="https://www.mampii.com/"
            />
            <CardWork
              classTag="wp"
              title="PixelZ Solution"
              tags={["gatsby", "html", "css"]}
              description="A website for an web and design agency"
              initial="P"
              bgColor="#292164"
              imageLink={pixelz}
              url="https://pixelz-solution.com/"
            />
            <CardWork
              classTag="wd"
              title="Belone Studio"
              tags={["Adobe XD"]}
              description="Web design for Belone Studio."
              initial="B"
              bgColor="#2f1458"
              imageLink={belone}
              url="#"
            />
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
              classTag="wp"
              title="Travel Agency"
              tags={["html", "css"]}
              description="Travel agency showcase site."
              initial="T"
              bgColor="#318194"
              imageLink={coriandreImage}
              url="https://ny-travel-agency.netlify.app/"
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

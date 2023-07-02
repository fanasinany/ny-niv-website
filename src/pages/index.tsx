import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Home from "../components/Home";
import About from "../components/About";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Citation from "../components/Citation";
import Works from "../components/Works";
import Helmet from "react-helmet";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    var bodyTag = document.querySelector("body");
    bodyTag?.classList.remove("hidebody");
    var overlay = document.querySelector("body>.overlay");
    overlay?.classList.add("loaded");
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>Ny Nivoarijaona - Website Developer</title>
        <meta name="title" content="Ny Nivoarijaona - Website Developer" />
        <meta
          name="description"
          content="A young boy passionate of IT and UI/UX. I'm a Developer Front End and a Web Designer too."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ny-nivoarijaona.com" />
        <meta
          property="og:title"
          content="Ny Nivoarijaona - Website Developer"
        />
        <meta
          property="og:description"
          content="A young boy passionate of IT and UI/UX. I'm a Developer Front End and a Web Designer too."
        />
        <meta
          property="og:image"
          content="../images/face.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.ny-nivoarijaona.com"
        />
        <meta
          property="twitter:title"
          content="Ny Nivoarijaona - Website Developer"
        />
        <meta
          property="twitter:description"
          content="A young boy passionate of IT and UI/UX. I'm a Developer Front End and a Web Designer too."
        />
        <meta
          property="twitter:image"
          content="../images/face.jpg"
        />
      </Helmet>
      <Header />
      <main>
        <Home />
        <About />
        <Career />
        <Works />
        <Contact />
        <Citation />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ny Nivoarijaona</title>;

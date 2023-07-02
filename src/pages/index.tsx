import * as React from "react";
import type { PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Home from "../components/Home";
import About from "../components/About";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Citation from "../components/Citation";
import Works from "../components/Works";
import Metatags from "../components/Metatags";
import AOS from "aos";
import "aos/dist/aos.css";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    var bodyTag = document.querySelector("body");
    bodyTag?.classList.remove("hidebody");
    var overlay = document.querySelector("body>.overlay");
    overlay?.classList.add("loaded");
  }, []);

  React.useEffect(() => {
    AOS.init({duration: 600});
    AOS.refresh();
  }, []);

  return (
    <React.Fragment>
      <Metatags />
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

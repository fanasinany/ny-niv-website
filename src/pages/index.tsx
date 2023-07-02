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

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    var bodyTag = document.querySelector("body");
    bodyTag?.classList.remove("hidebody");
    var overlay = document.querySelector('body>.overlay');
    overlay?.classList.add('loaded');
  }, []);
  return (
    <React.Fragment>
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

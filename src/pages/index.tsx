import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Home from "../components/Home";
import About from "../components/About";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ny Nivoarijaona</title>;

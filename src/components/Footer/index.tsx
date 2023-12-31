import React, { useEffect, useState } from "react";
import "./style.css";
import IcRoundArrowDownward from "../Icons/IcRoundArrowDownward";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(1);

  const [valueMenu, setValueMenu] = useState([
    "home",
    "about",
    "career",
    "works",
    "contact",
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const careerSection = document.getElementById("career");
      const workSection = document.getElementById("works");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.pageYOffset;

      if (
        homeSection &&
        aboutSection &&
        careerSection &&
        workSection &&
        contactSection &&
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setActiveLink(1);
      } else if (
        homeSection &&
        aboutSection &&
        careerSection &&
        workSection &&
        contactSection &&
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < careerSection.offsetTop
      ) {
        setActiveLink(2);
      } else if (
        homeSection &&
        aboutSection &&
        careerSection &&
        workSection &&
        contactSection &&
        scrollPosition >= careerSection.offsetTop &&
        scrollPosition < workSection.offsetTop
      ) {
        setActiveLink(3);
      } else if (
        homeSection &&
        aboutSection &&
        careerSection &&
        workSection &&
        contactSection &&
        scrollPosition >= workSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setActiveLink(4);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const totalHeight = document.body.offsetHeight;

      if (scrollY + innerHeight >= totalHeight) {
        setActiveLink(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <footer>
        <div className="footer-wrapper">
          <div className="social-link">
            <a
              href="mailto:nynivoarijaona@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.692"
                height="23.692"
                viewBox="0 0 23.692 23.692"
              >
                <g
                  id="gmail-svgrepo-com_1_"
                  data-name="gmail-svgrepo-com (1)"
                  transform="translate(-2 -2)"
                  fill="transparent"
                >
                  <path
                    id="Tracé_49"
                    data-name="Tracé 49"
                    d="M2,10.424C2,7.475,2,6,2.574,4.875a5.265,5.265,0,0,1,2.3-2.3C6,2,7.475,2,10.424,2h6.844c2.949,0,4.423,0,5.549.574a5.265,5.265,0,0,1,2.3,2.3c.574,1.126.574,2.6.574,5.549v6.844c0,2.949,0,4.423-.574,5.549a5.264,5.264,0,0,1-2.3,2.3c-1.126.574-2.6.574-5.549.574H10.424c-2.949,0-4.423,0-5.549-.574a5.265,5.265,0,0,1-2.3-2.3C2,21.691,2,20.217,2,17.268Z"
                  />
                  <path
                    id="Tracé_50"
                    data-name="Tracé 50"
                    d="M20.188,8.523l-5.066,3.954L9.94,8.523h0l.006.005v5.536L15.064,18.1l5.124-3.883Z"
                    transform="translate(-1.222 -1.004)"
                    fill="#ea4335"
                  />
                  <path
                    id="Tracé_51"
                    data-name="Tracé 51"
                    d="M23.381,7.327l-1.33.962v5.7l4.186-3.214V8.837S25.729,6.071,23.381,7.327Z"
                    transform="translate(-3.085 -0.769)"
                    fill="#fbbc05"
                  />
                  <path
                    id="Tracé_52"
                    data-name="Tracé 52"
                    d="M22.051,14.673v7.391h3.209a1.144,1.144,0,0,0,.979-1.135v-9.47Z"
                    transform="translate(-3.085 -1.455)"
                    fill="#34a853"
                  />
                  <path
                    id="Tracé_53"
                    data-name="Tracé 53"
                    d="M9.947,22.626V15.072l-.006-.005Z"
                    transform="translate(-1.222 -2.011)"
                    fill="#c5221f"
                  />
                  <path
                    id="Tracé_54"
                    data-name="Tracé 54"
                    d="M9.18,8.291,7.857,7.334C5.509,6.079,5,8.843,5,8.843v1.936l4.18,3.047Z"
                    transform="translate(-0.462 -0.77)"
                    fill="#c5221f"
                  />
                  <path
                    id="Tracé_55"
                    data-name="Tracé 55"
                    d="M9.94,8.524V14.06l.006.005V8.53Z"
                    transform="translate(-1.222 -1.004)"
                    fill="#c5221f"
                  />
                  <path
                    id="Tracé_56"
                    data-name="Tracé 56"
                    d="M5,11.467v9.47a1.142,1.142,0,0,0,.979,1.135H9.187L9.18,14.513Z"
                    transform="translate(-0.462 -1.457)"
                    fill="#4285f4"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://join.skype.com/invite/LyaO7501SwY3"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                id="Icons"
                xmlns="http://www.w3.org/2000/svg"
                width="17.761"
                height="17.761"
                viewBox="0 0 17.761 17.761"
              >
                <g id="Color-">
                  <path
                    id="Skype"
                    d="M417.25,670.766a8.257,8.257,0,0,0,.2-1.793,8.412,8.412,0,0,0-8.471-8.352,8.628,8.628,0,0,0-1.448.122,4.935,4.935,0,0,0-2.613-.743A4.878,4.878,0,0,0,400,664.845a4.777,4.777,0,0,0,.675,2.45,8.3,8.3,0,0,0-.171,1.678,8.412,8.412,0,0,0,8.471,8.353,8.679,8.679,0,0,0,1.552-.14,4.949,4.949,0,0,0,2.322.575,4.879,4.879,0,0,0,4.912-4.844A4.767,4.767,0,0,0,417.25,670.766Zm-3.931,2.2a3.836,3.836,0,0,1-1.722,1.287,6.977,6.977,0,0,1-2.646.46,6.538,6.538,0,0,1-3.034-.628,3.931,3.931,0,0,1-1.394-1.221,2.63,2.63,0,0,1-.542-1.509,1.043,1.043,0,0,1,.353-.787,1.249,1.249,0,0,1,.884-.325,1.131,1.131,0,0,1,.746.255,1.914,1.914,0,0,1,.5.716,4.141,4.141,0,0,0,.485.849,1.887,1.887,0,0,0,.711.544,2.976,2.976,0,0,0,1.23.216,3.018,3.018,0,0,0,1.706-.438,1.22,1.22,0,0,0,.628-1.043,1.023,1.023,0,0,0-.327-.792,2.369,2.369,0,0,0-.9-.492c-.386-.118-.908-.246-1.554-.38a12.4,12.4,0,0,1-2.22-.655,3.658,3.658,0,0,1-1.456-1.049,2.591,2.591,0,0,1-.548-1.675,2.684,2.684,0,0,1,.575-1.689,3.562,3.562,0,0,1,1.645-1.126,7.277,7.277,0,0,1,2.485-.386,6.785,6.785,0,0,1,1.977.257,4.37,4.37,0,0,1,1.4.687,3,3,0,0,1,.824.913,1.988,1.988,0,0,1,.265.952,1.129,1.129,0,0,1-.347.806,1.168,1.168,0,0,1-.87.359,1.078,1.078,0,0,1-.729-.224,2.738,2.738,0,0,1-.507-.664,2.768,2.768,0,0,0-.76-.927,2.407,2.407,0,0,0-1.415-.321,2.676,2.676,0,0,0-1.467.357.953.953,0,0,0-.525.8.72.72,0,0,0,.17.485,1.5,1.5,0,0,0,.5.379,3.741,3.741,0,0,0,.682.26c.235.065.629.161,1.171.284.686.144,1.316.307,1.872.484a6.013,6.013,0,0,1,1.45.652,2.874,2.874,0,0,1,.955.993,2.947,2.947,0,0,1,.344,1.472A3.14,3.14,0,0,1,413.32,672.965Z"
                    transform="translate(-400 -660)"
                    fill="#00aef3"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ny-nivoarijaona-1ab4b018b/"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                id="Icons"
                xmlns="http://www.w3.org/2000/svg"
                width="20.221"
                height="18.383"
                viewBox="0 0 20.221 18.383"
              >
                <g id="Color-">
                  <path
                    id="LinkedIn"
                    d="M722.221,283.383h-4.469V276.92c0-1.691-.7-2.846-2.236-2.846a2.255,2.255,0,0,0-2.134,1.53,2.838,2.838,0,0,0-.1,1.021v6.758h-4.428s.057-11.447,0-12.488h4.428v1.96c.261-.857,1.676-2.08,3.934-2.08,2.8,0,5,1.8,5,5.664v6.944Zm-17.841-14.05h-.029A2.179,2.179,0,0,1,702,267.168a2.4,2.4,0,1,1,2.38,2.165Zm-1.87,1.562h3.941v12.488H702.51V270.895Z"
                    transform="translate(-702 -265)"
                    fill="#007ebb"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
            </a>
            <a
              className="github"
              href="https://github.com/fanasinany"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                id="Page-1"
                xmlns="http://www.w3.org/2000/svg"
                width="17.952"
                height="17.951"
                viewBox="0 0 17.952 17.951"
              >
                <g id="Dribbble-Light-Preview">
                  <g id="icons">
                    <path
                      id="github-_142_"
                      data-name="github-[#142]"
                      d="M92.976,7399a9.091,9.091,0,0,1,8.976,9.2,9.191,9.191,0,0,1-6.133,8.734c-.455.09-.617-.2-.617-.44,0-.305.011-1.293.011-2.531a2.223,2.223,0,0,0-.609-1.7c2-.233,4.1-1,4.1-4.542a3.583,3.583,0,0,0-.925-2.468,3.4,3.4,0,0,0-.088-2.442s-.752-.242-2.466.942a8.429,8.429,0,0,0-4.5,0c-1.715-1.185-2.469-.942-2.469-.942a3.409,3.409,0,0,0-.087,2.442,3.6,3.6,0,0,0-.925,2.468c0,3.527,2.1,4.317,4.09,4.551a1.944,1.944,0,0,0-.57,1.23,1.888,1.888,0,0,1-2.612-.772,1.886,1.886,0,0,0-1.376-.942s-.875-.018-.061.557a2.446,2.446,0,0,1,1,1.347s.527,1.643,3.024,1.086c0,.772.013,1.5.013,1.714,0,.242-.165.53-.613.44A9.184,9.184,0,0,1,84,7408.2a9.092,9.092,0,0,1,8.976-9.2"
                      transform="translate(-84 -7399)"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="foot-left">
            <span className="nif-stat">
              NIF:3013605717
              / STAT:74908212023000908
            </span>
            <a
              href={`#${valueMenu[activeLink]}`}
              className={`pagination ${activeLink === 0 && "last-page"}`}
            >
              <IcRoundArrowDownward />
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

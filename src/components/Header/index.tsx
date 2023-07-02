import React, { FC, useContext, useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "./style.css";
import "react-modern-drawer/dist/index.css";

interface MenuLinkProps {
  isMobile?: boolean;
  closeDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuLink: FC<MenuLinkProps> = ({ isMobile, closeDrawer }) => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const careerSection = document.getElementById("career");
      const workSection = document.getElementById("works");

      const scrollPosition = window.pageYOffset;

      if (
        homeSection &&
        aboutSection &&
        careerSection &&
        workSection &&
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setActiveLink("home");
      } else if (
        homeSection &&
        aboutSection &&
        careerSection &&
        workSection &&
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < careerSection.offsetTop
      ) {
        setActiveLink("about");
      } else if (
        homeSection &&
        aboutSection &&
        careerSection &&
        workSection &&
        scrollPosition >= careerSection.offsetTop &&
        scrollPosition < workSection.offsetTop
      ) {
        setActiveLink("career");
      } else if (
        homeSection &&
        aboutSection &&
        careerSection &&
        workSection &&
        scrollPosition >= workSection.offsetTop
      ) {
        setActiveLink("works");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ul className={`nav-center navbar-items ${isMobile && "show-menu-mobile"}`}>
      <li>
        <a href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => closeDrawer(false)}>
          {isMobile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.641"
              height="19.02"
              viewBox="0 0 19.641 19.02"
            >
              <g id="home-svgrepo-com" transform="translate(0 -2.79)">
                <path
                  id="Tracé_70"
                  data-name="Tracé 70"
                  d="M35.567,40.479l-6.663-5.5a.834.834,0,0,0-1.062,0l-6.663,5.5a.834.834,0,0,0-.3.644v8.294a.834.834,0,0,0,.834.834H35.036a.834.834,0,0,0,.834-.834V41.122A.833.833,0,0,0,35.567,40.479Zm-6.312,8.1H27.491v-4.62h1.764v4.62Zm4.947,0H30.924V43.127a.834.834,0,0,0-.834-.834H26.656a.834.834,0,0,0-.834.834v5.454H22.544V41.516l5.829-4.809L34.2,41.516Z"
                  transform="translate(-18.552 -28.44)"
                  fill="#585858"
                />
                <path
                  id="Tracé_71"
                  data-name="Tracé 71"
                  d="M19.328,10.364c-1.859-1.489-3.611-2.913-5.514-4.479-.568-.511-1.166-.994-1.744-1.462S10.919,3.49,10.379,3A.834.834,0,0,0,9.262,3c-.54.486-1.125.96-1.691,1.418S6.4,5.374,5.827,5.885C3.924,7.452,2.172,8.875.313,10.364a.834.834,0,1,0,1.043,1.3c1.869-1.5,3.632-2.929,5.546-4.505l.028-.024c.54-.486,1.125-.96,1.691-1.418.4-.32.8-.648,1.2-.987.4.339.8.667,1.2.987.566.458,1.151.932,1.691,1.418l.028.024c1.914,1.576,3.676,3.008,5.546,4.505a.834.834,0,0,0,1.043-1.3Z"
                  transform="translate(0 0)"
                  fill="#585858"
                />
              </g>
            </svg>
          )}
          Home
        </a>
      </li>
      <li>
        <a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => closeDrawer(false)}>
          {isMobile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.37"
              height="19.098"
              viewBox="0 0 16.37 19.098"
            >
              <g transform="translate(-4 -2)">
                <path
                  id="Tracé_72"
                  data-name="Tracé 72"
                  d="M13.775,11.549A4.775,4.775,0,1,0,9,6.775a4.775,4.775,0,0,0,4.775,4.775Zm0-8.185a3.41,3.41,0,1,1-3.41,3.41A3.41,3.41,0,0,1,13.775,3.364Z"
                  transform="translate(-1.59)"
                  fill="#585858"
                />
                <path
                  id="Tracé_73"
                  data-name="Tracé 73"
                  d="M12.867,18H11.5A7.5,7.5,0,0,0,4,25.5a.682.682,0,0,0,.682.682H19.688a.682.682,0,0,0,.682-.682A7.5,7.5,0,0,0,12.867,18ZM5.405,24.821a6.139,6.139,0,0,1,6.1-5.457h1.364a6.139,6.139,0,0,1,6.1,5.457Z"
                  transform="translate(0 -5.087)"
                  fill="#585858"
                />
              </g>
            </svg>
          )}
          About
        </a>
      </li>
      <li>
        <a href="#career" className={activeLink === 'career' ? 'active' : ''} onClick={() => closeDrawer(false)}>
          {isMobile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.231"
              height="19.293"
              viewBox="0 0 23.231 19.293"
            >
              <g id="XMLID_350_" transform="translate(0.001 -19.723)">
                <g id="XMLID_351_" transform="translate(8.254 20.883)">
                  <path
                    id="XMLID_352_"
                    d="M84.186,34.339h11.98a1.5,1.5,0,0,0,0-3H84.186a1.5,1.5,0,0,0,0,3Z"
                    transform="translate(-82.688 -31.344)"
                    fill="#585858"
                  />
                </g>
                <g id="XMLID_439_" transform="translate(8.254 27.872)">
                  <path
                    id="XMLID_440_"
                    d="M96.166,101.344H84.186a1.5,1.5,0,1,0,0,3h11.98a1.5,1.5,0,1,0,0-3Z"
                    transform="translate(-82.688 -101.344)"
                    fill="#585858"
                  />
                </g>
                <g id="XMLID_441_" transform="translate(8.254 34.86)">
                  <path
                    id="XMLID_443_"
                    d="M96.166,171.344H84.186a1.5,1.5,0,1,0,0,3h11.98a1.5,1.5,0,1,0,0-3Z"
                    transform="translate(-82.688 -171.344)"
                    fill="#585858"
                  />
                </g>
                <g id="XMLID_444_" transform="translate(-0.001 26.712)">
                  <path
                    id="XMLID_445_"
                    d="M4.87,91.189l-1-.145-.446-.9a.749.749,0,0,0-1.343,0l-.446.9-1,.145a.749.749,0,0,0-.415,1.277l.722.7-.17.993a.749.749,0,0,0,1.086.79l.892-.469.892.469A.748.748,0,0,0,4,95.038H4a.75.75,0,0,0,.726-.931l-.161-.938.722-.7a.749.749,0,0,0-.415-1.277Z"
                    transform="translate(0.001 -89.723)"
                    fill="#585858"
                  />
                </g>
                <g id="XMLID_446_" transform="translate(-0.001 19.723)">
                  <path
                    id="XMLID_447_"
                    d="M4.87,21.189l-1-.145-.446-.9a.749.749,0,0,0-1.343,0l-.446.9-1,.145a.749.749,0,0,0-.415,1.277l.722.7-.17.993a.749.749,0,0,0,1.086.79l.892-.469.892.469A.748.748,0,0,0,4,25.038H4a.75.75,0,0,0,.726-.931l-.161-.938.722-.7a.749.749,0,0,0-.415-1.277Z"
                    transform="translate(0.001 -19.723)"
                    fill="#585858"
                  />
                </g>
                <g id="XMLID_448_" transform="translate(-0.001 33.7)">
                  <path
                    id="XMLID_449_"
                    d="M4.87,161.189l-1-.145-.446-.9a.749.749,0,0,0-1.343,0l-.446.9-1,.145a.749.749,0,0,0-.415,1.277l.722.7-.17.993a.749.749,0,0,0,1.086.79l.892-.469.892.469a.748.748,0,0,0,.348.086H4a.75.75,0,0,0,.726-.931l-.161-.938.722-.7a.749.749,0,0,0-.415-1.277Z"
                    transform="translate(0.001 -159.723)"
                    fill="#585858"
                  />
                </g>
              </g>
            </svg>
          )}
          Career
        </a>
      </li>
      <li>
        <a href="#works" className={activeLink === 'works' ? 'active' : ''} onClick={() => closeDrawer(false)}>
          {isMobile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.349"
              height="20.604"
              viewBox="0 0 20.349 20.604"
            >
              <g
                id="Iconly_Curved_Work"
                data-name="Iconly/Curved/Work"
                transform="translate(-1.788 -1.7)"
              >
                <g id="Work">
                  <path
                    id="Stroke_1"
                    data-name="Stroke 1"
                    d="M11.961,16.517V13.889"
                    fill="none"
                    stroke="#585858"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Stroke_2"
                    data-name="Stroke 2"
                    d="M21.09,11.477l-.029.021a17.52,17.52,0,0,1-9.1,2.393A17.48,17.48,0,0,1,2.863,11.5l-.03-.021"
                    fill="none"
                    stroke="#585858"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Stroke_4"
                    data-name="Stroke 4"
                    d="M2.75,13.351c0-6.152,2.3-8.2,9.211-8.2s9.211,2.051,9.211,8.2-2.3,8.2-9.211,8.2S2.75,19.5,2.75,13.351Z"
                    fill="none"
                    stroke="#585858"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    fillRule="evenodd"
                  />
                  <path
                    id="Stroke_6"
                    data-name="Stroke 6"
                    d="M15.224,5.369v-.63a2.184,2.184,0,0,0-2.06-2.289H10.759A2.184,2.184,0,0,0,8.7,4.739v.63"
                    fill="none"
                    stroke="#585858"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </g>
              </g>
            </svg>
          )}
          Works
        </a>
      </li>
      {isMobile ? (
        <a
          href="#contact"
          onClick={() => closeDrawer(false)}
          className="btn-say-hello"
        >
          Say hello 🖐
        </a>
      ) : (
        ""
      )}
    </ul>
  );
};

const Header = () => {
  const [isLight, setIsLight] = useState<boolean | null>(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const changeTheme = () => {
    if (isLight) {
      localStorage.setItem("theme-portfolio-ny", "dark");
      setIsLight(false);
    } else {
      localStorage.setItem("theme-portfolio-ny", "light");
      setIsLight(true);
    }
  };

  const checkAndChangeTheme = () => {
    if (
      localStorage.getItem("theme-portfolio-ny") &&
      localStorage.getItem("theme-portfolio-ny") === "light"
    ) {
      document.body.classList.remove("dark-mode");
      setIsLight(true);
    } else if (
      localStorage.getItem("theme-portfolio-ny") &&
      localStorage.getItem("theme-portfolio-ny") === "dark"
    ) {
      document.body.classList.add("dark-mode");
      setIsLight(false);
    } else {
      setIsLight(true);
    }
  };

  useEffect(() => {
    checkAndChangeTheme();
  }, [isLight]);

  const showDropdown = () => {
    document.getElementById("myDropdown")?.classList.toggle("show");
  };

  const changeThemeColor = (name: string) => {
    var themeArray = [
      "orange-color-theme",
      "red-color-theme",
      "yellow-color-theme",
      "blue-color-theme",
      "green-color-theme",
    ];
    themeArray.forEach((item) => {
      if (item === name) {
        document.body.classList.add(name);
      } else {
        document.body.classList.remove(item);
      }
    });
  };

  return (
    <React.Fragment>
      <header>
        <nav className="navbar">
          <div className="nav-left">
            <a href="/">Ny.</a>
          </div>
          <MenuLink closeDrawer={setIsOpen} />
          <div className="nav-right">
            <a href="#contact" className="btn-say-hello">
              Say hello 🖐
            </a>
            <button className="btn-swith-mode" onClick={changeTheme}>
              {isLight ? (
                <img
                  src="https://assets.codepen.io/210284/moon.png"
                  alt="moon"
                />
              ) : (
                <img src="https://assets.codepen.io/210284/sun.png" alt="sun" />
              )}
            </button>
            <div className="drp-and-btn">
              <button
                className="theme-choice dropbtn"
                onClick={() => showDropdown()}
              ></button>
              <div id="myDropdown" className="dropdown-content">
                <span
                  className="red-theme"
                  onClick={() => changeThemeColor("red-color-theme")}
                ></span>
                <span
                  className="yellow-theme"
                  onClick={() => changeThemeColor("yellow-color-theme")}
                ></span>
                <span
                  className="blue-theme"
                  onClick={() => changeThemeColor("blue-color-theme")}
                ></span>
                <span
                  className="green-theme"
                  onClick={() => changeThemeColor("green-color-theme")}
                ></span>
                <span
                  className="orange-theme"
                  onClick={() => changeThemeColor("orange-color-theme")}
                ></span>
              </div>
            </div>
            <button className="btn-menu" onClick={toggleDrawer}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.521"
                  height="13.521"
                  viewBox="0 0 13.521 13.521"
                >
                  <path
                    id="Icon_material-close"
                    data-name="Icon material-close"
                    d="M21.021,8.862,19.659,7.5l-5.4,5.4-5.4-5.4L7.5,8.862l5.4,5.4-5.4,5.4,1.362,1.362,5.4-5.4,5.4,5.4,1.362-1.362-5.4-5.4Z"
                    transform="translate(-7.5 -7.5)"
                    fill="#535661"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="18"
                  viewBox="0 0 27 18"
                >
                  <path
                    id="Icon_material-menu"
                    data-name="Icon material-menu"
                    d="M4.5,27h27V24H4.5Zm0-7.5h27v-3H4.5ZM4.5,9v3h27V9Z"
                    transform="translate(-4.5 -9)"
                    fill="#535661"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="drawer-menu"
        size={320}
      >
        <div className="drawer-wrapper">
          <h2>Ny Nivoarijaona</h2>
          <hr className="line-menu" />
          <MenuLink isMobile={isOpen} closeDrawer={setIsOpen} />
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;

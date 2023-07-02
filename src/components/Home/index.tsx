import * as React from "react";
import "./style.css";

const Home = () => {
  React.useEffect(() => {
    const text = document.querySelector(".text") as HTMLElement;
    if (text) {
      text.innerHTML =
        text.textContent?.replace(/\S/g, (match: string) => {
          return `<span>${match}</span>`;
        }) || "";
    }

    const element = document.querySelectorAll(
      ".text span"
    ) as NodeListOf<HTMLElement>;
    for (let i = 0; i < element.length; i++) {
      element[i].style.transform = `rotate(${i * 16}deg)`;
    }

    document.addEventListener("mousemove", (e: MouseEvent) => {
      if (text) {
        text.style.left = e.pageX + "px";
      }
    });

    const words: string[] = ["Front End Developer", "Expert Integrator Web", "UI / UX Designer"];
    let i: number = 0;
    const wordsChangeElement: HTMLElement | null = document.getElementById('words-change');
    if (wordsChangeElement) {
      setInterval(() => {
        wordsChangeElement.style.display = 'none';
        wordsChangeElement.innerHTML = words[(i = (i + 1) % words.length)];
        wordsChangeElement.style.display = 'block';
      }, 2500);
    }
  }, []);

  return (
    <section id="home">
      <div className="container center-vh">
        <div className="home-container">
          <div className="title-and-desc">
            <h1>
              <span className="animate-hello">Hello, I'm Ny!</span> <br />I{" "}
              <span className="gradiant-text">build things</span> for the web.
            </h1>
            <p className="desc-text">
              <span className="bar-align"></span>I'm
              <span id="words-change">Front End Developer</span>
            </p>
            <a className="big-button" href="#about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30.705"
                height="18.634"
                viewBox="0 0 30.705 18.634"
              >
                <path
                  id="Icon_awesome-chevron-down"
                  data-name="Icon awesome-chevron-down"
                  d="M14.557,26.823.892,13.158a1.687,1.687,0,0,1,0-2.386L2.486,9.177a1.687,1.687,0,0,1,2.384,0L15.75,20,26.631,9.175a1.687,1.687,0,0,1,2.384,0l1.594,1.594a1.687,1.687,0,0,1,0,2.386L16.943,26.823A1.688,1.688,0,0,1,14.557,26.823Z"
                  transform="translate(-0.398 -8.683)"
                  fill="#fff"
                />
              </svg>
              Learn more about me
            </a>
          </div>
          <div className="anim-wrapper">
            <section className="content-ci">
              <h2 className="text">Developer-Web-Designer-</h2>
            </section>
            <div className="image-ny"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

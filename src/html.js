import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <style>
          {`
            body.hidebody{
              overflow-y: hidden;
            }

            body .overlay {
              position: fixed;
              width: 100vw;
              height: 100vh;
              display: flex;
              z-index: 999999999;
              pointer-events: none;
              top: 0;
              left: 0;
            }

            body .overlay div {
              width: 20%;
              background-color: #2a2a2a;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            body.dark-mode .overlay div {
              background-color: #ffffff;
            }

            body .overlay div:nth-child(1) {
              transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 630ms;
            }

            body .overlay div:nth-child(2) {
              transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 560ms;
            }

            body .overlay div:nth-child(3) {
              transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 490ms;
            }

            body .overlay div:nth-child(4) {
              transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 420ms;
            }

            body .overlay div:nth-child(5) {
              transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 350ms;
            }

            body .overlay div:nth-child(6) {
              transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 280ms;
            }

            body .overlay div:nth-child(7) {
              transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 210ms;
            }

            body .overlay.loaded div {
              transform: translateY(-100%);
            } `}
        </style>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="orange-color-theme hidebody">
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <div className="overlay">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

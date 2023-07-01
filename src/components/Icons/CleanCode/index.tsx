import React, { SVGProps } from "react";

export function CleanCode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="60px"
      width="60px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 512 512"
    >
      <circle style={{fill:"#F33052"}} cx="256" cy="256" r="256" />
      <g>
        <path
          style={{fill:"#FFFFFF"}}
          d="M213.12,319.776L99.872,270.544V243.28l113.248-49.008v32.112l-79.008,30.208l79.008,31.328V319.776
		z"
        />
        <path
          style={{fill:"#FFFFFF"}}
          d="M223.6,341.408l40.912-170.832h23.776l-41.36,170.832H223.6z"
        />
        <path
          style={{fill:"#FFFFFF"}}
          d="M298.768,319.904V288l79.104-31.104l-79.104-30.752V194.48l113.36,49.008v27.04L298.768,319.904z"
        />
      </g>
    </svg>
  );
}
export default CleanCode;

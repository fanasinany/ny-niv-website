import React, { FC } from "react";
import "./style.css";

interface CardWorkProps {
  title: any;
  url?: string;
  description: string;
  initial: string;
  imageLink: string;
  bgColor?: string;
  tags?: string[];
  classTag?: string;
}

const CardWork: FC<CardWorkProps> = ({
  title,
  url,
  description,
  initial,
  imageLink,
  bgColor,
  tags,
  classTag,
}) => {
  return (
    <article className={`card-work card-${classTag}`}>
      <img src={imageLink} className="image-work" alt="thumbnail-work" />
      <div className="information-work">
        <div className="round-init-text" style={{ backgroundColor: bgColor }}>
          {initial}
        </div>
        <div className="description-work">
          <h3>{title}</h3>
          <span>{description}</span>
          <div className="tags-work">
            {tags &&
              tags.map((index, key) => {
                return (
                  <span key={key}>
                    {index}
                    {key !== tags.length - 1 ? "," : ""}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
      <a href={url} target="_blank" rel="noreferrer" className="view-project">
        View project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
          />
        </svg>
      </a>
    </article>
  );
};

export default CardWork;

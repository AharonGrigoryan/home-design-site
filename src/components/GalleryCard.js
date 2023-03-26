import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import "./gallerycard.css";

const GalleryCard = ({ image_src }) => {
  return (
    <div className="gallery-card3-gallery-card">
      <GatsbyImage
        image={image_src}
        alt="cards"
        className="gallery-card3-image"
      />
      <div className="gallery-card3-container">
        <h1 className="gallery-card3-text">Project Title</h1>
        <span className="gallery-card3-text1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          fugiat, commodi incidunt voluptatum perspiciatis fuga eaque possimus
          reiciendis consequatur.
        </span>
      </div>
    </div>
  );
};

export default GalleryCard;

import React from "react";
import "./gallery.css";
import GalleryCard from "./GalleryCard";
import { useStaticQuery, graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const Gallery = () => {
  const data = useStaticQuery(query);
  const {
    allFile: { nodes: gallery },
  } = data;

  return (
    <div className="gallery-gallery">
      <h1 className="gallery-text">Our portfolio</h1>
      <span className="gallery-text1">
        <span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis.
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <br></br>
        <span>
          <span>
            Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
      </span>
      <div className="gallery-container">
        {gallery.map((img) => {
          const imgPath = getImage(img.childImageSharp.gatsbyImageData);
          return (
            <GalleryCard
              image_src={imgPath}
              rootClassName="rootClassName"
            ></GalleryCard>
          );
        })}
      </div>
      <div className="home-container6">
        <Link to="/projects">
          <button className="gallery-button  button">PROJECTS</button>
        </Link>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default Gallery;

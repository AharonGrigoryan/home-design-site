import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./feature.css";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="section-features">
      <h1 className="features-text16">
        <span>Discover our</span>
        <br></br>
        <span>unique features</span>
      </h1>
      <div className="features-separator"></div>
      <div className="features-container2">
        <div className="features-container3">
          <FeatureCard rootClassName="rootClassName1"></FeatureCard>
          <FeatureCard rootClassName="rootClassName4"></FeatureCard>
          <FeatureCard rootClassName="rootClassName3"></FeatureCard>
          <FeatureCard rootClassName="rootClassName2"></FeatureCard>
        </div>
        <StaticImage
          alt="cards"
          src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="features-image1"
        />
      </div>
    </div>
  );
};

export default Feature;

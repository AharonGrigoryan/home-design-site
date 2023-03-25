import React from "react";
import "../styles/index.css";

import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";

import Layout from "../components/Layout";

const Home = (props) => {
  return (
    <Layout>
      <div className="home-container">
        <Hero />
        <Feature />
        <Gallery />
      </div>
    </Layout>
  );
};

export default Home;

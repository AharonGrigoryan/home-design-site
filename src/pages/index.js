import React from "react";

import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";

import Layout from "../components/Layout";

const Home = () => {
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

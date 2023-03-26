import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/styles.css";
import "../styles/index.css";
import "normalize.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

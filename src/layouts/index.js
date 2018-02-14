import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/Header";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div id="outer-container">
    <Helmet
      title="BoBeenLee"
      meta={[
        { name: "description", content: "BoBeenLee" },
        {
          name: "keywords",
          content: "BoBeenLee, BoBinLee, React, React Native, JS"
        }
      ]}
    />
    <Header />
    <div
      id="page-box"
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
        height: 2000
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

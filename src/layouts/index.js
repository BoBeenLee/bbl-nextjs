import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Layout from "./Layout";

class TemplateWrapper extends Component {
  render() {
    return <Layout {...this.props} />;
  }
}

export default TemplateWrapper;

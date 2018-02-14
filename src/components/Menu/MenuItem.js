import React, { Component } from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";

class MenuItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
  };

  static defaultProps = {
    name: "Home",
    url: "/"
  };
  render() {
    const { name, url } = this.props;
    return <Link to={url}>{name}</Link>;
  }
}

export default MenuItem;

import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { productions } from "../../constants/data";

const Root = styled.div``;

class PorfolioPage extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return <Root>Port</Root>;
  }
}

export const query = graphql`
  query PortfolioImageQuery {
    portfolioImage: allImageSharp(filter: { id: { regex: "/competition/" } }) {
      edges {
        node {
          sizes(
            maxWidth: 430
            quality: 80
            traceSVG: { background: "#f2f8f3", color: "#d6ebd9" }
          ) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    }
  }
`;

export default PorfolioPage;

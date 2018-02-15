import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Portfolio } from "../../organizations/portfolio";
import getPortfolioQuery from "../../graphql/queries/portfolio";

const Root = styled.div`
  padding-top: 20px;
`;

class PorfolioPage extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Root>
        <Portfolio images={data} />
      </Root>
    );
  }
}

export const query = graphql`
  query PortfolioImageQuery {
    flassImages: allImageSharp(filter: { id: { regex: "/flass/" } }) {
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
    onepageImages: allImageSharp(filter: { id: { regex: "/onepage/" } }) {
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
    intersectionImages: allImageSharp(
      filter: { id: { regex: "/intersection/" } }
    ) {
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
    skhualarmImages: allImageSharp(filter: { id: { regex: "/skhualarm/" } }) {
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
    competitionImages: allImageSharp(
      filter: { id: { regex: "/competition/" } }
    ) {
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
    softhomeImages: allImageSharp(filter: { id: { regex: "/softhome/" } }) {
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

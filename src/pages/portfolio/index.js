import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Portfolio } from '../../organizations/portfolio';

const Root = styled.div`
  padding-top: 20px;
`;

class PorfolioPage extends PureComponent {
  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <Root>
        <Portfolio images={data} />
      </Root>
    );
  }
}

// eslint-disable-next-line no-undef
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
            ...GatsbyImageSharpSizes
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
            ...GatsbyImageSharpSizes
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
            ...GatsbyImageSharpSizes
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
            ...GatsbyImageSharpSizes
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
            ...GatsbyImageSharpSizes
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
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`;

export default PorfolioPage;

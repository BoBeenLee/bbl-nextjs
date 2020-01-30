import { graphql, PageRendererProps } from "gatsby";
import React, { PureComponent } from "react";
import styled from "styled-components";

import Layout from "src/components/Layout";
import { productions, teamProductions } from "src/constants/production";
import { Portfolio } from "src/organizations/portfolio";

interface IProps extends PageRendererProps {
  data: any;
}

const Root = styled.div`
  padding-top: 20px;
`;

class PorfolioPage extends PureComponent<IProps> {
  public render() {
    const { data } = this.props;
    const { location } = this.props;
    return (
      <Layout pathname={location.pathname}>
        <Root>
          <Portfolio
            key={"company"}
            title="Company"
            productions={productions}
            images={data}
          />
          <Portfolio
            key={"activity"}
            title={`Activity`}
            productions={teamProductions}
            images={data}
          />
        </Root>
      </Layout>
    );
  }
}

export const query = graphql`
  query PortfolioImageQuery {
    flassImages: allFile(filter: { relativePath: { regex: "/flass/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 430
              quality: 80
              traceSVG: { background: "#f2f8f3", color: "#d6ebd9" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    onepageImages: allFile(filter: { relativePath: { regex: "/onepage/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 430
              quality: 80
              traceSVG: { background: "#f2f8f3", color: "#d6ebd9" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    intersectionImages: allFile(
      filter: { relativePath: { regex: "/intersection/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 430
              quality: 80
              traceSVG: { background: "#f2f8f3", color: "#d6ebd9" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    skhualarmImages: allFile(
      filter: { relativePath: { regex: "/skhualarm/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 430
              quality: 80
              traceSVG: { background: "#f2f8f3", color: "#d6ebd9" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    competitionImages: allFile(
      filter: { relativePath: { regex: "/competition/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 430
              quality: 80
              traceSVG: { background: "#f2f8f3", color: "#d6ebd9" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    softhomeImages: allFile(filter: { relativePath: { regex: "/softhome/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxWidth: 430
              quality: 80
              traceSVG: { background: "#f2f8f3", color: "#d6ebd9" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default PorfolioPage;

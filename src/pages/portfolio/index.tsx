import { graphql, PageRendererProps } from "gatsby";
import React, { PureComponent } from "react";
import styled from "styled-components";

import Layout from "src/components/Layout";
import { companyPortfolios, teamPortfolios } from "src/constants/portfolio";
import { Portfolio } from "src/organizations/portfolio";
import { IEdgeSharpItem } from "src/images";

interface IProps extends PageRendererProps {
  data: { [key in string]: IEdgeSharpItem };
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
            portfolios={companyPortfolios}
            images={data}
          />
          <Portfolio
            key={"project"}
            title={`Project`}
            portfolios={teamPortfolios}
            images={data}
          />
        </Root>
      </Layout>
    );
  }
}

export const query = graphql`
query PortfolioImageQuery {
  onepageImages: allFile(filter: {relativePath: {regex: "/portfolio/onepage/[\\s\\S]*(jpe?g|png|gif|bmp|svg)$/"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 430, quality: 80, traceSVG: {background: "#f2f8f3", color: "#d6ebd9"}) {
            tracedSVG
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
  intersectionImages: allFile(filter: {relativePath: {regex: "/portfolio/intersection/[\\s\\S]*(jpe?g|png|gif|bmp|svg)$/"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 430, quality: 80, traceSVG: {background: "#f2f8f3", color: "#d6ebd9"}) {
            tracedSVG
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
  skhualarmImages: allFile(filter: {relativePath: {regex: "/portfolio/skhualarm/[\\s\\S]*(jpe?g|png|gif|bmp|svg)$/"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 430, quality: 80, traceSVG: {background: "#f2f8f3", color: "#d6ebd9"}) {
               tracedSVG
              aspectRatio
              src
              srcSet
              sizes
          }
        }
      }
    }
  }
  competitionImages: allFile(filter: {relativePath: {regex: "/portfolio/competition/[\\s\\S]*(jpe?g|png|gif|bmp|svg)$/"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 430, quality: 80, traceSVG: {background: "#f2f8f3", color: "#d6ebd9"}) {
            tracedSVG
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
  softhomeImages: allFile(filter: {relativePath: {regex: "/portfolio/softhome/[\\s\\S]*(jpe?g|png|gif|bmp|svg)$/"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 430, quality: 80, traceSVG: {background: "#f2f8f3", color: "#d6ebd9"}) {
            tracedSVG
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
}
`;

export default PorfolioPage;

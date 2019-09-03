import { graphql } from "gatsby";

const query = graphql`
  query PortfolioImageQuery {
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

export default query;

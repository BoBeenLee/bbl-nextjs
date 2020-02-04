import { graphql } from "gatsby";

const query = graphql`
  query PortfolioImageQuery {
    onepageImages: allFile(
      filter: {
        relativePath: {
          regex: "/portfolio/onepage/[\\s\\S]*(jpe?g|png|gif|bmp|svg)$/"
        }
      }
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
    intersectionImages: allFile(
      filter: {
        relativePath: {
          regex: "/portfolio/intersection/[\\s\\S]*(jpe?g|png|gif|bmp|svg)$/"
        }
      }
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
      filter: {
        relativePath: {
          regex: "/portfolio/skhualarm/[\\s\\S]*(jpe?g|png|gif|bmp|svg)$/"
        }
      }
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
      filter: {
        relativePath: {
          regex: "/portfolio/competition/[\\s\\S]*(jpe?g|png|gif|bmp|svg)$/"
        }
      }
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
    softhomeImages: allFile(
      filter: {
        relativePath: {
          regex: "/portfolio/softhome/[\\s\\S]*(jpe?g|png|gif|bmp|svg)$/"
        }
      }
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
  }
`;

export default query;

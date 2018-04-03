// eslint-disable-next-line no-undef
const query = graphql`
  query PortfolioImageQuery {
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

export default query;

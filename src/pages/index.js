import React from "react";
import Link from "gatsby-link";

/**
 * languages {
    nodes {
      name
      color
    }
  }
 */

const HomePage = () => {
  return (
    <div>
      <Link to="/intro">Intro</Link>
      <Link to="/github">GithubPage</Link>
      <Link to="/post">PostPage</Link>
      <Link to="/portfolio">portfolioPage</Link>
    </div>
  );
};

export default HomePage;

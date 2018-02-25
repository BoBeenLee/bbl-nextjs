import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { SubTitle } from "../components/Title";
import { media } from "../utils/StyleUtils";

const Root = styled.div`
  padding: 60px 50px 70px 50px;
  ${media.mobile`
    padding: 30px 10px 40px 10px;
  `} line-height: 30px;
`;

const SubTitleBox = styled(SubTitle)`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${props => props.theme.primary};
  font-weight: bold;
`;

export default function Template({ data }) {
  if (!data) {
    return <div />;
  }
  const { markdownRemark: post } = data;
  return (
    <Root>
      <SubTitleBox title={post.frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Root>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

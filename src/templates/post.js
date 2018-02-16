import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { SubTitle } from "../components/Title";

const Root = styled.div`
  padding-top: 20px;
`;

const SubTitleBox = styled(SubTitle)`
  font-size: 36px;
  margin-bottom: 20px;
`;

export default function Template({ data }) {
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

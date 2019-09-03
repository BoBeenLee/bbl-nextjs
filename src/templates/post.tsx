import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";
import { SubTitle } from "../components/Title";
import { media } from "../utils/media";
import { Caption } from "../organizations/post";
import Layout from "../components/Layout";

const Root = styled.div`
  padding: 60px 50px 70px 50px;
  line-height: 40px;
  ${media.mobile`
    padding: 30px 10px 40px 10px;
  `}
`;

const SubTitleBox = styled(SubTitle)`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${props => props.theme.primary};
  font-weight: bold;
`;

export default function Template({ data, location }) {
  if (!data) {
    return <div />;
  }
  const { markdownRemark: post } = data;
  return (
    <Layout pathname={location.pathname}>
      <Root>
        <SubTitleBox title={post.frontmatter.title} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Caption
          title={post.frontmatter.title}
          description={post.frontmatter.title}
          url={post.fields.slug}
        />
      </Root>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

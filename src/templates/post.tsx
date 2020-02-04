import { graphql, PageRendererProps } from "gatsby";
import React from "react";
import styled from "styled-components";

import Layout from "src/components/Layout";
import { SubTitle } from "src/components/Title";
import { Caption } from "src/organizations/post";
import { media } from "src/utils/media";
import theme from "src/styles/theme";

interface IProps extends PageRendererProps {
  data: any;
}

const Root = styled.div`
  padding: 60px 50px 70px 50px;
  line-height: 40px;
  ${media.mobile`
    padding: 30px 10px 40px 10px;
  `}
`;

const SubTitleBox = styled(SubTitle)`
  font-size: 30px;
  margin-bottom: 20px;
  color: ${theme.primary};
  font-weight: bold;
`;

export default function Template({ data, location }: IProps) {
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

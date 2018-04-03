import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { SubTitle } from '../components/Title';
import { media } from '../utils/StyleUtils';
import { Caption } from '../organizations/post';

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

export default function Template({ data }) {
  if (!data) {
    return <div />;
  }
  const { markdownRemark: post } = data;
  return (
    <Root>
      <SubTitleBox title={post.frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Caption
        title={post.frontmatter.title}
        description={post.frontmatter.title}
        url={post.fields.slug}
      />
    </Root>
  );
}

// eslint-disable-next-line no-undef
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

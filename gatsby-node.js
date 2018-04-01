/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem');

const injectPostTemplate = (createPage, graphql) => {
  const postTemplate = path.resolve("src/templates/post.js");
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `).then(res => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }
      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `${node.fields.slug}`,
          component: postTemplate
        });
      });
    });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  return Promise.all([injectPostTemplate(createPage, graphql)]);
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/posts/${value}`,
    })
  }
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  return config;
};

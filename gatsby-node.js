/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

const injectPostTemplate = (createPage, graphql) => {
  const postTemplate = path.resolve("src/templates/post.js");
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `).then(res => {
    console.log(res);
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      });
    });
  });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  return Promise.all([injectPostTemplate(createPage, graphql)]);
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  return config;
};

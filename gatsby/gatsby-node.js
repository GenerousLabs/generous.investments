const path = require('path');

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent);

    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(`src/templates/page.js`);

  return graphql(`
    query PagesQuery {
      allMarkdownRemark(filter: { fields: { collection: { eq: "pages" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: edge.node.frontmatter.path,
        component: pageTemplate,
        context: {
          id: edge.node.id,
        },
      });
    });
  });
};

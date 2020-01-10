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

const extendTypes = ['MarkdownRemark', 'Mdx'];

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (extendTypes.includes(node.internal.type)) {
    const parent = getNode(node.parent);

    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    });
  }
};

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(`src/templates/page.js`);
  const pageMdxTemplate = path.resolve(`src/templates/page-mdx.js`);

  return graphql(`
    query PagesQuery {
      allMarkdownRemark(filter: { fields: { collection: { eq: "pages" } } }) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
      allMdx(filter: { fields: { collection: { eq: "pages" } } }) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild(
        'Failed to load allMarkdownRemark query',
        result.errors
      );
    }

    result.data.allMdx.edges.forEach(edge => {
      createPage({
        path: edge.node.frontmatter.path,
        component: pageMdxTemplate,
        context: {
          id: edge.node.id,
        },
      });
    });

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

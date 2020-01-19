/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

/**
 * Disable generating source maps on Production
 */
exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  if (getConfig().mode === 'production' && stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  /**
   * Get path to blog post and blog list template
   * So we can reference it later for Gatsby createPage API
   */
  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  const blogListTemplate = path.resolve('src/templates/blog-list.js');

  /**
   * Fetch all the markdown data to create blog list and blog post page dynamically
   */
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);
  // Handle on errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  const posts = result.data.allMarkdownRemark.edges;

  /**
   * After we successfully pull all markdown data
   * Then create blog list pages dynamically
   * Also we pass context (pageContext) to the component template (blogListTemplate) for pagination
   */
  const postsPerPage = 5;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numberOfPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numberOfPages,
        currentPage: i + 1,
      },
    });
  });

  /**
   * After we successfully pull all markdown data
   * We also create blog posts for each markdown data
   * Also we pass context (pageContext) to the component template (blogPostTemplate) for pagination to the next/previous blog post
   */
  posts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        previous: index === posts.length - 1 ? null : posts[index + 1].node,
        next: index === 0 ? null : posts[index - 1].node,
      },
    });
  });
};

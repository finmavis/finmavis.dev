/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Get path to template
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const blogListTemplate = path.resolve(`src/templates/blog-list.js`);

  // Fetch the markdown data
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
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const posts = result.data.allMarkdownRemark.edges;

  // Create blog posts pages.
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

  // Create blog post list pages
  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

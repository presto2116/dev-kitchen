/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({actions, graphql, reporter}) => {
  const {createPage} = actions;

  const stepTemplate = require.resolve(`./src/templates/step-template.tsx`);
  const indexTemplate = require.resolve(`./src/templates/index-template.tsx`);

  const result = await graphql(`
    {
      allFile(filter: {sourceInstanceName: {eq: "code"}}) {
        edges {
          node {
            relativePath
            internal {
              content
            }
          }
        }
      }
      allMdx {
        edges {
          node {
            slug
            frontmatter {
              template
              title
              author
              authorGithub
              written
              hzCoreComponent
              hzCoreLink
              keywords
              description
              path
              prevPath
              showDiffOnLoad
              splitView
              subtitle
            }
            body
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running allMdx GraphQL query.`);
    return;
  }

  result.data.allMdx.edges.forEach(({node}) => {
    const prevCodeSnippet = node.frontmatter.prevPath
      ? result.data.allFile.edges.find(
          (n) => n.node.relativePath === `${node.frontmatter.prevPath}.tsx`,
        ).node.internal.content
      : null;
    const codeSnippet = node.frontmatter.path
      ? result.data.allFile.edges.find(
          (n) => n.node.relativePath === `${node.frontmatter.path}.tsx`,
        ).node.internal.content
      : null;
    const slug = node.slug.endsWith('/') ? node.slug : `${node.slug}/`;
    createPage({
      path: `/blog/${slug}`,
      component:
        node.frontmatter.template === 'step-template'
          ? stepTemplate
          : indexTemplate,
      context: {
        slug: slug,
        frontmatter: node.frontmatter,
        body: node.body,
        codeSnippet: codeSnippet,
        prevCodeSnippet: prevCodeSnippet,
      },
    });
  });
};

// Programmatically create pages based on our posts.
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};

// Programmatically create pages based on our products.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct {
        nodes {
          shopifyId
          handle
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create products', result.errors);
  }

  const products = result.data.allShopifyProduct.nodes;

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  products.forEach(product => {
    createPage({
      path: `/product/${product.handle}`,
      component: require.resolve(`./src/templates/product.js`),
      context: {
        id: product.shopifyId,
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  //Re-route any path starting with '/dashboard' to the dashboard page. This is so that we can route to the proper component for authentication (so that we can have private routing)
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = '/dashboard/*';
    actions.createPage(page);
  }
};

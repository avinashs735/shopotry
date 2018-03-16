exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /bad-module/,
      loader: "null-loader",
    });
  }
};
const createPostPages = require(`./gatsby-actions/createPostPages`);
const createPaginatedPostsPages = require(`./gatsby-actions/createPaginatedPostsPages`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  graphql(`
    {
      allMarkdownRemark(
        filter:{ fileAbsolutePath:{regex:"/.*/content/post/.*/"}}
        sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              slug
              image
              author
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges;
    createPostPages(createPage, posts);
    createPaginatedPostsPages(createPage, posts);
  });
};

exports.onCreatePage = ({ page }) => {
  if (page.path.startsWith('/credit/')) {
    page.layout = 'credit';
  } else if (page.path.startsWith('/components')) {
    // page.layout = 'components';
  }
};


exports.onCreatePage = ({ page }) => {
  if (page.path.startsWith('/rcecommerce/')) {
    page.layout = 'rcecommerce';
  } else if (page.path.startsWith('/components')) {
    // page.layout = 'components';
  }
};


/*
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  if (page.path.match(/^\/rcecommerce/)) {
    page.matchPath = "/rcecommerce/:path";

 
    createPage(page);
  }
};

*/

const path = require("path")

exports.onCreateWebpackConfig = ({ actions, plugins, stage, loaders }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        path: require.resolve("path-browserify"),
      },
      fallback: {
        fs: false,
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util/"),
      },
    },
  })
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    })
  }

  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-particle-animation/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       node,
//       value,
//     })
//     node.collection = getNode(node.parent).sourceInstanceName
//     node.file = value
//   }
// }

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
  {
    allDatoCmsPage {
      nodes {
        slug
        title
        originalId
        locale
      }
    }
  }
`)

  const posts = result.data.allDatoCmsPage.nodes
  for (let i = 0; i < posts.length + 1; i++) {
    let page = posts[i]
    if (i !== posts.length) {
    const prefix = page.locale === "th" ? "" : `/${page.locale}`;
    let slug = page.slug  === "index" ? "" : page.slug;
      createPage({
        path: `${prefix}/${slug}`,
        component: path.resolve(`./src/templates/index.js`),
        context: {
          pageId: page.originalId,
          locale: page.locale
        },
      })
    } else {
      createPage({
        path: `th/`,
        component: path.resolve(`./src/templates/index.js`),
        context: {
          pageId: '20851539',
          locale: 'th'
        },
      })
    }
  }
  // posts.forEach(page => {
  //   const prefix = page.locale === "th" ? "" : `/${page.locale}`;
  //   let slug = page.slug  === "index" ? "" : page.slug;
  //   createPage({
  //     path: `${prefix}/${slug}`,
  //     component: path.resolve(`./src/templates/index.js`),
  //     context: {
  //       pageId: page.originalId,
  //       locale: page.locale
  //     },
  //   })
  // })
}
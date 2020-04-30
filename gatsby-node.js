/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter{
//                 path
//                 options{
//                   color
//                 }
//               }
//             }
//           }
//         }
//       }
//   `)

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.frontmatter.path,
//       component: path.resolve(`./src/templates/page.js`),
//       context: {    
//         slug: node.fields.slug,
//         color: node.frontmatter.options.color
//       },
//     })
//   })
// }
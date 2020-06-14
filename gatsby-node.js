const path = require("path");

// for local file stystem
// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions;

//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md');
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// };


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    //get path
    const blogTemplate = path.resolve('./src/templates/blog.js')

    //get markdown data
    const res = await graphql(`
    query{
        allContentfulBlog{
            edges{
                node{
                    slug
                }
            }
        }
    }`)

    //create new page
    res.data.allContentfulBlog.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }

        })
    })

};

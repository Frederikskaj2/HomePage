const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, getNodesByType, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'Mdx') {
        const slug = createFilePath({ node, getNode, basePath: 'content' });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });

        const parents = getNodesByType('Directory').filter((n) => node.fileAbsolutePath.includes(n.absolutePath));
        parents.sort((a, b) => a.absolutePath.length <= b.absolutePath.length);
        parents.shift();
        const folder = parents.shift();
        if (folder) {
            createNodeField({
                node,
                name: 'folder',
                value: folder.relativePath,
            });
        }
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions;
    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        frontmatter {
                            redirectFrom
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/page.js`),
            context: {
                slug: node.fields.slug,
            },
        });
        if (node.frontmatter.redirectFrom) {
            node.frontmatter.redirectFrom.forEach((path) => {
                createRedirect({ fromPath: path, toPath: node.fields.slug, isPermanent: true });
            });
        }
    });
};

import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
export const onCreateNode = ({ node, getNode, getNodesByType, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'Mdx') {
        const slug = createFilePath({ node, getNode, basePath: 'content' });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });

        // Get the level 1 folder inside the content folder, e.g. 'faellesskab', 'foreningerne' etc. 
        const parents = getNodesByType('Directory').filter((n) => node.internal.contentFilePath.includes(n.absolutePath));
        parents.sort((a, b) => a.absolutePath.length - b.absolutePath.length);
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

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
export const createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const types = `
        type Mdx implements Node @dontInfer {
            frontmatter: Frontmatter
            fields: Fields
        }
        type Frontmatter {
            title: String!
            menuTitle: String
            menuGroup: String
            sequence: Int
            redirectFrom: [String!]
        }
        type Fields {
            slug: String!
            folder: String
        }
        type MdxFrontmatter implements Node @dontInfer {
            title: String!
            menuTitle: String
            menuGroup: String
            sequence: Int
            redirectFrom: [String!]
        }
        type MdxFields implements Node @dontInfer {
            slug: String!
            folder: String
        }`;
    createTypes(types);
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
export const createPages = async ({ graphql, actions }) => {
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
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
        }
    `);

    const pageTemplate = path.resolve('./src/templates/page.jsx');
    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: `${pageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
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

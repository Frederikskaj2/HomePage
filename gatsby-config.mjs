import { dirname } from 'path';
import { fileURLToPath } from 'url';
import remarkGfm from 'remark-gfm';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config = {
    siteMetadata: {
        title: 'Frederikskaj 2',
        description: 'Information om Ejerforeningen og Grundejerforeningen Frederikskaj 2',
    },
    plugins: [
        // Local custom Material UI theme.
        'custom-mui-theme',
        // Required to use Emotion for styling.
        'gatsby-plugin-emotion',
        // Image processing required by gatsby-remark-images.
        'gatsby-plugin-sharp',
        // MDX processing.
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.md'],
                mdxOptions: {
                    format: 'mdx',
                    remarkPlugins: [remarkGfm],
                },
                gatsbyRemarkPlugins: [
                    // Create responsive image sets.
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 912,
                            // A markdown image doesn not create a paragraph (unless it's inline
                            // with text). This adds the same space as if the image is wrapped in a
                            // paragraph.
                            wrapperStyle: 'margin-bottom: 16px;',
                        },
                    },
                    // Copy PDF files etc. to place them together with images.
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                    // Open external links with target="_blank".
                    'gatsby-remark-external-links',
                ],
            },
        },
        // Provides GraphQL queries of the file system.
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/src/content/`,
            },
        },
        // Makes it possible to create redirects from old to new URLs (doesn't work with gatsby
        // develop).
        'gatsby-plugin-client-side-redirect',
    ],
};

export default config;

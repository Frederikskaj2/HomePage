module.exports = {
    siteMetadata: {
        title: 'Frederikskaj 2',
        description: 'Information om Ejerforeningen og Grundejerforeningen Frederikskaj 2',
    },
    plugins: [
        'custom-mui-theme',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: [`.md`, `.mdx`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 912,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/src/content/`,
            },
        },
        'gatsby-plugin-client-side-redirect',
    ],
};

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default ({ title, description }) => {
    const { site } = useStaticQuery(query);
    const { defaultTitle, defaultDescription } = site.siteMetadata;

    const seo = {
        title: title && title !== defaultTitle ? `${title} - ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
    };

    return (
        <Helmet
            title={seo.title}
            meta={[
                {
                    name: 'description',
                    content: seo.description,
                },
                {
                    property: 'og:title',
                    content: seo.title,
                },
                {
                    property: 'og:description',
                    content: seo.description,
                },
                {
                    property: 'og:image',
                    content: '/share.jpg',
                },
            ]}
        >
            <link rel="shortcut icon" href="/favicon.ico" />
            <html lang="da" />
        </Helmet>
    );
};

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
            }
        }
    }
`;

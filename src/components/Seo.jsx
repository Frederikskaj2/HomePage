import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Seo({ title, description, children }) {
    const { site } = useStaticQuery(query);
    const { defaultTitle, defaultDescription } = site.siteMetadata;

    const seo = {
        title: title && title !== defaultTitle ? `${title} - ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="og:title" content={seo.title} />
            <meta name="og:description'" content={seo.description} />
            <meta name="og:image" content="/share.jpg" />
            <link rel="icon" href="/favicon.ico" />
            <html lang="da" />
            {children}
        </>
    );
}

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

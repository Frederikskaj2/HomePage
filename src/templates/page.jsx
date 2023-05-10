import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Layout from '../components/Layout.jsx';
import Markdown from '../components/Markdown.jsx';
import Seo from '../components/Seo.jsx';
import 'fontsource-public-sans/200.css';
import 'fontsource-public-sans/700.css';

export default function Page({ pageContext: { frontmatter }, children }) {
    return (
        <Layout title={frontmatter.title}>
            <Container maxWidth="md">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {frontmatter.title}
                    </Typography>
                    <Markdown>{children}</Markdown>
                </Box>
            </Container>
        </Layout>
    )
}

export const Head = ({ data, pageContext }) =>
    <Seo title={pageContext.frontmatter.title} description={pageContext.frontmatter.description} />;

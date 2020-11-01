import React from 'react';
import { graphql } from 'gatsby';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import Markdown from '../components/Markdown';
import 'fontsource-public-sans/200.css';
import 'fontsource-public-sans/700.css';

export default ({ data }) => {
    const page = data.mdx;
    return (
        <Layout title={page.frontmatter.title}>
            <Container maxWidth="md">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {page.frontmatter.title}
                    </Typography>
                    <Markdown>{page.body}</Markdown>
                </Box>
            </Container>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
            }
        }
    }
`;
